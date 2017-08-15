
[X-UA-Compatible Meta Tag Description and Uses](https://www.thoughtco.com/xua-compatible-meta-tag-3469059)

[给网站添加X-UA-Compatible标签](http://lightcss.com/add-x-ua-compatible-meta-to-your-website/)

[IE内嵌google chrome frame解决浏览器兼容问题](http://www.cnblogs.com/xwdreamer/archive/2013/12/17/3477776.html)


      多年来，过时的Microsoft Internet Explorer浏览器版本是网站设计师和开发人员的头痛的问题。创建CSS文件以专门解决那些较旧的IE版本的需要是许多长时间的Web开发人员可以记住的东西。幸运的是，较新版本的IE以及微软最新的浏览器 - Edge更符合Web标准，而且由于这些新版本的Microsoft浏览器是以“永远绿色”的方式自动更新到最新版本，所以它是我们不太可能以过去的方式与这个平台的过时版本进行斗争。


 

    对于大多数网页设计师来说，微软的浏览器进步意味着我们不再需要处理旧IE版本过去提出的挑战。然而，我们中的一些人并不幸运。如果您正在管理的网站仍然包含来自较旧IE版本的大量访问者，或者如果您正在使用内部资源（如Intranet），因为某些原因使用这些旧版本的IE版本的公司，那么您将需要继续测试这些浏览器，即使这些浏览器已经过时。您可以通过使用X-UA兼容模式来实现此目的。

> X-UA-Compatible是一种文档模式元标记，允许网页作者选择该页面应该呈现的Internet Explorer版本。Internet Explorer 8使用它来指定是否应将页面呈现为IE 7（兼容性视图）或IE 8（标准视图）。

** 请注意，使用Internet Explorer 11，文档模式已被弃用 - 它们不再使用。IE11更新了对导致旧版网站问题的Web标准的支持。**

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


没有DOCTYPE的页面将以怪癖模式呈现。

如果您告诉它使用浏览器版本而不模拟（即，  "IE=7"）浏览器将以标准模式呈现页面，无论是否有DOCTYPE声明。

"IE=edge"告诉Internet Explorer使用该版本的IE可用的最高模式。Internet Explorer 8可以支持IE8模式，IE9可以支持IE9模式等。

X-UA-Compatible元标签类型：

X-UA-Compatible的元标记是一个http-equiv元标记。

X-UA-Compatible元标签格式：

模拟IE 7
```
<meta http-equiv =“X-UA-Compatible”content =“IE = EmulateIE7”>
```
显示为IE 8，带或不带DOCTYPE
```
<meta http-equiv =“X-UA-Compatible”content =“IE = 8”>
```
怪癖模式（IE 5）
```
<meta http-equiv =“X-UA-Compatible”content =“IE = 5”>
```
X-UA-Compatible元标签推荐用途：

在网页上使用X-UA兼容元标记，您怀疑Internet Explorer 8将尝试以不正确的视图呈现页面。例如当您有一个带有XML声明的XHTML文档时。文档顶部的XML声明将把页面引入兼容性视图，但是DOCTYPE声明应该强制它在标准视图中呈现。

现实检查
不可否认，您正在任何需要呈现为IE 5的网站上工作，但您永远不会知道！

还有一些公司强迫员工使用非常非常旧版本的浏览器，以便继续使用以前针对这些特定浏览器开发的专有旧版软件。对于我们在网络行业的人来说，使用像这样的浏览器的想法似乎很疯狂，但是想象一家制造公司使用几十年的程序来管理他们车间的库存。是的，当然有现代化的平台来做这些，但是他们投资于其中一个平台？如果他们目前的制度没有破裂，为什么要改变呢？在许多情况下，他们不会，你会发现这家公司强迫员工使用该软件，古董浏览器肯定会运行它。不可能？也许，但肯定有可能。如果遇到这样的问题，
