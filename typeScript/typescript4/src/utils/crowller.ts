import fs from "fs";
import path from "path";
import superagent from "superagent";
// import Analyzer from "./analyzer";

export interface IAnalyzer {
  analyze: (html: string, filePath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, "../../data/movie.json");
  async getRawHtml() {
    const res = await superagent.get(this.url);
    return res.text;
  }

  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }

  constructor(private analyzer: IAnalyzer, private url: string) {
    this.initSpiderProcess();
  }
}

export default Crowller;

// const url = `https://ssr1.scrape.center/page/${
//   Math.floor(Math.random() * 5) + 1
// }`;
// const filePath = path.resolve(__dirname, "../../data/movie.json");
// const analyzer = Analyzer.getInstance();
// new Crowller(analyzer, url);

// console.log("webpack5");
// console.log("webpack5");
