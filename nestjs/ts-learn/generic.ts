// const pushArr = (arr: string[], item: string): string[] => {
//   arr.push(item);
//   return arr;
// };

// const pushNumArr = (arr: number[], item: number): number[] => {
//   arr.push(item);
//   return arr;
// };

const pushArr = <T>(arr: T[], item: T): T[] => {
  arr.push(item);
  return arr;
};

const arr11: number[] = [1, 2, 3];
pushArr<number>(arr, 3);
pushArr(arr, 3);
pushArr<string | number>(["123", 123], 5);

function swapGeneric<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result11 = swapGeneric<string, number>(["123", 312]);
console.log(result);
