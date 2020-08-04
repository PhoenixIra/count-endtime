import * as Discord from 'discord.js';
import * as moment from 'moment-timezone';
import * as logger from 'winston';

import * as auth from '../json/auth.json';

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
bot.login(auth.token);


function onReady():void {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.user.username + ' - (' + bot.user.id + ')');
    logger.info('The console is logging on '+argv.loglevel+' level');
}

function onMessage(message: Discord.Message):void {
    if(message.cleanContent.substring(0,1) != '.') return; 
    try{
        // Create the lexer
        let inputStream = new ANTLRInputStream(message.cleanContent);
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
            case CommandType.server:
                handleServer(result,message);
                break;
            case CommandType.moment:
                handleMoment(result,message);
                break;
            default:
                message.channel.send("No.");
        }
    } catch(error){
        logger.warn(error.message);
    }
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
}

function handleMoment(result: Command, message: Discord.Message):void{
    //try to catch standard options
    var options: GuildOption = {locale: undefined, defFormat: undefined, timezone: undefined};
    if(message.guild) options = guildStorage.readGuildOption(message.guild.id);
    
    try{
        //get the moment saved in t
        if(result.now){
            var t = moment();
        }else if(result.load){
            if(message.guild) var t = moment(guildStorage.readMoment(message.guild.id, result.load).momentEpoch);
        }else if(result.input && result.inTz){
            var t = moment.tz(result.input, result.inputFormat, result.inTz);
        }else if(result.input){
            var t = moment(result.input, result.inputFormat);
        }
        
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
        
        if(result.to){
            timezone = result.to;
        }
        
        if(result.countdownTitle){
            //TODO
        }
        
        if(result.countdown){
            //TODO
        }
        
        if(result.save){
            //TODO: Add limit of saved moments
            if(message.guild){
                guildStorage.writeMoment(message.guild.id, result.save, t.valueOf());
            }
        }
        
        if(result.print){
            message.channel.send(t.locale(locale).tz(timezone).format(printFormat));
        } 
        
        if(result.printTitle){
            if(message.guild){
                (<Discord.GuildChannel>message.channel).setTopic(t.locale(locale).tz(timezone).format(printTitleFormat));
            } else {
                message.channel.send("I don't appear to be on a server?");
            }
        }
    } catch(error) {
        logger.warn(error.message);
    }
}

