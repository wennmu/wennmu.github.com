---
title: strings包
author: wenmu
date: 2021-06-08
sidebar: auto
tags:
- golang
- 代码片段

categories:
- Golang代码片段
---

## 判断字符串中是否包含指定字符

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
    // 判断字符串中是否包含指定特殊字符
    // 正确的param是“bk12i2js97f2k31ssu126dj48”格式的字符串
    param := "%20dSelect%20dSleep(20)\n"
    if strings.ContainsAny(param , "%*;-()`'\"=\n\r\\") {
        fmt.Println("param 可能会导致SQL注入")
    }
  
    fmt.Println(strings.ContainsAny(param , "%*;-()`'\"=\n\r\\"))
}
```

运行结果：
```go
param 可能会导致SQL注入
true
```