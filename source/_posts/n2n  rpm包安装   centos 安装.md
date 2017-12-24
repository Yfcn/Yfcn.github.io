---
title: n2nrpm包安装centos 安装
date: 2017-4-26
tags: linux软件
abbrlink: 38d9a526
---
# 这是官网翻译过来是
该目录包含用于RedHat / CentOS（最新操作系统版本）的64位二进制包的稳定版本（SVN代码）。请使用rpm-stable.ntop.org进行稳定的构建。
为了使用这个存储库做（作为root）：
cd /etc/yum.repos.d/
wget http://packages.ntop.org/centos-stable/ntop.repo -O ntop.repo
CentOS 6
wget http://packages.ntop.org/centos-stable/epel-6.repo -O epel.repo
wget https://copr.fedoraproject.org/coprs/saltstack/zeromq4/repo/epel-6/saltstack-zeromq4-epel-6.repo
rpm -ivh http://packages.ntop.org/rpm6/extra/hiredis-0.10.1-3.el6.x86_64.rpm http://packages.ntop.org/rpm6/extra/hiredis-devel-0.10.1-3.el6.x86_64.rpm
CentOS 7
wget http://packages.ntop.org/centos/epel-7.repo -O epel.repo
然后做：
yum erase zeromq3 （这样做一次以确保没有安装zeromq3）
yum clean all
yum update
yum install pfring n2disk nprobe ntopng ntopng-data cento
PF_RING现在打包没有ZC驱动程序，所以你可以选择安装它们：
yum install pfring-drivers-zc-dkms
大多数软件没有许可证。但是有些组件需要许可证。他们包括：
PF_RING ZC / DNA用户空间库
nProbe（NetFlow / IPFIX探针）
n2disk（数据包到磁盘应用程序）
您可以在ntop网站上找到更多信息，或在ntop电子商店获取许可。