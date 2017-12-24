---
title: 博客建造历程二 标签
date: 2017-7-12
tags: 博客建造历程
abbrlink: 48f71961
---
#next主题的标签
   其实标签是我遇到好坑的一件事按照知乎上的热心好友的教程转了一个圈子
 附上[链接地址][1]
[1]: https://www.zhihu.com/question/29017171
我遇到的现象根本不是写的文章的问题。当然也有可能是有人遇到过这个原因
我是点击主页上的标签，网页就变成   Cannot GET /tags/ 这个鬼样子整个网页
就显示在左上角就这个路径。
##解决方案
一步一步来



1打开你的bash       cd到你的hexo网站根目录下



2、在命令行中输入
$ hexo new page tags


3、这时会在网站根目录sources/tags目录里面有个index.md的文件，打开这个文件编辑

三个短横线
title: tags
date: 2017-7-7 19:54:32
type: "tags"
三个短横线
把type: 改成tags:
然后保存注意如果可以不用window的笔记本来编辑最好不要用

4、在主题配置文件中，在menu项下，要把tags页打开如下
    menu:
    home: /
    categories: /categories
    #about: /about
    archives: /archives
    tags: /tags    #确保标签页已打开
    #schedule: /schedule     
    #commonweal:/404.html
注意一个冒号后面的一个空格
当然这个情况是进入文章里面点击标签有效果而在主页上点击主页上的标签没效果的解决方案ok


