import * as Discord from 'discord.js';
import * as moment from 'moment-timezone';
import * as logger from 'winston';

import * as config from '../json/config.json';

import { UtilEndtime } from './util';
import { ANTLRInputStream, CommonTokenStream, BailErrorStrategy } from 'antlr4ts';
import { CommandLexer } from './parser/CommandLexer.js';
import { CommandParser, CommandContext } from './parser/CommandParser.js';
import { StandardCommandVisitor, Command, CommandType} from './commandVisitor';
import { GuildStorage, GuildOption, MomentEpoch, Countdown } from './database';

import yargs = require('yargs');
const iso6391 = require('iso-639-1');
const appRoot = require('app-root-path');

//commandline arguments
const argv = yargs.options({
    loglevel: {
        alias: 'l',
        type: 'string',
        default: 'info',
        description: 'Sets the log-level for the command line'
    }
}).parse();

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console({ level: argv.loglevel }));
logger.add(new logger.transports.File({ filename: 'count-endime.log',
                                        level: 'notice' }));
       
module.exports = logger;

console.log(appRoot + "/dist/guild_storage.db");

var guildStorage = new GuildStorage(appRoot + "/dist/guild_storage.db");
if(guildStorage.error) logger.error(guildStorage.error.message);


// Initialize Discord Bot
var bot = new Discord.Client();
bot.on('ready', onReady);
bot.on('message', onMessage);
bot.login(config.token);


function onReady():void {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.user.username + ' - (' + bot.user.id + ')');
    logger.info('The console is logging on '+argv.loglevel+' level');
}

function onMessage(message: Discord.Message):void {
    if(message.cleanContent.substring(0,1) != config.cmdSymbol) return; //only react to command symbol 
    if(message.cleanContent.substring(1,2) == config.cmdSymbol) return; //ignore double command symbols
    try{
        // Create the lexer
        let inputStream = new ANTLRInputStream(message.cleanContent.substring(1));
        let lexer = new CommandLexer(inputStream);
        //We dont need debug output
        lexer.removeErrorListeners();
        //create the parser
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new CommandParser(tokenStream);
        //We dont need debug output
        parser.removeErrorListeners();
        // Parse the input
        let tree = parser.command();
        
        let result = tree.accept(new StandardCommandVisitor());
        
        switch(result.type){
            case CommandType.help:
                handleHelp(result,message);
                break;
            case CommandType.server:
                handleServer(result,message);
                break;
            case CommandType.moment:
                handleMoment(result,message);
                break;
            case CommandType.message:
                handleMessage(result,message);
                break;
            default:
                message.channel.send("No.");
        }
    } catch(error){
        logger.warn(error.message);
    }
}

function handleHelp(result: Command, message: Discord.Message):void{

}

function handleServer(result: Command, message: Discord.Message):void{
    if(!message.guild){
        message.channel.send("I don't appear to be on a server?");
        return;
    }
    var guild = message.guild;
    
    if(result.locale && iso6391.validate(result.locale)){
        guildStorage.writeGuildLocale(guild.id, result.locale);
    }
    if(result.format){
        guildStorage.writeGuildFormat(guild.id, result.format);
    }
    if(result.timezone && moment().tz(result.timezone).isValid()){
        guildStorage.writeGuildTimezone(guild.id, result.timezone);
    }
    if(result.deleteMoment){
        guildStorage.removeMoment(guild.id, result.deleteMoment);
    }
}


function handleMoment(result: Command, message: Discord.Message):void{    
    try{
        //get the moment saved in t
        var t = inputMoment(result, message);
        
        //output the moment on the desired channel.
        outputMoment(t, result, message);
    } catch(error) {
        logger.warn(error.message);
    }
}

function inputMoment(result: Command, message: Discord.Message):moment.Moment{
    if(result.now){
        return moment();
    }else if(result.load && message.guild){
        return moment(guildStorage.readMoment(message.guild.id, result.load).momentEpoch);
    }else if(result.input && result.inTz){
        return moment.tz(result.input, result.inputFormat, result.inTz);
    }else if(result.input){
        return moment(result.input, result.inputFormat);
    }
    return moment();
}

function outputMoment(t: moment.Moment, result: Command, message: Discord.Message):void {

    //try to catch standard options
    var options: GuildOption = {locale: undefined, defFormat: undefined, timezone: undefined};
    if(message.guild) options = guildStorage.readGuildOption(message.guild.id);

    //load options
    var locale = 'en';
    if(options.locale) locale = options.locale;
    
    var timezone = 'UTC';
    if(options.timezone) timezone = options.timezone; 
    
    var printFormat = 'LLL';
    if(options.defFormat) printFormat = UtilEndtime.transformToFormat(options.defFormat);
    if(result.printFormat) printFormat = UtilEndtime.transformToFormat(result.printFormat);
    
    var printTitleFormat = 'LLL';
    if(options.defFormat) printTitleFormat = UtilEndtime.transformToFormat(options.defFormat);
    if(result.printTitleFormat) printTitleFormat = UtilEndtime.transformToFormat(result.printTitleFormat);
    
    var alertNotServer = false;
    
    if(result.to){
        timezone = result.to;
    }
    
    if(result.save){
        if(message.guild){
            if(guildStorage.listMoment(message.guild.id).length <= config.maxMomentsPerGuild){
                guildStorage.writeMoment(message.guild.id, result.save, t.valueOf());
            } else {
                message.channel.send("This Server can not have more Moments.");
            }
        } else {
            alertNotServer = true;
        }
    }
    
    if(result.print){
        message.channel.send(t.locale(locale).tz(timezone).format(printFormat));
    } 
    
    if(result.printTitle){
        if(message.guild){
            (<Discord.GuildChannel>message.channel).setTopic(t.locale(locale).tz(timezone).format(printTitleFormat));
        } else {
            alertNotServer = true;
        }
    }
    
    if(alertNotServer){
        message.channel.send("I don't appear to be on a server?");
    }
}


function handleMessage(result: Command, message: Discord.Message):void{


}
