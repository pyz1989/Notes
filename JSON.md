
# JSON
## JSON.parse
## 1.概述
> JSON.parse() 
方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。
提供可选的reviver函数用以在返回之前对所得到的对象执行变换(操作)。
## 语法
```
JSON.parse(text[, reviver])
```
### 参数
- text
要被解析成JavaScript值的字符串，查看 JSON 对象学习的JSON 语法的说明。
- reviver 可选
如果是一个函数，则规定了原始值如何被解析改造，在被返回之前。
- 返回值
Object对应给定的JSON文本。
- 异常
若被解析的 JSON 字符串是非法的，则会抛出 一个语法错误 异常。
## 示例
### 使用 JSON.parse()
```
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```
### 使用 reviver 函数
如果指定了 reviver 函数，则解析出的 JavaScript 值（解析值）会经过一次转换后才将被最终返回（返回值）。更具体点讲就是：解析值本身以及它所包含的所有属性，会按照一定的顺序（从最最里层的属性开始，一级级往外，最终到达顶层，也就是解析值本身）分别的去调用 reviver 函数，在调用过程中，当前属性所属的对象会作为 this 值，当前属性名和属性值会分别作为第一个和第二个参数传入 reviver 中。如果 reviver 返回 undefined，则当前属性会从所属对象中删除，如果返回了其他值，则返回的值会成为当前属性新的属性值。

当遍历到最顶层的值（解析值）时，传入 reviver 函数的参数会是空字符串 ""（因为此时已经没有真正的属性）和当前的解析值（有可能已经被修改过了），当前的 this 值会是 {"": 修改过的解析值}，在编写 reviver 函数时，要注意到这个特例。（这个函数的遍历顺序依照：从最内层开始，按照层级顺序，依次向外遍历）

```
JSON.parse('{"p": 5}', function (k, v) {
    if(k === '') return v;     // 如果到了最顶层，则直接返回属性值，
    return v * 2;              // 否则将属性值变为原来的 2 倍。
});                            // { p: 10 }

JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}', function (k, v) {
    console.log(k); // 输出当前的属性名，从而得知遍历顺序是从内向外的，
                    // 最后一个属性名会是个空字符串。
    return v;       // 返回原始属性值，相当于没有传递 reviver 参数。
});

// 1
// 2
// 4
// 6
// 5
// 3 
// ""
```
JSON.parse() 不允许用逗号作为结尾

// both will throw a SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
浏览器兼容性

## 浏览器兼容性
[](https://caniuse.com/#feat=json)
Desktop Mobile
Feature	Chrome	Firefox (Gecko)	Internet Explorer	Opera	Safari
Basic support	(Yes)	3.5 (1.9.1)	8.0	10.5	4.0
Gecko 备注

从 Gecko 29 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26) 开始，如果被解析的 JSON 字符串含有语法错误，则该方法抛出的错误信息中将包含错误发生时具体的行列号，这个特性对于调试大型 JSON 数据来说是很有用的。

JSON.parse('[1, 2, 3,]')
// SyntaxError: JSON.parse: unexpected character at 
// line 1 column 10 of the JSON data

# JSON.stringify
------------
> JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。

## 语法
JSON.stringify(value[, replacer[, space]])
### 参数说明：
- value: **必需**，将要序列化成 一个JSON 字符串的值。
- replacer: **可选**。 用于转换结果的函数或数组。
	如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。

	如果此函数返回 undefined，则排除成员。根对象的键是一个空字符串：""。

	如果 replacer 是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样。当 value 参数也为数组时，将忽略 replacer 数组。
- space: **可选**，文本添加缩进、空格和换行符

如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格，
如果 space 大于 10，则文本缩进 10 个空格。
space 有可以使用非数字，如：\t。
- 返回值： 返回包含 JSON 文本的字符串。

## 示例
```
JSON.stringify(value)
```
