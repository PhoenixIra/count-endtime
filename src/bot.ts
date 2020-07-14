
import * as Discord from 'discord.js';
import * as logger from 'winston';
import * as moment from 'moment';
import * as momentTimezone from 'moment-timezone';
import * as auth from '../json/auth.json';
import { ANTLRInputStream, CommonTokenStream, BailErrorStrategy } from 'antlr4ts';
import { CommandLexer } from './parser/CommandLexer.js';
import { CommandParser } from './parser/CommandParser.js';
import { StandardCommandVisitor, Command, CommandType} from './commandVisitor';


moment.locale('de');

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
	// Create the lexer and parser
	let inputStream = new ANTLRInputStream(message.cleanContent);
	let lexer = new CommandLexer(inputStream);
	let tokenStream = new CommonTokenStream(lexer);
	let parser = new CommandParser(tokenStream);
	parser.errorHandler = new BailErrorStrategy();

	// Parse the input
	try{
		var tree = parser.command();
	}catch(error){
		return;
	}
	
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
}

function handleServer(result: Command, message: Discord.Message):void{
	
}

function handleMoment(result: Command, message: Discord.Message):void{
	if(result.now){
		var t = moment();
	}else if(result.load){
		//TODO
	}else if(result.time && result.date){
		var t = moment(result.date.concat(' ',result.time), 'D.M.YYYY h:m:s:S');
	}else if(result.time){
		var t = moment(result.time, 'h:m:s:S');
	}else if(result.date){
		var t = moment(result.date, 'D.M.YYYY');
	}
	
	if(result.to){
		//TODO
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
		message.channel.send(t.format(result.print));
	}
	
	
}

