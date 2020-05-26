<template>
  <div class="product">
    <product-param v-bind:title="infoTitle.title">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param>
    <div class="content">
      <div class="item-bg">
      </div>

      <div class="meizu-pic container">
        <a href="javascript:;">
          <img src="../../public/imgs/product/meizu-pic-2.jpg" />
        </a>
      </div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img src="/imgs/Community/comment-img-wp-1.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/Community/comment-img-wp-2.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/Community/comment-img-wp-3.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/Community/comment-img-wp-4.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/Community/comment-img-wp-5.jpg" alt />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">魅族 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <h2>
          60帧超慢动作摄影
          <br />慢慢回味每一瞬间的精彩
        </h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
          <br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="video-bg" @click="showSlide='slideDown'"></div>
        <div class="video-box" v-show="showSlide">
          <div class="overlay"></div>
          <div class="video" v-bind:class="showSlide">
            <span class="icon-close" @click="closeVideo"></span>
            <!-- video标签 muted属性设置静音输出 autoplay自动播放-->
            <video src="/imgs/product/meizu-video.mp4" muted autoplay controls="controls"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import ProductParam from "./../components/ProductParam";
export default {
  name: "product",
  components: {
    swiper, 
    swiperSlide,
    ProductParam
  },
  data() {
    return {
      showSlide: "", //控制动画效果
      product: {}, //商品信息
      infoTitle:{},//魅族17 title
      swiperOption: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  mounted() {
    this.getProductInfo();
    this.getInfoTitle();
  },
  methods: {
    getProductInfo() {
      //获取路由的参数方法this.$route.parmas
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`).then(res => {
        this.product = res;
      });
    },
    //商品标题
    getInfoTitle(){
      let id = this.$route.params.id;
      this.axios.get(`http://rap2.taobao.org:38080/app/mock/255494/example/products/${id}`).then(res => {
        this.infoTitle = res;
      });
    },
    buy() {
      let id = this.$route.params.id;
      //路由跳转的方法this.$router.push（）
      this.$router.push(`/detail/${id}`);
    },
    closeVideo() {
      this.showSlide = "slideUp";
      setTimeout(() => {
        this.showSlide = "";
      }, 600);
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
.product {
  .content {
    .item-bg {
      background: url("/imgs/product/meizu-pic-1.jpg") no-repeat center;
      height: 718px;
      text-align: center;
      h2 {
        font-size: 44px;
        padding-top: 0px;
      }
      h3 {
        font-size: 20px;
        letter-spacing: 10px;
      }
      p {
        margin-top: 21px;
        margin-bottom: 40px;
        a {
          font-size: 16px;
          color: #333333;
        }
        span {
          margin: 0 15px;
        }
      }
      .price {
        font-size: 30px;
        color: #333333;
        em {
          font-style: normal;
          font-size: 30px;
        }
      }
    }
    .meizu-pic {
      width: 1240px;
      overflow: hidden;
      text-align: center;

      a img {
        width: 1240px;
      }
      a:hover {
        transition: opacity 0.2s linear;
        opacity: 0.8;
      }
    }
    .item-swiper {
      margin: 36px auto 52px;
      .desc {
        font-size: 18px;
        color: #333333;
        text-align: center;
      }
      img {
        width: 100%;
        height: 265px;
      }
      img:hover {
        transition: opacity 0.2s linear;
        opacity: 0.8;
      }
    }
    .item-video {
      height: 1044px;
      background-color: #070708;
      margin-bottom: 76px;
      color: #ffffff;
      text-align: center;
      h2 {
        font-size: 60px;
        padding-top: 82px;
        margin-bottom: 47px;
      }
      p {
        font-size: 24px;
        margin-bottom: 58px;
      }
      .video-bg {
        background: url("/imgs/product/video-bg.png") no-repeat center;
        background-size: cover;
        width: 1226px;
        height: 540px;
        margin: 0 auto 120px;
        cursor: pointer;
        transition: opacity 0.2s linear;
        opacity: 0.8;
      }
      .video-box {
        .overlay {
          @include position(fixed);
          background-color: #333333;
          opacity: 0.4;
          z-index: 10;
        }
        //animation 动画的定义
        @keyframes slideDown {
          from {
            top: -50%;
            opacity: 0;
          }
          to {
            top: 50%;
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            top: 50%;
            opacity: 1;
          }
          to {
            top: -50%;
            opacity: 0;
          }
        }
        .video {
          position: fixed;
          top: -50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          width: 1000px;
          height: 536px;
          opacity: 1;
          &.slideDown {
            animation: slideDown 0.6s linear;
            top: 50%;
          }
          &.slideUp {
            animation: slideUp 0.6s linear;
          }
          .icon-close {
            position: absolute;
            top: 20px;
            right: 20px;
            @include bgImg(20px, 20px, "/imgs/icon-close.png");
            cursor: pointer;
            z-index: 11;
          }
          video {
            width: 100%;
            height: 100%;
            //设置video 视频标签的边框
            object-fit: cover;
            outline: none;
          }
        }
      }
    }
  }
  button {
    margin-left: 10px;
  }
}
</style>
