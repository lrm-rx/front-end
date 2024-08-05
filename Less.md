# CSS预处理器 -- Less

### 1. 注释

编译之后只有多行注释, 没有单行注释

### 2. 变量

1. 定义变量的格式

   > **@变量名称: 值**

2. 使用变量的格式

   > **@变量名称**

3. 赋值

   > **@变量名称2: @变量名称1**

4. 全局变量和局部变量

   > 和javascript一样,  注意点: 变量是延迟加载的, 写到后面也能在前面使用

### 3. 变量插值

格式: **@{变量名称}**

### 4. 运算

> 支持 **+ - * /**

### 5. 混合

> 将需要**重复使用**的代码封装到一个class类中, 在需要使用的地方直接调用封装好的类即可.

```less
/*
.center {}
*/
.center() {}
.father {
    width: 200px;
    height: 200px;
    .center;
}
```

**混合的注意点:**

> 如果混合名称的后面没有(), 那么在预处理的时候, 会保留混合的代码
>
> 如果混合名称的后面添加(), 那么在预处理的时候, 不会保留混合的代码

### 6. 带参数混合

```less
/*
.whc() {
    width: @w;
    height: @h;
    background: @c;
}
*/
// 默认值
.whc(@w: 100px, @h: 100px; @c: pink) {
    width: @w;
    height: @h;
    background: @c;
}
.box1 {
    // .whc(200px, 200px, red);
    // 给指定形参传递数据
    .whc(@c: red);
}
.box2 {
    .whc(200px, 200px, green);
}
```



### 7. 混合的可变参数

```less
.animate(@name, @time, @mode, @delay) {
    // transition: @name @time @mode @delay;
    transition: @arguments;
}
// or
.animate(...) {
    // transition: @name @time @mode @delay;
    transition: @arguments;
}
// or
.animate(@name, ...) {
    // transition: @name @time @mode @delay;
    transition: @arguments;
}
// or
.animate(@name, @time, ...) {
    // transition: @name @time @mode @delay;
    transition: @arguments;
}
```

### 8. 混合中的匹配模式

> @_: 表示通用的匹配模式, 用于抽取公共属性, 最优先执行

```less
.xxx(Down, @width, @color) {}
.xxx(up, @width, @color) {}
```

### 9. 导入其他less文件

> @import "xxx.less",  .less可省略

### 11. 内置函数

> 由于less的底层是用javaScript实现的, 所以javascript中常用的一些函数在less中都支持

- 混杂方法

- 数学

  ceil(2.1); // => 3  向上取整

  floor(2.1); // => 2 向下取整

  percentage(.3) ;  // => 30%  转百分比

  round(1.67, 1) ;  // => 1.7  四舍五入保留一位小数

  sqrt(25cm);  // => 5cm  取平方根

  abs(-5cm);  // => 5cm   取绝对值

  pi();  // => 3.1415

  max(3px, 42px, 1px, 16px);  // => 42px

  min((3px, 42px, 1px, 16px);  // => 1px

- 字符串

- 判断类型

- 颜色操作

- 颜色混合

- 看官网



















