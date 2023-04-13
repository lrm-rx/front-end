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
