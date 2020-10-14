//从info文件中导入
import * as info from "./js/info";

console.log(info.name);
console.log(info.age);
console.log(info.message);

//引入css文件
require('./css/index.css');

//引入less文件
require('./css/font.less')