
var Discord = require('discord.js');
var logger = require('winston');
var moment = require('moment');
var momentTimezone = require('moment-timezone');
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

function onReady() {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.user.username + ' - (' + bot.user.id + ')');
}

function onMessage(message) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `.`
    var text = message.cleanContent;
    if (text.substring(0, 1) == '.') {
        var args = text.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
	
        switch (cmd) {
            //sets the language for this server
            case 'lang':
        
            // outputs into the chat the current ime
            case 'time':
            	printCurrentTime(message.channel,args);

                // save a time in the database
            case 'save':

                // output a saved time into the chat
            case 'load':

                // output how much time is left until a saved time into the chat
            case 'long':

                // give a countdown to a saved time into the chat
            case 'countdown':

                // give a countdown to a saved time into the chat title
            case 'countdownTitle':


                break;
                // Just add any case commands if you want to..
        }
    }
}


function printCurrentTime(channel,args){
    var timezone = '';
    if(args.length > 0){
    	timezone = args[0];
    }
    var date;
    if(timezoneAbbr.has(timezone)){
        var offset = timezoneAbbr.get(timezone);
        date = moment().utcOffset(offset*60);
    } else if(parseInt(timezone)!=NaN){
    	date = moment().utcOffset(parseInt(timezone))
    } else {
    	date = moment.tz(timezone);
    }
    channel.send(date.format());
}

