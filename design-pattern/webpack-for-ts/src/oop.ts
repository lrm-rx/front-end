class People {
  name: string;
  age: number;
  // protected weight: number = 100
  // private girlfriend: string = 'xxx'
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eat() {
    alert(`${this.name} eat something`);
  }
  speak() {
    alert(`My name is ${this.name}, age ${this.age}`);
  }
}

class Student extends People {
  school: string;
  constructor(name: string, age: number, school: string) {
    super(name, age);
    this.school = school;
  }
  study() {
    alert(`${this.name} study`);
  }
  eat() {
    alert(`${this.name} eat apple`);
  }
}

class Teacher extends People {
  major: string;
  constructor(name: string, age: number, major: string) {
    super(name, age);
    this.major = major;
  }
  teach() {
    alert(`${this.name} teach ${this.major}`);
  }
}

const xiaoming = new Student("小明", 10, "A小学");
xiaoming.study();
xiaoming.eat();
xiaoming.speak();

const shuangyue = new Teacher("双越", 25, "语文");
shuangyue.teach();
shuangyue.eat();
shuangyue.speak();
shuangyue.age;

// const zhangsan = new People('张三', 20)
// zhangsan.eat()
// zhangsan.speak()
// zhangsan.age

// const lisi = new People('李四', 21)
// lisi.eat()
// lisi.speak()
// lisi.age

// 封装：可见性修饰符：
// - public - 所有都可以访问
// - protected - 当前类，或者子类可访问，外部不可访问
// - private - 只能在当前类内部访问，其他都不行

// 多态：
// - 重写
// - 重载

interface IStyleInfo {
  [key: string]: string;
}

class JQuery1 {
  css(key: string, value: string): void;
  css(styleInfo: IStyleInfo): void;
  css(keyOrInfo: string | IStyleInfo, value?: string): void {
    if (typeof keyOrInfo === "string") {
      // key value
    } else {
      // object
    }
  }
}

const jq = new JQuery1();
jq.css({ "font-size": "15px", color: "red" });
jq.css("color", "red");

export {};
