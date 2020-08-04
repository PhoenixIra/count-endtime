import * as logger from 'winston';

export namespace UtilEndtime {


    //function to transform our format style to moment format style
    export function transformToFormat(text: string):string {
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
