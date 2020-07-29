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
const database_1 = require("./database");
const iso6391 = require('iso-639-1');
var guildStorage = new database_1.GuildStorage("guild_storage.db");
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
    if (!message.guild)
        return; //TODO: Error message
    var guild = message.guild;
    var options = { locale: undefined, format: undefined, timezone: undefined };
    if (result.locale && iso6391.validate(result.locale))
        options.locale = result.locale;
    if (result.format)
        options.format = result.format;
    if (result.timezone && moment().tz(result.timezone).isValid())
        options.timezone = result.timezone;
    guildStorage.writeGuildOption(guild.id, options);
}
function handleMoment(result, message) {
    //try to catch standard options
    var options = { locale: undefined, format: undefined, timezone: undefined };
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
        var timezone = 'UTC';
        var format = 'LLL';
        var locale = 'en';
        if (options.timezone)
            timezone = options.timezone;
        if (options.format)
            format = options.format;
        if (options.locale)
            locale = options.locale;
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
            message.channel.send(t.locale(locale).tz(timezone).format(result.print));
        }
    }
    catch (error) {
        logger.warn(error.message);
    }
}
