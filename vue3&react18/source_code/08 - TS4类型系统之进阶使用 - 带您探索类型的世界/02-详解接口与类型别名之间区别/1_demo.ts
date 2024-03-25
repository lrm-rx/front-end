
// interface A {
//   username: string;
//   age: number;
// }

// let a: A = {
//   username: 'xiaoming',
//   age: 20
// }

// interface A {
//   [index: number]: number;
// }
// let a: A = [1, 2, 3];

// interface A {
//   (): void;
// }

// let a: A = () => {}

// interface A {
//   readonly username: string;
//   age?: number;
// }

// let a: A = {
//   username: 'xiaoming'
// }

// a.username = 'xiaobai'

//---------------------------------------跟类型别名的区别


//1. 
// type A = string;
// let a: A = 'hello';

// interface B {

// };


//2. 接口支持类型合并

// interface A {
//   username: string;
// }

// interface A {
//   age: number;
// }

// let a: A = {
//   username: 'xiaoming',
//   age: 20
// }


// type A = {
//   username: string;
// }

// type A = {
//   age: number;
// }

// let a: A = {
//   username: 'xiaoming',
//   age: 20
// }


//3. 接口具备继承能力

// interface A {
//   username: string
// }

// interface B extends A {
//   age: number
// }

// let b: B = {
//   username: 'xiaoming',
//   age: 20
// }


// 4. type 具备映射类型

// type A = {
//   [P in 'username'|'age']: string;
// }

// interface A {
//   [P in 'username'|'age']: string;
// }