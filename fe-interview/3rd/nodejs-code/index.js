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
