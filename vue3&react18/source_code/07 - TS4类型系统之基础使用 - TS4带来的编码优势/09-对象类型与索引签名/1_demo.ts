
// type A = {
//   username: string
//   age: number
// }

// let a: A = {
//   username: 'xiaoming',
//   age: 20
// }


// type A = {
//   username: string
//   //age是可选项
//   age?: number
// }

// let a: A = {
//   username: 'xiaoming'
// }


// type A = {
//   username: string
//   //age是可选项
//   age?: number,
//   //索引签名
//   [index: string]: any
// }

// let a: A = {
//   username: 'xiaoming',
//   age: 20,
//   gender: 'male',
//   job: 'it'
// }

// type A = {
//   [index: number]: any   
// }

// let a: A = [1, 2, 3, true, 'hello'];

// let arr: number[] = [];

// type Obj = {username: string}
// let obj = {} as Obj;

// obj.age = 20;  //error

let json: {username: string, age: number}[] = [];