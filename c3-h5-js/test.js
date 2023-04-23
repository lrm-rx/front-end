function create() {
  let a = 100;
  return function () {
    console.log(a);
  };
}

let fn = create();
let a = 200;
fn();

function print(fn) {
  let a = 200;
  fn();
}
let a = 100;
function fn() {
  console.log(a);
}

print(fn);

function User() {}
User.prototype.sayHello = function () {};
var u1 = new User();
var u2 = new User();
console.log(u1.sayHello === u2.sayHello); //  true
console.log(u1.__proto__ === u1.constructor.prototype); //  true
console.log(u1.constructor.prototype === User.prototype); //  true
console.log(u1.__proto__ === User.prototype); //  true
console.log(User.constructor); // Function
console.log(User.prototype.constructor === User); // true
console.log(User.prototype.constructor === u1.__proto__.constructor); // true
console.log(User.prototype === Function.prototype); // false
console.log(User.__proto__ === Function.prototype); // true
console.log(User.__proto__ === Function.__proto__); // true
console.log(u1.__proto__ === u2.__proto__); // true
console.log(u1.__proto__ === User.__proto__); // false
console.log(Function.__proto__ === Object.__proto__); // true
console.log(Function.prototype.__proto__ === Object.prototype.__proto__); // false
console.log(Function.prototype.__proto__ === Object.prototype); // true
