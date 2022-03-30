---
title: 使用PlantUML绘制标准化时序图
author: wenmu
date: 2021-06-07
tags: 
    - PlantUML 
    - 时序图 
categories: 
- PlantUML
cover: http://img0.baidu.com/it/u=1776258980,2937053072&fm=26&fmt=auto&gp=0.jpg 
---


## 前言

> PlantUML允许使用简单的语法表达式快速绘制各种UML图例

## 快速上手

### 使用在线编辑

[PlantUML 在线编辑器](https://links.jianshu.com/go?to=http%3A%2F%2Fwww.plantuml.com%2Fplantuml%2Fuml)

### 说明文档

[官方中文说明文档](https://links.jianshu.com/go?to=https%3A%2F%2Fplantuml.com%2Fzh%2Fsequence-diagram)

### 时序图Demo



```ruby
@startuml
title 文件资源管理服务
header 文件资源管理服务功能模块时序图
footer 文件资源管理服务功能模块时序图 2020  

actor 用户 
entity 资源控制台 
participant 文件资源管理服务 order 3
participant 权限系统 order 4 #LightCyan
participant 文件系统 order 5 #LightBlue

autonumber
== 进程 == 
用户 -[#red]>o 资源控制台 : 访问
资源控制台 -[#red]>o 文件资源管理服务 : 资源请求（CURD）
activate 文件资源管理服务 #FFBBBB
文件资源管理服务 -[#GreenYellow]>o 资源控制台 : 资源响应 
deactivate
资源控制台 -[#GreenYellow]>o 用户 : 渲染


||45|| 
autonumber 
== 用户鉴权 ==
用户 -[#red]>o 资源控制台 : 访问
资源控制台 -> 文件资源管理服务 : check pernmission
activate 文件资源管理服务 #FFBBBB
文件资源管理服务 -> 权限系统 : check permission
activate 权限系统 #FFBBBB
权限系统 -> 文件资源管理服务 : check permission result
deactivate
文件资源管理服务 -> 资源控制台 : check permission result
deactivate
资源控制台 -[#red]>o 用户 : 渲染


||45|| 
autonumber 
== 文件资源上传 ==
用户 -[#red]>o 资源控制台 : request
资源控制台 -> 文件资源管理服务 : auth
activate 文件资源管理服务 #FFBBBB
文件资源管理服务 -> 文件系统 : auth
activate 文件系统 #FFBBBB
文件系统 -> 文件资源管理服务 : auht result
文件资源管理服务 -> 资源控制台 : auht result
资源控制台 -> 文件系统 : upload file source
文件系统 -> 资源控制台 : upload file source result
资源控制台 -> 文件系统 : get file info
文件系统 -> 资源控制台 : file info result
资源控制台 -> 文件资源管理服务 : submit file info 
文件资源管理服务 -> 资源控制台 : submit file info result
deactivate
deactivate
资源控制台 -[#red]>o 用户 : display

@enduml
```

### 预览效果

![img](/imgs/9794452-db5c8440707b77d6.jpg)

image

### 导出为图片

> 在生成的预览图片点击鼠标右键，将“图片保存为”保存到需要的位置。

## 支持的平台

- Confluence wiki
- VSCode Extension: PlantUML
- Gitlab



作者：看活一分钟

链接：https://www.jianshu.com/p/366e690e0551

来源：简书

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。