function mergeObjects(obj1, obj2) {
  const mergedObj = {};

  // 遍历第一个对象
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      // 判断属性值是否为 null 或 undefined
      if (obj1[key] !== null && obj1[key] !== undefined) {
        mergedObj[key] = obj1[key];
      } else if (obj2[key] !== null && obj2[key] !== undefined) {
        mergedObj[key] = obj2[key];
      } else {
        mergedObj[key] = obj1[key]; // 如果两个对象都为 null 或 undefined，取第一个对象的属性值
      }
    }
  }

  // 遍历第二个对象，添加第一个对象中没有的属性
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key) && !mergedObj.hasOwnProperty(key)) {
      mergedObj[key] = obj2[key];
    }
  }

  return mergedObj;
}

// 示例
const obj1 = {
  name: '',
  age: 30,
  city: null,
  hobbies: []
};

const obj2 = {
  name: undefined,
  age: null,
  city: 'New York',
  hobbies: null
};

const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj);

/**
 * 代码解释：
   1. 创建合并后的对象： const mergedObj = {}; 创建一个空对象，用来存储合并后的结果。
   2. 遍历第一个对象： 使用 for...in 循环遍历第一个对象 obj1 的所有属性。
   3.判断属性值： 对于每个属性：
        1.使用 obj1[key] !== null && obj1[key] !== undefined 检查属性值是否为 null 或 undefined。
        2.如果为 null 或 undefined，则检查第二个对象 obj2 的相同属性值是否为 null 或 undefined。
        3如果 obj2 中的属性值也为 null 或 undefined，则将 obj1 的属性值添加到合并后的对象中。
        4.遍历第二个对象： 遍历第二个对象 obj2，添加第一个对象中没有的属性到合并后的对象中。
        5.返回合并后的对象： 返回 mergedObj 对象。
代码中使用 hasOwnProperty 方法来确保只遍历对象自身定义的属性，避免遍历原型链上的属性。
总结：
该函数实现了根据指定的合并规则将两个对象合并成一个新对象，并返回合并后的结果。
 */