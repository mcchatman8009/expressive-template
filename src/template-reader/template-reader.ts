import {AntlrParser, AntlrRuleWrapper, createFactoryBuilder} from 'antlr4-helper';
import {ExpressiveTemplateLexer} from '../parser/ExpressiveTemplateLexer';
import {ExpressionContext, ExpressiveTemplateParser} from '../parser/ExpressiveTemplateParser';
import {AntlrParserFactory} from '../parser-factory/antlr-parser-factory';

export class TemplateReader {

    constructor(private parser: AntlrParser) {
    }

    readTemplate(template: string) {
        this.parser.parse(template);
        this.parser.checkForErrors();
    }

    getExpressions(): AntlrRuleWrapper[] {
        return this.parser.findRulesByName('expression');
    }
}
