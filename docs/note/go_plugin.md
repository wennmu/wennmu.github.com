---
title: go1.18 plugin 动态加载
date: 2022-06-10
tags: 
    - Golang
categories: 
- Golang
cover:
---

定义libs/user/main.go

```go

package main

type User struct {
	Id   int64
	Name string
}

func (u User) Get() interface{} {
	return &User{
		Id:   1,
		Name: "zhangsan",
	}
}

var U = User{}


```

编译(需要go1.18版本)

```shell
go build -buildmode=plugin -o plugin/user.so libs/user/main.go

修改libs/user/main.go的Get函数后，再次编译一个新的库

go build -buildmode=plugin -o plugin/user_new.so libs/user/main.go
```

编写主函数main.go

```go

package main

import (
	"fmt"
	"plugin"
)

type TypeInterface interface {
	Get() interface{}
}

func main() {
	ui := load("plugin/user.so")
	fmt.Println(ui.Get())

	ui = load("plugin/user1.so")
	fmt.Println(ui.Get())

	//&{1 zhangsan}
	//&{1 zhangsan1}
}

func load(path string) TypeInterface {
	p, err := plugin.Open(path)
	if err != nil {
		panic(err)
	}
	u, err := p.Lookup("U")
	if err != nil {
		panic(err)
	}
	return u.(TypeInterface)
}


```

得到结果

```shell
&{1 zhangsan}
&{1 zhangsan_new}
```

需要注意的是

- plugin只支持linux和mac环境使用，即使编译为exe也无法在windows环境运行，报错为plugin not implemented

- plugin只暴露了库的变量和函数，其他未暴露的东西无法实现
