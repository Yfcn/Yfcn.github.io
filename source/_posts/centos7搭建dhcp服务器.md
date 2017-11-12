---
title: centos7搭建dhcp服务器
date: 2017-5-11
tags: 经验
abbrlink: '62e11409'
---
 1、配置DHCP服务
 首先当然是配置网卡IP地址了，可以编辑网卡配置文件/etc/sysconfig/network-script/ifcfg-eth0，如下：

---
TYPE="Ethernet" //网络
BOOTPROTO="static"  //是否开启dhcp
IPADDR="192.168.10.254"  //ip地址
NETMASK="255.255.255.0"  //掩码
DNS1="202.98.190.60"     //dns1
DNS2="110.110.110.9"    //dns2
GATEWAY="192.168.10.1"  //网关
NAME="eth0"
DEVICE="eth0"
ONBOOT="yes"  //是否开机自起
---
## DHCP的配置文件：
 位置 /etc/dhcp/dhcpd.conf
   DHCP文件的配置语法：
   <参数名称>  <设定内容> ；
   option <参数名称> <设定内容>；
   
   
### DHCP配置内容：
subnet 192.168.10.0 netmask 255.255.255.0 {
range 192.168.10.101 192.168.10.200;
ddns-update-style none;
ignore client-updates;
default-lease-time 86400;
max-lease-time 518400;
option routers 192.168.10.1;
option domain-name-servers 202.98.190.60,110.110.110.9;
}
host xp{   //对于该主机分配一个固定的IP地址给他
hardware ethernet 00:0c:29:5a:f9:c6;
fixed-address 192.168.10.199;
}

当配置完成后，保存退出，这时需要重启一下dhcp服务
   systemctl restart dhcpd.service

 如果配置文件中有语法错误，在重启dhcp服务时，就会有如下提示
 [root@MT ~]# systemctl restart dhcpd.service 
Job for dhcpd.service failed because the control process exited
with error code. See "systemctl status dhcpd.service" and "journalctl -xe" for details.
 这时我们根据提示命令去查询错误所在
 
 命令journalctl -xe
[root@MT ~]# journalctl -xe
........................................
10月 20 16:04:19 MT dhcpd[23672]: Internet Systems Consortium DHCP Server 4.2.5
10月 20 16:04:19 MT dhcpd[23672]: Copyright 2004-2013 Internet Systems Consortium.
10月 20 16:04:19 MT dhcpd[23672]: All rights reserved.
10月 20 16:04:19 MT dhcpd[23672]: For info, please visit https://www.isc.org/software/dhcp/
10月 20 16:04:19 MT dhcpd[23672]: /etc/dhcp/dhcpd.conf line 14: semicolon expected.
10月 20 16:04:19 MT dhcpd[23672]: option domain-name-servers 202.98.190.60 110.
10月 20 16:04:19 MT dhcpd[23672]:                                           ^
10月 20 16:04:19 MT dhcpd[23672]: Configuration file errors encountered -- exiting
........................................


###########
从上述可知，110前面有误法错误，那这是什么错误呢，
当然是两个DNS地址之间少一个逗号了“，”，我们将其修改后，
再次执行重启服务命令，就不会提示错误了。
 
 
 
 
 
如果配置文件都没有错误，重启服务命令将什么也不会提示，然
后可以用命令查看服务端口是否开启；


[root@MT ~]# netstat -tulnp | grep 67
udp        0      0 0.0.0.0:67              0.0.0.0:*             24338/dhcpd





在此DHCP基础配置就完成了，可以去用一台机器进行测试了；
