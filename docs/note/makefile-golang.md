---
title: golang在windows环境交叉编译的makefile代码示例
author: wenmu
date: 2022-03-030
tags: 
    - Makefile
    - Golang
categories: 
- Golang
cover:
---

```shell
name = xxx
version = v1.0.0


build-linux:
    set CGO_ENABLED=0
    set GOOS=linux
    set GOARCH=amd64
    go build -o release/$(name)_$(version)-linux-amd64 main.go
    
build-mac:
    set CGO_ENABLED=0
    set GOOS=darwin
    set GOARCH=amd64
    go build -o release/$(name)_$(version)-darwin-amd64 main.go

build-win:
    set CGO_ENABLED=0
    set GOOS=windows
    set GOARCH=amd64
    go build -o release/$(name)_$(version)-winx64.exe main.go

build: build-linux build-mac build-win

run:
    go run main.go
```