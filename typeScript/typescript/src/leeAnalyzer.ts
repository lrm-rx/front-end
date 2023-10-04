import { IAnalyzer } from "./crowller";

export default class LeeAnalyzer implements IAnalyzer {
  public analyze(html: string, filePath: string) {
    return html;
  }
}
