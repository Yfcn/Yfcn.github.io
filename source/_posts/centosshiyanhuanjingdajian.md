---
title: centos实验环境搭建
tags: 企业网
copyright: true
abbrlink: f7fb651d
date: 2017-09-26 13:53:00
---

> 1. 关闭防火墙 /etc/init.d/iptables stop
> 2. 关闭SElinux setenforce 0
> 3. 临时修改ip地址重启系统失效  
ifconfig eth0 192.168.1.5 netmask 255.255.255.0
4. mkdir ---创建目录
   chkconfig httpd on ----开机自启
5. mount -o loop -t iso9660 /dev/sr0 /mnt/sr0 ---挂载例子
   1. gpgcheck=1  ----启用包检查
   2. enabled=1  ----启用这个仓库
   




