function muti(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
}

const nums = [1, 2, 3];
// nums.forEach(async (9) => {
//   const res = await muti(i)
//   console.log(res);
// })

!(async function () {
  for (const i of nums) {
    const res = await muti(i);
    console.log(res);
  }
})();
