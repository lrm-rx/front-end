
//TS中要求：实参的个数跟形参的个数必须相同

// function foo(n: number, m?: string): number{
//   return 123;
// }

// foo(123, 'hello');
// foo(123);

// let foo: (n: number, m: string) => number = function(n, m){
//   return 123;
// }


// void类型：表示函数没有任何返回值的得到的类型

// let foo = function(){   // void
 
// }

// let foo = function(): void{   // void  可以不return的，也可以return undefined
//   return;
// }

let foo = function(): undefined{   // undefined 不能不写return的

}  // error