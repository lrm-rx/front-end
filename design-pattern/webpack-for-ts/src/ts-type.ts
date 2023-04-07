// 值类型
let b: boolean = true;
let n: number = 100;
let str: string = "hello";
let s: symbol = Symbol();

// 类型断言
let n1 = 200; // number

// 或
let x: number | string | boolean = false;

// any 一定要慎用 （不要 AnyScript）
let y: any = [];

// 数组
let arr: string[] = ["a", "b", "c"];
let numArr: Array<number> = [10, 20, 30];

// 元组
let arr1: Array<string | number | boolean> = [10, "hello", true];

// // 对象类型 - object 不常用，不专业
// let obj: object = { x: 10, y: 20 }
// // 函数类型 - Function 不常用，不专业
// let fn: Function = (x: number, y: string) => {}

// 函数：参数，返回值
function fn(n1: number, n2: number): void {
  // return n1 + n2
}

// 自定义类型
type infoType = string | number;
let info1: infoType = 100;
type fnType = (a: number, b: number) => void; // 函数，细节
const fn1: fnType = (a: number, b: number): void => {
  // ...
};

// interface
interface IPerson {
  name: string;
  age: number;
  fn1: fnType;
}

// interface 用于 object
const zhangsan: IPerson = {
  name: "张三",
  age: 20,
  fn1(a: number, b: number) {},
};

// interface 用于 class
class Person implements IPerson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  fn1(a: number, b: number): void {}
}
