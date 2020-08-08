// Generated from Command.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { OutputToContext } from "./CommandParser";
import { OutputSaveContext } from "./CommandParser";
import { OutputPrintContext } from "./CommandParser";
import { OutputPrintTitleContext } from "./CommandParser";
import { ServerLocaleContext } from "./CommandParser";
import { ServerTimezoneContext } from "./CommandParser";
import { ServerFormatContext } from "./CommandParser";
import { ServerDeleteMomentContext } from "./CommandParser";
import { MessagePrintContext } from "./CommandParser";
import { MessageTitleContext } from "./CommandParser";
import { CommandServerContext } from "./CommandParser";
import { CommandMomentContext } from "./CommandParser";
import { CommandMessageContext } from "./CommandParser";
import { CommandHelpContext } from "./CommandParser";
import { MomentNowContext } from "./CommandParser";
import { MomentLoadContext } from "./CommandParser";
import { MomentInputContext } from "./CommandParser";
import { MomentInputWoQContext } from "./CommandParser";
import { CommandContext } from "./CommandParser";
import { HelpContext } from "./CommandParser";
import { ServerContext } from "./CommandParser";
import { MessageContext } from "./CommandParser";
import { MomentContext } from "./CommandParser";
import { OutputContext } from "./CommandParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CommandParser`.
 */
