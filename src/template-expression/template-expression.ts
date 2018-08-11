import {AntlrRange, AntlrRuleWrapper} from 'antlr4-helper';

export class TemplateExpression {
    private varName: string;
    private originalText: string;
    private variableRendered = false;

    constructor(private rule: AntlrRuleWrapper, private onRender: (variable: string) => string) {
        this.varName = rule.getToken('ID').getText();
        this.originalText = rule.getText();
    }

    renderVariable() {
        if (!this.variableRendered) {

            const text = this.onRender(this.getVariableName());
            this.setCurrentText(text);
            this.variableRendered = true;
        }
    }

    getVariableName() {
        return this.varName;
    }

    getOriginalExpressionText() {
        return this.originalText;
    }

    getCurrentText() {
        return this.rule.getText();
    }

    setCurrentText(text: string) {
        this.rule.setText(text);
    }

    getCurrentRange(): AntlrRange {
        return this.rule.getRange();
    }
}
