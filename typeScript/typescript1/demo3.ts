// 类中的泛型和泛型类型
// class DataManager {
//   constructor(private data: string[] | number[]) {}
//   getItem(index: number): string | number {
//     return this.data[index];
//   }
// }

// interface Item {
//   name: string;
// }
// class DataManager<T extends Item> {
//   constructor(private data: T[]) {}
//   getItem(index: number): string {
//     return this.data[index].name;
//   }
// }

// const data = new DataManager<string>(["1"]);
// data.getItem(0);

// const data = new DataManager([
//   {
//     name: "lpl",
//   },
// ]);

// class DataManager<T extends number | string> {
//   constructor(private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index];
//   }
// }

// interface Test {
//   name: string;
// }

// const data = new DataManager<Test>([]);

// const data = new DataManager<string>([]);

// 使用泛型作为一个具体的类型注解
const func: <T>(param: T) => T = hello;
function hello<T>(params: T) {
  return params;
}