export interface CommandListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `OutputTo`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 */
	enterOutputTo?: (ctx: OutputToContext) => void;
	/**
	 * Exit a parse tree produced by the `OutputTo`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 */
	exitOutputTo?: (ctx: OutputToContext) => void;

	/**
	 * Enter a parse tree produced by the `OutputSave`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 */
	enterOutputSave?: (ctx: OutputSaveContext) => void;
	/**
	 * Exit a parse tree produced by the `OutputSave`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 */
	exitOutputSave?: (ctx: OutputSaveContext) => void;

	/**
	 * Enter a parse tree produced by the `OutputPrint`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 */
	enterOutputPrint?: (ctx: OutputPrintContext) => void;
	/**
	 * Exit a parse tree produced by the `OutputPrint`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 */
	exitOutputPrint?: (ctx: OutputPrintContext) => void;

	/**
	 * Enter a parse tree produced by the `OutputPrintTitle`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 */
	enterOutputPrintTitle?: (ctx: OutputPrintTitleContext) => void;
	/**
	 * Exit a parse tree produced by the `OutputPrintTitle`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 */
	exitOutputPrintTitle?: (ctx: OutputPrintTitleContext) => void;

	/**
	 * Enter a parse tree produced by the `ServerLocale`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 */
	enterServerLocale?: (ctx: ServerLocaleContext) => void;
	/**
	 * Exit a parse tree produced by the `ServerLocale`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 */
	exitServerLocale?: (ctx: ServerLocaleContext) => void;

	/**
	 * Enter a parse tree produced by the `ServerTimezone`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 */
	enterServerTimezone?: (ctx: ServerTimezoneContext) => void;
	/**
	 * Exit a parse tree produced by the `ServerTimezone`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 */
	exitServerTimezone?: (ctx: ServerTimezoneContext) => void;

	/**
	 * Enter a parse tree produced by the `ServerFormat`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 */
	enterServerFormat?: (ctx: ServerFormatContext) => void;
	/**
	 * Exit a parse tree produced by the `ServerFormat`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 */
	exitServerFormat?: (ctx: ServerFormatContext) => void;

	/**
	 * Enter a parse tree produced by the `ServerDeleteMoment`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 */
	enterServerDeleteMoment?: (ctx: ServerDeleteMomentContext) => void;
	/**
	 * Exit a parse tree produced by the `ServerDeleteMoment`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 */
	exitServerDeleteMoment?: (ctx: ServerDeleteMomentContext) => void;

	/**
	 * Enter a parse tree produced by the `MessagePrint`
	 * labeled alternative in `CommandParser.message`.
	 * @param ctx the parse tree
	 */
	enterMessagePrint?: (ctx: MessagePrintContext) => void;
	/**
	 * Exit a parse tree produced by the `MessagePrint`
	 * labeled alternative in `CommandParser.message`.
	 * @param ctx the parse tree
	 */
	exitMessagePrint?: (ctx: MessagePrintContext) => void;

	/**
	 * Enter a parse tree produced by the `MessageTitle`
	 * labeled alternative in `CommandParser.message`.
	 * @param ctx the parse tree
	 */
	enterMessageTitle?: (ctx: MessageTitleContext) => void;
	/**
	 * Exit a parse tree produced by the `MessageTitle`
	 * labeled alternative in `CommandParser.message`.
	 * @param ctx the parse tree
	 */
	exitMessageTitle?: (ctx: MessageTitleContext) => void;

	/**
	 * Enter a parse tree produced by the `CommandServer`
	 * labeled alternative in `CommandParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommandServer?: (ctx: CommandServerContext) => void;
	/**
	 * Exit a parse tree produced by the `CommandServer`
	 * labeled alternative in `CommandParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommandServer?: (ctx: CommandServerContext) => void;

	/**
	 * Enter a parse tree produced by the `CommandMoment`
	 * labeled alternative in `CommandParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommandMoment?: (ctx: CommandMomentContext) => void;
	/**
	 * Exit a parse tree produced by the `CommandMoment`
	 * labeled alternative in `CommandParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommandMoment?: (ctx: CommandMomentContext) => void;

	/**
	 * Enter a parse tree produced by the `CommandMessage`
	 * labeled alternative in `CommandParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommandMessage?: (ctx: CommandMessageContext) => void;
	/**
	 * Exit a parse tree produced by the `CommandMessage`
	 * labeled alternative in `CommandParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommandMessage?: (ctx: CommandMessageContext) => void;

	/**
	 * Enter a parse tree produced by the `CommandHelp`
	 * labeled alternative in `CommandParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommandHelp?: (ctx: CommandHelpContext) => void;
	/**
	 * Exit a parse tree produced by the `CommandHelp`
	 * labeled alternative in `CommandParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommandHelp?: (ctx: CommandHelpContext) => void;

	/**
	 * Enter a parse tree produced by the `MomentNow`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 */
	enterMomentNow?: (ctx: MomentNowContext) => void;
	/**
	 * Exit a parse tree produced by the `MomentNow`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 */
	exitMomentNow?: (ctx: MomentNowContext) => void;

	/**
	 * Enter a parse tree produced by the `MomentLoad`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 */
	enterMomentLoad?: (ctx: MomentLoadContext) => void;
	/**
	 * Exit a parse tree produced by the `MomentLoad`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 */
	exitMomentLoad?: (ctx: MomentLoadContext) => void;

	/**
	 * Enter a parse tree produced by the `MomentInput`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 */
	enterMomentInput?: (ctx: MomentInputContext) => void;
	/**
	 * Exit a parse tree produced by the `MomentInput`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 */
	exitMomentInput?: (ctx: MomentInputContext) => void;

	/**
	 * Enter a parse tree produced by the `MomentInputWoQ`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 */
	enterMomentInputWoQ?: (ctx: MomentInputWoQContext) => void;
	/**
	 * Exit a parse tree produced by the `MomentInputWoQ`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 */
	exitMomentInputWoQ?: (ctx: MomentInputWoQContext) => void;

	/**
	 * Enter a parse tree produced by `CommandParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `CommandParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `CommandParser.help`.
	 * @param ctx the parse tree
	 */
	enterHelp?: (ctx: HelpContext) => void;
	/**
	 * Exit a parse tree produced by `CommandParser.help`.
	 * @param ctx the parse tree
	 */
	exitHelp?: (ctx: HelpContext) => void;

	/**
	 * Enter a parse tree produced by `CommandParser.server`.
	 * @param ctx the parse tree
	 */
	enterServer?: (ctx: ServerContext) => void;
	/**
	 * Exit a parse tree produced by `CommandParser.server`.
	 * @param ctx the parse tree
	 */
	exitServer?: (ctx: ServerContext) => void;

	/**
	 * Enter a parse tree produced by `CommandParser.message`.
	 * @param ctx the parse tree
	 */
	enterMessage?: (ctx: MessageContext) => void;
	/**
	 * Exit a parse tree produced by `CommandParser.message`.
	 * @param ctx the parse tree
	 */
	exitMessage?: (ctx: MessageContext) => void;

	/**
	 * Enter a parse tree produced by `CommandParser.moment`.
	 * @param ctx the parse tree
	 */
	enterMoment?: (ctx: MomentContext) => void;
	/**
	 * Exit a parse tree produced by `CommandParser.moment`.
	 * @param ctx the parse tree
	 */
	exitMoment?: (ctx: MomentContext) => void;

	/**
	 * Enter a parse tree produced by `CommandParser.output`.
	 * @param ctx the parse tree
	 */
	enterOutput?: (ctx: OutputContext) => void;
	/**
	 * Exit a parse tree produced by `CommandParser.output`.
	 * @param ctx the parse tree
	 */
	exitOutput?: (ctx: OutputContext) => void;
}

