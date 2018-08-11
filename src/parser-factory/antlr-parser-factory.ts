import {AntlrFactory, AntlrParser, createFactoryBuilder, createParser} from 'antlr4-helper';
import {ExpressiveTemplateLexer} from '../parser/ExpressiveTemplateLexer';
import {ExpressiveTemplateParser} from '../parser/ExpressiveTemplateParser';

export class AntlrParserFactory {
    private factory: AntlrFactory;

    constructor() {
        this.factory = createFactoryBuilder()
            .lexer((stream) => new ExpressiveTemplateLexer(stream))
            .parser((tokenStream) => new ExpressiveTemplateParser(tokenStream))
            .rootRule((parser: ExpressiveTemplateParser) => parser.template())
            .build();
    }

    createParser(): AntlrParser {
        return createParser(this.factory);
    }
}
