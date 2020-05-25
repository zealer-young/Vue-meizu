<template>
  <div class="index">
      <swiper></swiper>
      <ads-box></ads-box>
      <good-details></good-details>
      <banner-phone></banner-phone>
      <community></community>
      <flyme></flyme>
    <!-- modal组件 参数详情参考modal文件props设置 -->
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
import Modal from "./../components/Modal";
import AdsBox from "../components/AdsBox";
import goodDetails from './../components/goodsDetails'
import Swiper from "../components/swiper";
import BannerPhone from "../components/BannerPhone";
import Community from './../components/Community'
import Flyme from './../components/Flyme'
export default {
  name: "index",
  components: {
      Modal,
      AdsBox,
      goodDetails,
      Swiper,
      BannerPhone,
      Community,
      Flyme,
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
        .get("http://mall-pre.springboot.cn/products", {//使用get请求
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

</style>
