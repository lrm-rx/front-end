import { moveZero1 } from "./move-zero";

describe("移动 0 到数组末尾", () => {
    it("正常情况", () => {
        const arr = [1, 0, 2, 3, 0, 0, 0, 99, 0, 111];
        moveZero1(arr);
        expect(arr).toEqual([1, 2, 3, 99, 111, 0, 0, 0, 0, 0]);
    });
    it("没有0", () => {
        const arr = [1, 2, 3, 99, 111];
        moveZero1(arr);
        expect(arr).toEqual([1, 2, 3, 99, 111]);
    });

    it("全是0", () => {
        const arr = [0, 0, 0, 0, 0, 0];
        moveZero1(arr);
        expect(arr).toEqual([0, 0, 0, 0, 0, 0]);
    });
});
