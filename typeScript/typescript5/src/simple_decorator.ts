// // 类的装饰器
// // 装饰器本身是一个函数
// // 类装饰器接受的参数是构造函数
// // 装饰器通过 @ 符号来使用

// function testDecorator1(constructor: any) {
//   // constructor.prototype.getName = () => {
//   //   console.log("lpl");
//   // };
//   console.log("testDecorator1"); // 1
// }

// function testDecorator(constructor: any) {
//   // constructor.prototype.getName = () => {
//   //   console.log("lpl");
//   // };
//   console.log("testDecorator"); // 2
// }

// @testDecorator
// @testDecorator1
// class Test {}

// const test = new Test();

// (test as any).getName();

// ------------------------------------------------
function testDecorator1(flag: boolean) {
  if (flag) {
    return function (constructor: any) {
      constructor.prototype.getName = () => {
        console.log("lpl");
      };
    };
  } else {
    return function (constructor: any) {};
  }
}

@testDecorator1(true)
class Test1 {}

const test1 = new Test1();
(test1 as any).getName();
