const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  lintOnSave: false,
  devServer:{
    host:'localhost',
    port:8080,
    // 告诉dev-server在服务器启动后打开浏览器，将其设置true为打开默认浏览器
    open: true,
    // proxy:{
    //   '/api':{
    //     target:'http://mall-pre.springboot.cn',
    //     changeOrigin:true,
    //     pathRewrite:{
    //       '/api':''
    //     }
    //   }
    // }
  },
  publicPath: process.env.NODE_ENV === "production" ? './' : '/',
  // outputDir:'dest',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap: false,
  configureWebpack: config => {
    config.optimization && (config.optimization.splitChunks.minSize = 10000);
    config.plugins.push(new HtmlWebpackInlinePlugin());
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        // Webpack完成捆绑过程后要执行的命令：删除dist目录下ignore目录，prod-md5-zip目录
        new FileManagerPlugin({
          onEnd: [{
            delete: [`./dist/ignore`, "./prod-md5-zip"]
          }]
        })
      );
    }
    // 单个asset静态资源文件的大小最大为409600B==>400KB,超过400KB则会给出警告
    config.performance = {
      maxEntrypointSize: 5000000,
      maxAssetSize: 50000000
    };
  },
  //删除预加载设置项
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}
