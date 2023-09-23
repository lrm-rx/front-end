/// <reference types="vite/client" />
// 在webstore中要添加下面的代码
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
