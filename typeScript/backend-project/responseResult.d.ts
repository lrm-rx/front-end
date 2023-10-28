declare namespace responseResult {
  interface IItem {
    [key: string]: string | number;
  }

  interface DataStructure {
    [key: string]: IItem[];
  }
  type isLogin = boolean;
  type login = boolean;
  type logout = boolean;
  type getData = boolean;
  type showData = DataStructure | boolean;
}
