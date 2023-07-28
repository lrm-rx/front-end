type Fish = {
  swim: () => {};
};

type Bird = {
  fly: () => {};
};

// in 语法下的类型收窄
function test1(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

// instanceOf 语法下的类型收窄
function test2(param: Date | string) {
  if (param instanceof Date) {
    return param.getTime();
  }
  return param.toUpperCase();
}

// animal is Fish 叫做类型陈述语法
function isFish(animal: Fish | Bird): animal is Fish {
  if ((animal as Fish).swim != undefined) {
    return true;
  }
  return false;
}

function test3(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim();
  }
  return animal.fly();
}
