---
title: centos6.5 dns服务器搭建
tags: 企业网
copyright: true
abbrlink: def6abe9
date: 2017-10-21 00:00:00
---


   在今天老师的指导下成功在linux下搭建好了dns服务器做一下笔记
   教程也为以后找一个好的方向。
   
<!--more-->

## 环境
> 1. centos6.5
> 2. 搭建的本地源
> 3. virtualBox虚拟机软件4.2.12版本
> 4. SElinux关闭
> 5. 防火墙默认关闭
> 6. ip地址规划192.168.88.10

### 第一步搭建本地源
1.创建系统上光盘挂载目录
> mkdir /mnt/sr0
 

2 挂载光盘iso
> mount  /dev/sr0/ /mnt/sr0



3 修改配置文件

> cd  /etc/yum.repos.d/    #切换目录
> mv CentOS-Base.repo CentOS-ase.repo.bak  #重命名网络repo包源使其失效
> vi CentOS-Media.repo #编辑本地源repo

![“看挂载光盘”](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171021205509.png)

ps:可以看到我们挂载的光盘已经挂载

编辑CentOS-Media.repo文件按下图编辑
!["原配置文件样式"](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171021210014.png)

修改成下图
!["修改后的配置文件"](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171021210354.png)




ps: 需要修改的地方
> ``baseurl=file:///media/CentOS/``修改成``baseurl=file:///mnt/sr0/``
> ``enabled=0``修改成``enabled=1``

#### 保存修改本地源搭建成功




### 第一步安装dns软件

1. yum安装软件``bind`` 与``bind-utils``
> yum install -y bind bind-utils

!["安装软件图"](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171021210523.png)


### 第二步修改dns配置文件
1. 配置named.conf文件
> vi /etc/named.conf # 打开配置文件


#### 原配置图要修改的地方
!["原配置图"](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171021210636.png)


#### 修改后的配置文件共3处



!["配置后"](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171021210902.png)




ps: 修改三个{   }内容为``any``







### 添加域区域
1打开配置文件named.rfc1912.zones文件
>vi /etc/named.rfc1912.zones

!["看图嘿嘿"](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171021211010.png)


ps: 2复制31行到41行这11行，把光标移动到31行
在vi的按``ESC``进入命令行模式按``11yy``复制这11行如果7行就7yy灵活应用，复制后在终端左下角有一个``11 lines yanked``的提示，




3. 光标移到配置文件最下面然后按大写的``P``粘贴
!["粘贴后的配置"](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171022091506.png)





4. 修改如下


!["会修改的地方“](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171022091729.png)




ps: 变化如下这是容易出错的地方


```zone "1.0.0.127.in-addr.arpa" IN {
        type master;
        file "named.loopback";
        allow-update { none; };
};

zone "0.in-addr.arpa" IN {
        type master;
        file "named.empty";
        allow-update { none; };
};
```

```
zone "88.168.192.in-addr.arpa" IN {
        type master;
        file "88.168.192.rev";
        allow-update { none; };
};

zone "jnds.com" IN {
        type master;
        file "jnds.com.zone";
        allow-update { none; };
};

```

ps: 注意88.168.192实际上是192.168.88的反解

### 创建与修改正向和反向解析文件

1进入模板目录
> cd /var/named/

2.复制正向解析模板文件
> cp -p named.localhost  jnds.com.zone

3. 复制反向解析模板文件
> cp -p named.loopback 88.168.192.rev

ps:注意没有都是以上面代码file行对应的名字



### 编辑zone与rev文件


1. 编辑zone文件
> vi jnds.com.zone #添加A记录


!["添加记录A与www"](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171022091918.png)

ps:注意现在要写完整的ip地址了比如说上图的``192.168.88.10``

2编辑rev文件
> vi 88.168.192.rev # 添加要解析的二级域名

!["编辑rev文件添加域名"](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171022092224.png)



ps: 注意www.jnds.com后面小点``.``







### 最后启动服务

1.service named restart  #启动服务
2. chkconfig named on  #设置开机启动



ps:启动时候遇到


!["启动dns服务器遇到错误"](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171022092455.png)

输入下面命令

```

rndc-confgen-r /dev/urandom -a

```







＃＃＃　测试DNS服务是否正常


１.　nslookup   //查询工具


!["查询dns服务器是否生效"](http://snzxsl-1253275533.coscd.myqcloud.com/%EF%BD%8A%EF%BD%8E%EF%BD%84%EF%BD%93%E3%80%80%EF%BD%84%EF%BD%8E%EF%BD%93/TIM%E5%9B%BE%E7%89%8720171022092818.png)
