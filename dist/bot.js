"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const moment = require("moment-timezone");
const auth = require("../json/auth.json");
const util_1 = require("./util");
const antlr4ts_1 = require("antlr4ts");
const CommandLexer_js_1 = require("./parser/CommandLexer.js");
const CommandParser_js_1 = require("./parser/CommandParser.js");
const commandVisitor_1 = require("./commandVisitor");
const database_1 = require("./database");
const yargs = require("yargs");
const iso6391 = require('iso-639-1');
const logger = require("winston");
var guildStorage = new database_1.GuildStorage("guild_storage.db");
//commandline arguments
const argv = yargs.options({
    loglevel: {
        alias: 'l',
        type: 'string',
        default: 'error',
        description: 'Sets the log-level for the command line'
    }
}).parse();
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console({ level: argv.loglevel }));
logger.add(new logger.transports.File({ filename: 'count-endime.log',
    level: 'info' }));
module.exports = logger;
// Initialize Discord Bot
var bot = new Discord.Client();
bot.on('ready', onReady);
bot.on('message', onMessage);
bot.login(auth.token);
function onReady() {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.user.username + ' - (' + bot.user.id + ')');
    logger.info('The console is logging on ' + argv.loglevel + ' level');
    if (guildStorage.error)
        logger.error('Database error: ' + guildStorage.error.message);
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
        logger.warn(error.message);
    }
}
function handleServer(result, message) {
    if (!message.guild) {
        message.channel.send("I don't appear to be on a server?");
        return;
    }
    var guild = message.guild;
    if (result.locale && iso6391.validate(result.locale)) {
        guildStorage.writeGuildLocale(guild.id, result.locale);
    }
    if (result.format) {
        guildStorage.writeGuildFormat(guild.id, result.format);
    }
    if (result.timezone && moment().tz(result.timezone).isValid()) {
        guildStorage.writeGuildTimezone(guild.id, result.timezone);
    }
}
function handleMoment(result, message) {
    //try to catch standard options
    var options = { locale: undefined, defFormat: undefined, timezone: undefined };
    if (message.guild)
        options = guildStorage.readGuildOption(message.guild.id);
    try {
        //get the moment saved in t
        if (result.now) {
            var t = moment();
        }
        else if (result.load) {
            if (message.guild)
                var t = moment(guildStorage.readMoment(message.guild.id, result.load).momentEpoch);
        }
        else if (result.input && result.inTz) {
            var t = moment.tz(result.input, result.inputFormat, result.inTz);
        }
        else if (result.input) {
            var t = moment(result.input, result.inputFormat);
        }
        //load options
        var locale = 'en';
        if (options.locale)
            locale = options.locale;
        var timezone = 'UTC';
        if (options.timezone)
            timezone = options.timezone;
        var printFormat = 'LLL';
        if (options.defFormat)
            printFormat = util_1.UtilEndtime.transformToFormat(options.defFormat);
        if (result.printFormat)
            printFormat = util_1.UtilEndtime.transformToFormat(result.printFormat);
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
            //TODO: Add limit of saved moments
            if (message.guild) {
                guildStorage.writeMoment(message.guild.id, result.save, t.valueOf());
            }
        }
        if (result.print) {
            message.channel.send(t.locale(locale).tz(timezone).format(printFormat));
        }
    }
    catch (error) {
        logger.warn(error.message);
    }
}
