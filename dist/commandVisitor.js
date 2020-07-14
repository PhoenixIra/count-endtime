"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardCommandVisitor = exports.CommandType = void 0;
// import antlr and grammar
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
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
    visitCommandServer(context) {
        return Object.assign({ type: CommandType.server }, context.server().accept(this));
    }
    visitCommandMoment(context) {
        return Object.assign(Object.assign({ type: CommandType.moment }, context.moment().accept(this)), context.output().accept(this));
    }
    visitServerLocale(context) {
        return { locale: context.STRING().text };
    }
    visitMomentNow(context) {
        return { now: true };
    }
    visitMomentLoad(context) {
        return { load: context.STRING().text };
    }
    visitMomentTime(context) {
        return { time: context.TIME().text };
    }
    visitMomentDate(context) {
        return { date: context.DATE().text };
    }
    visitMomentDateTime(context) {
        return { date: context.DATE().text, time: context.TIME().text };
    }
    visitOutputCountdownTitle(context) {
        var outputs = {};
        if (context.output())
            var outputs = context.output().accept(this);
        return Object.assign(Object.assign({}, outputs), { countdownTitle: context.STRING().text });
    }
    visitOutputCountdown(context) {
        var outputs = {};
        if (context.output())
            var outputs = context.output().accept(this);
        return Object.assign(Object.assign({}, outputs), { countdown: context.STRING().text });
    }
    visitOutputTo(context) {
        var outputs = {};
        if (context.output())
            var outputs = context.output().accept(this);
        return Object.assign(Object.assign({}, outputs), { to: context.STRING().text });
    }
    visitOutputSave(context) {
        var outputs = {};
        if (context.output())
            var outputs = context.output().accept(this);
        return Object.assign(Object.assign({}, outputs), { save: context.STRING().text });
    }
    visitOutputPrint(context) {
        var outputs = {};
        if (context.output())
            outputs = context.output().accept(this);
        var format = 'LLL';
        if (context.QUOTESTRING())
            format = context.QUOTESTRING().text;
        return Object.assign(Object.assign({}, outputs), { print: format });
    }
}
exports.StandardCommandVisitor = StandardCommandVisitor;
