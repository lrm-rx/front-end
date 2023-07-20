// 连续字符

import { findContinuousChar1 } from "./continuous-char";

describe("连续字符和长度", () => {
    it("正常情况", () => {
        const str = "aabbcccddeeee11223";
        const res = findContinuousChar1(str);
        expect(res).toEqual({ char: "e", length: 4 });
    });
    it("空字符串", () => {
        const str = "";
        const res = findContinuousChar1(str);
        expect(res).toEqual({ char: "", length: 0 });
    });
    it("无连续字符", () => {
        const str = "abcdefg";
        const res = findContinuousChar1(str);
        expect(res).toEqual({ char: "a", length: 1 });
    });
    it("全部都是连续字符", () => {
        const str = "cccc";
        const res = findContinuousChar1(str);
        expect(res).toEqual({ char: "c", length: 4 });
    });
});
