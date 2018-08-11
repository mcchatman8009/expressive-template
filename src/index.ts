import {AntlrParserFactory} from './parser-factory/antlr-parser-factory';
import {TemplateReader} from './template-reader/template-reader';
import {TemplateExpression} from './template-expression/template-expression';

export interface TemplateResults {
    text: string;
    expressions: TemplateExpression[];
}

export function renderTemplateExpressions(template: string, onExpressionRender: (varName: string) => string): TemplateResults {
    const parser = (new AntlrParserFactory()).createParser();

    const reader = new TemplateReader(parser);
    reader.readTemplate(template);

    const expressions = reader.getExpressions();
    const templateExprs = expressions.map((expr) => new TemplateExpression(expr, onExpressionRender));

    templateExprs.forEach((expr) => {
        expr.renderVariable();

    });

    return {
        text: parser.getText(),
        expressions: templateExprs
    };
}

export function renderTemplateExpressionsWithContext(template: string, context: any): TemplateResults {
    const onRender = (varName: string) => context[varName];
    const results = renderTemplateExpressions(template, onRender);

    return results;
}

export function renderTemplate(template: string, context: any): string {
    return renderTemplateExpressionsWithContext(template, context).text;
}
