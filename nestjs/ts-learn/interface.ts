// 接口 -> ts最重要的概念 -> 定义任意的结构或类型

interface publicPoint {
  x: number | string;
  y: number;
  z: number;
}
interface Point extends publicPoint {
  a?: number;
  // x: number | string;
  // y: number;
}

// interface Point {
//   z: number;
// }

interface Point2 {
  d: number;
}

interface Point1 extends publicPoint, Point2 {
  a: string;
  b: string;
}
const myPoint: Point = { x: 1, y: 2, z: 4 };
const myPoint1: Point1 = { x: 1, y: 3, z: 5, a: "33", b: "54", d: 676 };

// 函数定义
interface Func {
  (num1: number, num2: number): number;
}

const addFunc: Func = (arg1, arg2) => arg1 + arg2;

// 索引类型
interface Role {
  [id: number]: string;
}

const role: Role = ["super_admin", "admin"];
// console.log(role.length);
// 当定义了索引类型之后，数组的length方法将不存在，包括Array原型链上的其他方法也不存在了

const role1: Role = {
  0: "super_admin",
  1: "admin",
  2: "user",
};

// 绕开多余属性检查
interface MyType {
  color: string;
  // [prop: string]: any;
}
// const getTypes = (myType: MyType) => {
//   return `${myType.color}`;
// };

const getTypes = ({ color }: MyType) => {
  return `${color}`;
};

// 1. 类型断言
// getTypes({
//   color: "red",
//   type: "color",
//   num: 0,
// } as MyType);

// 2. 索引签名
// getTypes({
//   color: "red",
//   type: "color",
//   num: 0,
// });

// 3. 类型兼容 -- 不推荐
const option = { color: "yellow", size: 13 };
getTypes(option);
