
//type A = 1;
//let a: A = 1;


//type A = 'linear'|'swing';
//let a: A = 'ease'

// interface A {
//   username: string;
//   age: number;
// }

//keyof A -> 'username'|'age'

//let a: keyof A = 'username';

//let a = 'hello';
//type A = typeof a;   // string 

let obj: {
  username: 'xiaoming',
  age: 20
}

let a: keyof typeof obj = 'username'

