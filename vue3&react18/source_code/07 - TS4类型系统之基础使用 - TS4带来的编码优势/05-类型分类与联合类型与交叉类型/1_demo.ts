
// let a: string = 'hello'
// let b: bigint = 1n;


// let c: object = [];
// c = function(){};


// 联合类型：类型之间进行或的操作

// let a: string|number|boolean = 'hello';
// a = 123;

// 交叉类型：类型之间进行与的操作

type A = {
  username: string
}
type B = {
  age: number
}

//let a: A|B = { username: 'xiaoming' }
let a: A&B = { username: 'xiaoming', age: 20 }

