// 有属性的函数类型定义方法
interface FnWidthAttr {
  attr: string;
  (str: string): void;
}

const test11: FnWidthAttr = (str: string) => {
  console.log(str);
};
test11.attr = "attr";

// 构造函数的类型定义
interface ClassWithConstructor {
  new (str: string): void;
}
function testOne(outerClass: ClassWithConstructor) {
  const instance = new outerClass("new");
}

class TestOne {
  name: string;
  constructor(str: string) {
    this.name = str;
  }
}

testOne(TestOne);

// Date的类型
interface DateType {
  new (): Date;
  (dateString: string): string;
}

// 函数和泛型
function getArrayFirstItem<Type>(arr: Type[]): Type {
  return arr[0];
}

const numberArr = [1, 23, 3];
const result1 = getArrayFirstItem(numberArr);

const strArr = ["1", "2", "3"];
const result2 = getArrayFirstItem(strArr);

// 函数重载
function getString1(str: string): string;
function getString1(str: string, str1: string): string;

function getString1(str: string, str1?: string) {
  if (typeof str1 === "string") {
    return str + str1;
  }
  return str;
}

// 对象key起别名
function showPersonInfo({ name: nick = "ming", age: old = 18 }) {
  console.log(nick);
  console.log(old);
}
function showPersonInfo1({
  name = "ming",
  age = 18,
}: {
  name: string;
  age: number;
}) {
  console.log(name);
  console.log(age);
}

// interface 中的 readonly 只读属性
interface Person {
  readonly name: string;
  readonly age: number;
}

const ming: Person = { name: "ming", age: 18 };
// ming.name = 'lucky'

// 对象扩展属性
interface ArrayObj {
  [key: string]: string | number | boolean;
  length: number;
}

const obj: ArrayObj = {
  abc: "123",
  b: 2,
  length: 0,
};

// 对象类型的继承
interface Animal1 {
  name: string;
  age: number;
  breath: () => void;
}

// interface Dog {
//   name: string;
//   age: number;
//   breath: () => void;
//   bark: () => void;
// }
interface Dog extends Animal1 {
  bark: () => void;
}

const animal1: Animal1 = {
  name: "panda",
  age: 1,
  breath: () => {},
};

const dog: Dog = {
  name: "wangwang",
  age: 2,
  breath: () => {},
  bark: () => {},
};

// 多个对象类型同时进行继承
interface Circle {
  radius: number;
}

interface Colorful {
  color: string;
}

interface ColorfulCircle extends Circle, Colorful {}

const colorfulCircle: ColorfulCircle = {
  radius: 1,
  color: "red",
};

// 交叉类型
type ColorfulCircleOne = Circle & Colorful;
const colorfulCircleOne: ColorfulCircle = {
  radius: 1,
  color: "red",
};
