grammar Command;

command
      : server         #CommandServer
      | moment output  #CommandMoment
      ;
      
server
      : '.locale ' STRING      #ServerLocale
      | '.timezone ' STRING    #ServerTimezone
      | '.format ' QUOTESTRING #ServerFormat
      ; 
      
moment
      : '.now'                                                       #MomentNow
      | '.load ' STRING                                              #MomentLoad
      | '.input ' QUOTESTRING (' in ' STRING)? (' as ' QUOTESTRING)? #MomentInput
      | '.input ' STRING (' in ' STRING)? (' as ' QUOTESTRING)?      #MomentInputWoQ
      ;
      
output
      : ' countdown in Title' ('as' STRING)? output? #OutputCountdownTitle
      | ' countdown' ('as' STRING)? output?          #OutputCountdown
      | ' to ' STRING output?                        #OutputTo
      | ' save ' STRING output?                      #OutputSave
      | ' print' (' 'QUOTESTRING)? output?           #OutputPrint
      | ' print in Title' (' 'QUOTESTRING)? output?  #OutputPrintTitle
      ;
      
QUOTESTRING: '"'~('"')*'"';
STRING: [A-Za-z0-9/:.-]+;

