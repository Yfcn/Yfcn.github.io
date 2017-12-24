---
title: git命令总结姿势完美
tags: git
grammar_cjkRuby: true
abbrlink: f0e65c23
date: 2017-11-16 00:00:00
---

!["123"](https://yangfanv.coding.me/yangfan/0164.jpg)



因为需要github，而且英语渣，开始就在命令行下学习就习惯了，就总结一些常用命令
完美。用于不时之需



<!--more-->

### 初始化仓库
> 1 git init

### 提交修改
> 2 git add .


### 提交修改说明
> 3 git commit -m ‘提交说明可任意修改’


### 配置github仓库地址
> 4 git remote add origin 仓库链接URL
>   1. 可以用git remote -v命令查看当前仓库地址

### 把本地修改提交到远程仓库默认master主分支
> 5 git push origin master
     1. git push origin master:blog  #提交到分支blog
     2. git push -f origin master   #强制覆盖提交代码到远程仓库master主分支
     3. git push -f origin master:blog  #强制覆盖提交代码到远程仓库blog分支
     
### git配置邮箱与用户名
> 6 1.  git config --global user.name "youname"
    2.  git config --global user.email "youeamil@email.com"

### git同步远程仓库
> git fetch --all
   git reset --hard origin/master



