---
title: centos6 nginx 开启ssl
tags: ssl
grammar_cjkRuby: true
abbrlink: 51d387fd
date: 2017-11-09 20:31:00
---

!["ssl"](https://yangfanv.coding.me/yangfan/certbot-logo-1A.svg)

<!--more-->

 ### 环境
 > centos6.8
 > nginx
 > Let's Encrypt
 > python默认版本
 
 
 #### 前言
 
   作为市场占有率最高的web服务器nginx配置ssl加小绿锁很简单。
   
   
   
   1. 打开https://certbot.org 网站
   2. 在首页选择web服务器软件与系统
   !["ssl"](https://yangfanv.coding.me/yangfan/QQ图片20171109193703.png)
   3. 按照网页给的提示一步一步的执行即可
      1. wget https://dl.eff.org/certbot-auto
      2. chmod a+x certbot-auto
      3. sudo ./certbot-auto --nginx
   
   
   #### nginx服务器配置
    

1.  /sbin/iptables -I INPUT -p tcp –dport 443 -j ACCEPT #开启8080端口
2.  在nginx配置文件server段配置加密证书
   >ssl_certificate /etc/letsencrypt/live/你的域名/fullchain.pem; #Nginx 所需要 ssl_certificate 文件
   >ssl_certificate_key /etc/letsencrypt/live/你的域名/privkey.pem; #安全证书 KEY 文件

!["我的配置文件"](https://yangfanv.coding.me/yangfan/QQ图片20171109194627.png) 


3. 配置http跳转https 
     1. >if ($scheme = http ) {
    return 301 https://$host$request_uri;
		}     #我现在的配置
		
4. >return 301 https://$server_name$request_uri; #非 http 跳转到 https 原来的配置不知道为什么虽然跳转了但报错可能是那时候没配置server段配置加密证书 成功后给我说一下谢谢

5. 配置完成后执行


>service nginx restart



### 我遇到的错误


1. python版本错误
   1. 解决办法
   1. 升级，升级到 python3.7
   2. 安装以下东西也是提示错误缺少的软件` virtualenv`与`pip`
      1. yum install python-setuptools
      2. easy_install virtualenv
      3. easy_install pip


2. 开启端口开启443端口
 1. > /sbin/iptables -I INPUT -p tcp –dport 443 -j ACCEPT #开启443端口
   
### 自动更新ssl证书


因为这个证书的有效期只有3个月所以我们需要命令自动更新证书



1. 步骤
    1. crontab -e
    2. > 0 0 1 * * /usr/bin/certbot renew --force-renewal
           5 0 1 * * /usr/sbin/service nginx restart
	3. 不要照抄要看你的certbot文件在什么地方

   
Ps: 关于crontab的参数说明可以百度搜索Linux定时任务，自动更新证书的命令可以参考[certbot官网](https://certbot.eff.org)如有问题或错误欢迎发邮件给我。

{% blockquote 出自, 文学少女 %}
没有谁能够永远坚强下去的，每个人都会有疲累的无法站起的时候。世间的故事，就是为了这一刻而存在的哦。
{% endblockquote %}