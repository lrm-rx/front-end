// 类中的泛型和泛型类型
class DataManager {
  constructor(private data: string[] | number[]) {}
  getItem(index: number): string | number {
    return this.data[index];
  }
}

const data = new DataManager(["1"]);
data.getItem(0);
