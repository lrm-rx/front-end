// 对称数

// 数组反转
export function findPalindromeNumbers1(max: number): number[] {
    const res: number[] = [];
    if (max < -0) return res;

    for (let i = 1; i <= max; i++) {
        // 转换为字符串, 转换为数组, 再反转, 比较
        const s = i.toString();
        if (s === s.split("").reverse().join("")) {
            res.push(i);
        }
    }

    return res;
}

// 字符串前后比较
export function findPalindromeNumbers2(max: number): number[] {
    const res: number[] = [];
    if (max <= 0) return res;

    for (let i = 1; i <= max; i++) {
        const s = i.toString();
        const length = s.length;

        // 字符串头尾比较
        let flag = true;
        let startIndex = 0; // 字符串开始
        let endIndex = length - 1; // 字符串结束
        while (startIndex < endIndex) {
            if (s[startIndex] !== s[endIndex]) {
                flag = false;
                break;
            } else {
                // 继续比较
                startIndex++;
                endIndex--;
            }
        }

        if (flag) res.push(i);
    }

    return res;
}

// 翻转数字
export function findPalindromeNumbers3(max: number): number[] {
    const res: number[] = [];
    if (max <= 0) return res;

    for (let i = 1; i <= max; i++) {
        let n = i;
        let rev = 0; // 存储翻转数

        // 生成翻转数
        while (n > 0) {
            rev = rev * 10 + (n % 10);
            n = Math.floor(n / 10);
        }

        if (i === rev) res.push(i);
    }

    return res;
}

// 测试
console.info(findPalindromeNumbers3(200));

// 性能测试
console.time("findPalindromeNumbers1");
findPalindromeNumbers1(100 * 10000);
console.timeEnd("findPalindromeNumbers1");

console.time("findPalindromeNumbers2");
findPalindromeNumbers2(100 * 10000);
console.timeEnd("findPalindromeNumbers2");

console.time("findPalindromeNumbers3");
findPalindromeNumbers3(100 * 10000);
console.timeEnd("findPalindromeNumbers3");
