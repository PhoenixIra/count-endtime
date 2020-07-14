"use strict";
// Generated from Command.g4 by ANTLR 4.7.3-SNAPSHOT
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
exports.__esModule = true;
exports.OutputPrintContext = exports.OutputSaveContext = exports.OutputToContext = exports.OutputCountdownContext = exports.OutputCountdownTitleContext = exports.OutputContext = exports.MomentDateTimeContext = exports.MomentDateContext = exports.MomentTimeContext = exports.MomentLoadContext = exports.MomentNowContext = exports.MomentContext = exports.ServerLocaleContext = exports.ServerContext = exports.CommandMomentContext = exports.CommandServerContext = exports.CommandContext = exports.CommandParser = void 0;
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var CommandParser = /** @class */ (function (_super) {
    __extends(CommandParser, _super);
    function CommandParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(CommandParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(CommandParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return CommandParser.VOCABULARY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommandParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Command.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommandParser.prototype, "ruleNames", {
        // @Override
        get: function () { return CommandParser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommandParser.prototype, "serializedATN", {
        // @Override
        get: function () { return CommandParser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    // @RuleVersion(0)
    CommandParser.prototype.command = function () {
        var _localctx = new CommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CommandParser.RULE_command);
        try {
            this.state = 12;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CommandParser.T__0:
                    _localctx = new CommandServerContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 8;
                        this.server();
                    }
                    break;
                case CommandParser.T__1:
                case CommandParser.T__2:
                case CommandParser.T__3:
                case CommandParser.T__4:
                case CommandParser.T__5:
                    _localctx = new CommandMomentContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 9;
                        this.moment();
                        this.state = 10;
                        this.output();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CommandParser.prototype.server = function () {
        var _localctx = new ServerContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CommandParser.RULE_server);
        try {
            _localctx = new ServerLocaleContext(_localctx);
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 14;
                this.match(CommandParser.T__0);
                this.state = 15;
                this.match(CommandParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CommandParser.prototype.moment = function () {
        var _localctx = new MomentContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CommandParser.RULE_moment);
        try {
            this.state = 28;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CommandParser.T__1:
                    _localctx = new MomentNowContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 17;
                        this.match(CommandParser.T__1);
                    }
                    break;
                case CommandParser.T__2:
                    _localctx = new MomentLoadContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 18;
                        this.match(CommandParser.T__2);
                        this.state = 19;
                        this.match(CommandParser.STRING);
                    }
                    break;
                case CommandParser.T__3:
                    _localctx = new MomentTimeContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 20;
                        this.match(CommandParser.T__3);
                        this.state = 21;
                        this.match(CommandParser.TIME);
                    }
                    break;
                case CommandParser.T__4:
                    _localctx = new MomentDateContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 22;
                        this.match(CommandParser.T__4);
                        this.state = 23;
                        this.match(CommandParser.DATE);
                    }
                    break;
                case CommandParser.T__5:
                    _localctx = new MomentDateTimeContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 24;
                        this.match(CommandParser.T__5);
                        this.state = 25;
                        this.match(CommandParser.DATE);
                        this.state = 26;
                        this.match(CommandParser.T__6);
                        this.state = 27;
                        this.match(CommandParser.TIME);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CommandParser.prototype.output = function () {
        var _localctx = new OutputContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CommandParser.RULE_output);
        var _la;
        try {
            this.state = 60;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CommandParser.T__7:
                    _localctx = new OutputCountdownTitleContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 30;
                        this.match(CommandParser.T__7);
                        this.state = 33;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CommandParser.T__8) {
                            {
                                this.state = 31;
                                this.match(CommandParser.T__8);
                                this.state = 32;
                                this.match(CommandParser.STRING);
                            }
                        }
                        this.state = 36;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__7) | (1 << CommandParser.T__9) | (1 << CommandParser.T__10) | (1 << CommandParser.T__11) | (1 << CommandParser.T__12))) !== 0)) {
                            {
                                this.state = 35;
                                this.output();
                            }
                        }
                    }
                    break;
                case CommandParser.T__9:
                    _localctx = new OutputCountdownContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 38;
                        this.match(CommandParser.T__9);
                        this.state = 41;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CommandParser.T__8) {
                            {
                                this.state = 39;
                                this.match(CommandParser.T__8);
                                this.state = 40;
                                this.match(CommandParser.STRING);
                            }
                        }
                        this.state = 44;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__7) | (1 << CommandParser.T__9) | (1 << CommandParser.T__10) | (1 << CommandParser.T__11) | (1 << CommandParser.T__12))) !== 0)) {
                            {
                                this.state = 43;
                                this.output();
                            }
                        }
                    }
                    break;
                case CommandParser.T__10:
                    _localctx = new OutputToContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 46;
                        this.match(CommandParser.T__10);
                        this.state = 47;
                        this.match(CommandParser.STRING);
                        this.state = 49;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__7) | (1 << CommandParser.T__9) | (1 << CommandParser.T__10) | (1 << CommandParser.T__11) | (1 << CommandParser.T__12))) !== 0)) {
                            {
                                this.state = 48;
                                this.output();
                            }
                        }
                    }
                    break;
                case CommandParser.T__11:
                    _localctx = new OutputSaveContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 51;
                        this.match(CommandParser.T__11);
                        this.state = 52;
                        this.match(CommandParser.STRING);
                        this.state = 54;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__7) | (1 << CommandParser.T__9) | (1 << CommandParser.T__10) | (1 << CommandParser.T__11) | (1 << CommandParser.T__12))) !== 0)) {
                            {
                                this.state = 53;
                                this.output();
                            }
                        }
                    }
                    break;
                case CommandParser.T__12:
                    _localctx = new OutputPrintContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 56;
                        this.match(CommandParser.T__12);
                        this.state = 58;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__7) | (1 << CommandParser.T__9) | (1 << CommandParser.T__10) | (1 << CommandParser.T__11) | (1 << CommandParser.T__12))) !== 0)) {
                            {
                                this.state = 57;
                                this.output();
                            }
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(CommandParser, "_ATN", {
        get: function () {
            if (!CommandParser.__ATN) {
                CommandParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CommandParser._serializedATN));
            }
            return CommandParser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    CommandParser.T__0 = 1;
    CommandParser.T__1 = 2;
    CommandParser.T__2 = 3;
    CommandParser.T__3 = 4;
    CommandParser.T__4 = 5;
    CommandParser.T__5 = 6;
    CommandParser.T__6 = 7;
    CommandParser.T__7 = 8;
    CommandParser.T__8 = 9;
    CommandParser.T__9 = 10;
    CommandParser.T__10 = 11;
    CommandParser.T__11 = 12;
    CommandParser.T__12 = 13;
    CommandParser.TIME = 14;
    CommandParser.DATE = 15;
    CommandParser.STRING = 16;
    CommandParser.RULE_command = 0;
    CommandParser.RULE_server = 1;
    CommandParser.RULE_moment = 2;
    CommandParser.RULE_output = 3;
    // tslint:disable:no-trailing-whitespace
    CommandParser.ruleNames = [
        "command", "server", "moment", "output",
    ];
    CommandParser._LITERAL_NAMES = [
        undefined, "'.locale '", "'.now'", "'.load '", "'.time '", "'.date '",
        "'.datetime '", "' '", "' countdown in Title'", "'as'", "' countdown'",
        "' to '", "' save '", "' print'",
    ];
    CommandParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "TIME", "DATE", "STRING",
    ];
    CommandParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CommandParser._LITERAL_NAMES, CommandParser._SYMBOLIC_NAMES, []);
    CommandParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12A\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x05\x02\x0F\n\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
        "\x04\x1F\n\x04\x03\x05\x03\x05\x03\x05\x05\x05$\n\x05\x03\x05\x05\x05" +
        "\'\n\x05\x03\x05\x03\x05\x03\x05\x05\x05,\n\x05\x03\x05\x05\x05/\n\x05" +
        "\x03\x05\x03\x05\x03\x05\x05\x054\n\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
        "9\n\x05\x03\x05\x03\x05\x05\x05=\n\x05\x05\x05?\n\x05\x03\x05\x02\x02" +
        "\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x02\x02L\x02\x0E\x03\x02\x02" +
        "\x02\x04\x10\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b>\x03\x02\x02\x02" +
        "\n\x0F\x05\x04\x03\x02\v\f\x05\x06\x04\x02\f\r\x05\b\x05\x02\r\x0F\x03" +
        "\x02\x02\x02\x0E\n\x03\x02\x02\x02\x0E\v\x03\x02\x02\x02\x0F\x03\x03\x02" +
        "\x02\x02\x10\x11\x07\x03\x02\x02\x11\x12\x07\x12\x02\x02\x12\x05\x03\x02" +
        "\x02\x02\x13\x1F\x07\x04\x02\x02\x14\x15\x07\x05\x02\x02\x15\x1F\x07\x12" +
        "\x02\x02\x16\x17\x07\x06\x02\x02\x17\x1F\x07\x10\x02\x02\x18\x19\x07\x07" +
        "\x02\x02\x19\x1F\x07\x11\x02\x02\x1A\x1B\x07\b\x02\x02\x1B\x1C\x07\x11" +
        "\x02\x02\x1C\x1D\x07\t\x02\x02\x1D\x1F\x07\x10\x02\x02\x1E\x13\x03\x02" +
        "\x02\x02\x1E\x14\x03\x02\x02\x02\x1E\x16\x03\x02\x02\x02\x1E\x18\x03\x02" +
        "\x02\x02\x1E\x1A\x03\x02\x02\x02\x1F\x07\x03\x02\x02\x02 #\x07\n\x02\x02" +
        "!\"\x07\v\x02\x02\"$\x07\x12\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02" +
        "$&\x03\x02\x02\x02%\'\x05\b\x05\x02&%\x03\x02\x02\x02&\'\x03\x02\x02\x02" +
        "\'?\x03\x02\x02\x02(+\x07\f\x02\x02)*\x07\v\x02\x02*,\x07\x12\x02\x02" +
        "+)\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03\x02\x02\x02-/\x05\b\x05\x02" +
        ".-\x03\x02\x02\x02./\x03\x02\x02\x02/?\x03\x02\x02\x0201\x07\r\x02\x02" +
        "13\x07\x12\x02\x0224\x05\b\x05\x0232\x03\x02\x02\x0234\x03\x02\x02\x02" +
        "4?\x03\x02\x02\x0256\x07\x0E\x02\x0268\x07\x12\x02\x0279\x05\b\x05\x02" +
        "87\x03\x02\x02\x0289\x03\x02\x02\x029?\x03\x02\x02\x02:<\x07\x0F\x02\x02" +
        ";=\x05\b\x05\x02<;\x03\x02\x02\x02<=\x03\x02\x02\x02=?\x03\x02\x02\x02" +
        "> \x03\x02\x02\x02>(\x03\x02\x02\x02>0\x03\x02\x02\x02>5\x03\x02\x02\x02" +
        ">:\x03\x02\x02\x02?\t\x03\x02\x02\x02\f\x0E\x1E#&+.38<>";
    return CommandParser;
}(Parser_1.Parser));
exports.CommandParser = CommandParser;
var CommandContext = /** @class */ (function (_super) {
    __extends(CommandContext, _super);
    function CommandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(CommandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CommandParser.RULE_command; },
        enumerable: false,
        configurable: true
    });
    CommandContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return CommandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommandContext = CommandContext;
