// import antlr and grammar
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { CommandVisitor } from './parser/CommandVisitor'
import * as parser from './parser/CommandParser'
import * as logger from 'winston';
var parseFormat = require('moment-parseformat');

export enum CommandType {moment, server, help}

export interface Command{
    type?: (CommandType | undefined);
    locale?: (string | undefined);
    now?: (boolean | undefined);
    load?: (string | undefined);
    input?: (string | undefined);
    inputFormat?: (string | undefined);
    inTz?: (string | undefined);
    countdownTitle?: (string | undefined);
    countdown?: (string | undefined);
    to?: (string | undefined);
    save?: (string | undefined);
    print?: (string | undefined);
    printTitle?: (string | undefined);
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
    	var format: string = 'LLL';
    	if(context.QUOTESTRING()) format = this.transformToFormat(context.QUOTESTRING().text);
    	return {...outputs, print: format};
    }
    
    //option to print the date in the title
    visitOutputPrintTitle(context: parser.OutputPrintContext): Command {
        var outputs: Command = {};
    	if(context.output()) outputs = context.output().accept(this);
    	var format: string = 'LLL';
    	if(context.QUOTESTRING()) format = this.transformToFormat(context.QUOTESTRING().text);
    	return {...outputs, printTitle: format};
    }
    
    //function to transform our format style to moment format style
    transformToFormat(text: string):string {
        /*
         * 0: Starstate
         * 1: quotemark
         * 2: time format
         * 3: text
         * 4: end
         */
        var state: number = 0;
        var output: string[] = [];
        var index: number = 0;
        for(let c of text){
             switch(state){
                 //start
                 case 0:
                     if(c != '"'){
                         logger.error("Could not transform text into momentjs format. \" was missing. Text was: '"+text+"'");
                     }
                     state = 1;
                     break;
                 //quotemark
                 case 1:
                     if(c == '['){
                         state = 2;
                     }else{
                         state = 3;
                         output[index++]='[';
                         output[index++]=c;
                     }                     
                     break;
                 case 2:
                     if(c == ']'){
                         state = 3;
                         output[index++]='[';
                     } else if(c == '"'){
                         state = 4;
                     } else {
                         state = 2;
                         output[index++]=c;
                     }
                     break;
                 case 3:
                     if(c == '['){
                         state = 2;
                         output[index++]=']';
                     } else if(c == '"'){
                         state = 4;
                         output[index++]=']';
                     } else {
                         state = 3;
                         output[index++]=c;
                     }
                     break;
                 case 4:
                 default:
                 break;                
            }
        }
        return output.join('');        
    }
}
