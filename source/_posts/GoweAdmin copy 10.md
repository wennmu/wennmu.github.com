---
title: GoweAdmin - A lightweight wechat cloud development console
author: wenmu
date: 2021-05-27 16:41:40
tags: 
    - admin 
    - vue 
    - 云开发
categories: GoweAdmin
toc: true
cover: http://img0.baidu.com/it/u=1776258980,2937053072&fm=26&fmt=auto&gp=0.jpg 
top : 3 
---
A lightweight wechat cloud development console. 基于Gin框架、VUE-admin-template构建，支持云开发数据库，云开发存储，以及云函数调用。

# Gowe-Admin - A lightweight wechat cloud development console

> 基于Gin框架、VUE-admin-template构建，支持云开发数据库，云开发存储，以及云函数调用。

## 框架说明

```go
    bin // 二进制文件
    pkg // 自定义包
    src // 源代码 
    web // 前端代码
```

## 支持的模块

- 登录验证

- 文件管理
    - 云存储
    - 本地存储

- 系统配置
    - 用户管理 
    - 管理员管理
    - 角色管理 （暂不支持）
    - 权限管理 （暂不支持）
    - 菜单管理 （暂不支持）

## 支持的功能

- 云数据库调用
- 云函数调用
- 云储存调用

## 开发调试

### 前端运行开发环境

```js
    cd web
    npm run dev
```

### 前端发布代码

```
    cd web
    npm run build:prod
```

### 服务端启动

```
    go run src/main.go

```

### 服务端发布

```go
    // windows
    go build -o bin/gowe.exe src/main.go
    // linux
    go build -o bin/gowe src/main.go
```