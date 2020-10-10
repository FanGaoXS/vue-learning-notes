"use strict";

// 1、直接利用export {}导出
//定义变量
let name='模块1';
let age=18;

//定义函数
function sum(num1,num2) {
  return num1+num2;
}

//定义类
class User {
  constructor() {}
}


//导出（暴露）
export {
  name,age,sum,User
}

// 2、在定义的时候导出
/*export let name='模块1';
export let age=18;
export function sum(num1,num2) {
  return num1+num2;
}
export let obj={
  constructor(){}
}*/

