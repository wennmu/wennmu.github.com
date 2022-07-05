---
title: 复制粘贴上传图片截图粘贴上传图片Ctrl+V上传图片
date: 2022-06-30
tags: 
    - Javascript
    - Vue
categories: 
- Vue
cover:
---

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>复制粘贴上传图片截图粘贴上传图片Ctrl+V上传图片</title>
    <!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
</head>
<body>
    <div id="app">
        <h3>上传框1</h3>
        <el-input @paste.native="pasteImg($event,0)"></el-input>
        <img v-for="(src, i) in tableData[0].imgs1" :src="src" :key="src" alt="">
        <h3>上传框2</h3>
        <el-input @paste.native="pasteImg($event,1)"></el-input>
        <img v-for="(src, i) in tableData[1].imgs1" :src="src" :key="src" alt="">
      </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            tableData:[{
                "imgs1":[]
            },
            {
                "imgs1":[]
            }],
        },
        methods:{
            pasteImg: function(e, num){
                let self = this
                console.log("paste", num)
                let txt = event.clipboardData.getData('Text')
                if (typeof(txt) == "string" && txt !== '') {
                    // 内容是文本
                    return
                }

                let file = null
                const items = (event.clipboardData || window.clipboardData).items
                if (items.length) {
                    for (let i = 0; i < items.length;i++) {
                        if (items[i].type.indexOf('image') !== -1) {
                            file = items[i].getAsFile()
                            // 这里执行文件上传
                            console.log(file)
                            // 显示
                            let reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = function(e) {
                                // 压缩
                                let image = new Image()
                                image.src= e.target.result
                                let dataUrl = self.compress(image, image.width, image.height, 0.7)
                                self.tableData[num].imgs1.push(dataUrl)
                            }
                        }

                    }
                }
            },
            compress: function(img, width, height, ratio){
                let canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;

                let ctx = canvas.getContext("2d")
                ctx.drawImage(img, 0, 0, width, height);

                let imgUrl = canvas.toDataURL("image/jpeg",ratio)
                return imgUrl
            }
        }
        })
</script>
</html>
```

**将代码复制到一个html文件中，双击运行即可**
