---
title: 切片会修改数组的值
description: 通过修改数组切片的值，来改变数组元素的值
author: wenmu
date: 2021-05-27 
tags: 
- Golang
categories: 
- Golang避坑
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
search: true
sidebar: auto
sticky: 3
# keys:
#  - 'c8837b23ff8aaa8a2dde915473ce0991'
---

# 切片会修改数组的值

> 通过修改数组切片的值，来改变数组元素的值

```go
package main

import "fmt"

func main() {
    x := [3]int{1, 2, 3}
    y := x[0:1]

    var _ = func(arr []int) int {
        arr[0] = 7
        fmt.Println(arr)
        return 7
    }(y)

    fmt.Println(x)
}

```

执行结果：

```go
[7]
[7 2 3]
```
