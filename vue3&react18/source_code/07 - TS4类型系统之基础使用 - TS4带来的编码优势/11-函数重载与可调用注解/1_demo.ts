

// function foo(n1: number): any
// function foo(n1: number, n2: number): any
// function foo(n1: number, n2: number, n3: number, n4: number): any
// function foo(n1: number, n2?: number, n3?: number, n4?: number){
// }
// foo(1);
// foo(1, 2);
// foo(1, 2, 3);
// foo(1, 2, 3, 4);

// function foo(n: number, m: number): any
// function foo(n: string, m: string): any
// function foo(n: number|string, m: number|string){

// }

// foo(1, 2);
// foo('a', 'b');
// foo(3, 'c');

//可调用注解

//type A = () => void;
// type A = {   // 可调用注解，可以针对函数重载进行类型注解的
//   (): void
// }
// let a: A = () => {};

type A = {
  (n: number, m: number): any
  (n: string, m: string): any
}

function foo(n: number, m: number): any
function foo(n: string, m: string): any
function foo(n: number|string, m: number|string){

}

let a: A = foo;


const colors = {
  red: 'red',
  blue: 'blue'
};

type Colors = typeof colors;