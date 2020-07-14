grammar Command;

command
      : server         #CommandServer
      | moment output  #CommandMoment
      ;
      
server
      : '.locale ' STRING #ServerLocale
      ; 
      
moment
      : '.now'                     #MomentNow
      | '.load ' STRING            #MomentLoad
      | '.time ' TIME              #MomentTime
      | '.date ' DATE              #MomentDate
      | '.datetime ' DATE ' ' TIME #MomentDateTime
      ;
      
output
      : ' countdown in Title' ('as' STRING)? output? #OutputCountdownTitle
      | ' countdown' ('as' STRING)? output?          #OutputCountdown
      | ' to ' STRING output?                        #OutputTo
      | ' save ' STRING output?                      #OutputSave
      | ' print' (' 'QUOTESTRING)? output?                             #OutputPrint
      ;
   
TIME  : [0-9][0-9]?':'[0-9][0-9]?(':'[0-9][0-9]?(':'[0-9][0-9]?[0-9]?)?)?;
DATE  : [0-9][0-9]?'.'[0-9][0-9]?('.'[0-9][0-9]([0-9][0-9])?)?;
      
QUOTESTRING: '"'.*'"';
STRING: [A-Za-z0-9]+;

