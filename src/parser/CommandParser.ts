// Generated from Command.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CommandListener } from "./CommandListener";
import { CommandVisitor } from "./CommandVisitor";


export class CommandParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly QUOTESTRING = 21;
	public static readonly STRING = 22;
	public static readonly RULE_command = 0;
	public static readonly RULE_server = 1;
	public static readonly RULE_message = 2;
	public static readonly RULE_moment = 3;
	public static readonly RULE_output = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"command", "server", "message", "moment", "output",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.locale '", "'.timezone '", "'.format '", "'.message '", 
		"'.title '", "'.countdown '", "'.countdownTitle '", "'.now'", "'.load '", 
		"'.input '", "' in '", "' as '", "' countdown in Title'", "'as'", "' countdown'", 
		"' to '", "' save '", "' print'", "' '", "' print in Title'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"QUOTESTRING", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CommandParser._LITERAL_NAMES, CommandParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CommandParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Command.g4"; }

	// @Override
	public get ruleNames(): string[] { return CommandParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CommandParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CommandParser._ATN, this);
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let _localctx: CommandContext = new CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CommandParser.RULE_command);
		try {
			this.state = 14;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CommandParser.T__0:
			case CommandParser.T__1:
			case CommandParser.T__2:
				_localctx = new CommandServerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 10;
				this.server();
				}
				break;
			case CommandParser.T__7:
			case CommandParser.T__8:
			case CommandParser.T__9:
				_localctx = new CommandMomentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 11;
				this.moment();
				this.state = 12;
				this.output();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public server(): ServerContext {
		let _localctx: ServerContext = new ServerContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CommandParser.RULE_server);
		try {
			this.state = 22;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CommandParser.T__0:
				_localctx = new ServerLocaleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 16;
				this.match(CommandParser.T__0);
				this.state = 17;
				this.match(CommandParser.STRING);
				}
				break;
			case CommandParser.T__1:
				_localctx = new ServerTimezoneContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 18;
				this.match(CommandParser.T__1);
				this.state = 19;
				this.match(CommandParser.STRING);
				}
				break;
			case CommandParser.T__2:
				_localctx = new ServerFormatContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 20;
				this.match(CommandParser.T__2);
				this.state = 21;
				this.match(CommandParser.QUOTESTRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public message(): MessageContext {
		let _localctx: MessageContext = new MessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CommandParser.RULE_message);
		try {
			this.state = 32;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CommandParser.T__3:
				_localctx = new MessagePrintContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 24;
				this.match(CommandParser.T__3);
				this.state = 25;
				this.match(CommandParser.QUOTESTRING);
				}
				break;
			case CommandParser.T__4:
				_localctx = new MessageTitleContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 26;
				this.match(CommandParser.T__4);
				this.state = 27;
				this.match(CommandParser.QUOTESTRING);
				}
				break;
			case CommandParser.T__5:
				_localctx = new MessageCountdownContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 28;
				this.match(CommandParser.T__5);
				this.state = 29;
				this.match(CommandParser.QUOTESTRING);
				}
				break;
			case CommandParser.T__6:
				_localctx = new MessageCountdownTitleContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 30;
				this.match(CommandParser.T__6);
				this.state = 31;
				this.match(CommandParser.QUOTESTRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moment(): MomentContext {
		let _localctx: MomentContext = new MomentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CommandParser.RULE_moment);
		let _la: number;
		try {
			this.state = 57;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				_localctx = new MomentNowContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 34;
				this.match(CommandParser.T__7);
				}
				break;

			case 2:
				_localctx = new MomentLoadContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
				this.match(CommandParser.T__8);
				this.state = 36;
				this.match(CommandParser.STRING);
				}
				break;

			case 3:
				_localctx = new MomentInputContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 37;
				this.match(CommandParser.T__9);
				this.state = 38;
				this.match(CommandParser.QUOTESTRING);
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CommandParser.T__10) {
					{
					this.state = 39;
					this.match(CommandParser.T__10);
					this.state = 40;
					this.match(CommandParser.STRING);
					}
				}

				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CommandParser.T__11) {
					{
					this.state = 43;
					this.match(CommandParser.T__11);
					this.state = 44;
					this.match(CommandParser.QUOTESTRING);
					}
				}

				}
				break;

			case 4:
				_localctx = new MomentInputWoQContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 47;
				this.match(CommandParser.T__9);
				this.state = 48;
				this.match(CommandParser.STRING);
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CommandParser.T__10) {
					{
					this.state = 49;
					this.match(CommandParser.T__10);
					this.state = 50;
					this.match(CommandParser.STRING);
					}
				}

				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CommandParser.T__11) {
					{
					this.state = 53;
					this.match(CommandParser.T__11);
					this.state = 54;
					this.match(CommandParser.QUOTESTRING);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public output(): OutputContext {
		let _localctx: OutputContext = new OutputContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CommandParser.RULE_output);
		let _la: number;
		try {
			this.state = 101;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CommandParser.T__12:
				_localctx = new OutputCountdownTitleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this.match(CommandParser.T__12);
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CommandParser.T__13) {
					{
					this.state = 60;
					this.match(CommandParser.T__13);
					this.state = 61;
					this.match(CommandParser.STRING);
					}
				}

				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__12) | (1 << CommandParser.T__14) | (1 << CommandParser.T__15) | (1 << CommandParser.T__16) | (1 << CommandParser.T__17) | (1 << CommandParser.T__19))) !== 0)) {
					{
					this.state = 64;
					this.output();
					}
				}

				}
				break;
			case CommandParser.T__14:
				_localctx = new OutputCountdownContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 67;
				this.match(CommandParser.T__14);
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CommandParser.T__13) {
					{
					this.state = 68;
					this.match(CommandParser.T__13);
					this.state = 69;
					this.match(CommandParser.STRING);
					}
				}

				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__12) | (1 << CommandParser.T__14) | (1 << CommandParser.T__15) | (1 << CommandParser.T__16) | (1 << CommandParser.T__17) | (1 << CommandParser.T__19))) !== 0)) {
					{
					this.state = 72;
					this.output();
					}
				}

				}
				break;
			case CommandParser.T__15:
				_localctx = new OutputToContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 75;
				this.match(CommandParser.T__15);
				this.state = 76;
				this.match(CommandParser.STRING);
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__12) | (1 << CommandParser.T__14) | (1 << CommandParser.T__15) | (1 << CommandParser.T__16) | (1 << CommandParser.T__17) | (1 << CommandParser.T__19))) !== 0)) {
					{
					this.state = 77;
					this.output();
					}
				}

				}
				break;
			case CommandParser.T__16:
				_localctx = new OutputSaveContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 80;
				this.match(CommandParser.T__16);
				this.state = 81;
				this.match(CommandParser.STRING);
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__12) | (1 << CommandParser.T__14) | (1 << CommandParser.T__15) | (1 << CommandParser.T__16) | (1 << CommandParser.T__17) | (1 << CommandParser.T__19))) !== 0)) {
					{
					this.state = 82;
					this.output();
					}
				}

				}
				break;
			case CommandParser.T__17:
				_localctx = new OutputPrintContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 85;
				this.match(CommandParser.T__17);
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CommandParser.T__18) {
					{
					this.state = 86;
					this.match(CommandParser.T__18);
					this.state = 87;
					this.match(CommandParser.QUOTESTRING);
					}
				}

				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__12) | (1 << CommandParser.T__14) | (1 << CommandParser.T__15) | (1 << CommandParser.T__16) | (1 << CommandParser.T__17) | (1 << CommandParser.T__19))) !== 0)) {
					{
					this.state = 90;
					this.output();
					}
				}

				}
				break;
			case CommandParser.T__19:
				_localctx = new OutputPrintTitleContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 93;
				this.match(CommandParser.T__19);
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CommandParser.T__18) {
					{
					this.state = 94;
					this.match(CommandParser.T__18);
					this.state = 95;
					this.match(CommandParser.QUOTESTRING);
					}
				}

				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommandParser.T__12) | (1 << CommandParser.T__14) | (1 << CommandParser.T__15) | (1 << CommandParser.T__16) | (1 << CommandParser.T__17) | (1 << CommandParser.T__19))) !== 0)) {
					{
					this.state = 98;
					this.output();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x18j\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x05\x02\x11\n\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03\x19\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04#\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05,\n\x05\x03\x05\x03\x05\x05\x05" +
		"0\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x056\n\x05\x03\x05\x03\x05" +
		"\x05\x05:\n\x05\x05\x05<\n\x05\x03\x06\x03\x06\x03\x06\x05\x06A\n\x06" +
		"\x03\x06\x05\x06D\n\x06\x03\x06\x03\x06\x03\x06\x05\x06I\n\x06\x03\x06" +
		"\x05\x06L\n\x06\x03\x06\x03\x06\x03\x06\x05\x06Q\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06V\n\x06\x03\x06\x03\x06\x03\x06\x05\x06[\n\x06\x03\x06" +
		"\x05\x06^\n\x06\x03\x06\x03\x06\x03\x06\x05\x06c\n\x06\x03\x06\x05\x06" +
		"f\n\x06\x05\x06h\n\x06\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\x02\x02\x02\x80\x02\x10\x03\x02\x02\x02\x04\x18\x03\x02\x02" +
		"\x02\x06\"\x03\x02\x02\x02\b;\x03\x02\x02\x02\ng\x03\x02\x02\x02\f\x11" +
		"\x05\x04\x03\x02\r\x0E\x05\b\x05\x02\x0E\x0F\x05\n\x06\x02\x0F\x11\x03" +
		"\x02\x02\x02\x10\f\x03\x02\x02\x02\x10\r\x03\x02\x02\x02\x11\x03\x03\x02" +
		"\x02\x02\x12\x13\x07\x03\x02\x02\x13\x19\x07\x18\x02\x02\x14\x15\x07\x04" +
		"\x02\x02\x15\x19\x07\x18\x02\x02\x16\x17\x07\x05\x02\x02\x17\x19\x07\x17" +
		"\x02\x02\x18\x12\x03\x02\x02\x02\x18\x14\x03\x02\x02\x02\x18\x16\x03\x02" +
		"\x02\x02\x19\x05\x03\x02\x02\x02\x1A\x1B\x07\x06\x02\x02\x1B#\x07\x17" +
		"\x02\x02\x1C\x1D\x07\x07\x02\x02\x1D#\x07\x17\x02\x02\x1E\x1F\x07\b\x02" +
		"\x02\x1F#\x07\x17\x02\x02 !\x07\t\x02\x02!#\x07\x17\x02\x02\"\x1A\x03" +
		"\x02\x02\x02\"\x1C\x03\x02\x02\x02\"\x1E\x03\x02\x02\x02\" \x03\x02\x02" +
		"\x02#\x07\x03\x02\x02\x02$<\x07\n\x02\x02%&\x07\v\x02\x02&<\x07\x18\x02" +
		"\x02\'(\x07\f\x02\x02(+\x07\x17\x02\x02)*\x07\r\x02\x02*,\x07\x18\x02" +
		"\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,/\x03\x02\x02\x02-.\x07\x0E\x02" +
		"\x02.0\x07\x17\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x020<\x03\x02\x02" +
		"\x0212\x07\f\x02\x0225\x07\x18\x02\x0234\x07\r\x02\x0246\x07\x18\x02\x02" +
		"53\x03\x02\x02\x0256\x03\x02\x02\x0269\x03\x02\x02\x0278\x07\x0E\x02\x02" +
		"8:\x07\x17\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:<\x03\x02\x02\x02" +
		";$\x03\x02\x02\x02;%\x03\x02\x02\x02;\'\x03\x02\x02\x02;1\x03\x02\x02" +
		"\x02<\t\x03\x02\x02\x02=@\x07\x0F\x02\x02>?\x07\x10\x02\x02?A\x07\x18" +
		"\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02BD\x05\n" +
		"\x06\x02CB\x03\x02\x02\x02CD\x03\x02\x02\x02Dh\x03\x02\x02\x02EH\x07\x11" +
		"\x02\x02FG\x07\x10\x02\x02GI\x07\x18\x02\x02HF\x03\x02\x02\x02HI\x03\x02" +
		"\x02\x02IK\x03\x02\x02\x02JL\x05\n\x06\x02KJ\x03\x02\x02\x02KL\x03\x02" +
		"\x02\x02Lh\x03\x02\x02\x02MN\x07\x12\x02\x02NP\x07\x18\x02\x02OQ\x05\n" +
		"\x06\x02PO\x03\x02\x02\x02PQ\x03\x02\x02\x02Qh\x03\x02\x02\x02RS\x07\x13" +
		"\x02\x02SU\x07\x18\x02\x02TV\x05\n\x06\x02UT\x03\x02\x02\x02UV\x03\x02" +
		"\x02\x02Vh\x03\x02\x02\x02WZ\x07\x14\x02\x02XY\x07\x15\x02\x02Y[\x07\x17" +
		"\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[]\x03\x02\x02\x02\\^\x05" +
		"\n\x06\x02]\\\x03\x02\x02\x02]^\x03\x02\x02\x02^h\x03\x02\x02\x02_b\x07" +
		"\x16\x02\x02`a\x07\x15\x02\x02ac\x07\x17\x02\x02b`\x03\x02\x02\x02bc\x03" +
		"\x02\x02\x02ce\x03\x02\x02\x02df\x05\n\x06\x02ed\x03\x02\x02\x02ef\x03" +
		"\x02\x02\x02fh\x03\x02\x02\x02g=\x03\x02\x02\x02gE\x03\x02\x02\x02gM\x03" +
		"\x02\x02\x02gR\x03\x02\x02\x02gW\x03\x02\x02\x02g_\x03\x02\x02\x02h\v" +
		"\x03\x02\x02\x02\x15\x10\x18\"+/59;@CHKPUZ]beg";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CommandParser.__ATN) {
			CommandParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CommandParser._serializedATN));
		}

		return CommandParser.__ATN;
	}

}

