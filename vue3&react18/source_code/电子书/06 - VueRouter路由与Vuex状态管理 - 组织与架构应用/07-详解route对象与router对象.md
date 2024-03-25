# 详解route对象与router对象

在前面小节中，我们频繁的使用过route对象和router对象，这两个对象在路由中非常的重要，下面我们来详细的学习一下。

## route对象与router对象

首先route对象用来获取路由信息，而router对象用来调用路由方法的。具体区别在于，route对象是针对获取操作的，主要是操作当前路由的，而router对象是针对设置操作的，主要是操作整个路由系统对应的功能。

route对象具体功能如下：

- fullPath
- hash
- href
- matched
- meta
- name
- params
- path
- query

主要就是一些路由信息，像常见的动态路由参数，query数据，meta元信息，url路径等等。

router对象具体功能如下：

- addRoute
- afterEach
- back
- beforeEach
- beforeResolve
- currentRoute
- forward
- getRoutes
- go
- hasRoute
- push
- removeRoute

主要就是一些方法，动态改变路由表，路由守卫， 历史记录的前进后退，编程式路由等等。

