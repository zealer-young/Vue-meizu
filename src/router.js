import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Cart from './pages/cart'
// import Login from './pages/login'
// import Order from './pages/order'
// import OrderConfirm from './pages/orderConfirm'
// import OrderList from './pages/orderList'
// import OrderPay from './pages/orderPay'
// import AliPay from './pages/alipay'
Vue.use(Router);

//路由按需加载方案：1.可以安装@babel/plugin-syntax-dynamic-import 插件   2.利用import语法
  
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    /*利用Promise语法实现路由按需加载方案，不用安装插件
                     component: resolve => require(['./pages/product.vue'],resolve),
                     */
                
                    //利用import语法实现路由按需加载方案,需要安装babel/plugin-syntax-dynamic-import插件
                    component: () => import('./pages/product.vue')
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: () => import('./pages/detail.vue')
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('./pages/cart.vue')
        },
        {
            path: '/login',
            name: 'login',
            //利用@babel/plugin-syntax-dynamic-import插件实现路由按需加载方案的语法
            component: () => import('./pages/login.vue'),
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('./pages/order.vue'), 
            children: [
                {
                    path: 'list',
                    name: 'order-list',
                    component: () => import('./pages/orderList.vue'), 
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: () => import('./pages/orderConfirm.vue')
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: () => import('./pages/orderPay.vue')
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    //利用Promise语法实现路由按需加载方案，不用安装插件
                    component: () => import('./pages/alipay.vue')
                }
            ]
        }
    ]
})
