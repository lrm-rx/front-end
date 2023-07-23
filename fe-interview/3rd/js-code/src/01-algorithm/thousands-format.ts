// 整数千分位格式化

// 使用数组
export function format1(n: number): string {
    n = Math.floor(n);

    const s = n.toString();
    const arr = s.split("").reverse();
    return arr.reduce((prev, val, index) => {
        if (index % 3 === 0) {
            if (prev) {
                return val + "," + prev;
            } else {
                return val;
            }
        } else {
            return val + prev;
        }
    }, "");
}

// 字符串分析
export function format2(n: number): string {
    n = Math.floor(n);

    let res = "";
    const s = n.toString();
    const length = s.length;

    for (let i = length - 1; i >= 0; i--) {
        const j = length - i;
        if (j % 3 === 0) {
            if (i === 0) {
                res = s[i] + res;
            } else {
                res = "," + s[i] + res;
            }
        } else {
            res = s[i] + res;
        }
    }

    return res;
}

// 测试
const n = 10201004050;
console.info("format1", format1(n));
console.info("format2", format2(n));
