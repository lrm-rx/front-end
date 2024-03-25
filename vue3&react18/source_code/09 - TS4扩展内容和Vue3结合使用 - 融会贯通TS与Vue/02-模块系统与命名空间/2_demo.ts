//export type A = string
//export default A

// type A = string
// export = A

//export let a = 123

// namespace Foo {
//   export let a = 123
// }

// namespace Bar {
//   export let a = 456
// }

// console.log(Foo.a)
// console.log(Bar.a)

export namespace Foo {
  export let a = 123
  export type A = string
  export function foo() {}
  export class B {}
}
