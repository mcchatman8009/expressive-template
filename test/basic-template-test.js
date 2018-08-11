const {renderTemplate, renderTemplateExpressionsWithContext} = require('../dist');

const chai = require('chai');
chai.should();

describe('Test Basic Template Strings', () => {
    it('Test #1', () => {
        const results = renderTemplate('Hello, {{ name }}', {name: 'Jason'});

        results.should.equal('Hello, Jason');
    });

    it('Test #2', () => {
        const results = renderTemplate('{{ first }}, {{ name }}', {first: 'Hey', name: 'Jason'});

        results.should.equal('Hey, Jason');
    });

    it('Test #3', () => {
        const results = renderTemplate('\n{{ first }}\n, {{ name }}', {first: 'Hey', name: 'Jason'});
        results.should.equal('\nHey\n, Jason');
    });
});

describe('Test Basic Template Expression Ranges', () => {
    it('Test #1', () => {
        const results = renderTemplateExpressionsWithContext('Hello, {{ name }}', {name: 'Jason'});

        results.text.should.equal('Hello, Jason');
        const range = results.expressions[0].getCurrentRange();

        range[0].column.should.equal(7);
        range[0].line.should.equal(0);

        range[1].column.should.equal(12);
        range[1].line.should.equal(0);
    });

    it('Test #2', () => {
        const results = renderTemplateExpressionsWithContext('{{ first }}, {{ name }}', {first: 'Hey', name: 'Jason'});

        results.text.should.equal('Hey, Jason');

        const range = results.expressions[1].getCurrentRange();

        range[0].column.should.equal(5);
        range[0].line.should.equal(0);

        range[1].column.should.equal(10);
        range[1].line.should.equal(0);
    });

    it('Test #3', () => {
        const results = renderTemplateExpressionsWithContext('\n{{ first }}\n, {{ name }}', {
            first: 'Hey',
            name: 'Jason'
        });

        results.text.should.equal('\nHey\n, Jason');

        const range = results.expressions[1].getCurrentRange();

        range[0].column.should.equal(2);
        range[0].line.should.equal(2);

        range[1].column.should.equal(7);
        range[1].line.should.equal(2);
    });
});
