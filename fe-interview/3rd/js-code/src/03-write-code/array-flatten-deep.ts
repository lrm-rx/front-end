// 数组深度扁平化

// 数组深度扁平化，使用 push
export function flattenDeep1(arr: any[]): any[] {
    const res: any[] = []

    arr.forEach(item => {
        if (Array.isArray(item)) {
            const flatItem = flattenDeep1(item) // 递归
            flatItem.forEach(n => res.push(n))
        } else {
            res.push(item)
        }
    })

    return res
}

// 数组深度扁平化，使用 concat
export function flattenDeep2(arr: any[]): any[] {
    let res: any[] = []

    arr.forEach(item => {
        if (Array.isArray(item)) {
            const flatItem = flattenDeep2(item) // 递归
            res = res.concat(flatItem)
        } else {
            res = res.concat(item)
        }
    })

    return res
}


// // 功能测试
// const arr = [1, [2, [3, ['a', [true], 'b'], 4], 5], 6]
// console.info( flattenDeep2(arr) )
