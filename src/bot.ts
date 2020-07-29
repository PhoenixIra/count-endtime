import * as Discord from 'discord.js';
import * as logger from 'winston';
import * as moment from 'moment-timezone';
import * as auth from '../json/auth.json';
import { ANTLRInputStream, CommonTokenStream, BailErrorStrategy } from 'antlr4ts';
import { CommandLexer } from './parser/CommandLexer.js';
import { CommandParser, CommandContext } from './parser/CommandParser.js';
import { StandardCommandVisitor, Command, CommandType} from './commandVisitor';
import { GuildStorage, GuildOption, MomentEpoch, Countdown } from './database';
const iso6391 = require('iso-639-1');

var guildStorage = new GuildStorage("guild_storage.db");


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console());

// Initialize Discord Bot
var bot = new Discord.Client();
bot.on('ready', onReady);
bot.on('message', onMessage);
bot.login(auth.token);


function onReady():void {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.user.username + ' - (' + bot.user.id + ')');
    if(guildStorage.error)
    	logger.error('Database error: ' + guildStorage.error.message);
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
    if(!message.guild) return; //TODO: Error message
    var guild = message.guild;
    
    var options: GuildOption = {locale: undefined, format: undefined, timezone: undefined};
    if(result.locale && iso6391.validate(result.locale))
    	options.locale = result.locale;
    if(result.format)
        options.format = result.format;
    if(result.timezone && moment().tz(result.timezone).isValid())
        options.timezone = result.timezone;
        
    guildStorage.writeGuildOption(guild.id, options);
}

function handleMoment(result: Command, message: Discord.Message):void{
    //try to catch standard options
    var options: GuildOption = {locale: undefined, format: undefined, timezone: undefined};
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
        var timezone = 'UTC';
        var format = 'LLL';
        var locale = 'en';
        if(options.timezone) timezone = options.timezone; 
        if(options.format) format = options.format;
        if(options.locale) locale = options.locale;
        
        
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
            message.channel.send(t.locale(locale).tz(timezone).format(result.print));
        } 
    } catch(error) {
        logger.warn(error.message);
    }
}

