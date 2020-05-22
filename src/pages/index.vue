<template>
  <div class="index">
<!--    <div class="container">-->
<!--      <div class="swiper-box">-->
<!--        <div class="nav-menu">-->
<!--          <ul class="menu-wrap">-->
<!--            <li class="menu-item">-->
<!--              <a href="javascript:;">手机 电话卡</a>-->
<!--              <div class="children">-->
<!--                <ul v-for="(item,i) in menuList" v-bind:key="i">-->
<!--                  <li v-for="(sub,j) in item" v-bind:key="j">-->
<!--                    <a v-bind:href="sub?'/#/product/'+sub.id:''">-->
<!--                      <img v-bind:src="sub?sub.img:require('../../public/imgs/item-box-2.png')" alt />-->
<!--                      {{sub?sub.name:'小米9'}}-->
<!--                    </a>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li class="menu-item">-->
<!--              <a href="javascript:;">电视 盒子</a>-->
<!--            </li>-->
<!--            <li class="menu-item">-->
<!--              <a href="javascript:;">笔记本 平板</a>-->
<!--            </li>-->
<!--            <li class="menu-item">-->
<!--              <a href="javascript:;">家电 插线板</a>-->
<!--            </li>-->
<!--            <li class="menu-item">-->
<!--              <a href="javascript:;">出行 穿戴</a>-->
<!--            </li>-->
<!--            <li class="menu-item">-->
<!--              <a href="javascript:;">智能 路由器</a>-->
<!--            </li>-->
<!--            <li class="menu-item">-->
<!--              <a href="javascript:;">电源 配件</a>-->
<!--            </li>-->
<!--            <li class="menu-item">-->
<!--              <a href="javascript:;">生活 箱包</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--        &lt;!&ndash; 当前swiper插件 swiperOption是这个插件的配置项&ndash;&gt;-->
<!--        <swiper v-bind:options="swiperOption">-->
<!--          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">-->
<!--            <a v-bind:href="'/#/product/'+item.id">-->
<!--              <img v-bind:src="item.img" />-->
<!--            </a>-->
<!--          </swiper-slide>-->
<!--          &lt;!&ndash; 分页器 &ndash;&gt;-->
<!--          <div class="swiper-pagination" slot="pagination"></div>-->
<!--          &lt;!&ndash; 导航按钮 &ndash;&gt;-->
<!--          <div class="swiper-button-prev" slot="button-prev"></div>-->
<!--          <div class="swiper-button-next" slot="button-next"></div>-->
<!--        </swiper>-->
<!--      </div>-->
<!--      <div class="ads-box">-->
<!--        <a v-bind:href="'/#/product'+item.id" v-for="(item,index) in adsList" v-bind:key="index">-->
<!--          &lt;!&ndash; v-lazy指令懒加载 双引号中储存的是变量名 &ndash;&gt;-->
<!--          <img v-lazy="item.img" alt />-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="banner">-->
<!--        <a href="/#/product/30">-->
<!--        &lt;!&ndash; v-lazy指令懒加载 双引号中储存的是字符串，需要用单引号再次引起来 &ndash;&gt;-->
<!--          <img v-lazy="'/imgs/banner-1.png'" alt />-->
<!--        </a>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="product-box">-->
<!--      <div class="container">-->
<!--        <h2>手机</h2>-->
<!--        <div class="wrapper">-->
<!--          <div class="banner-left">-->
<!--            <a href="/#/product/35">-->
<!--              <img v-lazy="'/imgs/mix-alpha.jpg'" alt />-->
<!--            </a>-->
<!--          </div>-->
<!--          <div class="list-box">-->
<!--            <div class="list" v-for="(arr,i) in phoneList" v-bind:key="i">-->
<!--              <div class="item" v-for="(item,j) in arr" v-bind:key="j">-->
<!--                &lt;!&ndash; 利用奇数偶数判断是否添加属性，样式为new-pro（新品） 或 kill-pro(秒杀)  &ndash;&gt;-->
<!--                <span v-bind:class="{'new-pro':j%2==0}">新品</span>-->
<!--                <div class="item-img">-->
<!--                  <img v-lazy="item.mainImage" alt />-->
<!--                </div>-->
<!--                <div class="item-info">-->
<!--                  <h3>{{item.name}}</h3>-->
<!--                  <p>{{item.subtitle}}</p>-->
<!--                  &lt;!&ndash; 添加点击加入购物车事件 &ndash;&gt;-->
<!--                  <p class="price" @click="addCart(item.id)">{{item.price}}元</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <service-bar></service-bar>-->
    <!-- modal组件 参数详情参考modal文件props设置 -->
      <nav-header></nav-header>
      <swiper></swiper>
      <ads-box></ads-box>
      <good-details></good-details>
      <banner-phone></banner-phone>
      <community></community>
      <new-footer></new-footer>
    <modal
    title="提示"
    sureText="查看购物车"
    btnType="1"
    modalType="middle"
    v-bind:showModal="showModal"
    v-on:submit="goToCart"
    v-on:cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功!</p>
      </template>
    </modal>
  </div>
