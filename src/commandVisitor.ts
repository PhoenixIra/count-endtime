// import antlr and grammar
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { CommandVisitor } from './parser/CommandVisitor'
import * as parser from './parser/CommandParser'
var parseFormat = require('moment-parseformat');

export enum CommandType {moment, server, help}

export interface Command{
    type?: (CommandType);
    locale?: (string);
    timezone?: (string);
    format?: (string);
    now?: (boolean);
    load?: (string);
    input?: (string);
    inputFormat?: (string);
    inTz?: (string);
    countdownTitle?: (string);
    countdown?: (string);
    to?: (string);
    save?: (string);
    print?: (boolean);
    printFormat?: (string);
    printTitle?: (boolean);
    printTitleFormat?: (string);
}
    

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
export class StandardCommandVisitor extends AbstractParseTreeVisitor<Command> implements CommandVisitor<Command> {
    defaultResult(): Command {
        return {};
    }
    
    //Commands affecting the whole server
    visitCommandServer(context: parser.CommandServerContext): Command {
        return {type: CommandType.server, ...context.server().accept(this)};
    }
    
    //Commands affecting the momentjs library
    visitCommandMoment(context: parser.CommandMomentContext): Command {
        return {type: CommandType.moment, ...context.moment().accept(this), ...context.output().accept(this)};
    }
    
    //Command to change the locale of this server
    visitServerLocale(context: parser.ServerLocaleContext): Command {
        return {locale: context.STRING().text};
    }
    
    //Command to change the locale of this server
    visitServerTimezone(context: parser.ServerTimezoneContext): Command {
        return {timezone: context.STRING().text};
    }
    
    //Command to change the locale of this server
    visitServerFormat(context: parser.ServerFormatContext): Command {
        return {format: context.QUOTESTRING().text};
    }

    //Command to generate the current moment
    visitMomentNow(context: parser.MomentNowContext): Command {
        return {now: true};
    }

    //Command to load some moment
    visitMomentLoad(context: parser.MomentLoadContext): Command {
        return {load: context.STRING().text};
    }
    
    //command to input an input
    visitMomentInput(context: parser.MomentInputContext): Command {
        var command: Command = {};
        if(context.QUOTESTRING().length >= 2){
            command.inputFormat = context.QUOTESTRING(1).text;
        }else{
            command.inputFormat = parseFormat(context.QUOTESTRING(0).text);
        }
        if(context.STRING()){
            command.inTz = context.STRING().text;
        }
        command.input = context.QUOTESTRING(0).text;
        return command;        
    }
    
    //command to input an input without quotemarks
    visitMomentInputWoQ(context: parser.MomentInputWoQContext): Command {
        var command: Command = {};
        if(context.QUOTESTRING()){
            command.inputFormat = context.QUOTESTRING().text;
        }else{
            command.inputFormat = parseFormat(context.STRING(0).text);
        }
        if(context.STRING().length >= 2){
            command.inTz = context.STRING(1).text;
        }
        command.input = context.STRING(0).text;
        return command;        
    }
    
    //option to make a countdown in the title
    visitOutputCountdownTitle(context: parser.OutputCountdownTitleContext): Command {
        var outputs: Command = {};
        if(context.output()) var outputs = context.output().accept(this) 
        return {...outputs, countdownTitle: context.STRING().text}
    }
    
    //option to make a countdown in the chat
    visitOutputCountdown(context: parser.OutputCountdownContext): Command {
        var outputs: Command = {};
        if(context.output()) var outputs = context.output().accept(this) 
        return {...outputs, countdown: context.STRING().text}
    }
    
    //option to set the timezone
    visitOutputTo(context: parser.OutputToContext): Command {
        var outputs: Command = {};
        if(context.output()) var outputs = context.output().accept(this) 
        return {...outputs, to: context.STRING().text};
    }
    
    //option to save the moment in the database
    visitOutputSave(context: parser.OutputSaveContext): Command {
        var outputs: Command = {};
        if(context.output()) var outputs = context.output().accept(this) 
        return {...outputs, save: context.STRING().text};
    }
    
    //option to print the date in the chat
    visitOutputPrint(context: parser.OutputPrintContext): Command {
        var outputs: Command = {};
        if(context.output()) outputs = context.output().accept(this);
        if(context.QUOTESTRING()){
            return {...outputs, print: true, printFormat: context.QUOTESTRING().text};
        } else {
            return {...outputs, print: true};
        }
    }
    
    //option to print the date in the title
    visitOutputPrintTitle(context: parser.OutputPrintContext): Command {
        var outputs: Command = {};
        if(context.output()) outputs = context.output().accept(this);
        if(context.QUOTESTRING()){
            return {...outputs, printTitle: true, printTitleFormat: context.QUOTESTRING().text};
        } else {
            return {...outputs, printTitle: true};
        }
    }
}
