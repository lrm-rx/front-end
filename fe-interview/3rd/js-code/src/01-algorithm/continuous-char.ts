// 连续字符

interface IRes {
    char: string;
    length: number;
}

export function findContinuousChar1(str: string): IRes {
    const res: IRes = {
        char: "",
        length: 0,
    };

    const length = str.length;
    if (length === 0) return res;

    let tempLength = 0; // 临时记录当前连续字符的长度

    // O(n)
    for (let i = 0; i < length; i++) {
        tempLength = 0; // 重置

        for (let j = i; j < length; j++) {
            if (str[i] === str[j]) {
                tempLength++;
            }

            if (str[i] !== str[j] || j === length - 1) {
                // 不相等, 或者已经到了最后一个元素. 要去判断最大值
                if (tempLength > res.length) {
                    res.char = str[i];
                    res.length = tempLength;
                }

                if (i < length - 1) {
                    i = j - 1; // 跳步
                }
                break;
            }
        }
    }

    return res;
}

// 双指针
export function findContinuousChar2(str: string): IRes {
    const res: IRes = {
        char: "",
        length: 0,
    };

    const length = str.length;
    if (length === 0) return res;

    let tempLength = 0; // 临时记录当前连续字符的长度

    let i = 0;
    let j = 0;
    for (; i < length; i++) {
        if (str[i] === str[j]) {
            tempLength++;
        }

        if (str[i] !== str[j] || i === length - 1) {
            // 不相等, 或者 i 到了字符串末尾
            if (tempLength > res.length) {
                res.char = str[j];
                res.length = tempLength;
            }
            tempLength = 0; // reset

            if (i < length - 1) {
                j = i; // 让 j "追上" i
                i--; // 细节
            }
        }
    }

    return res;
}

// 测试
// const str = "aabbcccddeeee11223";
// console.log(findContinuousChar2(str));

let str = "";
for (let i = 0; i < 100 * 10000; i++) {
    str += i.toString();
}

console.time("f1");
findContinuousChar1(str);
console.timeEnd("f1");

console.time("f2");
findContinuousChar2(str);
console.timeEnd("f2");
