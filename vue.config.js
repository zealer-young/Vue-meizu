module.exports = {
  devServer: {
    // host: "localhost",
    // port: 8080,
    assetsSubDirectory: "public",
    assetsPublicPath: "/",
    proxy: {
      "/api": {
        // target:'http://mall-pre.springboot.cn',
        target: "http://localhost:8080/",
        changeOrigin: true,
        pathRewrite: {
          'api': ''
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dest',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap: true,
  //删除预加载设置项
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  }
};
