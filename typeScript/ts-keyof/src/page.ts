interface Person {
  name: string;
  age: number;
  gender: string;
}

class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    // if (key === "name" || key === "age" || key === "gender") {
    //   return this.info[key];
    // }
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: "lck",
  age: 19,
  gender: "male",
});
// const TName = teacher.getInfo("name") as string;
const TName = teacher.getInfo("name");
const TAge = teacher.getInfo("age");
console.log(TName);
console.log(TAge);
