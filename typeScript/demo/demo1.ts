// TS开发准则: 只要是变量或者对象属性,都应该有一个明确的类型
// 类型注解: 人工的告诉TS, 变量或对象的明确属性类型
const userName: string = "123";
// 类型推断
const userAge = 18;
// 如果类型推断能够自己推断出来类型, 就没有必要去手写类型注解
let userNick = "lucky";
userNick.toLocaleLowerCase();

function getTotal(n1: number, n2: number) {
  return n1 + n2;
}
getTotal(1, 23);

// 如果类型推断不出来,或者推断不准确,再去手写类型注解
const userInfo = {
  name: "ming",
  age: 18,
};
