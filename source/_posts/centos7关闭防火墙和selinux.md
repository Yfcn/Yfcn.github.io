---
title: centos7关闭防火墙和selinux
date: 2017-5-2
tags: linux资料
abbrlink: '74201e82'
---
临时关闭SELinux
setenforce 0
2
临时打开SELinux
setenforce 1
3
开机关闭SELinux
编辑/etc/selinux/config文件，将SELINUX的值设置为disabled，如下图。下次开机SELinux就不会启动了

防火墙（firewalld）
临时关闭防火墙
systemctl stop firewalld
永久防火墙开机自启动
systemctl disable firewalld
临时打开防火墙
systemctl start firewalld
防火墙开机启动
systemctl enable firewalld
查看防火墙状态
systemctl status firewalld
