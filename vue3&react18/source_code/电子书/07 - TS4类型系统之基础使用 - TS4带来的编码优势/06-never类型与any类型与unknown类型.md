# never类型与any类型与unknown类型

在本小节中将学习一些TS中提供的新的类型，比如：never类型，any类型，unknown类型。

## never类型

never类型表示永不存在的值的类型，当一个值不存在的时候就会被自动类型推断成never类型。

```typescript
// let a: never ->  不能将类型“number”分配给类型“never”
let a: number & string = 123
```

在这段代码中a变量要求类型既是数字又是字符串，而值是一个123无法满足类型的需求，所以a会被自动推断成never类型。所以never类型并不常用，只是在出现问题的时候会被自动转成never。

有时候也可以利用never类型的特点，实现一些小技巧应用，例如可以实现判断参数是否都已被使用，代码如下：

```typescript
function foo(n: 1 | 2 | 3) {
  switch (n) {
    case 1:
      break
    case 2:
      break
    case 3:
      break
    default:
        let m: never = n;  // 检测n是否可以走到这里，看所有值是否全部被使用到
      break
  }
}
```

## any类型和unknown类型

any类型表示任意类型，而unknown类型表示为未知类型，是any类型对应的安全类型。

既然any表示任意类型，那么定义的变量可以随意修改其类型，这样带来的问题就是TS不再进行类型强制，整个使用方式根JS没有任何区别。

```typescript
let a: any = 'hello';
a = 123;
a = true;
a.map(()=>{})    // success
```

所以说any类型是TS中的后门，不到万不得已的时候尽量要少用，如果真的有这种需求的话，可以采用any对应的安全类型unknown来进行定义。

```typescript
let a: unknown = 'hello';
a = 123;
// any不进行检测了，unknown使用的时候，TS默认会进行检测
a.map(()=>{})    // error
```

unknown类型让程序使用的时候更加严谨，我们必须主动告诉TS，这里是一个什么类型，防止我们产生误操作。那么怎样让unknown类型不产生错误呢？就需要配合类型断言去使用，下一个小节我们一起来学习吧。
