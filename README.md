# Vue-meizu

预览地址：http://119.45.36.15:8001


## 介绍
`Vue-meizu`是一个参考[魅族官网](https://www.meizu.com/)的项目，项目中涉及到的技术栈如下：

**Vue生态**:
* `Vue.js`：项目基于Vue框架开发，[Vue.js官网](https://cn.vuejs.org/)
* `Vue-cli4.0`：`Vue`官方提供的脚手架工具，它提供了标准的目录结构和一些必要的配置，[Vue-cli官网](https://cli.vuejs.org/zh/)
* `Vuex`：数据状态管理工具，[Vuex官网](https://vuex.vuejs.org/)。
* `Vue-router`：路由管理工具，[Vue-router官网](https://router.vuejs.org/)

**CSS预编译器**：
* `Sass`：一个`CSS`预编译工具，类似工具还有`Stylus/Less`，[Sass官网](https://www.sass.hk/)

**数据请求**：
* `axios`：一个非常出名的`HTTP`请求工具，[axios官网](http://www.axios-js.com/)


**MOCK数据**：
* `RAP2-DELOS`：阿里妈妈前端团队出品的开源接口管理工具RAP第二代， [RAP2-DELOS网址](http://rap2.taobao.org/)


**Element-ui**：
* `element-ui`：知名UI库，项目中部分UI使用了element-ui

## 背景
近期转行，选择自学前端开发，学得越多越发现前端的乐趣。但是毕竟新手上路，能力有限、经验不足，所以尝试写了这个项目，毕竟实践出真知。

第一个练手的项目，多有不足，代码如有不当之处，欢迎批评指正


## 功能实现
### 首页
* 搜索框
* 导航栏 悬浮
* swiper滑动，切换页面
* 首页模块化
### 登录
* 用户登录、退出
### 订单列表
* 订单详情
* 完成未支付订单，再次支付
* 收货地址：增加，删除，修改
* 订单支付
### 购物车
* 商品选择，数量增、减
* 商品全选、反选、删除



### 首页

## 未来计划
- 开发`vue-meizu`完整网页
- 开发`vue-meizu`完善mock-data


## 安装
```sh
# 安装依赖
npm install

# 本地开发
npm run serve

# 打包
npm run build
```

