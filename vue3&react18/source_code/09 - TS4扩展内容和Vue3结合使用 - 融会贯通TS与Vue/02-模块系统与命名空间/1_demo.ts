// import type { A } from './2_demo'
// let a: A = 'hello'

//import A from './2_demo'
//let a: A = 'hello'

// import A = require('./2_demo')
// let a: A = 'hello'

// setTimeout(() => {
//   //import { a } from "./2_demo"  // error

//   import('./2_demo').then(({ a }) => {
//     console.log(a)
//   })
// }, 2000)

import { Foo } from './2_demo'

console.log(Foo.a)
