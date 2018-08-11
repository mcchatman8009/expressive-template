parser grammar ExpressiveTemplateParser;


options {
    tokenVocab=ExpressiveTemplateLexer;
}

template: (expression | text=TEXT)*;

expression: EXPR_OPEN ID EXPR_CLOSE;
