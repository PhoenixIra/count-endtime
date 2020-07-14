"use strict";
exports.__esModule = true;
var Discord = require("discord.js");
var logger = require("winston");
var moment = require("moment");
var auth = require("../json/auth.json");
var antlr4ts_1 = require("antlr4ts");
var CommandLexer_js_1 = require("./parser/CommandLexer.js");
var CommandParser_js_1 = require("./parser/CommandParser.js");
var commandVisitor_1 = require("./commandVisitor");
var timezoneAbbr = new Map();
timezoneAbbr.set('UT', '0');
timezoneAbbr.set('GMT', '0');
timezoneAbbr.set('EDT', '-4');
timezoneAbbr.set('EST', '-5');
timezoneAbbr.set('CDT', '-5');
timezoneAbbr.set('CST', '-6');
timezoneAbbr.set('MDT', '-6');
timezoneAbbr.set('MST', '-7');
timezoneAbbr.set('PDT', '-7');
timezoneAbbr.set('PST', '-8');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console());
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
    // Create the lexer and parser
    var inputStream = new antlr4ts_1.ANTLRInputStream(message.cleanContent);
    var lexer = new CommandLexer_js_1.CommandLexer(inputStream);
    var tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    var parser = new CommandParser_js_1.CommandParser(tokenStream);
    // Parse the input
    var tree = parser.command();
    //no a valid command
    if (tree.exception)
        return;
    var result = tree.accept(new commandVisitor_1.StandardCommandVisitor());
    switch (result.type) {
        case commandVisitor_1.CommandType.server:
            handleServer(result, message);
            break;
        case commandVisitor_1.CommandType.moment:
            handleMoment(result, message);
            break;
        default:
            message.channel.send("No.");
    }
}
function printCurrentTime(channel, args) {
    var timezone = '';
    var form = 'LLL';
    if (args.length > 0) {
        timezone = args[0];
    }
    if (args.length > 1) {
        form = args[1];
    }
    var date;
    if (timezoneAbbr.has(timezone)) {
        var offset = timezoneAbbr.get(timezone);
        date = moment().utcOffset(offset * 60);
    }
    else if (!isNaN(parseInt(timezone))) {
        date = moment().utcOffset(parseInt(timezone));
    }
    else {
        date = moment.tz(timezone);
    }
    channel.send(date.format(form));
}
function handleServer(result, message) {
}
function handleMoment(result, message) {
    if (result.now) {
        var t = moment();
    }
    else if (result.load) {
        //TODO
    }
    else if (result.time && result.date) {
        var t = moment(result.date.concat(' ', result.time), 'D.M.YYYY h:m:s:S');
    }
    else if (result.time) {
        var t = moment(result.time, 'h:m:s:S');
    }
    else if (result.date) {
        var t = moment(result.date, 'D.M.YYYY');
    }
    if (result.to) {
        //TODO
    }
    if (result.countdownTitle) {
        //TODO
    }
    if (result.countdown) {
        //TODO
    }
    if (result.save) {
        //TODO
    }
    if (result.print) {
        message.channel.send(t.format('LLL'));
    }
}
