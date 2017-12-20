for
---------
# 1. for循环的结构

```
for (initialize; test; increment) {
  statement
}
// 初始化表达式（initialize）：确定循环的初始值，只在循环开始时执行一次。
// 测试表达式（test）：检查循环条件，只要为真就进行后续操作。
// 递增表达式（increment）：完成后续操作，然后返回上一步，再一次检查循环条件。
```
# 2. 优化
## 1.1 缓存变量
```
let array = [0, 1, 2, 3, 4, 5];
for (let i = 0, len = arr.length; i < len; i++) {
    // Code
} 
```
# 1.2 倒序法
```
let array = [0, 1, 2, 3, 4, 5];
let i = array.length;
for (; i > 0; i--) {
    // Code
}
```
# 1.3 注意跳出
- ![break、continue和return的区别](https://github.com/pyz1989/Solution/blob/master/break%E3%80%81continue%E5%92%8Creturn%E7%9A%84%E5%8C%BA%E5%88%AB.md)
# 1.4 其他
