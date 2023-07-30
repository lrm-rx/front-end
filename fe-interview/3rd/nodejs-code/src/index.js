console.log("start");
setImmediate(() => {
  console.log("setImmediate");
});
setTimeout(() => {
  console.log("setTimeout");
});
Promise.resolve().then(() => {
  console.log("promise then");
});
// 推荐使用setImmediate代替process.nextTick
process.nextTick(() => {
  console.log("nextTick");
});
console.log("end");

// start
// end
// nextTick
// promise then
// setTimeout
// setImmediate
