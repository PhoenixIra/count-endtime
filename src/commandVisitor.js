"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.StandardCommandVisitor = exports.CommandType = void 0;
// import antlr and grammar
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
var CommandType;
(function (CommandType) {
    CommandType[CommandType["moment"] = 0] = "moment";
    CommandType[CommandType["server"] = 1] = "server";
    CommandType[CommandType["help"] = 2] = "help";
})(CommandType = exports.CommandType || (exports.CommandType = {}));
// Extend the AbstractParseTreeVisitor to get default visitor behaviour
var StandardCommandVisitor = /** @class */ (function (_super) {
    __extends(StandardCommandVisitor, _super);
    function StandardCommandVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StandardCommandVisitor.prototype.defaultResult = function () {
        return {};
    };
    StandardCommandVisitor.prototype.visitCommandServer = function (context) {
        return __assign({ type: CommandType.server }, context.server().accept(this));
    };
    StandardCommandVisitor.prototype.visitCommandMoment = function (context) {
        return __assign(__assign({ type: CommandType.moment }, context.moment().accept(this)), context.output().accept(this));
    };
    StandardCommandVisitor.prototype.visitServerLocale = function (context) {
        return { locale: context.STRING().text };
    };
    StandardCommandVisitor.prototype.visitMomentNow = function (context) {
        return { now: true };
    };
    StandardCommandVisitor.prototype.visitMomentLoad = function (context) {
        return { load: context.STRING().text };
    };
    StandardCommandVisitor.prototype.visitMomentTime = function (context) {
        return { time: context.TIME().text };
    };
    StandardCommandVisitor.prototype.visitMomentDate = function (context) {
        return { date: context.DATE().text };
    };
    StandardCommandVisitor.prototype.visitMomentDateTime = function (context) {
        return { date: context.DATE().text, time: context.TIME().text };
    };
    StandardCommandVisitor.prototype.visitOutputCountdownTitle = function (context) {
        return __assign(__assign({}, context.output().accept(this)), { countdownTitle: context.STRING().text });
    };
    StandardCommandVisitor.prototype.visitOutputCountdown = function (context) {
        return __assign(__assign({}, context.output().accept(this)), { countdown: context.STRING().text });
    };
    StandardCommandVisitor.prototype.visitOutputTo = function (context) {
        return __assign(__assign({}, context.output().accept(this)), { to: context.STRING().text });
    };
    StandardCommandVisitor.prototype.visitOutputSave = function (context) {
        return __assign(__assign({}, context.output().accept(this)), { save: context.STRING().text });
    };
    StandardCommandVisitor.prototype.visitOutputPrint = function (context) {
        return __assign(__assign({}, context.output().accept(this)), { print: true });
    };
    return StandardCommandVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.StandardCommandVisitor = StandardCommandVisitor;
