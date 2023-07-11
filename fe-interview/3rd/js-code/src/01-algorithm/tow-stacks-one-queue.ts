// 两个栈 => 一个队列

export class MyQueue {
    private stack1: number[] = [];
    private stack2: number[] = [];

    // 入队
    add(n: number) {
        this.stack1.push(n);
    }

    // 出队
    delete(): number | null {
        let res;

        const stack1 = this.stack1;
        const stack2 = this.stack2;

        // 将stack1所有的元素移动到 stack2中
        while (stack1.length) {
            const n = stack1.pop();
            if (n != null) {
                stack2.push(n);
            }
        }
        // stack2 pop
        res = stack2.pop();

        // 将 stack2 所有元素"还给"stack1
        while (stack2.length) {
            const n = stack2.pop();
            if (n != null) {
                stack1.push(n);
            }
        }
        return res || null;
    }

    get length(): number {
        return this.stack1.length;
    }
}

// 测试
const q = new MyQueue();
q.add(100);
q.add(200);
q.add(300);
console.log(q.length);
console.log(q.delete());
console.log(q.length);
console.log("----------------");
console.log(q.length);
console.log(q.delete());
console.log(q.length);
