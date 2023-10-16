function testDecorator() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = "lck";
      getName() {
        console.log(this.name);
      }
    };
  };
}

const Test = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);
// class Test {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

const test = new Test("lpl");
test.getName();
