const {renderTemplateExpressions} = require('../dist');
const ctx = {
    firstName: 'Marlon',
    lastName: 'Chatman'
};

const res = renderTemplateExpressions('Hello, \n{{ firstName }} \n{{ lastName }}', (varName) => ctx[varName]);

console.log(res.text);
console.log(res.expressions.map((e) => e.getCurrentRange()));
console.log(res.expressions.map((e) => e.getCurrentText()));
