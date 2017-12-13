从一道面试题谈setTimeout与setInterval
---------------














- setTimeout 默认最小是 4ms
这个最小的时间间隔是多少呢？这和浏览器及操作系统有关。
在John Resig的新书《Javascript忍者的秘密》一书中提到 
>  Browsers all have a 10ms minimum delay on OSX and a(approximately) 15ms delay on Windows.（在苹果机上的最小时间间隔是10毫秒，在Windows系统上的最小时间间隔大约是15毫秒） ，另外，MDC中关于setTimeout的介绍中也提到，Firefox中定义的最小时间间隔（DOM_MIN_TIMEOUT_VALUE）是10毫秒，HTML5定义的最小时间间隔是4毫秒。既然规范都是这样写的，那看来使用setTimeout是没办法再把这个最小时间间隔缩短了。 
这样，通过设置为 1, 我们可以让程序在浏览器支持的最小时间间隔之后执行了。 

