// 二分查找
import { binarySearch1, binarySearch2 } from "./binary-search";

describe("二分查找", () => {
    it("正常情况", () => {
        const arr = [10, 20, 30, 40, 50];
        const target = 30;
        const index = binarySearch1(arr, target);
        expect(index).toBe(2);
    });

    it("空数组", () => {
        expect(binarySearch1([], 100)).toBe(-1);
    });

    it("找不到target", () => {
        const arr = [10, 20, 30, 40, 50];
        const target = 300;
        const index = binarySearch1(arr, target);
        expect(index).toBe(-1);
    });
});
