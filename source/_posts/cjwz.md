---
title: netlify hexo网站搭建 多电脑更新hexo
tags: netlify，hexo
copyright: true
abbrlink: c073d51
date: 2017-08-09 12:06:49
---
## netlify介绍
首先我们来简述一下什么是netlify，Netlify是一个统一的平台，可自动执行代码，创建高性能，易于维护的站点和Web应用程序。这是官网上的介绍。当然你可以百度一下这个是什么玩意。总的来说这是个静态网站托管平台。
## 支持的功能有
> 1 Netlify CDN
  2  一键式SSL
  3  持续部署
  4  逐渐迁移
  5 Infinite Scale
  6  Prerendering
  7  Atomic Deploys
  8  Instant Cache Invalidation
  9  Instant Rollbacks
  10 CLI
  11 Programmable API
  12 Instant Passwords
  
  
 **其中ssl可能是我们必须使用的一个功能了**
 注意： 默认你已经安装好了``git程序``和``NodeJs环境``
#### 我的环境如下
> 1 win7x64位
  2 Git-2.13.2-64-bit
  3 node-v8.1.3-x64
  4 npp_7.4.2_Installer（选安）


### 安装hexo（可跳过过）
**第一步**
安装hexo命令
> 1 $ npm install -g hexo-cli

**第二步**
安装hexo注意使用下面的命令会在你的``E盘``创建一个
``hexo目录``在使用这个命令前确保在E盘没有hexo这个
目录
> 2 $ hexo init /e/hexo

**第三步** 
用cd命令切换到e盘的hexo目录下注意空格
> 3 $ cd /e/hexo

**四步**
安装插件及所有必要的配置文件
> 4 npm install

**第五步**
就是启动网站了确保4000端口没有被占用
> 5 hexo s

就这样我们的网站顺利的搭建起来了可以
可以通过提示的地址访问我们的博客了
注意我们所有的过程都是在``git bash``下操作的


# **准备部署**
其实新版本的hexo已经为我们git上传准备好
策略了不信你可以看在hexo根目录下的``.gitignore``
文件注意文件是隐藏的，打开看是不是已经有了``/public``和``/node_modules``
其中/public是hexo g命令生成的静态网页的目录不用
上传到github
/node_modules目录是插件目录不用上传
在github上准备仓库名字随便为避免错误，请勿使用README，许可证或gitignore文件初始化新的存储库。您可以在将项目推送到GitHub之后添加这些文件。
**第一步**
切换到hexo目录下
> 1 $ cd /e/hexo

**第二步**
将本地目录初始化为Git仓库
> 2 $ git init

**第三步**
提交修改
> 2 $ git add .

**第四步**
提交您在本地存储库中上上传的文件
> 3 $ git commit -m '提交说明可任意修改'

**第五步**
配置要上传的仓库地址url
> 4 $ git remote add origin 仓库链接URL
> 可以用``git remote -v``命令查看链接

**第六步**
将本地存储库中的更改推送到GitHub
> 5 $ git push origin master


**注意事项**
我没有说怎样配置ssh密匙可以百度一下这是必须的一步

现在你的hexo博客程序源代码已经在github上了
登录netlify官网然后在右上角选择github的帐号登录
然后就开始点击下面的加号创建创建网站了吧。
![tux1](https://cloud.githubusercontent.com/assets/6520639/9803638/717820a6-57d9-11e5-838f-d2a732eb0a41.png)

#### 2017826 16:22更新
这次是关于创建网站的教程
 
 **第一步**
 登录官网
 > 在浏览器上输入官网的地址https://www.netlify.com/登录
 
 **第二步**
 登录帐号
 ![1](http://snzxsl-1253275533.coscd.myqcloud.com/nextilfy/1122.png)
 
 **第三步**
 > 选择一个帐号登录可以是github的帐号也可以是gitlab的帐号
   理论上如果选择一个你保存hexo源文件的是哪个仓库就用哪个
   帐号有四种选择，至于哪一种就看你的选择了
  ![121](http://snzxsl-1253275533.coscd.myqcloud.com/nextilfy/21213.png) 
   
 **第四步**
 登录帐号过后添加网站点击下图的按钮
 添加网站
 
 ![ew](http://snzxsl-1253275533.coscd.myqcloud.com/nextilfy/422583.png)
 
 **第五步**
 选择你hexo源文件的仓库的地址可以看到有github，gitlan，还有 Bitbucket
 ![ew22](http://snzxsl-1253275533.coscd.myqcloud.com/nextilfy/23..png)

 
 **第六步**
 选择你放hexo源文件的仓库
![dsd](http://snzxsl-1253275533.coscd.myqcloud.com/nextilfy/53636.png)

**第七步**
照着我的填就行了要填的地方我已经打了箭头
然后点击``Deploy site``,后就看机器人自动
搭建你的hexo网站了，需要点时间
 ![dsffs](http://snzxsl-1253275533.coscd.myqcloud.com/nextilfy/4563583.png)
 
 
 Ps: 如果没有成功可以给我留言或则发邮件都可以，还有绑定自定义域名没写就到这里吧
 
 
 
 
 
   
   
 
 
 
 
 
 








