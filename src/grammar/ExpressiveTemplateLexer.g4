lexer grammar ExpressiveTemplateLexer;

EXPR_OPEN: '{{' -> mode(JINJA_EXPR_ISLAND);
TEXT: ~('{'|'}')+;

mode JINJA_EXPR_ISLAND;
EXPR_CLOSE: '}}' -> mode(DEFAULT_MODE);


ID: [a-zA-Z_] [a-zA-Z0-9_]*;
WS: [ \n] -> skip;
