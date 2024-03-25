# 声明式渲染及响应式数据实现原理

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：

```html
<div id="counter">
  Counter: {{ counter }}
</div>
```

```javascript
const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}
Vue.createApp(Counter).mount('#counter')
```

声明式编程：不需要编写具体是如何实现的，直接调用声明就可以实现功能。SQL就是比较经典的声明式语言：

```sql
SELECT * from user WHERE username = xiaoming
```

```sql
for(var i=0;i<user.length;i++)
{
    if(user[i].username == "xiaoming")
    {
     print("find");
     break;
    }
}
```

注意：数据是通过 {{  }} 模板语法来完成的，模板语法支持编写JS表达式

响应式数据实现的原理：利用JS的Proxy对象。Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，其实就是直接监控值的修改，当值发生改变的时候，可以监控到。

```html
<div id="app"></div>
<script>
    let data = new Proxy(
        {
            message: "hello",
        },
        {
            get(target) {
                console.log("get")
                return target.message
            },
            set(target, key, value) {
                console.log("set")
                app.innerHTML = value;
            },
        }
    )
    app.innerHTML = data.message;
    setTimeout(() => {
        data.message = "hi"
    }, 2000)
</script>
```

