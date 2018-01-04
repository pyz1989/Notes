npm 查看指令
-------------
| 命令 | 含义 |
|:----:|:----:|
| npm -h | 查看npm命令的帮助信息 |




```
npm -h                                 // 查看npm命令的帮助信息
npm -v
npm --version                          // 查看npm版本信息
npm info <pkg> version                 // 查看某个模块最新发布版本信息，如:npm info react version
npm search <keyword>                   // 查找与keyword匹配的模块信息
npm view <pkg> version                 // 查看一个包的最新发布版本
npm install <pkg>                      // 安装指定模块
npm install <pkg>@version              // 安装指定版本的模块
npm install <pkg> --save               // 多数情况下会安装最新版本的包,安装包的同时自动更新package.json的dependencies
npm install <pkg> --save-dev           // 多数情况下会安装最新版本的包,安装包的同时自动更新package.json的devDependencies
npm install <pkg> --save-optional      // 多数情况下会安装最新版本的包,安装包的同时自动更新package.json的optionalDependencies
npm install <pkg> --save-exact         
// Saved dependencies will be configured with an exact version rather than using npm's default semver range operator.
```


