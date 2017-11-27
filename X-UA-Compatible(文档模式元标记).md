X-UA-Compatible —— 文档模式元标记
----------

多年来，过时的Microsoft Internet Explorer浏览器版本是网站设计师和开发人员的头痛的问题。创建CSS文件以专门兼容较旧的IE版本是许多老Web开发人员记忆犹新的。幸运的是，较新版本的IE以及微软最新的浏览器 —— Edge更符合Web标准，而且因为这些新版本的Microsoft浏览器是以“永远绿色”的方式自动更新到最新版本，所以它是我们不太可能以过去的方式与这个平台的过时版本进行斗争。

对于大多数网页设计师来说，微软的浏览器进步意味着我们不再需要处理旧IE版本所提出的挑战。然而，我们中的一些人并不幸运。如果您正在管理的网站仍然包含来自较旧IE版本的大量访问者，或者如果您正在使用内部资源（如Intranet），因为某些原因使用这些旧版本的IE版本的公司，那么您将需要继续测试这些浏览器，即使这些浏览器已经过时。您可以通过使用X-UA兼容模式来实现此目的。

# X-UA-Compatible

> X-UA-Compatible是一种文档模式元标记，允许网页作者选择该页面应该呈现的Internet Explorer版本。Internet Explorer 8使用它来指定是否应将页面呈现为IE 7（兼容性视图）或IE 8（标准视图）。

**请注意，使用Internet Explorer 11，文档模式已被弃用 - 它们不再使用。IE11更新了对导致旧版网站问题的Web标准的支持。**

为此，您可以指定要在标记内容中使用的用户代理和版本：
```
    "IE=EmulateIE7"
```
您对该内容的选项有：
```
    "IE=5"
    "IE=EmulateIE7"
    "IE=7"
    "IE=EmulateIE8"
    "IE=8"
    "IE=EmulateIE9"
    "IE=9"
    "IE=edge"
```
模拟版本告诉浏览器使用DOCTYPE来确定如何呈现内容。


没有DOCTYPE的页面将以兼容模式呈现。

如果您告诉它使用浏览器版本而不模拟（即，"IE=7"）浏览器将以标准模式呈现页面，无论是否有DOCTYPE声明。

"IE=edge"告诉Internet Explorer使用该版本的IE可用的最高模式。Internet Explorer 8可以支持IE8模式，IE9可以支持IE9模式等。

X-UA-Compatible元标签类型：

X-UA-Compatible的元标记是一个http-equiv元标记。

X-UA-Compatible元标签格式：

模拟 IE 7
```
<meta http-equiv =“X-UA-Compatible”content =“IE = EmulateIE7”>
```
显示为 IE 8，带或不带DOCTYPE
```
<meta http-equiv =“X-UA-Compatible”content =“IE = 8”>
```
Quirks Mode (IE 5) [兼容模式]
```
<meta http-equiv =“X-UA-Compatible”content =“IE = 5”>
```
X-UA-Compatible元标签推荐用途：

在网页上使用X-UA兼容元标记，您怀疑Internet Explorer 8将尝试以不正确的视图呈现页面。例如当您有一个带有XML声明的XHTML文档时。文档顶部的XML声明将把页面引入兼容性视图，但是DOCTYPE声明应该强制它在标准视图中呈现。

Internet Explorer 8 及以上版本
```
<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7" />
```

强制浏览器以特定版本的标准渲染页面， 不支持IE7及以下版本

以分号分隔，可对不同的版本产生兼容方案：
<meta http-equiv="X-UA-Compatible" content="IE=7; IE=9" />
IE7和IE8以IE7的标准渲染，IE9则还是IE9的标准渲染

```
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" />
```

```
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```
[ChromeFrame](https://baike.baidu.com/item/Google%20Chrome%20Frame/554580)


```
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
```
2014年1月份Google停止更新Chrome Frame和技术支持，主要原因是其项目组认为当前的浏览器基本上都可以支持最新的Web技术，Frame项目已经失去存在的意义。但保留该代码既无害，又不会影响页面的加载速度。对那些不支持之前就安装过[ChromeFrame](https://baike.baidu.com/item/Google%20Chrome%20Frame/554580)，现在仍然使用的，依然起作用

# 服务器端配置方案

## 1.0 Nginx
```
add_header "X-UA-Compatible" "IE=Edge,chrome=1";
```

## 2.0 Apache
```
<IfModulemod_setenvif.c>
<IfModulemod_headers.c>
BrowserMatch MSIE ie
    Header set X-UA-Compatible "IE=Edge" env=ie
BrowserMatchchromeframegcf
    Header append X-UA-Compatible "chrome=1" env=gcf
</IfModule>
</IfModule>
```

## 3.0 IIS

**IIS --> 网站 --> 目标站点 --> HTTP相应标头 --> 添加**

### 参考文献
[X-UA-Compatible Meta Tag Description and Uses](https://www.thoughtco.com/xua-compatible-meta-tag-3469059)

[给网站添加X-UA-Compatible标签](http://lightcss.com/add-x-ua-compatible-meta-to-your-website/)

[IE内嵌google chrome frame解决浏览器兼容问题](http://www.cnblogs.com/xwdreamer/archive/2013/12/17/3477776.html)

[兼容利器之X-UA-Compatible](http://www.cnblogs.com/xcsn/p/5144690.html)

[[FE] IE兼容性模式X-UA-Compatible](http://www.jianshu.com/p/11adc0ef158e)

[“X-UA-Compatible” content=“IE=9; IE=8; IE=7; IE=EDGE”](https://stackoverflow.com/questions/14611264/x-ua-compatible-content-ie-9-ie-8-ie-7-ie-edge)

