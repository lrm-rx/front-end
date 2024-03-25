// class Foo {}

// //new Foo();

// let a: Foo = 123;
// a = 'hello';

// class Foo {
//   username!: string;
// }

// let f: Foo = new Foo();
// f.username = 'hello';

// class Foo {
//   //username: string = 'xiaoming';

//   // username: string;
//   // constructor(){
//   //   this.username = 'xiaoming';
//   // }

//   username: string;
//   constructor(username: string){
//     this.username = username;
//   }
//   showAge = (n: number): number => {

//     return n;
//   }

// }

// let f = new Foo('hello');
// f.showAge(20);

// class Foo {
//   username;
//   constructor(){
//     this.username = 'xiaoming'
//   }
// }

// 接口在类中的使用

// interface A {
//   username: string
//   age: number
//   showName(n: string): string
// }

// class Foo implements A {
//   username: string = 'xiaoming'
//   age: number = 20
//   gender: string = 'male'
//   showName = (n: string): string => {
//     return n
//   }
// }

//泛型和类的使用

// class Foo<T> {
//   username: T;
//   constructor(username: T){
//     this.username = username;
//   }
// }

// new Foo<string>('xiaoming');

// class Foo<T> {
//   username: T;
//   constructor(username: T){
//     this.username = username;
//   }
// }

// class Bar extends Foo<string> {

// }

// new Bar('xiaoming');

interface A<T> {
  username: T
  age: number
  showName(n: T): T
}

class Foo implements A<string> {
  username: string = 'xiaoming'
  age: number = 20
  gender: string = 'male'
  showName = (n: string): string => {
    return n
  }
}
