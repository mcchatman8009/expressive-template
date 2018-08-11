const {renderTemplateExpressionsWithContext} = require('../dist');

const results = renderTemplateExpressionsWithContext('\n{{ first }}\n, {{ name }}', {
    first: 'Hey',
    name: 'Jason'
});

console.log(results.text); // '\nHey\n, Jason'

console.log(results.expressions[0].getCurrentRange()); //[ { column: 0, line: 1 }, { column: 0, line: 2 } ]
