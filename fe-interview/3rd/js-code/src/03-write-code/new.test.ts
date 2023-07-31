// 自定义 new test
import { customNew } from "./new";

describe("自定义 new", () => {
    it("new", () => {
        class Foo {
            // 属性
            name: string;
            city: string;
            n: number;

            constructor(name: string, n: number) {
                this.name = name;
                this.city = "深圳";
                this.n = n;
            }

            getName() {
                return this.name;
            }
        }
        const f = customNew<Foo>(Foo, "lucky", 100);
        expect(f.name).toBe("lucky");
        expect(f.city).toBe("深圳");
        expect(f.n).toBe(100);
        expect(f.getName()).toBe("lucky");
    });
});
