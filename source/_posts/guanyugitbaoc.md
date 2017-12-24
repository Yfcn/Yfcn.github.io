---
title: 一个电脑两个github帐号报错快速解决办法
tags: git
copyright: true
abbrlink: 1b5efe41
date: 2017-08-28 16:19:00
---

关于原因，是我今天遇到的麻烦，我需要把已经不好的github环境换一个帐号，结果git push时候遇到了报错``The requested URL returned error: 403``
  
  #### 解决办法
没办法只能百度谷歌呗，前面已经折腾的差不多了，百度到一条git命令``rundll32.exe keymgr.dll,KRShowKeyMgr``
  
  ## 过程
  > 1 已经把git公死匙重新部署了把新公匙部署到新的github帐号下
    2 已经把目录下的``.git``目录删除掉重新git init了
    3 在执行``git push -u origin master``命令时候还是报错403
    4 然后我在bash下执行``rundll32.exe keymgr.dll,KRShowKeyMgr``命令会弹出一个窗口，我把里面的帐号信息全部都删除了。
    5 重新执行``git push`` 命令会弹出窗口叫你输入帐号密码我就知道有戏。其实在帐号界面可以添加的但是我没成功应该是格式问题
    6 执行``git push -u origin master``完美成功
    
    
    
    Ps:儿啊，今年你老爸还没追到你老妈，今年的七夕节，就这样吧。




