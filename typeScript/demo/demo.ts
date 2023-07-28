// 基础类型 string, number, boolean
const teacherName: string = "jacky";
const teacherAge: number = 20.1;
const isMale: boolean = true;

// 数组类型
const arr: number[] = [1, 2, 3];
const stringArr: string[] = ["a", "b", "c"];
const booleanArr: Array<boolean> = [true, false];

// 对象类型
const user: { name: string; age: number } = { name: "ming", age: 18 };
const userOne: { name: string; age?: number } = { name: "ning" };

// 联合类型 Union type
function union(id: string | number) {
  if (typeof id === "string") {
    // 类型收窄 Narrowing
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// 类型别名
type User = { name: string; age: number };
// type Employee = { name: string; age: number; salary: number };
const userTwo: User = { name: "lisi", age: 10 };
const userThree: User = { name: "wangwu", age: 12 };

// any
function showMessage(msg: any) {
  console.log(msg);
}

// 函数类型
function adc(msg: string): number {
  return 1;
}
const fn: (age: number) => number = (age: number) => {
  return 12;
};

// 接口类型
interface Student {
  age: number;
  sex?: string;
}

interface Student {
  name: string;
}

// interface oldStudent extends Student {
//   name: string;
// }

const student: Student = { name: "rou", age: 19, sex: "male" };
// const student1: oldStudent = { name: "ming", age: 19 };

// 交叉类型
type Employee = User & { salary: number };
const employee: Employee = { name: "uzi", age: 27, salary: 1400000 };

// 断言
// const dom: undefined = document.getElementById("#root") as undefined;
// const dom1: undefined = <undefined>document.getElementById("#root");
// const testStr: string = 123 as any as string;

// 字面量类型
function getPosition(position: "left" | "right"): string {
  return position;
}

getPosition("left");

// const truthy: true = true
// 字面量类型习题
function request(url: string, method: "GET" | "POST"): string {
  return "sending request";
}
// const params: { url: string; method: "GET" | "POST" } = {
//   url: "baidu.com",
//   method: "GET",
// };
const params: { url: string; method: string } = {
  url: "baidu.com",
  method: "GET",
};
request(params.url, params.method as "GET");

// null, undefined
// const testNull: null = undefined;
// const testUndefined: undefined = null;
// function checkNull(abc: string | null) {
//   console.log(abc.toUpperCase());
// }

const testNull: null = null;
const testUndefined: undefined = undefined;
function checkNull(abc: string | null) {
  if (typeof abc === "string") {
    console.log(abc.toUpperCase());
  } else {
    console.log(abc);
  }
}

// void
function getNumber(): void {
  // return 1
}
