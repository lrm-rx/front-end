// extends和泛型的结合, 解决固定参数传递需求
interface Person1 {
  name: string;
}

function getName<Type extends Person>(person: Type) {
  return person.name;
}

getName({ name: "ming", age: 19 });

// keyof 指的是对象类型中的某一项
interface Teacher1 {
  name: string;
  age: number;
  sex: "male" | "female";
}

const teacher1: Teacher1 = {
  name: "han",
  age: 24,
  sex: "female",
};

function getTeacherInfo<T extends keyof Teacher1>(teacher: Teacher1, key: T) {
  return teacher[key];
}

getTeacherInfo(teacher1, "name");
// getTeacherInfo(teacher1, 'a') // 报错, 因为 Teacher1 中没有 a 这个类型定义
