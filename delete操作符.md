JavaScript delete操作符
--------------
> delete 操作符用于删除对象的某个属性。
# 语法
```
delete expression
```
expression 的计算机结果应该是某个属性的引用，例如：
```
delete object.property 
delete object['property']
```
## 参数
- object: 对象的名称，或计算结果为对象的表达式。
- property: 要删除的属性。
## 返回值
对于所有情况都是true，除非属性是一个自己的不可配置属性，在这种情况下，非严格模式返回 false。
## 异常
在严格模式下，如果是对象自身的不可配置属性，会抛出Global_objects/SyntaxError。

# 描述
与通常对 delete 的理解不同，delete 操作符与直接释放内存无关。

delete 操作符会从某个对象上移除指定属性。成功删除的时候回返回 true，否则返回 false。但是，重要的是要考虑以下情况：

- 如果你删除的属性在对象上不存在，那么delete将不会起作用，但仍会返回true
- 如果 delete 操作符删除成功，则被删除的属性将从所属的对象上彻底消失。然后，如果该对象的原型链上有一个同名属性，则该对象会从原型链上继承该同名属性。（也就是说delete操作只会在自身的属性上起作用）
- 任何使用 var 声明的属性不能从全局作用域或函数的作用域中删除。
  - 这样的话，delete操作不能删除任何在全局作用域中的函数（无论这个函数是来自于函数声明或函数表达式）
  - 除了在全局作用域中的函数不能被删除，在对象(object)中的函数是能够用delete操作删除的。
- 任何用let或const声明的属性不能够从它被声明的作用域中删除。
- 不可设置的(Non-configurable)属性不能被移除。这意味着像Math, Array, Object内置对象的属性以及使用Object.defineProperty()方法设置为不可设置的属性不能被删除。

[js中的内部属性与delete操作符](https://www.cnblogs.com/xumengxuan/p/4700778.html)
