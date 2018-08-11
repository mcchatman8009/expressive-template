# Expressive Template

## Overview
The intention of this project was to write a simple template engine 
that allows for template changes to be easily tracked. Making
it easy to see what text range was replaced/rendered.


## Getting Started
```bash
npm install -S expressive-template
```

### JavaScript Examples

Render a template and view the first rendered expression's text range
```javascript
const {renderTemplateExpressionsWithContext} = require('expressive-template');

const results = renderTemplateExpressionsWithContext('\n{{ first }}\n, {{ name }}', {
    first: 'Hey',
    name: 'Jason'
});

console.log(results.text); // '\nHey\n, Jason'

console.log(results.expressions[0].getCurrentRange()); // [ { column: 0, line: 1 }, { column: 0, line: 2 } ]
```

A basic template render
```javascript
const {renderTemplate} = require('expressive-template');

const results = renderTemplate('Hello, {{ name }}', {name: 'Jason'});

console.log(results); // Hello, Jason
```
