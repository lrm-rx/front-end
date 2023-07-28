// typeof 类型收窄
function uppercase(content: string | number) {
  if (typeof content === "string") {
    return content.toUpperCase();
  }
  return content;
}

// 真值收窄
function getStr(content?: string) {
  // if(content) {
  //   return content.toUpperCase()
  // }
  return content?.toUpperCase();
}

// 相等收窄
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    return x.toUpperCase();
  }
}

// 对象类型解构的代码写法
function getObjVal({ a, b }: { a: number; b: number }) {
  return a + b;
}
getObjVal({ a: 1, b: 12 });

// 变量类型以定义变量时的类型为准
let userName1: string | number = 12;
console.log(userName1);