var CommandServerContext = /** @class */ (function (_super) {
    __extends(CommandServerContext, _super);
    function CommandServerContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    CommandServerContext.prototype.server = function () {
        return this.getRuleContext(0, ServerContext);
    };
    // @Override
    CommandServerContext.prototype.enterRule = function (listener) {
        if (listener.enterCommandServer) {
            listener.enterCommandServer(this);
        }
    };
    // @Override
    CommandServerContext.prototype.exitRule = function (listener) {
        if (listener.exitCommandServer) {
            listener.exitCommandServer(this);
        }
    };
    // @Override
    CommandServerContext.prototype.accept = function (visitor) {
        if (visitor.visitCommandServer) {
            return visitor.visitCommandServer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommandServerContext;
}(CommandContext));
exports.CommandServerContext = CommandServerContext;
var CommandMomentContext = /** @class */ (function (_super) {
    __extends(CommandMomentContext, _super);
    function CommandMomentContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    CommandMomentContext.prototype.moment = function () {
        return this.getRuleContext(0, MomentContext);
    };
    CommandMomentContext.prototype.output = function () {
        return this.getRuleContext(0, OutputContext);
    };
    // @Override
    CommandMomentContext.prototype.enterRule = function (listener) {
        if (listener.enterCommandMoment) {
            listener.enterCommandMoment(this);
        }
    };
    // @Override
    CommandMomentContext.prototype.exitRule = function (listener) {
        if (listener.exitCommandMoment) {
            listener.exitCommandMoment(this);
        }
    };
    // @Override
    CommandMomentContext.prototype.accept = function (visitor) {
        if (visitor.visitCommandMoment) {
            return visitor.visitCommandMoment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommandMomentContext;
}(CommandContext));
exports.CommandMomentContext = CommandMomentContext;
var ServerContext = /** @class */ (function (_super) {
    __extends(ServerContext, _super);
    function ServerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ServerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CommandParser.RULE_server; },
        enumerable: false,
        configurable: true
    });
    ServerContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ServerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ServerContext = ServerContext;
var ServerLocaleContext = /** @class */ (function (_super) {
    __extends(ServerLocaleContext, _super);
    function ServerLocaleContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ServerLocaleContext.prototype.STRING = function () { return this.getToken(CommandParser.STRING, 0); };
    // @Override
    ServerLocaleContext.prototype.enterRule = function (listener) {
        if (listener.enterServerLocale) {
            listener.enterServerLocale(this);
        }
    };
    // @Override
    ServerLocaleContext.prototype.exitRule = function (listener) {
        if (listener.exitServerLocale) {
            listener.exitServerLocale(this);
        }
    };
    // @Override
    ServerLocaleContext.prototype.accept = function (visitor) {
        if (visitor.visitServerLocale) {
            return visitor.visitServerLocale(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ServerLocaleContext;
}(ServerContext));
exports.ServerLocaleContext = ServerLocaleContext;
var MomentContext = /** @class */ (function (_super) {
    __extends(MomentContext, _super);
    function MomentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(MomentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CommandParser.RULE_moment; },
        enumerable: false,
        configurable: true
    });
    MomentContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return MomentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MomentContext = MomentContext;
var MomentNowContext = /** @class */ (function (_super) {
    __extends(MomentNowContext, _super);
    function MomentNowContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    MomentNowContext.prototype.enterRule = function (listener) {
        if (listener.enterMomentNow) {
            listener.enterMomentNow(this);
        }
    };
    // @Override
    MomentNowContext.prototype.exitRule = function (listener) {
        if (listener.exitMomentNow) {
            listener.exitMomentNow(this);
        }
    };
    // @Override
    MomentNowContext.prototype.accept = function (visitor) {
        if (visitor.visitMomentNow) {
            return visitor.visitMomentNow(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MomentNowContext;
}(MomentContext));
exports.MomentNowContext = MomentNowContext;
var MomentLoadContext = /** @class */ (function (_super) {
    __extends(MomentLoadContext, _super);
    function MomentLoadContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MomentLoadContext.prototype.STRING = function () { return this.getToken(CommandParser.STRING, 0); };
    // @Override
    MomentLoadContext.prototype.enterRule = function (listener) {
        if (listener.enterMomentLoad) {
            listener.enterMomentLoad(this);
        }
    };
    // @Override
    MomentLoadContext.prototype.exitRule = function (listener) {
        if (listener.exitMomentLoad) {
            listener.exitMomentLoad(this);
        }
    };
    // @Override
    MomentLoadContext.prototype.accept = function (visitor) {
        if (visitor.visitMomentLoad) {
            return visitor.visitMomentLoad(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MomentLoadContext;
}(MomentContext));
exports.MomentLoadContext = MomentLoadContext;
var MomentTimeContext = /** @class */ (function (_super) {
    __extends(MomentTimeContext, _super);
    function MomentTimeContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MomentTimeContext.prototype.TIME = function () { return this.getToken(CommandParser.TIME, 0); };
    // @Override
    MomentTimeContext.prototype.enterRule = function (listener) {
        if (listener.enterMomentTime) {
            listener.enterMomentTime(this);
        }
    };
    // @Override
    MomentTimeContext.prototype.exitRule = function (listener) {
        if (listener.exitMomentTime) {
            listener.exitMomentTime(this);
        }
    };
    // @Override
    MomentTimeContext.prototype.accept = function (visitor) {
        if (visitor.visitMomentTime) {
            return visitor.visitMomentTime(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MomentTimeContext;
}(MomentContext));
exports.MomentTimeContext = MomentTimeContext;
var MomentDateContext = /** @class */ (function (_super) {
    __extends(MomentDateContext, _super);
    function MomentDateContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MomentDateContext.prototype.DATE = function () { return this.getToken(CommandParser.DATE, 0); };
    // @Override
    MomentDateContext.prototype.enterRule = function (listener) {
        if (listener.enterMomentDate) {
            listener.enterMomentDate(this);
        }
    };
    // @Override
    MomentDateContext.prototype.exitRule = function (listener) {
        if (listener.exitMomentDate) {
            listener.exitMomentDate(this);
        }
    };
    // @Override
    MomentDateContext.prototype.accept = function (visitor) {
        if (visitor.visitMomentDate) {
            return visitor.visitMomentDate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MomentDateContext;
}(MomentContext));
exports.MomentDateContext = MomentDateContext;
var MomentDateTimeContext = /** @class */ (function (_super) {
    __extends(MomentDateTimeContext, _super);
    function MomentDateTimeContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MomentDateTimeContext.prototype.DATE = function () { return this.getToken(CommandParser.DATE, 0); };
    MomentDateTimeContext.prototype.TIME = function () { return this.getToken(CommandParser.TIME, 0); };
    // @Override
    MomentDateTimeContext.prototype.enterRule = function (listener) {
        if (listener.enterMomentDateTime) {
            listener.enterMomentDateTime(this);
        }
    };
    // @Override
    MomentDateTimeContext.prototype.exitRule = function (listener) {
        if (listener.exitMomentDateTime) {
            listener.exitMomentDateTime(this);
        }
    };
    // @Override
    MomentDateTimeContext.prototype.accept = function (visitor) {
        if (visitor.visitMomentDateTime) {
            return visitor.visitMomentDateTime(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MomentDateTimeContext;
}(MomentContext));
exports.MomentDateTimeContext = MomentDateTimeContext;
var OutputContext = /** @class */ (function (_super) {
    __extends(OutputContext, _super);
    function OutputContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OutputContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CommandParser.RULE_output; },
        enumerable: false,
        configurable: true
    });
    OutputContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return OutputContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OutputContext = OutputContext;
var OutputCountdownTitleContext = /** @class */ (function (_super) {
    __extends(OutputCountdownTitleContext, _super);
    function OutputCountdownTitleContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    OutputCountdownTitleContext.prototype.STRING = function () { return this.tryGetToken(CommandParser.STRING, 0); };
    OutputCountdownTitleContext.prototype.output = function () {
        return this.tryGetRuleContext(0, OutputContext);
    };
    // @Override
    OutputCountdownTitleContext.prototype.enterRule = function (listener) {
        if (listener.enterOutputCountdownTitle) {
            listener.enterOutputCountdownTitle(this);
        }
    };
    // @Override
    OutputCountdownTitleContext.prototype.exitRule = function (listener) {
        if (listener.exitOutputCountdownTitle) {
            listener.exitOutputCountdownTitle(this);
        }
    };
    // @Override
    OutputCountdownTitleContext.prototype.accept = function (visitor) {
        if (visitor.visitOutputCountdownTitle) {
            return visitor.visitOutputCountdownTitle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OutputCountdownTitleContext;
}(OutputContext));
exports.OutputCountdownTitleContext = OutputCountdownTitleContext;
var OutputCountdownContext = /** @class */ (function (_super) {
    __extends(OutputCountdownContext, _super);
    function OutputCountdownContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    OutputCountdownContext.prototype.STRING = function () { return this.tryGetToken(CommandParser.STRING, 0); };
    OutputCountdownContext.prototype.output = function () {
        return this.tryGetRuleContext(0, OutputContext);
    };
    // @Override
    OutputCountdownContext.prototype.enterRule = function (listener) {
        if (listener.enterOutputCountdown) {
            listener.enterOutputCountdown(this);
        }
    };
    // @Override
    OutputCountdownContext.prototype.exitRule = function (listener) {
        if (listener.exitOutputCountdown) {
            listener.exitOutputCountdown(this);
        }
    };
    // @Override
    OutputCountdownContext.prototype.accept = function (visitor) {
        if (visitor.visitOutputCountdown) {
            return visitor.visitOutputCountdown(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OutputCountdownContext;
}(OutputContext));
exports.OutputCountdownContext = OutputCountdownContext;
var OutputToContext = /** @class */ (function (_super) {
    __extends(OutputToContext, _super);
    function OutputToContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    OutputToContext.prototype.STRING = function () { return this.getToken(CommandParser.STRING, 0); };
    OutputToContext.prototype.output = function () {
        return this.tryGetRuleContext(0, OutputContext);
    };
    // @Override
    OutputToContext.prototype.enterRule = function (listener) {
        if (listener.enterOutputTo) {
            listener.enterOutputTo(this);
        }
    };
    // @Override
    OutputToContext.prototype.exitRule = function (listener) {
        if (listener.exitOutputTo) {
            listener.exitOutputTo(this);
        }
    };
    // @Override
    OutputToContext.prototype.accept = function (visitor) {
        if (visitor.visitOutputTo) {
            return visitor.visitOutputTo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OutputToContext;
}(OutputContext));
exports.OutputToContext = OutputToContext;
var OutputSaveContext = /** @class */ (function (_super) {
    __extends(OutputSaveContext, _super);
    function OutputSaveContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    OutputSaveContext.prototype.STRING = function () { return this.getToken(CommandParser.STRING, 0); };
    OutputSaveContext.prototype.output = function () {
        return this.tryGetRuleContext(0, OutputContext);
    };
    // @Override
    OutputSaveContext.prototype.enterRule = function (listener) {
        if (listener.enterOutputSave) {
            listener.enterOutputSave(this);
        }
    };
    // @Override
    OutputSaveContext.prototype.exitRule = function (listener) {
        if (listener.exitOutputSave) {
            listener.exitOutputSave(this);
        }
    };
    // @Override
    OutputSaveContext.prototype.accept = function (visitor) {
        if (visitor.visitOutputSave) {
            return visitor.visitOutputSave(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OutputSaveContext;
}(OutputContext));
exports.OutputSaveContext = OutputSaveContext;
var OutputPrintContext = /** @class */ (function (_super) {
    __extends(OutputPrintContext, _super);
    function OutputPrintContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    OutputPrintContext.prototype.output = function () {
        return this.tryGetRuleContext(0, OutputContext);
    };
    // @Override
    OutputPrintContext.prototype.enterRule = function (listener) {
        if (listener.enterOutputPrint) {
            listener.enterOutputPrint(this);
        }
    };
    // @Override
    OutputPrintContext.prototype.exitRule = function (listener) {
        if (listener.exitOutputPrint) {
            listener.exitOutputPrint(this);
        }
    };
    // @Override
    OutputPrintContext.prototype.accept = function (visitor) {
        if (visitor.visitOutputPrint) {
            return visitor.visitOutputPrint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OutputPrintContext;
}(OutputContext));
exports.OutputPrintContext = OutputPrintContext;
