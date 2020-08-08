// Generated from Command.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CommandParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CommandVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `OutputTo`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputTo?: (ctx: OutputToContext) => Result;

	/**
	 * Visit a parse tree produced by the `OutputSave`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputSave?: (ctx: OutputSaveContext) => Result;

	/**
	 * Visit a parse tree produced by the `OutputPrint`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputPrint?: (ctx: OutputPrintContext) => Result;

	/**
	 * Visit a parse tree produced by the `OutputPrintTitle`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputPrintTitle?: (ctx: OutputPrintTitleContext) => Result;

	/**
	 * Visit a parse tree produced by the `ServerLocale`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServerLocale?: (ctx: ServerLocaleContext) => Result;

	/**
	 * Visit a parse tree produced by the `ServerTimezone`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServerTimezone?: (ctx: ServerTimezoneContext) => Result;

	/**
	 * Visit a parse tree produced by the `ServerFormat`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServerFormat?: (ctx: ServerFormatContext) => Result;

	/**
	 * Visit a parse tree produced by the `ServerDeleteMoment`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServerDeleteMoment?: (ctx: ServerDeleteMomentContext) => Result;

	/**
	 * Visit a parse tree produced by the `MessagePrint`
	 * labeled alternative in `CommandParser.message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessagePrint?: (ctx: MessagePrintContext) => Result;

	/**
	 * Visit a parse tree produced by the `MessageTitle`
	 * labeled alternative in `CommandParser.message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageTitle?: (ctx: MessageTitleContext) => Result;

	/**
	 * Visit a parse tree produced by the `CommandServer`
	 * labeled alternative in `CommandParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandServer?: (ctx: CommandServerContext) => Result;

	/**
	 * Visit a parse tree produced by the `CommandMoment`
	 * labeled alternative in `CommandParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandMoment?: (ctx: CommandMomentContext) => Result;

	/**
	 * Visit a parse tree produced by the `CommandMessage`
	 * labeled alternative in `CommandParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandMessage?: (ctx: CommandMessageContext) => Result;

	/**
	 * Visit a parse tree produced by the `CommandHelp`
	 * labeled alternative in `CommandParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandHelp?: (ctx: CommandHelpContext) => Result;

	/**
	 * Visit a parse tree produced by the `MomentNow`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMomentNow?: (ctx: MomentNowContext) => Result;

	/**
	 * Visit a parse tree produced by the `MomentLoad`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMomentLoad?: (ctx: MomentLoadContext) => Result;

	/**
	 * Visit a parse tree produced by the `MomentInput`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMomentInput?: (ctx: MomentInputContext) => Result;

	/**
	 * Visit a parse tree produced by the `MomentInputWoQ`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMomentInputWoQ?: (ctx: MomentInputWoQContext) => Result;

	/**
	 * Visit a parse tree produced by `CommandParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `CommandParser.help`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHelp?: (ctx: HelpContext) => Result;

	/**
	 * Visit a parse tree produced by `CommandParser.server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServer?: (ctx: ServerContext) => Result;

	/**
	 * Visit a parse tree produced by `CommandParser.message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessage?: (ctx: MessageContext) => Result;

	/**
	 * Visit a parse tree produced by `CommandParser.moment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMoment?: (ctx: MomentContext) => Result;

	/**
	 * Visit a parse tree produced by `CommandParser.output`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput?: (ctx: OutputContext) => Result;
}

