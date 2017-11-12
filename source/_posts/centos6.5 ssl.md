---
title: centos6.5 ssl
tags: ssl
grammar_cjkRuby: true
abbrlink: 79fe1679
---


今天备份

### 1python版本错误

> yum install python-setuptools  
easy_install virtualenv  
easy_install pip


### 开启443端口
>/sbin/iptables -I INPUT -p tcp --dport  443 -j ACCEPT #开启8080端口

### server配置加密证书

> ssl_certificate /etc/letsencrypt/live/域名/fullchain.pem;  #Nginx 所需要 ssl_certificate 文件
        ssl_certificate_key /etc/letsencrypt/live/域名/privkey.pem; #安全证书 KEY 文件
		
		
### server配置http跳转https
>  return	301 https://$server_name$request_uri;  #非 http 跳转到 https



Ps: 注意修改了nginx配置文件必须重启nginx
 
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}