---
title: recover需要在defer函数中调用
date: 2021-06-03 17:07:49
tags: Golang
categories: Golang避坑
toc: true
---
>通过在defer函数内使用recover，以获取panic信息

```go
package main

import "fmt"

func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println(r)
        }
    }()

    // panic("exec failed.")

    func() {
        panic("exec failed.")
    }()
}

```

执行结果：
```go
exec failed.
```
