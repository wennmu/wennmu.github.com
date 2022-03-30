---
title: date命令
author: wenmu
date: 2021-06-08
sidebar: auto
tags:
- linux
- 代码片段 
  
categories:
- Linux代码片段
---

## 修改服务器时间

```shell
#查看服务器日期时间
date

#修改服务器时间
date --set 08:02:00
```

运行结果：
```shell
[root@admin ~]# date
Tue Jun  8 10:17:30 CST 2021
[root@admin ~]# date --set 08:02:00
Tue Jun  8 08:02:00 CST 2021
[root@admin ~]# date
Tue Jun  8 08:02:01 CST 2021
```