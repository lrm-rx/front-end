// jsPDF和html2canvas下载PDF

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function downloadPdf(dom) {
  let pdfName = new Date().getTime();
  html2canvas(dom, {
    allowTaint: true,
    dpi: window.devicePixelRatio * 2, // 提升导出文件的分辨率
    // scale: 4, // 提升导出文件的分辨率
  }).then((canvas) => {
    let timer = null;
    //未生成pdf的html页面高度
    let leftHeight = canvas.height;

    let a4Width = 190;
    let a4Height = 277; //A4大小，210mm x 297mm，四边各保留10mm的边距，显示区域190x277
    //一页pdf显示html页面生成的canvas高度;
    let a4HeightRef = Math.floor((canvas.width / a4Width) * a4Height);

    //pdf页面偏移
    let position = 0;

    let pageData = canvas.toDataURL("image/jpeg", 1.0);

    let pdf = new jsPDF("p", "mm", "a4"); //A4纸，纵向
    let canvas1 = document.createElement("canvas"),
      height;
    pdf.setDisplayMode("fullwidth", "continuous", "FullScreen");
    function createImpl(canvas) {
      if (leftHeight > 0) {
        let checkCount = 0;
        if (leftHeight > a4HeightRef) {
          let i = position + a4HeightRef;
          for (; i >= position; i--) {
            let isWrite = true;
            for (let j = 0; j < canvas.width; j++) {
              let c = canvas
                .getContext("2d", { willReadFrequently: true })
                .getImageData(j, i, 1, 1).data;

              if (c[0] != 0xff || c[1] != 0xff || c[2] != 0xff) {
                isWrite = false;
                break;
              }
            }
            if (isWrite) {
              checkCount++;
              if (checkCount >= 10) {
                break;
              }
            } else {
              checkCount = 0;
            }
          }
          height =
            Math.round(i - position) || Math.min(leftHeight, a4HeightRef);
          if (height <= 0) {
            height = a4HeightRef;
          }
        } else {
          height = leftHeight;
        }

        canvas1.width = canvas.width;
        canvas1.height = height;

        let ctx = canvas1.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(
          canvas,
          0,
          position,
          canvas.width,
          height,
          0,
          0,
          canvas.width,
          height
        );
        if (position != 0) {
          pdf.addPage();
        }
        pdf.addImage(
          canvas1.toDataURL("image/jpeg", 1.0),
          "JPEG",
          10,
          10,
          a4Width,
          (a4Width / canvas1.width) * height
        );
        leftHeight -= height;
        position += height;
        if (leftHeight > 0) {
          timer = setTimeout(createImpl, 500, canvas);
        } else {
          pdf.save(pdfName + ".pdf");
          clearTimeout(timer);
        }
      }
    }

    //当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < a4HeightRef) {
      pdf.addImage(
        pageData,
        "JPEG",
        10,
        10,
        a4Width,
        (a4Width / canvas.width) * leftHeight
      );
      pdf.save(pdfName + ".pdf");
      clearTimeout(timer);
    } else {
      try {
        timer = setTimeout(createImpl, 500, canvas);
      } catch (err) {
        clearTimeout(timer);
        console.log(err);
      }
    }
  });
}

