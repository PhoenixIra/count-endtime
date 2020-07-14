"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const logger = require("winston");
const moment = require("moment");
const auth = require("../json/auth.json");
const antlr4ts_1 = require("antlr4ts");
const CommandLexer_js_1 = require("./parser/CommandLexer.js");
const CommandParser_js_1 = require("./parser/CommandParser.js");
const commandVisitor_1 = require("./commandVisitor");
moment.locale('de');
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
    let inputStream = new antlr4ts_1.ANTLRInputStream(message.cleanContent);
    let lexer = new CommandLexer_js_1.CommandLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    let parser = new CommandParser_js_1.CommandParser(tokenStream);
    parser.errorHandler = new antlr4ts_1.BailErrorStrategy();
    // Parse the input
    try {
        var tree = parser.command();
    }
    catch (error) {
        return;
    }
    let result = tree.accept(new commandVisitor_1.StandardCommandVisitor());
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
        message.channel.send(t.format(result.print));
    }
}
