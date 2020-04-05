import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
import Cart from './pages/cart'
// import Login from './pages/login'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'
Vue.use(Router);

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
                    component: resolve => require(['./pages/index.vue'],resolve),
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: resolve => require(['./pages/detail.vue'],resolve),
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['./pages/login.vue'],resolve),
        },
        {
            path: '/order',
            name: 'order',
            component: Order,  
            children: [
                {
                    path: 'list',
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay,
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: AliPay,
                }
            ]
        }
    ]
})
