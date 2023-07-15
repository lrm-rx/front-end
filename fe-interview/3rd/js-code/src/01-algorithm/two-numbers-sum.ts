// 两数之和
// 查找和为 n 的两个数 方法1

export function findTowNumbers1(arr: number[], n: number): number[] {
    const res: number[] = [];
    const length = arr.length;
    if (length === 0) return res;

    for (let i = 0; i < length - 1; i++) {
        const n1 = arr[i];
        let flag = false; // 是否得到了结果

        for (let j = i + 1; j < length; j++) {
            const n2 = arr[j];
            if (n1 + n2 === n) {
                res.push(n1);
                res.push(n2);
                flag = true;
                break;
            }
        }
        if (flag) break;
    }

    return res;
}

// 查找和为 n 的两个数 方法2  双指针
export function findTowNumbers2(arr: number[], n: number): number[] {
    const res: number[] = [];

    const length = arr.length;
    if (length === 0) return res;

    let i = 0; // 头
    let j = length - 1; // 尾

    while (i < j) {
        const n1 = arr[i];
        const n2 = arr[j];
        const sum = n1 + n2;

        if (sum > n) {
            // sum 大于 n, 则 j 要向前移动
            j--;
        } else if (sum < n) {
            // sum 小于 n, 则 i 要微后移动
            i++;
        } else {
            // 相等
            res.push(n1);
            res.push(n2);
            break;
        }
    }
    return res;
}

// 测试
const arr = [1, 2, 4, 7, 11, 15];
console.log(findTowNumbers1(arr, 15));
