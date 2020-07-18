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
    
    //command to input a time
    visitMomentTime(context: parser.MomentTimeContext): Command {
    	return {time: context.TIME().text};
    }
    
    //command to input a date
    visitMomentDate(context: parser.MomentDateContext): Command {
    	return {date: context.DATE().text};
    }
    
    //command to input a date and time (may still not be a moment because of optional ms)
    visitMomentDateTime(context: parser.MomentDateTimeContext): Command {
    	return {date: context.DATE().text, time: context.TIME().text};
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
    	var format = 'LLL';
    	if(context.QUOTESTRING()) format = transformToFormat(context.QUOTESTRING().text);
    	return {...outputs, print: format};
    }
    
    //option to print the date in the chat
    visitOutputPrintTitle(context: parser.OutputPrintContext): Command {
        var outputs: Command = {};
    	if(context.output()) outputs = context.output().accept(this);
    	var format = 'LLL';
    	if(context.QUOTESTRING()) format = transformToFormat(context.QUOTESTRING().text);
    	return {...outputs, printTitle: format};
    }
    
    //function to transform our format style to moment format style
    transformToFormat(text: String) {
        /*
         * 0: Starstate
         * 1: quotemark
         * 2: time format
         * 3: text
         * 4: end
         */
        var state: int = 0;
        var output: String[] = array();
        var index: int = 0;
        for(let c of text){
             switch(state){
                 //start
                 case 0:
                     if(c != '"'){
                     //TODO: Errorhandling
                     }
                     state = 1;
                     break;
                 //quotemark
                 case 1:
                     if(c == '['){
                         state = 2;
                     }else{
                         state = 3;
                         output[i++]='[';
                         output[i++]=c;
                     }                     
                     break;
                 case 2:
                     if(c == ']'){
                         state = 3;
                         output[i++]=']';
                     } else if(c == '"'){
                         state = 4;
                     } else {
                         state = 2;
                         output[i++]=c;
                     }
                     break;
                 case 3:
                     if(c == '['){
                         state = 2;
                         output[i++]=']';
                     } else if(c == '"'){
                         state = 4;
                         output[i++]=']';
                     } else {
                         state = 3;
                         output[i++]=c;
                     }
                     break;
                 case 4:
                 default:
                 break;                
            }
        }
        return output.join();        
    }
}
