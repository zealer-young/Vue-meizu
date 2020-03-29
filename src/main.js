import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'

// import env from './env'

//mock开关
const mock =  false;
if (mock) {
  require('./mock/api')
}
//根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
//接口代理：我们当前接口的域名和前端接口域名是一样的
//(下面这句话的意思)当我们是接口代理的时候
axios.defaults.baseURL = '/api';

//mock地址
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5e7a4a522d625c1c4330f5a8/api';

//超时设置为8秒（最好要定义，否则用户体验不好，常规设置为5-8秒）
axios.defaults.timeout = 8000;

//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

//接口错误拦截
//status为0代表成功，status为10代表未登录，其余为错误
//response.data为获取到接口返回的值
//res.data为接口返回的值，请求值
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if(res.status == 0) {
    return res.data;
  }else if(res.status == 10) {
    window.location.href = '/#/login';
  }else{
    alert(res.msg)
  }
});

Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad, {
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
