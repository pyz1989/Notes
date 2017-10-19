Div层调整z-index属性无效原因分析及解决方法
------------
在做的过程中，发现了一个很简单却又很多人应该碰到的问题，设置z-index属性无效。在CSS中，只能通过代码改变层级，这个属性就是z-index，要让z-index起作用有个小小**前提**，就是**元素的position属性要是relative，absolute或是fixed**。

### 第一种情况（z-index无论设置多高都不起作用情况）：
这种情况发生的条件有三个：
1. 父标签 position属性为relative；
2. 问题标签无position属性（不包括static）；
3. 问题标签含有浮动(float)属性。

eg: z-index层级不起作用，浮动会让z-index失效，代码如下:

```
<div style="position: relative; z-index: 9999"> 
	<img style="float: left" src="http://www.yuanchuang.net/uploads/allimg/131101/1a5494i0-0.jpg"> 
</div>
```
解决办法有三个（任一即可）：
- 1、position:relative 改为 position:absolute；
- 2、浮动元素添加position属性（如relative，absolute等）；
- 3、去除浮动。
### 第二种情况
IE6下，层级的表现有时候不是看子标签的z-index多高，而要看整个DOM tree（节点树）的第一个relative属性的父标签的层级。

eg: 
IE7 与 IE6有着同样的bug，原因很简单，虽然图片所在div当前的老爸层级很高(1000)，但是由于老爸的老爸不顶用，可怜了9999如此强势的孩子没有出头之日啊！，代码如下:

```
<div style="position: relative"> 
	<div style="position: relative; z-index: 1000"> 
		<div style="position: absolute; z-index: 9999"> 
			<img src="http://www.yuanchuang.net/uploads/allimg/131101/1a3194v7-1.jpg"> 
		</div> 
	</div> 
</div>
```
解决办法： 

在第一个relative属性加上一个更高的层级（z-index: 1），代码如下:

```
<div style="position: relative; z-index: 1"> 
	<div style="position: relative; z-index: 1000"> 
		<div style="position: absolute; z-index: 9999"> 
			<img src="http://www.yuanchuang.net/uploads/allimg/131101/1a3194v7-1.jpg"> 
		</div> 
	</div> 
</div>
```
