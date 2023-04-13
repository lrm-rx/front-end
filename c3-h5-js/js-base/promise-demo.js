function loadImg(src) {
  const p = new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      const err = new Error(`图片加载失败 ${src}`);
      reject(err);
    };
    img.src = src;
  });
  return p;
}

// const url = 'https://img1.baidu.com/it/u=2130153305,2568708992&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
// loadImg(url).then(img => {
//     console.log(img.width)
//     return img
// }).then(img => {
//     console.log(img.height)
// }).catch(ex => console.error(ex))

const url1 =
  "https://img1.baidu.com/it/u=2130153305,2568708992&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500";
const url2 =
  "https://img1.baidu.com/it/u=2130153305,2568708992&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500";

loadImg(url1)
  .then((img1) => {
    console.log(img1.width);
    return img1; // 普通对象
  })
  .then((img1) => {
    console.log(img1.height);
    return loadImg(url2); // promise 实例
  })
  .then((img2) => {
    console.log(img2.width);
    return img2;
  })
  .then((img2) => {
    console.log(img2.height);
  })
  .catch((ex) => console.error(ex));
