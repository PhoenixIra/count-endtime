"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const logger = require("winston");
const moment = require("moment-timezone");
const auth = require("../json/auth.json");
const antlr4ts_1 = require("antlr4ts");
const CommandLexer_js_1 = require("./parser/CommandLexer.js");
const CommandParser_js_1 = require("./parser/CommandParser.js");
const commandVisitor_1 = require("./commandVisitor");
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
    if (message.cleanContent.substring(0, 1) != '.')
        return;
    try {
        // Create the lexer
        let inputStream = new antlr4ts_1.ANTLRInputStream(message.cleanContent);
        let lexer = new CommandLexer_js_1.CommandLexer(inputStream);
        //We dont need debug output
        lexer.removeErrorListeners();
        //create the parser
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new CommandParser_js_1.CommandParser(tokenStream);
        //We dont need debug output
        parser.removeErrorListeners();
        // Parse the input
        let tree = parser.command();
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
    catch (error) {
        //TODO: Error handling
        logger.warn(error.message);
    }
}
function handleServer(result, message) {
}
function handleMoment(result, message) {
    try {
        if (result.now) {
            var t = moment();
        }
        else if (result.load) {
            //TODO
        }
        else if (result.input && result.inTz) {
            var t = moment.tz(result.input, result.inputFormat, result.inTz);
        }
        else if (result.input) {
            var t = moment(result.input, result.inputFormat);
        }
        //TODO: change to UTC+ServerConfig Loading
        var timezone = 'Europe/Berlin';
        if (result.to) {
            timezone = result.to;
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
            message.channel.send(t.locale(getLocale(message)).tz(timezone).format(result.print));
        }
    }
    catch (error) {
        //TODO: Error handling
        logger.warn(error.message);
    }
}
function getLocale(message) {
    //TODO: ServerConfig
    //TODO: UserConfig
    if (message.author.locale) {
        return message.author.locale;
    }
    return 'en';
}
