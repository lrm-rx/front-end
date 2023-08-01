// import "./01-algorithm/array-rotate";
// import "./01-algorithm/match-bracket";
// import "./01-algorithm/reverse-link-list";
// import "./01-algorithm/queue-with-list";
// import "./01-algorithm/binary-search";
// import "./01-algorithm/two-numbers-sum";
// import "./01-algorithm/binary-search-tree";
// import "./01-algorithm/move-zero";
// import "./01-algorithm/continuous-char";
// import "./01-algorithm/x-reg";
// import "./01-algorithm/quick-sort";
// import "./01-algorithm/palindrome-number";
// import "./01-algorithm/thousands-format";
import "./01-algorithm/switch-letter-case";

const queue = [];

queue.push(100); // 入队
queue.push(200);
queue.push(300);

const n = queue.shift(); // 出队

// 链表 实现队列

// ['1', '2', '3'].map(parseInt)

const nums = ["1", "2", "3"];
const res = nums.map((item, index) => {
    // item: '1', index: 0
    // item: '2', index: 1
    // item: '3', index: 2
    return parseInt(item, index);
    // parseInt('1', 0) // 1
    // parseInt('2', 1) // NaN
    // parseInt('3', 2) // NaN
});

// 读代码
function Foo() {
    Foo.a = function () {
        console.log(1);
    };
    // @ts-ignore
    this.a = function () {
        console.log(2);
    };
}
Foo.prototype.a = function () {
    console.log(3);
};
Foo.prototype.b = function () {
    console.log(30);
};
Foo.a = function () {
    console.log(4);
};

Foo.a(); // 4
// @ts-ignore
let obj = new Foo();
obj.a(); // 2
obj.b(); // 30
Foo.a(); // 1
