// function foo(n1: number, n2: number){
// }
// foo(1, 100);
// foo(5, 26);

//type A<T, U> = T|U;  //多泛型
// type A<T = string> = T //泛型默认值
// let a: A = 'hello'
// let b: A<number> = 123
// let c: A<boolean> = true

// type MyArray<T> = T[];
// let d: MyArray<number> = [1, 2, 3]
// let e: number[] = [1, 2, 3]

//函数

// function foo<T>(n: T){

// }
// foo<string>('hello');
// foo(123);

// 函数与接口结合

// interface A<T> {
//   (n?: T): void
//   default?: T
// }

// let foo: A<string> = (n) => {}
// let foo2: A<number> = (n) => {}

// foo('hello')
// foo.default = 'hi'

// foo2(123)
// foo2.default = 123

// class Foo<T> {
//   username!: T;
// }
// let f = new Foo<string>();
// f.username = 'hello';

// class Foo<T> {
//   username!: T
// }
// class Baz extends Foo<string> {}
// let f = new Baz()
// f.username = 'hello'

// 泛型约束

// type A = {
//   length: number
// }

// function foo<T extends A>(n: T) {}
// foo(123)
// foo('hello')
