import fs from "fs";
import cheerio from "cheerio";
import { IAnalyzer } from "./crowller";

interface Movie {
  title: string;
  area: string;
  duration: number;
}

interface MoviesResult {
  time: string;
  data: Movie[];
}

interface Content {
  [propName: string]: Movie[];
}

export default class Analyzer implements IAnalyzer {
  private static instance: Analyzer;
  static getInstance() {
    if (!Analyzer.instance) {
      Analyzer.instance = new Analyzer();
    }
    return Analyzer.instance;
  }
  private getMoviesInfo(html: string) {
    const $ = cheerio.load(html);
    const itemCards = $(".el-card__body");
    const movieInfos: Movie[] = [];
    itemCards.map((index, ele) => {
      const title = $(ele).find(".m-b-sm").text();
      const area = $(ele).find(".m-v-sm").eq(0).text().split("/")[0];
      const duration = $(ele).find(".m-v-sm").eq(0).text().split("/")[1];
      movieInfos.push({
        title,
        area: area.replace(/[\r\n]/g, "").replace(/(^\s*)|(\s*$)/g, ""),
        duration: parseInt(duration),
      });
    });
    const timestamp = new Date().getTime();
    const date = new Date(timestamp); // 根据时间戳创建Date对象
    const year = date.getFullYear(); // 获取年份
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 获取月份，需要加1
    const day = date.getDate().toString().padStart(2, "0"); // 获取日期
    const hour = date.getHours().toString().padStart(2, "0"); // 获取小时
    const minute = date.getMinutes().toString().padStart(2, "0"); // 获取分钟
    const second = date.getSeconds().toString().padStart(2, "0"); // 获取秒数
    const formattedDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`; // 拼接成格式化后的日期字符串
    return {
      time: formattedDate,
      data: movieInfos,
    };
  }

  private generateJsonContent(moviesInfo: MoviesResult, filePath: string) {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent =
        (fs.readFileSync(filePath, "utf-8") &&
          JSON.parse(fs.readFileSync(filePath, "utf-8"))) ||
        {};
    }
    fileContent[moviesInfo.time] = moviesInfo.data;
    return fileContent;
  }

  public analyze(html: string, filePath: string) {
    const moviesInfo = this.getMoviesInfo(html);
    const fileContent = this.generateJsonContent(moviesInfo, filePath);
    return JSON.stringify(fileContent);
  }
}
