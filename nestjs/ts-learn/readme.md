# ts 学习

### 基础类型总结

- TS 的基础类型
- 引用类型 object(or {})与 Array(or [])
- 可选属性加?

### Object vs {} vs object

- {}与 Object 类型相同，可以赋值包括字符串、数组等
- object 相当于{[key: string]: any}, 不能分配原始类型
- {[key: string]: any}最具体，不能分配原型类型+数组+非字符串对象

### 函数重载

> TS 函数重载区别于其他语言中的重载，TypeScript 中的重载
> 是为了针对不同参数个数和类型，推断返回值类型

### Interface 接口

- 接口可以定义任意类型&结构
- Interface 可扩展 extends&自动合并相同类型接口
- **绕开多余属性检查：类型断言、索引签名、类型兼容**

### class 类

- 类的定义（修饰符）与继承 extends
- 构造函数使用 new 时会自动执行
- **类类型接口、接口继承类**
