"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardCommandVisitor = exports.CommandType = void 0;
// import antlr and grammar
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logger = require("winston");
var parseFormat = require('moment-parseformat');
var CommandType;
(function (CommandType) {
    CommandType[CommandType["moment"] = 0] = "moment";
    CommandType[CommandType["server"] = 1] = "server";
    CommandType[CommandType["help"] = 2] = "help";
})(CommandType = exports.CommandType || (exports.CommandType = {}));
// Extend the AbstractParseTreeVisitor to get default visitor behaviour
class StandardCommandVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return {};
    }
    //Commands affecting the whole server
    visitCommandServer(context) {
        return Object.assign({ type: CommandType.server }, context.server().accept(this));
    }
    //Commands affecting the momentjs library
    visitCommandMoment(context) {
        return Object.assign(Object.assign({ type: CommandType.moment }, context.moment().accept(this)), context.output().accept(this));
    }
    //Command to change the locale of this server
    visitServerLocale(context) {
        return { locale: context.STRING().text };
    }
    //Command to generate the current moment
    visitMomentNow(context) {
        return { now: true };
    }
    //Command to load some moment
    visitMomentLoad(context) {
        return { load: context.STRING().text };
    }
    //command to input an input
    visitMomentInput(context) {
        var command = {};
        if (context.QUOTESTRING().length >= 2) {
            command.inputFormat = context.QUOTESTRING(1).text;
        }
        else {
            command.inputFormat = parseFormat(context.QUOTESTRING(0).text);
        }
        if (context.STRING()) {
            command.inTz = context.STRING().text;
        }
        command.input = context.QUOTESTRING(0).text;
        return command;
    }
    //command to input an input without quotemarks
    visitMomentInputWoQ(context) {
        var command = {};
        if (context.QUOTESTRING()) {
            command.inputFormat = context.QUOTESTRING().text;
        }
        else {
            command.inputFormat = parseFormat(context.STRING(0).text);
        }
        if (context.STRING().length >= 2) {
            command.inTz = context.STRING(1).text;
        }
        command.input = context.STRING(0).text;
        return command;
    }
    //option to make a countdown in the title
    visitOutputCountdownTitle(context) {
        var outputs = {};
        if (context.output())
            var outputs = context.output().accept(this);
        return Object.assign(Object.assign({}, outputs), { countdownTitle: context.STRING().text });
    }
    //option to make a countdown in the chat
    visitOutputCountdown(context) {
        var outputs = {};
        if (context.output())
            var outputs = context.output().accept(this);
        return Object.assign(Object.assign({}, outputs), { countdown: context.STRING().text });
    }
    //option to set the timezone
    visitOutputTo(context) {
        var outputs = {};
        if (context.output())
            var outputs = context.output().accept(this);
        return Object.assign(Object.assign({}, outputs), { to: context.STRING().text });
    }
    //option to save the moment in the database
    visitOutputSave(context) {
        var outputs = {};
        if (context.output())
            var outputs = context.output().accept(this);
        return Object.assign(Object.assign({}, outputs), { save: context.STRING().text });
    }
    //option to print the date in the chat
    visitOutputPrint(context) {
        var outputs = {};
        if (context.output())
            outputs = context.output().accept(this);
        var format = 'LLL Z';
        if (context.QUOTESTRING())
            format = this.transformToFormat(context.QUOTESTRING().text);
        return Object.assign(Object.assign({}, outputs), { print: format });
    }
    //option to print the date in the title
    visitOutputPrintTitle(context) {
        var outputs = {};
        if (context.output())
            outputs = context.output().accept(this);
        var format = 'LLL';
        if (context.QUOTESTRING())
            format = this.transformToFormat(context.QUOTESTRING().text);
        return Object.assign(Object.assign({}, outputs), { printTitle: format });
    }
    //function to transform our format style to moment format style
    transformToFormat(text) {
        /*
         * 0: Starstate
         * 1: quotemark
         * 2: time format
         * 3: text
         * 4: end
         */
        var state = 0;
        var output = [];
        var index = 0;
        for (let c of text) {
            switch (state) {
                //start
                case 0:
                    if (c != '"') {
                        logger.error("Could not transform text into momentjs format. \" was missing. Text was: '" + text + "'");
                    }
                    state = 1;
                    break;
                //quotemark
                case 1:
                    if (c == '[') {
                        state = 2;
                    }
                    else {
                        state = 3;
                        output[index++] = '[';
                        output[index++] = c;
                    }
                    break;
                case 2:
                    if (c == ']') {
                        state = 3;
                        output[index++] = '[';
                    }
                    else if (c == '"') {
                        state = 4;
                    }
                    else {
                        state = 2;
                        output[index++] = c;
                    }
                    break;
                case 3:
                    if (c == '[') {
                        state = 2;
                        output[index++] = ']';
                    }
                    else if (c == '"') {
                        state = 4;
                        output[index++] = ']';
                    }
                    else {
                        state = 3;
                        output[index++] = c;
                    }
                    break;
                case 4:
                default:
                    break;
            }
        }
        return output.join('');
    }
}
exports.StandardCommandVisitor = StandardCommandVisitor;
