class Person12 {
  name = "ming";
  getName() {
    return this.name;
  }
}

class Teacher12 extends Person12 {
  getTeacherName() {
    return "Teacher12";
  }
  // 重写父类方法
  getName() {
    return super.getName() + "123";
  }
}

const teacher12 = new Teacher12();
console.log(teacher12.getName());
console.log(teacher12.getTeacherName());

// private, protected, public 访问类型
/**
 * public 允许在类的内外被调用
 * private 允许在类的内被调用
 * protected 允许在类内及继承的子类中使用
 */
// class Person13 {
//   name: string;
//   // private name: string;
//   // protected name: string;
//   sayHi() {
//     console.log("hi", this.name);
//   }
// }
// class Teacher13 extends Person13 {
//   public sayBye() {
//     console.log(this.name);
//   }
// }

// const person13 = new Person13();
// person13.name = "lpl";
// console.log(person13.name);
// person13.sayHi();

// constructor
// class Person15 {
//   // 传统写法
//   // public name: string;
//   // constructor(name: string) {
//   //   this.name = name;
//   // }

//   // 简化写法
//   constructor(public name: string) {}
// }

// const person15 = new Person15("ming");
// console.log(person15.name);

class Person22 {
  constructor(public name: string) {}
}

class Teacher22 extends Person22 {
  constructor(public age: number) {
    super("ming");
  }
}

const teacher22 = new Teacher22(22);

// getter和setter
class Person33 {
  constructor(private _name: string) {}
  get name() {
    return this._name + " 345";
  }
  set name(name: string) {
    const realName = name.split(" ")[0];
    this._name = realName;
  }
}

const person33 = new Person33("123");
console.log(person33.name);
person33.name = "100 222";
console.log(person33.name);

class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo("123");
    }
    return this.instance;
  }
}

const d1 = Demo.getInstance();
const d2 = Demo.getInstance();

class Person99 {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person99 = new Person99("123");
// person99.name = '567'
console.log(person99.name);

// 抽象类

abstract class Geom {
  width: number;
  getType() {
    return "Geom";
  }
  abstract getArea(): number;
}
class Circle11 extends Geom {
  getArea() {
    return 123;
  }
}

class Square11 extends Geom {
  getArea() {
    return 456;
  }
}

class Triangle11 extends Geom {
  getArea() {
    return 789;
  }
}

interface Teacher11 {
  name: string;
}

interface Student11 {
  name: string;
  age: number;
}

const teacher11 = {
  name: "a",
};

const student11 = {
  name: "b",
  age: 18,
};

const getUserInfo1 = (user: Teacher11 | Student11) => {
  console.log(user.name);
};

getUserInfo1(teacher11);
getUserInfo1(student11);
