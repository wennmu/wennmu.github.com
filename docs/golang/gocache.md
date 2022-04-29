---
title: go-cache使用测试
author: wenmu
date: 2021-06-24
sidebar: auto
tags:
- golang
- 代码片段

categories:
- Golang代码片段
---

## 使用go-cache存储全局缓存数据


gocache_test.go代码：

```go
package test

import (
    "github.com/gin-gonic/gin"
    "log"
    "net/http"
    "testing"
    "time"
)

//测试go-cache的使用
func TestGoCache(t *testing.T) {
    r := gin.Default()

    r.GET("/index", func(context *gin.Context) {
        goCache.Set("id", 10000, -1*time.Minute)
        value, err := goCache.Get("id")
        if !err {
            log.Println(err)
            return
        }
        context.JSON(http.StatusOK, value)
    })
    r.GET("/admin", func(context *gin.Context) {
        value, err := goCache.Get("id")
        if !err {
            log.Println(err)
            return
        }
        context.JSON(http.StatusOK, value)
    })

    err := r.Run()
    if err != nil {
        log.Println(err)
        return
    }
}

```

cache.go代码：

```go

package test

import (
    "github.com/patrickmn/go-cache"
)

var goCache *cache.Cache

func init() {
    goCache = cache.New(-1, -1)
}
```
