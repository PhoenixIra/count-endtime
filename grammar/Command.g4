grammar Command;

command
      : server         #CommandServer
      | moment output  #CommandMoment
      | message        #CommandMessage
      | help	       #CommandHelp
      ;
      
help
      : 'help'         
      ;
      
server
      : 'locale ' STRING      #ServerLocale
      | 'timezone ' STRING    #ServerTimezone
      | 'format ' QUOTESTRING #ServerFormat
      | 'delete ' STRING      #ServerDeleteMoment
      ; 
      
message
      : 'message ' QUOTESTRING         #MessagePrint
      | 'title ' QUOTESTRING           #MessageTitle
      ;
      
moment
      : 'now'                                                       #MomentNow
      | 'load ' STRING                                              #MomentLoad
      | 'input ' QUOTESTRING (' in ' STRING)? (' as ' QUOTESTRING)? #MomentInput
      | 'input ' STRING (' in ' STRING)? (' as ' QUOTESTRING)?      #MomentInputWoQ
      ;
      
output
      : ' to ' STRING output?                        #OutputTo
      | ' save ' STRING output?                      #OutputSave
      | ' print' (' 'QUOTESTRING)? output?           #OutputPrint
      | ' print in Title' (' 'QUOTESTRING)? output?  #OutputPrintTitle
      ;
      
QUOTESTRING: '"'~('"')*'"';
STRING: [A-Za-z0-9/:.-]+;

