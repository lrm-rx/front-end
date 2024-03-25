# 模块系统与命名空间

## 概念

模块化开发是目前最流行的组织代码方式，可以有效的解决代码之间的冲突与代码之间的依赖关系，模块系统一般视为“外部模块”，而命名空间一般视为“内部模块”

## 模块系统

TS中的模块化开发跟ES6中的模块化开发并没有太多区别，像ES6中的导入、导出、别名等，TS都是支持的。TS跟ES6模块化的区别在于TS可以把类型进行模块化导入导出操作。

这里定义两个TS文件，分别为`1_demo.ts`和`2_demo.ts`。代码如下：

```typescript
// 2_demo.ts
export type A = string
```

```typescript
// 1_demo.ts
import type { A } from './2_demo'
```

关键字type可加可不加，一般导出类型的时候尽量加上，这样可以区分开到底是值还是类型。

TS除了支持ES6的模块化风格写法外，也支持require风格，但是使用的比较少，下面我们来了解一下。

```typescript
// 2_demo.ts
type A = string
export = A
```

```typescript
// 1_demo.ts
import A = require('./2_demo')
let a: A = 'hello'
```

下面来了解一下什么是模块化的动态引入，正常我们`import`导入方式是必须在顶部进行添加的，不能在其他语句中引入，这样就不能在后续的某个时机去导入，所以TS提供了动态引入模块的写法。

```typescript
// 1_demo.ts
setTimeout(() => {
	import('./2_demo').then(({ a }) => {
		console.log(a)
	})
}, 2000)
```

这种动态导入只支持值的导入，不支持类型的导入，这需要注意一下。

## 命名空间

模块化是外部组织代码的一种方式，而命名空间则是内部组织代码的一种方式。防止在一个文件中产生代码之间的冲突。

TS提供了`namespace`语法来实现命名空间，代码如下：

```typescript
namespace Foo {
	export let a = 123
}
namespace Bar {
	export let a = 456
}
console.log(Foo.a)
console.log(Bar.a)
```

命名空间也是可以导出的，在另一个模块中可以导入进行使用，并且导出值和类型都是可以的。

```typescript
// 2_demo.ts
export namespace Foo {
  export let a = 123
  export type A = string
  export function foo() {}
  export class B {}
}
```

```typescript
// 1_demo.ts
import { Foo } from './2_demo'
console.log(Foo.a)
let a: Foo.A = 'hello world'
```

