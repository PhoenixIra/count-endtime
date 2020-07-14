// Generated from Command.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { OutputCountdownTitleContext } from "./CommandParser";
import { OutputCountdownContext } from "./CommandParser";
import { OutputToContext } from "./CommandParser";
import { OutputSaveContext } from "./CommandParser";
import { OutputPrintContext } from "./CommandParser";
import { ServerLocaleContext } from "./CommandParser";
import { CommandServerContext } from "./CommandParser";
import { CommandMomentContext } from "./CommandParser";
import { MomentNowContext } from "./CommandParser";
import { MomentLoadContext } from "./CommandParser";
import { MomentTimeContext } from "./CommandParser";
import { MomentDateContext } from "./CommandParser";
import { MomentDateTimeContext } from "./CommandParser";
import { CommandContext } from "./CommandParser";
import { ServerContext } from "./CommandParser";
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
	 * Visit a parse tree produced by the `OutputCountdownTitle`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputCountdownTitle?: (ctx: OutputCountdownTitleContext) => Result;

	/**
	 * Visit a parse tree produced by the `OutputCountdown`
	 * labeled alternative in `CommandParser.output`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputCountdown?: (ctx: OutputCountdownContext) => Result;

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
	 * Visit a parse tree produced by the `ServerLocale`
	 * labeled alternative in `CommandParser.server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServerLocale?: (ctx: ServerLocaleContext) => Result;

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
	 * Visit a parse tree produced by the `MomentTime`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMomentTime?: (ctx: MomentTimeContext) => Result;

	/**
	 * Visit a parse tree produced by the `MomentDate`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMomentDate?: (ctx: MomentDateContext) => Result;

	/**
	 * Visit a parse tree produced by the `MomentDateTime`
	 * labeled alternative in `CommandParser.moment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMomentDateTime?: (ctx: MomentDateTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `CommandParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `CommandParser.server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServer?: (ctx: ServerContext) => Result;

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

