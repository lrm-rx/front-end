// tuple -> 元组 -> 固定类型 + 长度的数组
const teacherInfo: [string, string, number] = ["lrm", "male", 18];

// enum -> 枚举 -> 罗列出来的所有的可能的情况 -> 常量
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// console.log(Direction.Up);
// console.log(Direction.Down);
// console.log(Direction.Left);
// console.log(Direction.Right);

enum Gender {
  Male,
  Female,
}

// console.log(Gender.Male); // 0
// console.log(Gender.Female); // 1
// console.log(Gender[0]); // Male
// console.log(Gender[1]); // Female
// console.log(Gender[3]); // undefined

enum Direction1 {
  Up = 100,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
