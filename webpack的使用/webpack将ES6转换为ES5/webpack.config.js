
//从node的系统模块中获得path
const path=require('path');

//指定webpack打包的起点（来源）和终点（目的地）
module.exports={
  //起点字符串路径
  entry:'./src/main.js',
  //终点对象
  output:{
    //路径（拼接字符串）
    path:path.resolve(__dirname,'dist'),
    //生成的文件名
    filename:'bundle.js',
  },
  module: {
    rules: [
      {
        // 匹配以.js为后缀的文件
        test: /\.js$/,
        // 排除（不匹配）node_modules或者bower_components
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
};