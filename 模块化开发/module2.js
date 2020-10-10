"use strict";
//从module1.js文件里导入name,age,sum,obj
import * as module1 from "./module1.js";

console.log(module1.name);
console.log(module1.age);
console.log(module1.sum(20,30));
console.log(module1.User);
