// 斐波那契数列

// 递归 时间复杂度  O(2^n)
// function fibonacci(n: number): number {
//     if (n <= 0) return 0;
//     if (n === 1) return 1;

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// 测试
// console.log(fibonacci(10));

/**
 * 优化
 * 不用递归, 用循环
 * 记录中间结果
 */
// 循环
export function fibonacci(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let n1 = 1; // 记录 n-1的结果
    let n2 = 0; // 记录 n-2的结果
    let res = 0;

    for (let i = 2; i <= n; i++) {
        res = n1 + n2;
        // 记录中间结果
        n2 = n1;
        n1 = res;
    }
    return res;
}

console.log(fibonacci(10));
