// 基本的用法
function add(arg1: number, arg2: number): number {
  return arg1 + arg2;
}

const result = add(1, 2);

const add1 = (arg1: number, arg2: number): number => {
  return arg1 + arg2;
};

const result1 = add1(1, 3);

// 这种匿名函数
// const add2 = (arg1, arg2) => arg1 + arg2
// 类型： (arg1: number, arg2: number) => number
const add2: (arg1: number, arg2: number) => number = (
  arg1: number,
  arg2: number
) => arg1 + arg2;

// 函数重载
function handleData(x: string): string[];
function handleData(x: number): string;
function handleData(x: boolean): null;

function handleData(x: any) {
  if (typeof x === "string") {
    return x.split("");
  } else {
    return x.toString().split("").join("_");
  }
}

handleData("abc").join("_");
// handleData(123).join("") // error
handleData(false);
