// 基础类型
// boolean, number, string, symbol, null和undefined
// 对象类型 {} or object, [] or Array, function, class类型

// string
const msg: string = "hello ts";
// msg = '123'
let msg1: string = "123";
// msg1 = 212
const msgStr = `${msg}  ${msg1}`;
console.log(msgStr);

// boolean
const bool: boolean = true;

const obj: object = {};
const obj1: {} = {};

const obj2: { msg: string; num: number } = { msg: "12", num: 2 };
const obj3: { msg: string; num?: number } = { msg: "12" };
obj3.num = 9;
obj3.num = 1232;
console.log(obj3);

const arr: [] = [];
const arr3: string[] = ["12312"];
const arr4: (string | number)[] = ["23432", 4243];

const arr1: Array<string> = ["123"];
const arr2: Array<string | number> = ["123", 333];
