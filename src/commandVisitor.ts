// import antlr and grammar
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { CommandVisitor } from './parser/CommandVisitor'
import * as parser from './parser/CommandParser'


export enum CommandType {moment, server, help}

export interface Command{
    type?: (CommandType | undefined);
    locale?: (string | undefined);
    now?: (boolean | undefined);
    load?: (string | undefined);
    time?: (string | undefined);
    date?: (string | undefined);
    countdownTitle?: (string | undefined);
    countdown?: (string | undefined);
    to?: (string | undefined);
    save?: (string | undefined);
    print?: (string | undefined);
}
	

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
export class StandardCommandVisitor extends AbstractParseTreeVisitor<Command> implements CommandVisitor<Command> {
    defaultResult(): Command {
        return {};
    }
    
    visitCommandServer(context: parser.CommandServerContext): Command {
        return {type: CommandType.server, ...context.server().accept(this)};
    }
    
    visitCommandMoment(context: parser.CommandMomentContext): Command {
        return {type: CommandType.moment, ...context.moment().accept(this), ...context.output().accept(this)};
    }
    
    visitServerLocale(context: parser.ServerLocaleContext): Command {
    	return {locale: context.STRING().text};
    }

    visitMomentNow(context: parser.MomentNowContext): Command {
    	return {now: true};
    }

    visitMomentLoad(context: parser.MomentLoadContext): Command {
    	return {load: context.STRING().text};
    }
    
    visitMomentTime(context: parser.MomentTimeContext): Command {
    	return {time: context.TIME().text};
    }
    
    visitMomentDate(context: parser.MomentDateContext): Command {
    	return {date: context.DATE().text};
    }
    
    visitMomentDateTime(context: parser.MomentDateTimeContext): Command {
    	return {date: context.DATE().text, time: context.TIME().text};
    }
    
    visitOutputCountdownTitle(context: parser.OutputCountdownTitleContext): Command {
        var outputs: Command = {};
    	if(context.output()) var outputs = context.output().accept(this) 
    	return {...outputs, countdownTitle: context.STRING().text}
    }
    
    visitOutputCountdown(context: parser.OutputCountdownContext): Command {
        var outputs: Command = {};
    	if(context.output()) var outputs = context.output().accept(this) 
    	return {...outputs, countdown: context.STRING().text}
    }
    
    visitOutputTo(context: parser.OutputToContext): Command {
        var outputs: Command = {};
    	if(context.output()) var outputs = context.output().accept(this) 
    	return {...outputs, to: context.STRING().text};
    }
    
    visitOutputSave(context: parser.OutputSaveContext): Command {
    	var outputs: Command = {};
    	if(context.output()) var outputs = context.output().accept(this) 
    	return {...outputs, save: context.STRING().text};
    }
    
    visitOutputPrint(context: parser.OutputPrintContext): Command {
        var outputs: Command = {};
    	if(context.output()) outputs = context.output().accept(this);
    	var format = 'LLL';
    	if(context.QUOTESTRING()) format = context.QUOTESTRING().text;
    	return {...outputs, print: format};
    }
}
