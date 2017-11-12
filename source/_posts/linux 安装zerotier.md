---
title: linux 安装zerotier
date: 2017-5-7
tags: 经验
abbrlink: dce2de1b
---
# 介绍一下zerotier   
一切都是云

ZeroTier可以轻松地将设备，服务器，云虚拟机，容器
和应用程序安全地连接到各地，并对其进行规模化管理。

1下载wget https://download.zerotier.com/zerotier-one-x64.rpm
2安装  yum install zerotier-one-x64.rpm
3加人网络zerotier-cli join 网络ID
4登陆zerotier 官方网站同意加人网络注意是打“钩”注意要允许以太网桥接
5ip a 查看ip地址
6ping ip地址看互通不

ZeroTier One服务将其配置和状态信息保留在其工作目录中。默认情况下在以下位置找到：
视窗： C:\ProgramData\ZeroTier\One
苹果： /Library/Application Support/ZeroTier/One
Linux的： /var/lib/zerotier-one


FreeBSD的/ OpenBSD系统： /var/db/zerotier-one


## 我搭建时候的环境


1centos7百度云开启了防火墙关闭了SELinux
2win7安装了客户端注意win7要安装net


3手机OPPO

不同的网络端，win7ping手机时ping的回复时间不稳定，win7ping 百度云centos7时ping回话时间稳定。




