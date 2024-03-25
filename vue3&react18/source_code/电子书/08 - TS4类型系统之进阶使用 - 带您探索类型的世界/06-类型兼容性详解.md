# 类型兼容性详解

## 类型兼容性

类型兼容性用于确定一个类型是否能赋值给其他类型。如果是相同的类型是可以进行赋值的，如果是不同的类型就不能进行赋值操作。

```typescript
let a: number = 123;
let b: number = 456;
b = a;   // success

let a: number = 123;
let b: string = 'hello';
b = a;   // error
```

当有类型包含的情况下，又是如何处理的呢？

```typescript
let a: number = 123;
let b: string | number = 'hello';
//b = a;  // success
a = b;  // error
```

变量a是可以赋值给变量b的，但是变量b是不能赋值给变量a的，因为b的类型包含a的类型，所以a赋值给b是可以的。

在对象类型中也是一样的处理方式，代码如下：

```typescript
let a: {username: string} = { username: 'xiaoming' };
let b: {username: string; age: number} = { username: 'xiaoming', age: 20 };
a = b; // success
b = a;  // error
```

b的类型满足a的类型，所以b是可以赋值给a的，但是a的类型不能满足b的类型，所以a不能赋值给b。所以看下面的例子就明白为什么这样操作是可以的。

```typescript
function foo(n: { username: string }) {}
foo({ username: 'xiaoming' }) // success
foo({ username: 'xiaoming', age: 20 }) // error
let a = { username: 'xiaoming', age: 20 }
foo(a) // success
```

这里把值存成一个变量a，再去进行传参就是利用了类型兼容性做到的。

