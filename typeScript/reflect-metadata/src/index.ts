import "reflect-metadata";

// const user = {
//   name: "lpl",
// };

// Reflect.defineMetadata("data", "test", user);
// // console.log(user);
// console.log(Reflect.getMetadata("data", user));

// @Reflect.metadata("data", "test")
// class User {
//   // @Reflect.metadata("data", "test")
//   // name = "lpl";
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   getName() {}
// }

// class Teacher extends User {}
// console.log(Reflect.getMetadata("data", User));
// console.log(Reflect.getMetadata("data", User.prototype, "getName"));
// console.log(Reflect.hasMetadata("data", User.prototype, "name"));

// console.log(Reflect.hasOwnMetadata("data", User.prototype, "getName"));
// console.log(Reflect.hasOwnMetadata("data", Teacher.prototype, "getName"));

// console.log(Reflect.getMetadataKeys(User.prototype, "getName"));

// ------------------------------------------------------

function showData(target: typeof User) {
  console.log(target.prototype);
  for (const key in target.prototype) {
    const data = Reflect.getMetadata("data", target.prototype, key);
    console.log(data);
  }
}

function setData(dataKey: string, msg: string) {
  return function (target: User, key: string) {
    Reflect.defineMetadata(dataKey, msg, target, key);
  };
}

@showData
class User {
  @Reflect.metadata("data", "name")
  getName() {}
  @Reflect.metadata("data", "age")
  // @setData("data", "age")
  getAge() {}
}
