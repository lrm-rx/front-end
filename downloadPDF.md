# jsPDF和html2canvas下载PDF

当页数过多时需要优化:

```JS
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

```

