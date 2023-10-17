// // 方法装饰器
// // 普通方法, target对应是类的 prototype
// // 静态方法, target对应的是类的构造函数

// function getNameDecorator(
//   target: any,
//   key: string,
//   descriptor: PropertyDescriptor
// ) {
//   // target.getName();
//   // console.log(target, key);
//   // descriptor.writable = true;
//   descriptor.value = function () {
//     return "descriptor";
//   };
// }

// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   @getNameDecorator
//   getName() {
//     console.log("get");
//     return this.name;
//   }
// }

// const person = new Person("lpl");
// // person.getName = () => {
// //   return "123";
// // };
// console.log(person.getName());

// 访问器的装饰器
function visitDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {}

class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(value: string) {
    this._name = value;
  }
}

const person = new Person("lpl");
person.name = "lck";
console.log(person.name);

console.log("---------------------");

// 属性的装饰器
// 修改的并不是实例上的name, 而是原型上的 name
function nameDecorator(target: any, key: string): any {
  console.log(target, key);
  target[key] = "adc";
  // name不可修改
  // const descriptor: PropertyDescriptor = {
  //   writable: false,
  // };
  // return descriptor;
}

// name 放在实例上
class Person1 {
  @nameDecorator
  name = "lpl";
}

const person1 = new Person1();
console.log(person1.name);

console.log("1231231313333");
// 参数的装饰器
// 原型, 方法名, 参数所在的位置
function paramDecorator(target: any, key: string, paramIndex: number) {
  console.log(target, key, paramIndex);
}

// name 放在实例上
class Person2 {
  getInfo(@paramDecorator name: string, age: number) {
    console.log(name, age);
  }
}

const person2 = new Person1();
console.log(person2.name);
