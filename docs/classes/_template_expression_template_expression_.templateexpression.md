[expressive-template](../README.md) > ["template-expression/template-expression"](../modules/_template_expression_template_expression_.md) > [TemplateExpression](../classes/_template_expression_template_expression_.templateexpression.md)

# Class: TemplateExpression

## Hierarchy

**TemplateExpression**

## Index

### Constructors

* [constructor](_template_expression_template_expression_.templateexpression.md#constructor)

### Properties

* [onRender](_template_expression_template_expression_.templateexpression.md#onrender)
* [originalText](_template_expression_template_expression_.templateexpression.md#originaltext)
* [rule](_template_expression_template_expression_.templateexpression.md#rule)
* [varName](_template_expression_template_expression_.templateexpression.md#varname)
* [variableRendered](_template_expression_template_expression_.templateexpression.md#variablerendered)

### Methods

* [getCurrentRange](_template_expression_template_expression_.templateexpression.md#getcurrentrange)
* [getCurrentText](_template_expression_template_expression_.templateexpression.md#getcurrenttext)
* [getOriginalExpressionText](_template_expression_template_expression_.templateexpression.md#getoriginalexpressiontext)
* [getVariableName](_template_expression_template_expression_.templateexpression.md#getvariablename)
* [renderVariable](_template_expression_template_expression_.templateexpression.md#rendervariable)
* [setCurrentText](_template_expression_template_expression_.templateexpression.md#setcurrenttext)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TemplateExpression**(rule: *`AntlrRuleWrapper`*, onRender: *`function`*): [TemplateExpression](_template_expression_template_expression_.templateexpression.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRuleWrapper` |
| onRender | `function` |

**Returns:** [TemplateExpression](_template_expression_template_expression_.templateexpression.md)

___

## Properties

<a id="onrender"></a>

### `<Private>` onRender

**● onRender**: *`function`*

#### Type declaration
▸(variable: *`string`*): `string`

**Parameters:**

| Param | Type |
| ------ | ------ |
| variable | `string` |

**Returns:** `string`

___
<a id="originaltext"></a>

### `<Private>` originalText

**● originalText**: *`string`*

___
<a id="rule"></a>

### `<Private>` rule

**● rule**: *`AntlrRuleWrapper`*

___
<a id="varname"></a>

### `<Private>` varName

**● varName**: *`string`*

___
<a id="variablerendered"></a>

### `<Private>` variableRendered

**● variableRendered**: *`boolean`* = false

___

## Methods

<a id="getcurrentrange"></a>

###  getCurrentRange

▸ **getCurrentRange**(): `AntlrRange`

**Returns:** `AntlrRange`

___
<a id="getcurrenttext"></a>

###  getCurrentText

▸ **getCurrentText**(): `string`

**Returns:** `string`

___
<a id="getoriginalexpressiontext"></a>

###  getOriginalExpressionText

▸ **getOriginalExpressionText**(): `string`

**Returns:** `string`

___
<a id="getvariablename"></a>

###  getVariableName

▸ **getVariableName**(): `string`

**Returns:** `string`

___
<a id="rendervariable"></a>

###  renderVariable

▸ **renderVariable**(): `void`

**Returns:** `void`

___
<a id="setcurrenttext"></a>

###  setCurrentText

▸ **setCurrentText**(text: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `void`

___

