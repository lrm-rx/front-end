// let a = 'hello'
// let b = a;

// type A = string;
// type B = A;

//let a = 'hello';
//type B = a;

// type A = string;
// let a = A;

class Foo {}  // 类在TS中既是变量声明空间，也是类型声明空间
let a = Foo;
type A = Foo;



