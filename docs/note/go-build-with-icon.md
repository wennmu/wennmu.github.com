---
title: Go编译带图标
author: wenmu
date: 2022-05-09
tags: 
    - Golang 
categories: 
- Golang
---


### 将favicon.ico文件拷贝到根目录

> 将favicon.ico文件拷贝到根目录

### 在根目录新建xxx.rc文件

> 以下代码复制到xxx.rc文件保存

```cmd
  IDI_ICON1 ICON "favicon.ico"
```

### 执行命令编译

```cmd
  windres -o xxx.syso xxx.rc
```

### 执行Go编译

> 此处编译不要指定main.go文件

```cmd
  go build -ldflags "-H windowsgui" -o xxx.exe
```
