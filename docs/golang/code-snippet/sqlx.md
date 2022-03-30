---
title: sqlx包
author: wenmu
date: 2021-06-08
sidebar: auto
tags:
- golang
- 代码片段
- sqlx

categories:
- Golang代码片段
---

## sqlx操作postgres踩坑代码片段

::: tip
最好还是用gorm去吧，记得用gorm 2.x 版本
:::

### 直接贴代码

```go
package main

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

type T struct {
	Id int
	City string
	Date string
}

func main() {
	var db *sqlx.DB

	//db, err := sqlx.Open("postgres", "postgres://postgres:postgres@127.0.0.1/postgres?sslmode=disable")
	db, err := sqlx.Open("postgres", "user=postgres password='postgres' host=127.0.0.1 port=5432 dbname=postgres sslmode=disable")
	if err != nil {
		fmt.Println("connect error: ", err)
	}

	/********Get获取一条数据*********/
	var t T
	err = db.Get(&t, "SELECT * from t_1 where id = 1")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("GET result:", t)

	/********Select获取多条数据*********/
	var t1 []T
	err = db.Select(&t1, "SELECT * from t_1")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("Select result:", t1)

	/********Get参数绑定获取一条数据*********/
	t = T{}
	//db.Get(&t, `SELECT * from t_1 where  city = ?`, "beijing")
	err = db.Get(&t, `SELECT * from t_1 where  id = $1 And city = $2`, 2, "shanghai")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("GET(bind) result:", t)

	/********Select参数绑定获取多条数据*********/
	t2 := []T{}
	//err = db.Select(&t2, `SELECT * from t_1 where  id = ? And city = ?`, 1, "shanghai") // 错误的写法
	err = db.Select(&t2, `SELECT * from t_1 where  id = $1 And city = $2`, 2, "shanghai")
	//err = db.Select(&t2, `SELECT * from t_1 where  id = $1 And city = '$2'`, 2, "shanghai") // $2加引号是错误的写法
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("Select(bind) result:", t2)

	/********NamedQuery参数绑定获取多条数据*********/
	var t3 []T
	rows, err := db.NamedQuery(`SELECT * from t_1 where  id = :id And city = :city`, map[string]interface{}{
		"id": 1,
		"city": "beijing",
	})
	if err != nil {
		fmt.Println(err)
	}
	for rows.Next() {
		var t3t T
		err = rows.StructScan(&t3t)
		if err != nil {
			fmt.Println(err)
		}
		t3 = append(t3, t3t)
	}
	fmt.Println("NamedQuery(bind) result:", t3)

	/********count_estimate*********/
	var c int
	err = db.Get(&c, `SELECT count_estimate('Select id from t_1') as count from t_1 `)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("count_estimate result:", c)
}
```

### 运行结果：

```go
GET result: {1 beijing 2021-06-09}
Select result: [{1 beijing 2021-06-09} {2 shanghai 2021-06-09}]
GET(bind) result: {2 shanghai 2021-06-09}
Select(bind) result: [{2 shanghai 2021-06-09}]
NamedQuery(bind) result: [{1 beijing 2021-06-09}]
count_estimate result: 330
```

### 可能遇到的一些报错

- pq: SSL is not enabled on the server

  ```go
  db, err := sqlx.Open("postgres", "postgres://postgres:postgres@127.0.0.1/postgres?sslmode=disable")
  
  //改为
  
  db, err := sqlx.Open("postgres", "user=postgres password='postgres' host=127.0.0.1 port=5432 dbname=postgres sslmode=disable")
  ```



- pq: unknown authentication response: 10

  ```go
  引用包出现报错，升级版本即可或者更换包
  github.com/bmizerany/pq
  改为
  github.com/lib/pq
  ```

- scannable dest type struct with >1 columns (3) in result

  ```go
  type T struct {
  	id int
  	city string
  	date string
  }
  //类型字段的小写导致引用(&t）无法修改字段的值。改为首字母大写即可。
  ```

- pq: got 1 parameters but the statement requires 0

  ```go
  // sql加引号后，参数绑定不识别，？方式绑定，不识别字符串需要改用$1
  err = db.Get(&t, `SELECT * from t_1 where  city = '?'`, "beijing")
  ```

  