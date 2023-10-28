declare namespace responseResult {
  interface IItem {
    [key: string]: string | number;
  }

  interface DataStructure {
    [key: string]: IItem[];
  }
  export type isLogin = boolean;
  export type login = boolean;
  export type logout = boolean;
  export type getData = boolean;
  export type showData = DataStructure | boolean;
}
