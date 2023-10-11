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


function toChangeRealPdf (result, ref, pageName, loading, margin = 10, colors = [0, 153, 217]) {
  const [color1, color2, color3] = colors
  // grid-stack
  if (result) {
    html2canvas(ref, {
      onclone: (document) => {
        document.getElementsByClassName('grid-stack')[0].style.backgroundColor = `rgba(${color1},${color2},${color3},1)`
      },
      scale: window.devicePixelRatio * 2 // 增加清晰度
    }).then(canvas => {
      // 未生成pdf的canvas页面高度
      let leftHeight = canvas.height

      const a4Width = 190
      const a4Height = 277 // A4大小，210mm x 297mm，四边各保留10mm的边距，显示区域190x277
      // 一页pdf显示html页面生成的canvas高度;
      const a4HeightCanvas = Math.floor(canvas.width / a4Width * a4Height)

      const context = canvas.getContext('2d')
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height)

      // pdf页面偏移
      let position = 0

      const pdf = new jsPDF('p', 'mm', 'a4') // A4纸，纵向
      let index = 1
      const canvas1 = document.createElement('canvas')
      let height
      pdf.setDisplayMode('fullwidth', 'continuous', 'FullScreen')
      const createImgPdf = (canvas) => {
        if (leftHeight > 0) {
          index++
          let checkCount = 0
          if (leftHeight > a4HeightCanvas) {
            let i = position + a4HeightCanvas
            // 获取图像数据
            // const context = canvas.getContext('2d')
            const canvasW = canvas.width
            const mid = parseInt(canvasW / 2)
            for (i = position + a4HeightCanvas; i >= position; i--) {
              let isWrite = true
              for (let j = 0; j < mid; j++) {
                // 每四个数组元素代表了一个像素点的RGBA信息，每个元素数值介于0~255
                const c = imageData.data
                const index = i * canvasW + j
                const lastIndex = i * canvasW - j - 1
                const index4 = 4 * index
                const lastIndex4 = 4 * lastIndex
                if (!(c[index4] == color1 && c[index4 + 1] == color2 && c[index4 + 2] == color3 && c[index4 + 3] == 255) ||
              !(c[lastIndex4] == color1 && c[lastIndex4 + 1] == color2 && c[lastIndex4 + 2] == color3 && c[lastIndex4 + 3] == 255)) {
                  isWrite = false
                  break
                }
              }
              if (isWrite) {
                checkCount++
                if (checkCount >= margin * 2) {
                  break
                }
              } else {
                checkCount = 0
              }
            }
            height = Math.round(i - position) || Math.min(leftHeight, a4HeightCanvas)
            if (height <= 0) {
              height = a4HeightCanvas
            }
          } else {
            height = leftHeight
          }

          canvas1.width = canvas.width
          canvas1.height = height

          console.log(index, 'height:', height, 'pos', position)

          const ctx = canvas1.getContext('2d')
          ctx.drawImage(result, 0, position, canvas.width, height, 0, 0, canvas.width, height)

          if (position != 0) {
            pdf.addPage()
          }
          pdf.addImage(canvas1, 'JPEG', 10, 10, a4Width, a4Width / canvas1.width * height)
          leftHeight -= height
          position += height
        }
      }

      // 当内容未超过pdf一页显示的范围，无需分页
      if (leftHeight < a4HeightCanvas) {
        // const pageData = result.toDataURL('image/jpeg', 1.0)
        pdf.addImage(result, 'JPEG', 10, 10, a4Width, a4Width / result.width * leftHeight)
      } else {
        while (leftHeight > 0) {
          createImgPdf(canvas)
        }
      }
      pdf.save(pageName + '.pdf')
      // console.log(that.$createDate())
      loading.close()
    })
  }
}

export function downloadPdf (ref, pageName, margin, colors) {
  const loading = Loading.service({
    fullscreen: true,
    lock: true,
    text: 'Loading',
    spinner: 'icon-loading',
    background: 'rgba(255, 255, 255, 0.7)'
  })
  // console.log(that.$createDate())
  html2canvas(ref, {
    scale: window.devicePixelRatio * 2 // 增加清晰度
  }).then(canvas => {
    toChangeRealPdf(canvas, ref, pageName, loading, margin, colors)
  })
}


