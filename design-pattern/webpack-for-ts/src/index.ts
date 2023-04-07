let b: boolean = true;
let n: number = 100;
let str: string = "lpl";
let s: symbol = Symbol();

// 或
let x: number | string | boolean = false;

// 慎用
let y: any = [];

// 数组
let arr: string[] = ["a", "b", "c"];
let numArr: Array<number> = [1, 2, 3];

// 元组
let arr1: Array<string | number | boolean> = [1, "string", false];

// // 对象 - 不常用
// let obj: object = { x: 10, y: 20 };

// // 函数 - 不常用
// let fn: Function = (x: number, y: string) => {};

// 函数: 参数, 返回值
function fn(n1: number, n2: number): number {
  return n1 + n2;
}

// 自定义类型
type infoType = string | number | boolean;
let info1: infoType = 10;

type fnType = (a: number, b: number) => void;
const fn1: fnType = (a: number, b: number): void => {
  // ....
};

// interface
interface IPerson {
  name: string;
  age: number;
  fn1: fnType;
}

const zhangsan: IPerson = {
  name: "张三",
  age: 20,
  fn1(a: number, b: number) {},
};

// class ES
class Person implements IPerson {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  fn1(a: number, b: number): void {}
}

class People1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat() {
    alert(`${this.name} eat something`);
  }

  speak() {
    alert(`My name is ${this.name}, age: ${this.age}`);
  }
}

const lisi = new People1("张三", 20);
lisi.eat();
lisi.speak();
lisi.age;

const wangwu = new People1("李四", 21);
wangwu.eat();
wangwu.speak();
lisi.age;

// 可见性修饰符:
/* 
  public - 所有都可以访问
  protected - 当前类, 或者子类可访问, 外部不可访问
  private - 只能在当前类内部访问, 其他都不可以
*/

// 多态:
// - 重写 - 子类重写父类方法
// - 重载

interface IStyleInfo {
  [key: string]: string;
}

class JQuery {
  css(key: string, value: string): void;
  css(styleInfo: IStyleInfo): void;
  css(keyOrInfo: string | IStyleInfo, value?: string): void {}
}

const j = new JQuery();
j.css({ "font-size": "15px", color: "red" });

export {};