function toChangeRealPdf(
  result,
  ref,
  pageName,
  loading,
  margin = 10,
  colors = [0, 153, 217]
) {
  const [color1, color2, color3] = colors;
  // grid-stack
  if (result) {
    html2canvas(ref, {
      onclone: (document) => {
        document.getElementsByClassName(
          "grid-stack"
        )[0].style.backgroundColor = `rgba(${color1},${color2},${color3},1)`;
      },
      scale: window.devicePixelRatio * 2, // 增加清晰度
    }).then((canvas) => {
      // 未生成pdf的canvas页面高度
      let leftHeight = canvas.height;

      const a4Width = 190;
      const a4Height = 277; // A4大小，210mm x 297mm，四边各保留10mm的边距，显示区域190x277
      // 一页pdf显示html页面生成的canvas高度;
      const a4HeightCanvas = Math.floor((canvas.width / a4Width) * a4Height);

      const context = canvas.getContext("2d");
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

      // pdf页面偏移
      let position = 0;

      const pdf = new jsPDF("p", "mm", "a4"); // A4纸，纵向
      let index = 1;
      const canvas1 = document.createElement("canvas");
      let height;
      pdf.setDisplayMode("fullwidth", "continuous", "FullScreen");
      const createImgPdf = (canvas) => {
        if (leftHeight > 0) {
          index++;
          let checkCount = 0;
          if (leftHeight > a4HeightCanvas) {
            let i = position + a4HeightCanvas;
            // 获取图像数据
            // const context = canvas.getContext('2d')
            const canvasW = canvas.width;
            const mid = parseInt(canvasW / 2);
            for (i = position + a4HeightCanvas; i >= position; i--) {
              let isWrite = true;
              for (let j = 0; j < mid; j++) {
                // 每四个数组元素代表了一个像素点的RGBA信息，每个元素数值介于0~255
                const c = imageData.data;
                const index = i * canvasW + j;
                const lastIndex = i * canvasW - j - 1;
                const index4 = 4 * index;
                const lastIndex4 = 4 * lastIndex;
                if (
                  !(
                    c[index4] == color1 &&
                    c[index4 + 1] == color2 &&
                    c[index4 + 2] == color3 &&
                    c[index4 + 3] == 255
                  ) ||
                  !(
                    c[lastIndex4] == color1 &&
                    c[lastIndex4 + 1] == color2 &&
                    c[lastIndex4 + 2] == color3 &&
                    c[lastIndex4 + 3] == 255
                  )
                ) {
                  isWrite = false;
                  break;
                }
              }
              if (isWrite) {
                checkCount++;
                if (checkCount >= margin * 2) {
                  break;
                }
              } else {
                checkCount = 0;
              }
            }
            height =
              Math.round(i - position) || Math.min(leftHeight, a4HeightCanvas);
            if (height <= 0) {
              height = a4HeightCanvas;
            }
          } else {
            height = leftHeight;
          }

          canvas1.width = canvas.width;
          canvas1.height = height;

          console.log(index, "height:", height, "pos", position);

          const ctx = canvas1.getContext("2d");
          ctx.drawImage(
            result,
            0,
            position,
            canvas.width,
            height,
            0,
            0,
            canvas.width,
            height
          );

          if (position != 0) {
            pdf.addPage();
          }
          pdf.addImage(
            canvas1,
            "JPEG",
            10,
            10,
            a4Width,
            (a4Width / canvas1.width) * height
          );
          leftHeight -= height;
          position += height;
        }
      };

      // 当内容未超过pdf一页显示的范围，无需分页
      if (leftHeight < a4HeightCanvas) {
        // const pageData = result.toDataURL('image/jpeg', 1.0)
        pdf.addImage(
          result,
          "JPEG",
          10,
          10,
          a4Width,
          (a4Width / result.width) * leftHeight
        );
      } else {
        while (leftHeight > 0) {
          createImgPdf(canvas);
        }
      }
      pdf.save(pageName + ".pdf");
      // console.log(that.$createDate())
      loading.close();
    });
  }
}

export function downloadPdf(ref, pageName, margin, colors) {
  const loading = Loading.service({
    fullscreen: true,
    lock: true,
    text: "Loading",
    spinner: "icon-loading",
    background: "rgba(255, 255, 255, 0.7)",
  });
  // console.log(that.$createDate())
  html2canvas(ref, {
    scale: window.devicePixelRatio * 2, // 增加清晰度
  }).then((canvas) => {
    toChangeRealPdf(canvas, ref, pageName, loading, margin, colors);
  });
}

// -----------------------------------------------------------------------------------------------

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { message } from "ant-design-vue";
const A4_WIDTH = 592.28;
const A4_HEIGHT = 841.89;
// 将元素转化为canvas元素
// 通过 放大 提高清晰度
// width为内容宽度
async function toCanvas(element, width) {
  // canvas元素
  const canvas = await html2canvas(element, {
    // allowTaint: true, // 允许渲染跨域图片
    scale: window.devicePixelRatio * 2, // 增加清晰度
    useCORS: true, // 允许跨域
    onrendered: function (canvas) {
      document.body.appendChild(canvas);
    },
  });
  // 获取canavs转化后的宽度
  const canvasWidth = canvas.width;
  // 获取canvas转化后的高度
  const canvasHeight = canvas.height;
  // 高度转化为PDF的高度
  const height = (width / canvasWidth) * canvasHeight;
  // 转化成图片Data
  const canvasData = canvas.toDataURL("image/jpeg", 1.0);
  //console.log(canvasData)
  return { width, height, data: canvasData };
}
/**
 * 生成pdf(A4多页pdf截断问题， 包括页眉、页脚 和 上下左右留空的护理)
 * @param {Object} param
 * @param {HTMLElement} param.element - 需要转换的dom根节点
 * @param {number} [param.contentWidth=550] - 一页pdf的内容宽度，0-592.28
 * @param {string} [param.filename='document.pdf'] - pdf文件名
 * @param {HTMLElement} param.header - 页眉dom元素
 * @param {HTMLElement} param.footer - 页脚dom元素
 */
