console知多少
----------
## 我可以使用console吗
## 基本的Console命令
包括： console.log, console.info, console.warn, console.error
支持printf的占位符格式，支持的占位符有：字符（%s）、整数（%d 或 %i）、浮点数（%f）和对象（%o）
### 注意
1. IE8 与 IE9 仅开发模式支持
## 1. console.time 与 console.timeEnd
![]()
[console.time 与 console.timeEnd](https://caniuse.com/#feat=console-time)

信息分组
console.dir()可以显示一个对象所有的属性和方法
显示某个节点的内容
判断变量是否是真
追踪函数的调用轨迹 
计时功能
性能分析
```
// Google Chrome 版本 63.0.3239.108（正式版本） （64 位）
Object.keys(console)
// (25) ["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "group", "groupCollapsed", "groupEnd", "clear", "count", "assert", "markTimeline", "profile", "profileEnd", "timeline", "timelineEnd", "time", "timeEnd", "timeStamp", "context", "memory"]
```

[console of Node](https://nodejs.org/api/console.html)

