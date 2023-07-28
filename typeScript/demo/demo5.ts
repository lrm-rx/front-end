// 泛型
interface Box<Type> {
  content: Type;
}

// type Box<Type> = {
//   content: Type;
// };

const box: Box<string> = {
  content: "box",
};

const box1: Box<number> = {
  content: 12,
};

const box2: Box<boolean> = {
  content: true,
};

// 使用泛型来扩展生成新的类型
type TypeOrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
// type OneOrManyOrNull<Type> = OneOrMany<Type> | null
type OneOrManyOrNull<Type> = TypeOrNull<OneOrMany<Type>>;

// 数组和泛型
interface SelfArray<Type> {
  [key: number]: Type;
  length: number;
  pop(): Type | undefined;
  push(...items: Type[]): number;
}
const numberArr1: SelfArray<string> = ["2"];

// 数组的 Readonly 修饰符
function doStuff(arr: readonly string[]) {
  arr.slice();
  // arr.push('1')
}

// 元组
type Tuple = [number, string];
const tuple: Tuple = [1, "123"];

type Point = readonly [number, number];

function getPoint([x, y]: Point) {
  return x + y;
}

const point: Point = [1, 2];
getPoint(point);

// 条件类型: 是根据条件生成一个新的类型
interface Animal2 {
  breath: () => {};
}

interface Dog1 extends Animal2 {
  bark: () => {};
}

interface Tank {
  pH: number;
}

type Example1 = Tank extends Animal2 ? string : number;

// 应用
interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}

// function createLabel(key: string): NameLabel;
// function createLabel(key: number): IdLabel;
// function createLabel(key: string | number): IdLabel | NameLabel {
//   if (typeof key === "string") {
//     return { name: key };
//   }
//   return { id: key };
// }
// const label = createLabel("ming");

type IdOrNameLabel<T> = T extends number ? IdLabel : NameLabel;
function createLabel<T extends string | number>(key: T): IdOrNameLabel<T>;
function createLabel(key: string | number): IdLabel | NameLabel {
  if (typeof key === "string") {
    return { name: key };
  }
  return { id: key };
}

const label = createLabel("ming");
const label1 = createLabel(1);

// 条件类型其他的应用场景
type TypeOfMessage<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  from: string;
  to: string;
  message: string;
}

// type EmailMessage = string

const emailObject: Email = {
  from: "aa@qq.com",
  to: "bb@qq.com",
  message: "hi",
};
const email: TypeOfMessage<Email> = "hi";

// 条件类型其他使用场景
type GetRetureType<T> = T extends (...args: never[]) => infer Reture
  ? Reture
  : never;
