
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
      //  css-loader
      {
        //正则表达式匹配所有以.css结尾的文件
        test: /\.css$/,
        //style-loader是将css样式作用到DOM上
        //css-loader是将css文件处理
        //加载的顺序是从右往左加载
        use: [ 'style-loader', 'css-loader' ]
      },
      //  less-loader
      {
        //正则表达式匹配所有以.less结尾的文件
        test: /\.less$/,
        //加载的顺序是从右往左加载
        //less-loader将less文件编译成css
        //css-loader将css文件转换为浏览器可读的文件
        //style-loader将样式添加到DOM上
        /*use: [ 'style-loader', 'css-loader','less-loader' ]*/
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader'
          },
          {
            loader:'less-loader'
          },
        ]
      },
      //  url-loader
      {
        // 匹配png/jpg/gif/jpeg等图片资源
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 限制大小为20kb，默认是8kb
              limit: 20480,
              name: 'img/[name].[hash:8],[ext]'
            }
          }
        ]
      }
    ]
  }
};