export async function outputPDF({
  element,
  contentWidth = 550,
  footer,
  header,
  filename = "测试A4分页.pdf",
}) {
  if (!(element instanceof HTMLElement)) {
    return;
  }
  // jsPDFs实例
  const pdf = new jsPDF({
    unit: "pt",
    format: "a4",
    orientation: "p",
  });

  // 一页的高度， 转换宽度为一页元素的宽度
  const { width, height, data } = await toCanvas(element, contentWidth);

  // 添加页脚
  async function addHeader(header, pdf, contentWidth) {
    const {
      height: headerHeight,
      data: headerData,
      width: hWidth,
    } = await toCanvas(header, contentWidth);
    pdf.addImage(headerData, "JPEG", 0, 0, contentWidth, headerHeight);
  }

  // 添加页眉
  async function addFooter(pageNum, now, footer, pdf, contentWidth) {
    const newFooter = footer.cloneNode(true);
    newFooter.querySelector(".pdf-footer-page").innerText = now;
    newFooter.querySelector(".pdf-footer-page-count").innerText = pageNum;
    document.documentElement.append(newFooter);
    const {
      height: footerHeight,
      data: footerData,
      width: fWidth,
    } = await toCanvas(newFooter, contentWidth);
    pdf.addImage(
      footerData,
      "JPEG",
      0,
      A4_HEIGHT - footerHeight,
      contentWidth,
      footerHeight
    );
  }

  // 添加
  function addImage(_x, _y, pdf, data, width, height) {
    pdf.addImage(data, "JPEG", _x, _y, width, height);
  }

  // 增加空白遮挡
  function addBlank(x, y, width, height, pdf) {
    pdf.setFillColor(255, 255, 255);
    pdf.rect(x, y, Math.ceil(width), Math.ceil(height), "F");
  }

  // 页脚元素 经过转换后在PDF页面的高度
  const { height: tfooterHeight } = await toCanvas(footer, contentWidth);

  // 页眉元素 经过转换后在PDF的高度
  const { height: theaderHeight } = await toCanvas(header, contentWidth);

  // 距离PDF左边的距离，/ 2 表示居中
  const baseX = (A4_WIDTH - contentWidth) / 2; // 预留空间给左边
  // 距离PDF 页眉和页脚的间距， 留白留空
  const baseY = 15;

  // 出去页头、页眉、还有内容与两者之间的间距后 每页内容的实际高度
  const originalPageHeight =
    A4_HEIGHT - tfooterHeight - theaderHeight - 2 * baseY;

  // 元素在网页页面的宽度
  const elementWidth = element.offsetWidth;

  // PDF内容宽度 和 在HTML中宽度 的比， 用于将 元素在网页的高度 转化为 PDF内容内的高度， 将 元素距离网页顶部的高度  转化为 距离Canvas顶部的高度
  const rate = contentWidth / elementWidth;

  // 每一页的分页坐标， PDF高度， 初始值为根元素距离顶部的距离
  const pages = [rate * getElementTop(element)];

  // 获取元素距离网页顶部的距离
  // 通过遍历offsetParant获取距离顶端元素的高度值
  function getElementTop(element) {
    let actualTop = element.offsetTop;
    let current = element.offsetParent;

    while (current && current !== null) {
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }
    return actualTop;
  }

  // 遍历正常的元素节点
  function traversingNodes(nodes) {
    for (let i = 0; i < nodes.length; ++i) {
      const one = nodes[i];
      // 需要判断跨页且内部存在跨页的元素
      const isDivideInside =
        one.classList && one.classList.contains("divide-inside");
      // 图片元素不需要继续深入，作为深度终点
      const isIMG = one.tagName === "IMG";
      // table的每一行元素也是深度终点
      const isTableCol =
        one.classList && one.classList.contains("ant-table-row");
      // 特殊的富文本元素
      const isEditor = one.classList && one.classList.contains("editor");
      // 对需要处理分页的元素，计算是否跨界，若跨界，则直接将顶部位置作为分页位置，进行分页，且子元素不需要再进行判断
      let { offsetHeight } = one;
      // 计算出最终高度
      let offsetTop = getElementTop(one);

      // dom转换后距离顶部的高度
      // 转换成canvas高度
      const top = rate * offsetTop;

      // 对于需要进行分页且内部存在需要分页（即不属于深度终点）的元素进行处理
      if (isDivideInside) {
        // 执行位置更新操作
        updatePos(rate * offsetHeight, top, one);
        // 执行深度遍历操作
        traversingNodes(one.childNodes);
      }
      // 对于深度终点元素进行处理
      else if (isTableCol || isIMG) {
        // dom高度转换成生成pdf的实际高度
        // 代码不考虑dom定位、边距、边框等因素，需在dom里自行考虑，如将box-sizing设置为border-box
        updatePos(rate * offsetHeight, top, one);
      } else if (isEditor) {
        // 执行位置更新操作
        updatePos(rate * offsetHeight, top, one);
        // 遍历富文本节点
        traversingEditor(one.childNodes);
      }
      // 对于普通元素，则判断是否高度超过分页值，并且深入
      else {
        // 执行位置更新操作
        updateNomalElPos(top);
        // 遍历子节点
        traversingNodes(one.childNodes);
      }
    }
    return;
  }

  // 对于富文本元素，观察所得段落之间都是以<p> / <img> 元素相隔，因此不需要进行深度遍历 (仅针对个人遇到的情况)
  function traversingEditor(nodes) {
    // 遍历子节点
    for (let i = 0; i < nodes.length; ++i) {
      const one = nodes[i];
      let { offsetHeight } = one;
      let offsetTop = getElementTop(one);
      const top = (contentWidth / elementWidth) * offsetTop;
      updatePos((contentWidth / elementWidth) * offsetHeight, top, one);
    }
  }

  // 普通元素更新位置的方法
  // 普通元素只需要考虑到是否到达了分页点，即当前距离顶部高度 - 上一个分页点的高度 大于 正常一页的高度，则需要载入分页点
  function updateNomalElPos(top) {
    if (
      top - (pages.length > 0 ? pages[pages.length - 1] : 0) >
      originalPageHeight
    ) {
      pages.push(
        (pages.length > 0 ? pages[pages.length - 1] : 0) + originalPageHeight
      );
    }
  }

  // 可能跨页元素位置更新的方法
  // 需要考虑分页元素，则需要考虑两种情况
  // 1. 普通达顶情况，如上
  // 2. 当前距离顶部高度加上元素自身高度 大于 整页高度，则需要载入一个分页点
  function updatePos(eheight, top) {
    // 如果高度已经超过当前页，则证明可以分页了
    if (
      top - (pages.length > 0 ? pages[pages.length - 1] : 0) >=
      originalPageHeight
    ) {
      pages.push(
        (pages.length > 0 ? pages[pages.length - 1] : 0) + originalPageHeight
      );
    }
    // 若 距离当前页顶部的高度 加上元素自身的高度 大于 一页内容的高度, 则证明元素跨页，将当前高度作为分页位置
    else if (
      top + eheight - (pages.length > 0 ? pages[pages.length - 1] : 0) >
        originalPageHeight &&
      top != (pages.length > 0 ? pages[pages.length - 1] : 0)
    ) {
      pages.push(top);
    }
  }

  // 深度遍历节点的方法
  traversingNodes(element.childNodes);
  // 可能会存在遍历到底部元素为深度节点，可能存在最后一页位置未截取到的情况
  if (pages[pages.length - 1] + originalPageHeight < height) {
    pages.push(pages[pages.length - 1] + originalPageHeight);
  }
  //console.log({ pages, contentWidth, width,height })

  // 根据分页位置 开始分页
  for (let i = 0; i < pages.length; ++i) {
    message.success(`共${pages.length}页， 生成第${i + 1}页`);
    // 根据分页位置新增图片
    addImage(baseX, baseY + theaderHeight - pages[i], pdf, data, width, height);
    // 将 内容 与 页眉之间留空留白的部分进行遮白处理
    addBlank(0, theaderHeight, A4_WIDTH, baseY, pdf);
    // 将 内容 与 页脚之间留空留白的部分进行遮白处理
    addBlank(0, A4_HEIGHT - baseY - tfooterHeight, A4_WIDTH, baseY, pdf);
    // 对于除最后一页外，对 内容 的多余部分进行遮白处理
    if (i < pages.length - 1) {
      // 获取当前页面需要的内容部分高度
      const imageHeight = pages[i + 1] - pages[i];
      // 对多余的内容部分进行遮白
      addBlank(
        0,
        baseY + imageHeight + theaderHeight,
        A4_WIDTH,
        A4_HEIGHT - imageHeight,
        pdf
      );
    }
    // 添加页眉
    await addHeader(header, pdf, A4_WIDTH);
    // 添加页脚
    await addFooter(pages.length, i + 1, footer, pdf, A4_WIDTH);

    // 若不是最后一页，则分页
    if (i !== pages.length - 1) {
      // 增加分页
      pdf.addPage();
    }
  }
  return pdf.save(filename);
}