export class CommandContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandParser.RULE_command; }
	public copyFrom(ctx: CommandContext): void {
		super.copyFrom(ctx);
	}
}
export class CommandServerContext extends CommandContext {
	public server(): ServerContext {
		return this.getRuleContext(0, ServerContext);
	}
	constructor(ctx: CommandContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterCommandServer) {
			listener.enterCommandServer(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitCommandServer) {
			listener.exitCommandServer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitCommandServer) {
			return visitor.visitCommandServer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommandMomentContext extends CommandContext {
	public moment(): MomentContext {
		return this.getRuleContext(0, MomentContext);
	}
	public output(): OutputContext {
		return this.getRuleContext(0, OutputContext);
	}
	constructor(ctx: CommandContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterCommandMoment) {
			listener.enterCommandMoment(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitCommandMoment) {
			listener.exitCommandMoment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitCommandMoment) {
			return visitor.visitCommandMoment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandParser.RULE_server; }
	public copyFrom(ctx: ServerContext): void {
		super.copyFrom(ctx);
	}
}
export class ServerLocaleContext extends ServerContext {
	public STRING(): TerminalNode { return this.getToken(CommandParser.STRING, 0); }
	constructor(ctx: ServerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterServerLocale) {
			listener.enterServerLocale(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitServerLocale) {
			listener.exitServerLocale(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitServerLocale) {
			return visitor.visitServerLocale(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ServerTimezoneContext extends ServerContext {
	public STRING(): TerminalNode { return this.getToken(CommandParser.STRING, 0); }
	constructor(ctx: ServerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterServerTimezone) {
			listener.enterServerTimezone(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitServerTimezone) {
			listener.exitServerTimezone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitServerTimezone) {
			return visitor.visitServerTimezone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ServerFormatContext extends ServerContext {
	public QUOTESTRING(): TerminalNode { return this.getToken(CommandParser.QUOTESTRING, 0); }
	constructor(ctx: ServerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterServerFormat) {
			listener.enterServerFormat(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitServerFormat) {
			listener.exitServerFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitServerFormat) {
			return visitor.visitServerFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandParser.RULE_message; }
	public copyFrom(ctx: MessageContext): void {
		super.copyFrom(ctx);
	}
}
export class MessagePrintContext extends MessageContext {
	public QUOTESTRING(): TerminalNode { return this.getToken(CommandParser.QUOTESTRING, 0); }
	constructor(ctx: MessageContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterMessagePrint) {
			listener.enterMessagePrint(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitMessagePrint) {
			listener.exitMessagePrint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitMessagePrint) {
			return visitor.visitMessagePrint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MessageTitleContext extends MessageContext {
	public QUOTESTRING(): TerminalNode { return this.getToken(CommandParser.QUOTESTRING, 0); }
	constructor(ctx: MessageContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterMessageTitle) {
			listener.enterMessageTitle(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitMessageTitle) {
			listener.exitMessageTitle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitMessageTitle) {
			return visitor.visitMessageTitle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MessageCountdownContext extends MessageContext {
	public QUOTESTRING(): TerminalNode { return this.getToken(CommandParser.QUOTESTRING, 0); }
	constructor(ctx: MessageContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterMessageCountdown) {
			listener.enterMessageCountdown(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitMessageCountdown) {
			listener.exitMessageCountdown(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitMessageCountdown) {
			return visitor.visitMessageCountdown(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MessageCountdownTitleContext extends MessageContext {
	public QUOTESTRING(): TerminalNode { return this.getToken(CommandParser.QUOTESTRING, 0); }
	constructor(ctx: MessageContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterMessageCountdownTitle) {
			listener.enterMessageCountdownTitle(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitMessageCountdownTitle) {
			listener.exitMessageCountdownTitle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitMessageCountdownTitle) {
			return visitor.visitMessageCountdownTitle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MomentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandParser.RULE_moment; }
	public copyFrom(ctx: MomentContext): void {
		super.copyFrom(ctx);
	}
}
export class MomentNowContext extends MomentContext {
	constructor(ctx: MomentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterMomentNow) {
			listener.enterMomentNow(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitMomentNow) {
			listener.exitMomentNow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitMomentNow) {
			return visitor.visitMomentNow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MomentLoadContext extends MomentContext {
	public STRING(): TerminalNode { return this.getToken(CommandParser.STRING, 0); }
	constructor(ctx: MomentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterMomentLoad) {
			listener.enterMomentLoad(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitMomentLoad) {
			listener.exitMomentLoad(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitMomentLoad) {
			return visitor.visitMomentLoad(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MomentInputContext extends MomentContext {
	public QUOTESTRING(): TerminalNode[];
	public QUOTESTRING(i: number): TerminalNode;
	public QUOTESTRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommandParser.QUOTESTRING);
		} else {
			return this.getToken(CommandParser.QUOTESTRING, i);
		}
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CommandParser.STRING, 0); }
	constructor(ctx: MomentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterMomentInput) {
			listener.enterMomentInput(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitMomentInput) {
			listener.exitMomentInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitMomentInput) {
			return visitor.visitMomentInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MomentInputWoQContext extends MomentContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommandParser.STRING);
		} else {
			return this.getToken(CommandParser.STRING, i);
		}
	}
	public QUOTESTRING(): TerminalNode | undefined { return this.tryGetToken(CommandParser.QUOTESTRING, 0); }
	constructor(ctx: MomentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterMomentInputWoQ) {
			listener.enterMomentInputWoQ(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitMomentInputWoQ) {
			listener.exitMomentInputWoQ(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitMomentInputWoQ) {
			return visitor.visitMomentInputWoQ(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommandParser.RULE_output; }
	public copyFrom(ctx: OutputContext): void {
		super.copyFrom(ctx);
	}
}
export class OutputCountdownTitleContext extends OutputContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CommandParser.STRING, 0); }
	public output(): OutputContext | undefined {
		return this.tryGetRuleContext(0, OutputContext);
	}
	constructor(ctx: OutputContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterOutputCountdownTitle) {
			listener.enterOutputCountdownTitle(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitOutputCountdownTitle) {
			listener.exitOutputCountdownTitle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitOutputCountdownTitle) {
			return visitor.visitOutputCountdownTitle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OutputCountdownContext extends OutputContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CommandParser.STRING, 0); }
	public output(): OutputContext | undefined {
		return this.tryGetRuleContext(0, OutputContext);
	}
	constructor(ctx: OutputContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterOutputCountdown) {
			listener.enterOutputCountdown(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitOutputCountdown) {
			listener.exitOutputCountdown(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitOutputCountdown) {
			return visitor.visitOutputCountdown(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OutputToContext extends OutputContext {
	public STRING(): TerminalNode { return this.getToken(CommandParser.STRING, 0); }
	public output(): OutputContext | undefined {
		return this.tryGetRuleContext(0, OutputContext);
	}
	constructor(ctx: OutputContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterOutputTo) {
			listener.enterOutputTo(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitOutputTo) {
			listener.exitOutputTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitOutputTo) {
			return visitor.visitOutputTo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OutputSaveContext extends OutputContext {
	public STRING(): TerminalNode { return this.getToken(CommandParser.STRING, 0); }
	public output(): OutputContext | undefined {
		return this.tryGetRuleContext(0, OutputContext);
	}
	constructor(ctx: OutputContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterOutputSave) {
			listener.enterOutputSave(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitOutputSave) {
			listener.exitOutputSave(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitOutputSave) {
			return visitor.visitOutputSave(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OutputPrintContext extends OutputContext {
	public QUOTESTRING(): TerminalNode | undefined { return this.tryGetToken(CommandParser.QUOTESTRING, 0); }
	public output(): OutputContext | undefined {
		return this.tryGetRuleContext(0, OutputContext);
	}
	constructor(ctx: OutputContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterOutputPrint) {
			listener.enterOutputPrint(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitOutputPrint) {
			listener.exitOutputPrint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitOutputPrint) {
			return visitor.visitOutputPrint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OutputPrintTitleContext extends OutputContext {
	public QUOTESTRING(): TerminalNode | undefined { return this.tryGetToken(CommandParser.QUOTESTRING, 0); }
	public output(): OutputContext | undefined {
		return this.tryGetRuleContext(0, OutputContext);
	}
	constructor(ctx: OutputContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CommandListener): void {
		if (listener.enterOutputPrintTitle) {
			listener.enterOutputPrintTitle(this);
		}
	}
	// @Override
	public exitRule(listener: CommandListener): void {
		if (listener.exitOutputPrintTitle) {
			listener.exitOutputPrintTitle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CommandVisitor<Result>): Result {
		if (visitor.visitOutputPrintTitle) {
			return visitor.visitOutputPrintTitle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


