---
title: hexo 国外国内分流
date: 2017-7-14
tags: 经验
abbrlink: 67d4f91
---
hexo 国外国内分流 碰到几次坑但是在空空不倦的撸力下
还是把这个难关给过了bash下我输入的命令报错，因为是
第一次嘛，想不到hexo的配置文件还是好难搞的一点点也
不能错。[官方解决办法地址][1]
[1]http://hexo.io/docs/deployment.html
我也把这个deploy配置文件贴出来

```
deploy:
- type: git
  repo:
- type: heroku
  repo:
```

### 详解
选项	描述
repo	GitHub / Bitbucket / Coding / GitLab存储库URL