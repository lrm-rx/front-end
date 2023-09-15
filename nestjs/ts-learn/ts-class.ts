// class 类
class Person {
  // public - 公共的
  // protected - 允许在类内及继承的子类中使用
  // private - 只允许在类内使用
  private name = "ming";
  getName() {
    return this.name;
  }
}

const person = new Person();
// console.log(person.name);
console.log(Person.name);
