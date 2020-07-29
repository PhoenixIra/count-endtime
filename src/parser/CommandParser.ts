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
	public static readonly QUOTESTRING = 17;
	public static readonly STRING = 18;
	public static readonly RULE_command = 0;
	public static readonly RULE_server = 1;
	public static readonly RULE_moment = 2;
	public static readonly RULE_output = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"command", "server", "moment", "output",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.locale '", "'.timezone '", "'.format '", "'.now'", "'.load '", 
		"'.input '", "' in '", "' as '", "' countdown in Title'", "'as'", "' countdown'", 
		"' to '", "' save '", "' print'", "' '", "' print in Title'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "QUOTESTRING", "STRING",
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
		this.enterRule(_localctx, 4, CommandParser.RULE_moment);
		let _la: number;
		try {
			this.state = 45;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
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
		this.enterRule(_localctx, 6, CommandParser.RULE_output);
		let _la: number;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14^\x04\x02" +
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


