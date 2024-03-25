//let a: number & string = 123

// function foo(n: 1 | 2 | 3) {
//   switch (n) {
//     case 1:
//       break
//     case 2:
//       break
//     case 3:
//       break
//     default:
//         let m: never = n;  // 检测n是否可以走到这里，看所有值是否全部被使用到
//       break
//   }
// }

// foo(1)


// any类型 --------------------

// let a: any = 'hello';
// a = 123;
// a = true;
// a.map(()=>{})

// unknown类型 --------------------

let a: unknown = 'hello';
a = 123;
// any不进行检测了，unknown使用的时候，TS默认会进行检测
a.map(()=>{})