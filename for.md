for
---------
# for循环的结构

```
for (开始前; 循环进行的条件; 循环一次结束后做什么) {
    // 主体代码 
}
```

# 1. 缓存变量
```
let array = [0, 1, 2, 3, 4, 5];
for (let i = 0, len = arr.length; i < len; i++) {
    // Code
} 
```
# 2. 倒序法
```
let array = [0, 1, 2, 3, 4, 5];
let i = array.length;
for (; i > 0; i--) {
    // Code
}
```
# 3. 注意跳出

- ![break、continue和return的区别](https://github.com/pyz1989/Solution/blob/master/break%E3%80%81continue%E5%92%8Creturn%E7%9A%84%E5%8C%BA%E5%88%AB.md)

# 4. 其他
