<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" v-bind:key="i">
                  <li v-for="(sub,j) in item" v-bind:key="j">
                    <a v-bind:href="sub?'/#/product/'+sub.id:''">
                      <img v-bind:src="sub?sub.img:require('../../public/imgs/item-box-2.png')" alt />
                      {{sub?sub.name:'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <!-- 当前swiper插件 swiperOption是这个插件的配置项-->
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/'+item.id">
              <img v-bind:src="item.img" />
            </a>
          </swiper-slide>
          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 导航按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a v-bind:href="'/#/product'+item.id" v-for="(item,index) in adsList" v-bind:key="index">
          <img v-bind:src="item.img" alt />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="../../public/imgs/banner-1.png" alt />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img src="../../public/imgs/mix-alpha.jpg" alt />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,i) in phoneList" v-bind:key="i">
              <div class="item" v-for="(item,j) in arr" v-bind:key="j">
                <!-- 利用奇数偶数判断是否添加属性，样式为new-pro（新品） 或 kill-pro(秒杀)  -->
                <span v-bind:class="{'new-pro':j%2==0}">新品</span>
                <div class="item-img">
                  <img v-bind:src="item.mainImage" alt />
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price">{{item.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <!-- modale组件 参数详情参考modal文件props设置 -->
    <modal title="提示" 
    sureText="查看购物车" 
    btnType="1" 
    modalType="middle" 
    v-bind:showModal="true">
    <template v-slot:body>
      <p>商品添加成功!</p>
    </template>
    </modal>
  </div>
</template>
<script>
import ServiceBar from "../components/ServiceBar";
import Modal from "./../components/Modal";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
    Modal
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          //cube效果参数，可选值：
          slideShadows: true, //开启slide阴影。默认 true。
          shadow: true, //开启投影。默认 true。
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
      slideList: [
        {
          id: "42",
          img: require("../../public/imgs/slider/slide-1.jpg")
        },
        {
          id: "45",
          img: require("../../public/imgs/slider/slide-2.jpg")
        },
        {
          id: "46",
          img: require("../../public/imgs/slider/slide-3.jpg")
        },
        {
          id: "",
          img: require("../../public/imgs/slider/slide-4.jpg")
        },
        {
          id: "",
          img: require("../../public/imgs/slider/slide-5.jpg")
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: require("../../public/imgs/item-box-1.png"),
            name: "小米CC9"
          },
          {
            id: 31,
            img: require("../../public/imgs/item-box-2.png"),
            name: "小米8青春版"
          },
          {
            id: 32,
            img: require("../../public/imgs/item-box-3.jpg"),
            name: "RedMI K20 Pro"
          },
          {
            id: 33,
            img: require("../../public/imgs/item-box-4.jpg"),
            name: "移动4G专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: require("../../public/imgs/ads/ads-1.png")
        },
        {
          id: 48,
          img: require("../../public/imgs/ads/ads-2.jpg")
        },
        {
          id: 45,
          img: require("../../public/imgs/ads/ads-3.png")
        },
        {
          id: 47,
          img: require("../../public/imgs/ads/ads-4.jpg")
        }
      ],
      phoneList: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //为给定 ID 的 user 创建请求,params用来传递参数
      this.axios
        .get("/products", {
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
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          & > a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: " ";
              @include bgImg(10px, 15px, "../../public/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              font-size: 14px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  content: " ";
                  margin-left: 5px;
                  vertical-align: middle;
                  @include bgImg(
                    22px,
                    22px,
                    "../../public/imgs/icon-cart-hover.png"
                  );
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
