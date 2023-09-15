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
