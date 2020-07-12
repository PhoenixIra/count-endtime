
var Discord = require('discord.js');
var logger = require('winston');
var moment = require('moment');
var momentTimezone = require('moment-timezone');
var commander = require('bot-commander');
var auth = require('./auth.json');


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
logger.add(new logger.transports.Console, {
	colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client();
bot.on('ready', onReady);
bot.on('message', onMessage);
bot.login(auth.token);


//Initialize Commander
let doCmd = commander.command('.do').showHelpOnEmpty();
doCmd.command('now').description('Shows current time.').action(handleNow);
doCmd.command('load <name>').description('Loads the time from your database').action(handleLoad);
doCmd.command('date <date>').description('Shows the input date with the format DD-MM-YYYY').action(handleDate);
doCmd.command('time <time>').description('Shows the input time with the format HH:MM:SS:ms').action(handleTime);
doCmd.command('datetime <date> <time>').description('Shows the input date and time with the format DD-MM-YYYY HH:MM(:SS(:ms))').action(handleDateTime);
doCmd.option('countdown-title', 'If the remaining time should be presented in the title as a countdown', countdown-title, false);
doCmd.option('countdown', 'If the remaining time should be presented in this channel as a countdown', countdown, false);
doCmd.option('as <format>', 'Can be used to demonstrate the format on how the countdown/time should be displayed.', format, 'LLLL');
doCmd.option('to <timezone', 'To which timezone the time should be displayed', timezone, 'Etc/GMT+0');
doCmd.option('save <name>', 'Saves this time in your database', save);

commander.command('.locale <locale').description('Changes the locale of this server').action(changeLocale);

function onReady() {
	logger.info('Connected');
	logger.info('Logged in as: ');
	logger.info(bot.user.username + ' - (' + bot.user.id + ')');
}

function onMessage(message) {
	message.channel.send(commander.parse(message.cleanContent,message));
}


function printCurrentTime(channel,args){
	var timezone = '';
	var form = 'LLL';
	if(args.length > 0){
		timezone = args[0];
	}
	if(args.length > 1){
		form = args[1];
	}
    
	var date;
	if(timezoneAbbr.has(timezone)){
		var offset = timezoneAbbr.get(timezone);
		date = moment().utcOffset(offset*60);
	} else if(!isNaN(parseInt(timezone))){
		date = moment().utcOffset(parseInt(timezone))
	} else {
		date = moment.tz(timezone);
	}
   
    
	channel.send(date.format(form));
}

