grammar Message;

messageInit
    : '"' message '"'
    ;
    
message
    : '[' STRING=momentName '[]' STRING=format ']'  #NameFormat
    | '[]' STRING=format ']'                        #Format
    | '[' STRING=momentName '[]'                    #Name
    | STRING                                        #Else
    ;
    
STRING: ~('['|']')*;
