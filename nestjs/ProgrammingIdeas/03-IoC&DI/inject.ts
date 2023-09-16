import 'reflect-metadata';

function Inject(target: any, key: string) {
  target[key] = new (Reflect.getMetadata('design:type', target, key))();
}

class A {
  sayHello() {
    console.log('hello');
  }
}

class B {
  @Inject // 编译后等同于执行了 @Reflect.metadata("design:type", A)
  a!: A;

  say() {
    this.a.sayHello(); // 不需要再对class A进行实例化
  }
}

new B().say(); // hello
