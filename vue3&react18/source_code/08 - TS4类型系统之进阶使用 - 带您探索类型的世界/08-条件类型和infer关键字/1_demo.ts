// type A = string
// type B = number | string
// type C = A extends B ? {} : []

//Exclude、Extract、NonNullable、Parameters、ReturnType …
// type Exclude<T, U> = T extends U ? never : T
// type A = Exclude<string | number | boolean, string>

// type Extract<T, U> = T extends U ? T : never
// type A = Extract<string | number | boolean, string>

//type NonNullable<T> = T extends null | undefined ? never : T;
//type A = NonNullable<string|null|undefined>

// type Foo = (n: number, m: string) => string

// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

// type A = Parameters<Foo> // 函数的参数转成一个元祖类型

// let a: A = [1, 'hello']

//type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

//type A = ReturnType<Foo>

type A<T> = T extends Array<infer U> ? U : T

type B = A<Array<number>>
type C = A<string>
