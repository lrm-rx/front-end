function transformArray(arr, tags) {
  return arr.flatMap((item) => {
    const { id, uuid = "fasdf", name, age, ...rest } = item;
    const baseItem = { id, uuid, name, age };

    return tags.flatMap(({ tagName, tagList }) => {
      const subItems = item[tagName] || [];
      return subItems.length > 0
        ? subItems.map((subItem) => {
            const newItem = { ...baseItem, ...subItem };
            tagList.forEach((attr) => {
              newItem[`${tagName}_${attr}`] = subItem[attr] || "";
            });
            return newItem;
          })
        : [{ ...baseItem, ...tagList.reduce((acc, attr) => {
              acc[`${tagName}_${attr}`] = "";
              return acc;
            }, {}) }];
    });
  });
}

const arr = [
  {
    id: 1,
    name: "ming",
    age: 20,
    carList: [
      { id: 1, carName: "宝马", age: 2 },
      { id: 2, carName: "长安", age: 1 },
      { id: 3, carName: "奥迪", age: 3 },
    ],
    habby: [
      { id: 1, hName: "台球" },
      { id: 2, hName: "篮球" },
    ],
  },
  {
    id: 2,
    name: "ning",
    age: 26,
    carList: [],
    habby: [],
  },
];

const tags = [
  {
    tagName: "carList",
    tagList: ["id", "age"],
  },
  {
    tagName: "habby",
    tagList: ["id"],
  },
];

const transformedArray = transformArray(arr, tags);
console.log(transformedArray);