"use strict";
// Generated from Command.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputPrintTitleContext = exports.OutputPrintContext = exports.OutputSaveContext = exports.OutputToContext = exports.OutputCountdownContext = exports.OutputCountdownTitleContext = exports.OutputContext = exports.MomentInputWoQContext = exports.MomentInputContext = exports.MomentLoadContext = exports.MomentNowContext = exports.MomentContext = exports.ServerFormatContext = exports.ServerTimezoneContext = exports.ServerLocaleContext = exports.ServerContext = exports.CommandMomentContext = exports.CommandServerContext = exports.CommandContext = exports.CommandParser = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class CommandParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(CommandParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return CommandParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "Command.g4"; }
    // @Override
    get ruleNames() { return CommandParser.ruleNames; }
    // @Override
    get serializedATN() { return CommandParser._serializedATN; }
    // @RuleVersion(0)
    command() {
        let _localctx = new CommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CommandParser.RULE_command);
        try {
            this.state = 12;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CommandParser.T__0:
                case CommandParser.T__1:
                case CommandParser.T__2:
                    _localctx = new CommandServerContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 8;
                        this.server();
                    }
                    break;
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
    }
    // @RuleVersion(0)
    server() {
        let _localctx = new ServerContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CommandParser.RULE_server);
        try {
            this.state = 20;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CommandParser.T__0:
                    _localctx = new ServerLocaleContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 14;
                        this.match(CommandParser.T__0);
                        this.state = 15;
                        this.match(CommandParser.STRING);
                    }
                    break;
                case CommandParser.T__1:
                    _localctx = new ServerTimezoneContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 16;
                        this.match(CommandParser.T__1);
                        this.state = 17;
                        this.match(CommandParser.STRING);
                    }
                    break;
                case CommandParser.T__2:
                    _localctx = new ServerFormatContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 18;
                        this.match(CommandParser.T__2);
                        this.state = 19;
                        this.match(CommandParser.QUOTESTRING);
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
    }
    // @RuleVersion(0)
    moment() {
        let _localctx = new MomentContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CommandParser.RULE_moment);
        let _la;
        try {
            this.state = 45;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    _localctx = new MomentNowContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 22;
                        this.match(CommandParser.T__3);
                    }
                    break;
                case 2:
                    _localctx = new MomentLoadContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 23;
                        this.match(CommandParser.T__4);
                        this.state = 24;
                        this.match(CommandParser.STRING);
                    }
                    break;
                case 3:
                    _localctx = new MomentInputContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 25;
                        this.match(CommandParser.T__5);
                        this.state = 26;
                        this.match(CommandParser.QUOTESTRING);
                        this.state = 29;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CommandParser.T__6) {
                            {
                                this.state = 27;
                                this.match(CommandParser.T__6);
                                this.state = 28;
                                this.match(CommandParser.STRING);
                            }
                        }
                        this.state = 33;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CommandParser.T__7) {
                            {
                                this.state = 31;
                                this.match(CommandParser.T__7);
                                this.state = 32;
                                this.match(CommandParser.QUOTESTRING);
                            }
                        }
                    }
                    break;
                case 4:
                    _localctx = new MomentInputWoQContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 35;
                        this.match(CommandParser.T__5);
                        this.state = 36;
                        this.match(CommandParser.STRING);
                        this.state = 39;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CommandParser.T__6) {
                            {
                                this.state = 37;
                                this.match(CommandParser.T__6);
                                this.state = 38;
                                this.match(CommandParser.STRING);
                            }
                        }
                        this.state = 43;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CommandParser.T__7) {
                            {
                                this.state = 41;
                                this.match(CommandParser.T__7);
                                this.state = 42;
                                this.match(CommandParser.QUOTESTRING);
                            }
                        }
                    }
                    break;
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
    }
    // @RuleVersion(0)
    output() {
        let _localctx = new OutputContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CommandParser.RULE_output);
        let _la;
        try {
            this.state = 89;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CommandParser.T__8:
                    _localctx = new OutputCountdownTitleContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 47;
                        this.match(CommandParser.T__8);
                        this.state = 50;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CommandParser.T__9) {
                            {
                                this.state = 48;
                                this.match(CommandParser.T__9);
                                this.state = 49;
                                this.match(CommandParser.STRING);
                            }
                        }
                        this.state = 53;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__8) | (1 << CommandParser.T__10) | (1 << CommandParser.T__11) | (1 << CommandParser.T__12) | (1 << CommandParser.T__13) | (1 << CommandParser.T__15))) !== 0)) {
                            {
                                this.state = 52;
                                this.output();
                            }
                        }
                    }
                    break;
                case CommandParser.T__10:
                    _localctx = new OutputCountdownContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 55;
                        this.match(CommandParser.T__10);
                        this.state = 58;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CommandParser.T__9) {
                            {
                                this.state = 56;
                                this.match(CommandParser.T__9);
                                this.state = 57;
                                this.match(CommandParser.STRING);
                            }
                        }
                        this.state = 61;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__8) | (1 << CommandParser.T__10) | (1 << CommandParser.T__11) | (1 << CommandParser.T__12) | (1 << CommandParser.T__13) | (1 << CommandParser.T__15))) !== 0)) {
                            {
                                this.state = 60;
                                this.output();
                            }
                        }
                    }
                    break;
                case CommandParser.T__11:
                    _localctx = new OutputToContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 63;
                        this.match(CommandParser.T__11);
                        this.state = 64;
                        this.match(CommandParser.STRING);
                        this.state = 66;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__8) | (1 << CommandParser.T__10) | (1 << CommandParser.T__11) | (1 << CommandParser.T__12) | (1 << CommandParser.T__13) | (1 << CommandParser.T__15))) !== 0)) {
                            {
                                this.state = 65;
                                this.output();
                            }
                        }
                    }
                    break;
                case CommandParser.T__12:
                    _localctx = new OutputSaveContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 68;
                        this.match(CommandParser.T__12);
                        this.state = 69;
                        this.match(CommandParser.STRING);
                        this.state = 71;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__8) | (1 << CommandParser.T__10) | (1 << CommandParser.T__11) | (1 << CommandParser.T__12) | (1 << CommandParser.T__13) | (1 << CommandParser.T__15))) !== 0)) {
                            {
                                this.state = 70;
                                this.output();
                            }
                        }
                    }
                    break;
                case CommandParser.T__13:
                    _localctx = new OutputPrintContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 73;
                        this.match(CommandParser.T__13);
                        this.state = 76;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CommandParser.T__14) {
                            {
                                this.state = 74;
                                this.match(CommandParser.T__14);
                                this.state = 75;
                                this.match(CommandParser.QUOTESTRING);
                            }
                        }
                        this.state = 79;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__8) | (1 << CommandParser.T__10) | (1 << CommandParser.T__11) | (1 << CommandParser.T__12) | (1 << CommandParser.T__13) | (1 << CommandParser.T__15))) !== 0)) {
                            {
                                this.state = 78;
                                this.output();
                            }
                        }
                    }
                    break;
                case CommandParser.T__15:
                    _localctx = new OutputPrintTitleContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 81;
                        this.match(CommandParser.T__15);
                        this.state = 84;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CommandParser.T__14) {
                            {
                                this.state = 82;
                                this.match(CommandParser.T__14);
                                this.state = 83;
                                this.match(CommandParser.QUOTESTRING);
                            }
                        }
                        this.state = 87;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__8) | (1 << CommandParser.T__10) | (1 << CommandParser.T__11) | (1 << CommandParser.T__12) | (1 << CommandParser.T__13) | (1 << CommandParser.T__15))) !== 0)) {
                            {
                                this.state = 86;
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
    }
    static get _ATN() {
        if (!CommandParser.__ATN) {
            CommandParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CommandParser._serializedATN));
        }
        return CommandParser.__ATN;
    }
}
exports.CommandParser = CommandParser;
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
CommandParser.T__13 = 14;
CommandParser.T__14 = 15;
CommandParser.T__15 = 16;
CommandParser.QUOTESTRING = 17;
CommandParser.STRING = 18;
CommandParser.RULE_command = 0;
CommandParser.RULE_server = 1;
CommandParser.RULE_moment = 2;
CommandParser.RULE_output = 3;
// tslint:disable:no-trailing-whitespace
CommandParser.ruleNames = [
    "command", "server", "moment", "output",
];
CommandParser._LITERAL_NAMES = [
    undefined, "'.locale '", "'.timezone '", "'.format '", "'.now'", "'.load '",
    "'.input '", "' in '", "' as '", "' countdown in Title'", "'as'", "' countdown'",
    "' to '", "' save '", "' print'", "' '", "' print in Title'",
];
CommandParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "QUOTESTRING", "STRING",
];
CommandParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CommandParser._LITERAL_NAMES, CommandParser._SYMBOLIC_NAMES, []);
CommandParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14^\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02" +
    "\x03\x02\x05\x02\x0F\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x05\x03\x17\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
    "\x03\x04\x05\x04 \n\x04\x03\x04\x03\x04\x05\x04$\n\x04\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x05\x04*\n\x04\x03\x04\x03\x04\x05\x04.\n\x04\x05\x04" +
    "0\n\x04\x03\x05\x03\x05\x03\x05\x05\x055\n\x05\x03\x05\x05\x058\n\x05" +
    "\x03\x05\x03\x05\x03\x05\x05\x05=\n\x05\x03\x05\x05\x05@\n\x05\x03\x05" +
    "\x03\x05\x03\x05\x05\x05E\n\x05\x03\x05\x03\x05\x03\x05\x05\x05J\n\x05" +
    "\x03\x05\x03\x05\x03\x05\x05\x05O\n\x05\x03\x05\x05\x05R\n\x05\x03\x05" +
    "\x03\x05\x03\x05\x05\x05W\n\x05\x03\x05\x05\x05Z\n\x05\x05\x05\\\n\x05" +
    "\x03\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x02\x02r\x02" +
    "\x0E\x03\x02\x02\x02\x04\x16\x03\x02\x02\x02\x06/\x03\x02\x02\x02\b[\x03" +
    "\x02\x02\x02\n\x0F\x05\x04\x03\x02\v\f\x05\x06\x04\x02\f\r\x05\b\x05\x02" +
    "\r\x0F\x03\x02\x02\x02\x0E\n\x03\x02\x02\x02\x0E\v\x03\x02\x02\x02\x0F" +
    "\x03\x03\x02\x02\x02\x10\x11\x07\x03\x02\x02\x11\x17\x07\x14\x02\x02\x12" +
    "\x13\x07\x04\x02\x02\x13\x17\x07\x14\x02\x02\x14\x15\x07\x05\x02\x02\x15" +
    "\x17\x07\x13\x02\x02\x16\x10\x03\x02\x02\x02\x16\x12\x03\x02\x02\x02\x16" +
    "\x14\x03\x02\x02\x02\x17\x05\x03\x02\x02\x02\x180\x07\x06\x02\x02\x19" +
    "\x1A\x07\x07\x02\x02\x1A0\x07\x14\x02\x02\x1B\x1C\x07\b\x02\x02\x1C\x1F" +
    "\x07\x13\x02\x02\x1D\x1E\x07\t\x02\x02\x1E \x07\x14\x02\x02\x1F\x1D\x03" +
    "\x02\x02\x02\x1F \x03\x02\x02\x02 #\x03\x02\x02\x02!\"\x07\n\x02\x02\"" +
    "$\x07\x13\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$0\x03\x02\x02\x02" +
    "%&\x07\b\x02\x02&)\x07\x14\x02\x02\'(\x07\t\x02\x02(*\x07\x14\x02\x02" +
    ")\'\x03\x02\x02\x02)*\x03\x02\x02\x02*-\x03\x02\x02\x02+,\x07\n\x02\x02" +
    ",.\x07\x13\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.0\x03\x02\x02\x02" +
    "/\x18\x03\x02\x02\x02/\x19\x03\x02\x02\x02/\x1B\x03\x02\x02\x02/%\x03" +
    "\x02\x02\x020\x07\x03\x02\x02\x0214\x07\v\x02\x0223\x07\f\x02\x0235\x07" +
    "\x14\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x0257\x03\x02\x02\x0268\x05" +
    "\b\x05\x0276\x03\x02\x02\x0278\x03\x02\x02\x028\\\x03\x02\x02\x029<\x07" +
    "\r\x02\x02:;\x07\f\x02\x02;=\x07\x14\x02\x02<:\x03\x02\x02\x02<=\x03\x02" +
    "\x02\x02=?\x03\x02\x02\x02>@\x05\b\x05\x02?>\x03\x02\x02\x02?@\x03\x02" +
    "\x02\x02@\\\x03\x02\x02\x02AB\x07\x0E\x02\x02BD\x07\x14\x02\x02CE\x05" +
    "\b\x05\x02DC\x03\x02\x02\x02DE\x03\x02\x02\x02E\\\x03\x02\x02\x02FG\x07" +
    "\x0F\x02\x02GI\x07\x14\x02\x02HJ\x05\b\x05\x02IH\x03\x02\x02\x02IJ\x03" +
    "\x02\x02\x02J\\\x03\x02\x02\x02KN\x07\x10\x02\x02LM\x07\x11\x02\x02MO" +
    "\x07\x13\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02" +
    "PR\x05\b\x05\x02QP\x03\x02\x02\x02QR\x03\x02\x02\x02R\\\x03\x02\x02\x02" +
    "SV\x07\x12\x02\x02TU\x07\x11\x02\x02UW\x07\x13\x02\x02VT\x03\x02\x02\x02" +
    "VW\x03\x02\x02\x02WY\x03\x02\x02\x02XZ\x05\b\x05\x02YX\x03\x02\x02\x02" +
    "YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[1\x03\x02\x02\x02[9\x03\x02\x02" +
    "\x02[A\x03\x02\x02\x02[F\x03\x02\x02\x02[K\x03\x02\x02\x02[S\x03\x02\x02" +
    "\x02\\\t\x03\x02\x02\x02\x14\x0E\x16\x1F#)-/47<?DINQVY[";
class CommandContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommandParser.RULE_command; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.CommandContext = CommandContext;
class CommandServerContext extends CommandContext {
    server() {
        return this.getRuleContext(0, ServerContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCommandServer) {
            listener.enterCommandServer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCommandServer) {
            listener.exitCommandServer(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCommandServer) {
            return visitor.visitCommandServer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CommandServerContext = CommandServerContext;
class CommandMomentContext extends CommandContext {
    moment() {
        return this.getRuleContext(0, MomentContext);
    }
    output() {
        return this.getRuleContext(0, OutputContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCommandMoment) {
            listener.enterCommandMoment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCommandMoment) {
            listener.exitCommandMoment(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCommandMoment) {
            return visitor.visitCommandMoment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CommandMomentContext = CommandMomentContext;
class ServerContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommandParser.RULE_server; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ServerContext = ServerContext;
class ServerLocaleContext extends ServerContext {
    STRING() { return this.getToken(CommandParser.STRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterServerLocale) {
            listener.enterServerLocale(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitServerLocale) {
            listener.exitServerLocale(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitServerLocale) {
            return visitor.visitServerLocale(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ServerLocaleContext = ServerLocaleContext;
class ServerTimezoneContext extends ServerContext {
    STRING() { return this.getToken(CommandParser.STRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterServerTimezone) {
            listener.enterServerTimezone(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitServerTimezone) {
            listener.exitServerTimezone(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitServerTimezone) {
            return visitor.visitServerTimezone(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ServerTimezoneContext = ServerTimezoneContext;
class ServerFormatContext extends ServerContext {
    QUOTESTRING() { return this.getToken(CommandParser.QUOTESTRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterServerFormat) {
            listener.enterServerFormat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitServerFormat) {
            listener.exitServerFormat(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitServerFormat) {
            return visitor.visitServerFormat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ServerFormatContext = ServerFormatContext;
class MomentContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommandParser.RULE_moment; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.MomentContext = MomentContext;
class MomentNowContext extends MomentContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMomentNow) {
            listener.enterMomentNow(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMomentNow) {
            listener.exitMomentNow(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMomentNow) {
            return visitor.visitMomentNow(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MomentNowContext = MomentNowContext;
class MomentLoadContext extends MomentContext {
    STRING() { return this.getToken(CommandParser.STRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMomentLoad) {
            listener.enterMomentLoad(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMomentLoad) {
            listener.exitMomentLoad(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMomentLoad) {
            return visitor.visitMomentLoad(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MomentLoadContext = MomentLoadContext;
class MomentInputContext extends MomentContext {
    QUOTESTRING(i) {
        if (i === undefined) {
            return this.getTokens(CommandParser.QUOTESTRING);
        }
        else {
            return this.getToken(CommandParser.QUOTESTRING, i);
        }
    }
    STRING() { return this.tryGetToken(CommandParser.STRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMomentInput) {
            listener.enterMomentInput(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMomentInput) {
            listener.exitMomentInput(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMomentInput) {
            return visitor.visitMomentInput(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MomentInputContext = MomentInputContext;
class MomentInputWoQContext extends MomentContext {
    STRING(i) {
        if (i === undefined) {
            return this.getTokens(CommandParser.STRING);
        }
        else {
            return this.getToken(CommandParser.STRING, i);
        }
    }
    QUOTESTRING() { return this.tryGetToken(CommandParser.QUOTESTRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMomentInputWoQ) {
            listener.enterMomentInputWoQ(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMomentInputWoQ) {
            listener.exitMomentInputWoQ(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMomentInputWoQ) {
            return visitor.visitMomentInputWoQ(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MomentInputWoQContext = MomentInputWoQContext;
class OutputContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CommandParser.RULE_output; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.OutputContext = OutputContext;
class OutputCountdownTitleContext extends OutputContext {
    STRING() { return this.tryGetToken(CommandParser.STRING, 0); }
    output() {
        return this.tryGetRuleContext(0, OutputContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOutputCountdownTitle) {
            listener.enterOutputCountdownTitle(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOutputCountdownTitle) {
            listener.exitOutputCountdownTitle(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOutputCountdownTitle) {
            return visitor.visitOutputCountdownTitle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OutputCountdownTitleContext = OutputCountdownTitleContext;
class OutputCountdownContext extends OutputContext {
    STRING() { return this.tryGetToken(CommandParser.STRING, 0); }
    output() {
        return this.tryGetRuleContext(0, OutputContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOutputCountdown) {
            listener.enterOutputCountdown(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOutputCountdown) {
            listener.exitOutputCountdown(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOutputCountdown) {
            return visitor.visitOutputCountdown(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OutputCountdownContext = OutputCountdownContext;
class OutputToContext extends OutputContext {
    STRING() { return this.getToken(CommandParser.STRING, 0); }
    output() {
        return this.tryGetRuleContext(0, OutputContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOutputTo) {
            listener.enterOutputTo(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOutputTo) {
            listener.exitOutputTo(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOutputTo) {
            return visitor.visitOutputTo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OutputToContext = OutputToContext;
class OutputSaveContext extends OutputContext {
    STRING() { return this.getToken(CommandParser.STRING, 0); }
    output() {
        return this.tryGetRuleContext(0, OutputContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOutputSave) {
            listener.enterOutputSave(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOutputSave) {
            listener.exitOutputSave(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOutputSave) {
            return visitor.visitOutputSave(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OutputSaveContext = OutputSaveContext;
class OutputPrintContext extends OutputContext {
    QUOTESTRING() { return this.tryGetToken(CommandParser.QUOTESTRING, 0); }
    output() {
        return this.tryGetRuleContext(0, OutputContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOutputPrint) {
            listener.enterOutputPrint(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOutputPrint) {
            listener.exitOutputPrint(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOutputPrint) {
            return visitor.visitOutputPrint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OutputPrintContext = OutputPrintContext;
class OutputPrintTitleContext extends OutputContext {
    QUOTESTRING() { return this.tryGetToken(CommandParser.QUOTESTRING, 0); }
    output() {
        return this.tryGetRuleContext(0, OutputContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOutputPrintTitle) {
            listener.enterOutputPrintTitle(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOutputPrintTitle) {
            listener.exitOutputPrintTitle(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOutputPrintTitle) {
            return visitor.visitOutputPrintTitle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OutputPrintTitleContext = OutputPrintTitleContext;
