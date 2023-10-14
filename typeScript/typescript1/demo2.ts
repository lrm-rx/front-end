// 函数泛型   泛指的类型

// function join(first: string | number, second: string | number) {
//   return `${first}${second}`;
// }

// join("1", 1);

function join<T>(first: T, second: T) {
  return `${first}${second}`;
}

join<number>(1, 1);
join<string>("2", "2");
join("2", "3");

function join1<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

join1<number, number>(1, 1);
join1<string, number>("2", 1);
join1("2", 1);

function anotherJoin<T>(first: T, second: T): T {
  return first;
}

// T[])
function map<T>(params: Array<T>) {
  return params;
}

map<string>(["1", "2"]);