</template>
<script>
// import ServiceBar from "../components/ServiceBar";
import Modal from "./../components/Modal";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";
import NavHeader from "../components/NavHeader";
import AdsBox from "../components/AdsBox";
import goodDetails from './../components/goodsDetails'
import Swiper from "../components/swiper";
import BannerPhone from "../components/BannerPhone";
import newFooter from "../components/newFooter";
import Community from './../components/Community'
export default {
  name: "index",
  components: {
    // swiper,
    // swiperSlide,
    // ServiceBar,
      NavHeader,
      Modal,
      AdsBox,
      goodDetails,
      Swiper,
      BannerPhone,
      newFooter,
      Community,
  },
  data() {
    return {
      swiperOption: {
        autoplay: false,
        loop: true,
        effect: "cube",
        cubeEffect: {
          //cube效果参数，可选值：
          shadowOffset: 100, //投影距离。默认 20，单位px。
          shadowScale: 0.8 //投影缩放比例。默认0.94。
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList:[
          {
            id:'42',
            img:'/imgs/slider/slide-1.jpg'
          },
          {
            id:'45',
            img:'/imgs/slider/slide-2.jpg'
          },
          {
            id:'46',
            img:'/imgs/slider/slide-3.jpg'
          },
          {
            id:'',
            img:'/imgs/slider/slide-4.jpg'
          },
          {
            id:'',
            img:'/imgs/slider/slide-1.jpg'
          }
        ],
       menuList:[
          [
            {
              id:30,
              img:'/imgs/item-box-1.png',
              name:'小米CC9',
            },{
              id:31,
              img:'/imgs/item-box-2.png',
              name:'小米8青春版',
            },{
              id:32,
              img:'/imgs/item-box-3.jpg',
              name:'Redmi K20 Pro',
            },{
              id:33,
              img:'/imgs/item-box-4.jpg',
              name:'移动4G专区',
            }
          ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList:[
          {
            id:33,
            img:'/imgs/ads/ads-1.png'
          },{
            id:48,
            img:'/imgs/ads/ads-2.jpg'
          },{
            id:45,
            img:'/imgs/ads/ads-3.png'
          },{
            id:47,
            img:'/imgs/ads/ads-4.jpg'
          }
        ],
      phoneList: [],
      showModal:false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //为给定 ID 的 user 创建请求,params用来传递参数
      this.axios
        .get("/products", {//使用get请求
          params: {
            categoryId: 100012,
            pageSize: 14
          }
        })
        .then(res => {
          // 二维数组分割
          //后台返回14条数据，前六条用于topbar导航（小米手机），后八条用于wrapper商品页面
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    addCart(id){
      this.axios.post('/carts',{//使用post请求
        productId:id,
        selected:true
      }).then((res)=>{
        this.showModal = true;
        //实现购物车数量实时计算（利用vuex）
        this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
      });
    },
    goToCart(){
      this.$router.push('/cart');
    }
  }
};
</script>
<style lang="scss">
/*@import "../assets/scss/config.scss";*/
/*@import "../assets/scss/mixin.scss";*/

</style>
