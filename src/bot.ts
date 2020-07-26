
import * as Discord from 'discord.js';
import * as logger from 'winston';
import * as moment from 'moment-timezone';
import * as auth from '../json/auth.json';
import { ANTLRInputStream, CommonTokenStream, BailErrorStrategy } from 'antlr4ts';
import { CommandLexer } from './parser/CommandLexer.js';
import { CommandParser, CommandContext } from './parser/CommandParser.js';
import { StandardCommandVisitor, Command, CommandType} from './commandVisitor';

var timezoneAbbr = new Map();
timezoneAbbr.set('UT','0');
timezoneAbbr.set('GMT','0');
timezoneAbbr.set('EDT','-4');
timezoneAbbr.set('EST','-5');
timezoneAbbr.set('CDT','-5');
timezoneAbbr.set('CST','-6');
timezoneAbbr.set('MDT','-6');
timezoneAbbr.set('MST','-7');
timezoneAbbr.set('PDT','-7');
timezoneAbbr.set('PST','-8');


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
        //TODO: Error handling
        logger.warn(error.message);
    }
}

function handleServer(result: Command, message: Discord.Message):void{
    
}

function handleMoment(result: Command, message: Discord.Message):void{
    try{
        if(result.now){
            var t = moment();
        }else if(result.load){
            //TODO
        }else if(result.input && result.inTz){
            var t = moment.tz(result.input, result.inputFormat, result.inTz);
        }else if(result.input){
            var t = moment(result.input, result.inputFormat);
        }
        
        //TODO: change to UTC+ServerConfig Loading
        var timezone = 'Europe/Berlin';
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
            //TODO
        }
        
        if(result.print){
            message.channel.send(t.locale(getLocale(message)).tz(timezone).format(result.print));
        } 
    } catch(error) {
        //TODO: Error handling
        logger.warn(error.message);
    }
}

function getLocale(message: Discord.Message).string{
    //TODO: ServerConfig
    //TODO: UserConfig
    if(message.author.locale){
        return message.author.locale;
    }
    return 'en';
}

