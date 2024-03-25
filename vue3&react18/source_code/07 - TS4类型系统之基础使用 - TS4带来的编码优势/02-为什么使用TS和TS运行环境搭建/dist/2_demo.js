//TS默认是全局环境，只要文件使用模块化操作那么就会变成局部环境
import { bar } from './3_demo';
var foo = 321;
console.log(foo + bar);
