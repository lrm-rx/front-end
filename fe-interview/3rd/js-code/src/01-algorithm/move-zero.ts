// 移动 0 到数组末尾

// 嵌套循环 O(n^2)
export function moveZero1(arr: number[]): void {
    const length = arr.length;
    if (length === 0) return;

    let zeroLength = 0;
    for (let i = 0; i < length - zeroLength; i++) {
        if (arr[i] === 0) {
            arr.push(0);
            arr.splice(i, 1);
            i--; // 数组截取了一个元素, i要递减, 否则连续 0 就会有错误
            zeroLength++; // 累加 0 的长度
        }
    }
}

/**
 * 1. 定义j指向第一个0, i指向j后面的第一个非0
 * 2. 交换i和j的值, 继续向后移动
 * 3. 只遍历一次,所以时间复杂度是O(n)
 */

export function moveZero2(arr: number[]): void {
    const length = arr.length;
    if (length === 0) return;

    let i;
    let j = -1; // 指向第一个0
    for (i = 0; i < length; i++) {
        if (arr[i] === 0) {
            // 第一个 0
            if (j < 0) {
                j = i;
            }
        }
        if (arr[i] !== 0 && j >= 0) {
            const n = arr[i];
            arr[i] = arr[j];
            arr[j] = n;
            j++;
        }
    }
}
// 测试
// const arr = [1, 0, 2, 3, 0, 0, 0, 99, 0, 111];
// moveZero2(arr);
// console.log(arr);

const arr1: number[] = [];
for (let i = 0; i < 20 * 10000; i++) {
    if (i % 10 === 0) {
        arr1.push(0);
    } else {
        arr1.push(i);
    }
}
console.time("m1");
moveZero1(arr1);
console.timeEnd("m1");

const arr2: number[] = [];
for (let i = 0; i < 20 * 10000; i++) {
    if (i % 10 === 0) {
        arr2.push(0);
    } else {
        arr2.push(i);
    }
}
console.time("m2");
moveZero2(arr2);
console.timeEnd("m2");
