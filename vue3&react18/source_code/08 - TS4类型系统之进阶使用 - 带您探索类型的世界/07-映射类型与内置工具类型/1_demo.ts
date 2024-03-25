// type A = {
//   username: string
//   age: number
// }

// 映射类型只能用别名实现，不能用接口来实现

// type B<T> = {
//   readonly [P in keyof T]: T[P]
// }

// type C = B<A>

//Partial、Readonly、Pick、Record、Required、Omit、Exclude、Extract、NonNullable、Parameters、ReturnType …

// type A = {
//   username: string
//   age: number
//   gender: string
// }

// type B = Readonly<A>
// type C = Partial<A>
// type D = Pick<A, 'username'|'age'>
// type E = Record<keyof A, string>

// type A = {
//   username?: string
//   age?: number
//   readonly gender: string
// }

// type B = Required<A>

// type A = {
//   username: string
//   age: number
//   gender: string
// }
// type B = Pick<A, 'username'|'age'>

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// type C = Omit<A, 'username'|'age'>

//type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | number | boolean, string | boolean>
