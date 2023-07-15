// 两数之和
import { findTowNumbers1 } from "./two-numbers-sum";

describe("两数之和", () => {
    it("正常情况", () => {
        const arr = [1, 2, 4, 7, 11, 15];
        const res = findTowNumbers1(arr, 15);
        expect(res).toEqual([4, 11]);
    });

    it("空数组", () => {
        const res = findTowNumbers1([], 130);
        expect(res).toEqual([]);
    });

    it("找不到结果", () => {
        const arr = [1, 2, 4, 7, 11, 15];
        const n = 1000;
        const res = findTowNumbers1(arr, n);
        expect(res).toEqual([]);
    });
});
