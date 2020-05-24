<template>
  <div class="detail">
    <product-param v-bind:title="product.name"></product-param>
    <div class="wrapper">
      <div class="container clearfix">
        <div class="swiper">
          <swiper :options="swiperOption" class="gallery-top" ref="swiperTop">
            <swiper-slide class="slide-1">
              <img src="/imgs/detail/phone-1.jpg" alt />
            </swiper-slide>
            <swiper-slide class="slide-2">
              <img src="/imgs/detail/phone-2.jpg" alt />
            </swiper-slide>
            <swiper-slide>
              <img src="/imgs/detail/phone-3.jpg" alt />
            </swiper-slide>
            <swiper-slide>
              <img src="/imgs/detail/phone-4.jpg" alt />
            </swiper-slide>
            <!-- <div class="swiper-container-thumbs" slot="thumbs"></div> -->
            <!-- Optional controls -->
            <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
          </swiper>
          <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
            <swiper-slide class="showShadow">
              <img src="/imgs/detail/phone-1.jpg" alt />
            </swiper-slide>
            <swiper-slide class="showShadow">
              <img src="/imgs/detail/phone-2.jpg" alt />
            </swiper-slide>
            <swiper-slide class="showShadow">
              <img src="/imgs/detail/phone-3.jpg" alt />
            </swiper-slide>
            <swiper-slide class="showShadow">
              <img src="/imgs/detail/phone-4.jpg" alt />
            </swiper-slide>
          </swiper>
        </div>
        <div class="content">
          <h2 class="item-title">{{product.name}}</h2>
          <p class="item-info">
            相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
            外人脸解锁 / AI变焦双摄 
          </p>
          <div class="delivery">魅族官方</div>
          <div class="item-price">
            <div class="price">
              <span class="CNY">￥</span>{{product.price}}元<span class="del">1999元</span>
            </div>
            <div class="second">
              <span class="secondOne">加价购</span>
              <span class="secondTwo">另加29元起，即可换购超值商品</span>
              <a class="secondThree" @click="addCart">立即加购 > </a>
            </div>
          </div>
          <div class="line"></div>
          <div class="item-addr">
            <i class="icon-loc"></i>
            <div class="addr">北京 北京市 朝阳区 安定门街道</div>
            <div class="stock">有现货</div>
          </div>
          <div class="item-version clearfix">
            <h2>选择版本</h2>
            <div class="phone fl" :class="{'checked':version==1}" @click="version=1">6GB+64GB 全网通</div>
            <div class="phone fr" :class="{'checked':version==2}" @click="version=2">4GB+64GB 移动4G</div>
          </div>
          <div class="item-color">
            <h2>选择颜色</h2>
            <div class="phone checked">
              <span class="color"></span>
              深空灰
            </div>
          </div>
          <div class="item-total">
            <div class="phone-info clearfix">
              <div class="fl">{{product.name}} {{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深灰色</div>
              <div class="fr">{{product.price}}元</div>
            </div>
            <div class="phone-total">总计：{{product.price}}元</div>
          </div>
          <div class="btn-group">
            <a href="javascript:;" class="btn btn-huge fl" @click="addCart">加入购物车</a>
          </div>
        </div>
      </div>
    </div>
    <div class="price-info">
      <div class="container">
        <div class="desc">
          <img src="/imgs/detail/tip-1.jpg" alt />
          <img src="/imgs/detail/tip-2.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import ProductParam from "./../components/ProductParam";

export default {
  name: "detail",
  data() {
    return {
      id: this.$route.params.id, //获取商品ID
      // err:'',
      version: 1, //商品版本切换
      product: {}, //商品信息
      swiperOption: {
        autoplay: false,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      swiperOptionThumbs: {
        // spaceBetween: 1,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        slidesPerView: 5
        // watchSlidesVisibility: true,/*避免出现bug*/
      }
    };
  },
  components: {
    swiper,
    swiperSlide,
    ProductParam,
  },
  mounted() {
    this.getProductInfo();
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      // swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    getProductInfo() {
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`).then(res => {
        this.product = res;
      });
    },
    addCart() {
      this.axios
        .post("/carts", {
          productId: this.$route.params.id,
          selected: true
        })
        .then((res = { cartProductVoList: 0 }) => {
          //实现购物车数量实时计算（利用vuex）
          this.$store.dispatch("saveCartCount", res.cartTotalQuantity);
          //跳转路由至购物车页面
          this.$router.push("/cart");
        });
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.detail {
  
  .wrapper {
    .swiper {
      float: left;
      width: 642px;
      height: 817px; //617px
      margin-top: 5px;
      .showShadow {
        // margin: 0 10px;
        border-bottom: 1px solid #eee;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      float: right;
      width: 584px;
      height: 1000px;
      .item-title {
        font-size: 28px;
        padding-top: 30px;
        padding-bottom: 16px;
        height: 26px;
        margin-left: 8px;
      }
      .item-info {
        font-size: 15px;
        height: 21px;
        color: #e22841;
        margin-left: 10px;
      }
      .delivery {
        font-size: 14px;
        color: #e22841;
        font-weight: 400;
        margin-top: 26px;
        margin-bottom: 14px;
        height: 15px;
        font-weight: 600;
        margin-left: 10px;
      }
      .item-price {
        background: #f4f6fa;
        color: #e02b41;
        height: 19px;
        width: 585px;
        height: 99px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        .price {
          margin-left: 10px;
          height: 50px;
          box-sizing: border-box;
          margin-bottom: 13px;
          font-weight: 500;
          font-size: 46px;
          .CNY {
            font-size: 5px;
            font-style: initial;
          }
        }
        .second {
          margin-left: 10px;
          margin-top: 5px;
            height: 30px;
            font-size: 14px;
            /* display: block;
            height: 20px; */
            .secondOne {
              border-radius: 2px;
              color: #e02b41;
              display: inline-block;
              width: 72px;
              text-align: center;
              font-size: 14px;
              line-height: 1;
              padding: 4px 0;
              background: #f2eaef;
              margin-right: 13px;
            }
            .secondThree {
              color: #008cff;
              margin-left: 10px;
            }
            .secondThree:hover {
              color: #999999;
            }
          
        }

        .del {
          font-size: 16px;
          color: #999999;
          margin-left: 10px;
          text-decoration: line-through;
        }
      }
      .line {
        height: 0;
        margin-top: 25px;
        margin-bottom: 28px;
        border-top: 1px solid #e5e5e5;
      }
      .item-addr {
        height: 108px;
        background-color: #fafafa;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        padding-top: 31px;
        padding-left: 64px;
        font-size: 14px;
        line-height: 14px;
        position: relative;
        .icon-loc {
          position: absolute;
          top: 27px;
          left: 34px;
          @include bgImg(20px, 20px, "/imgs/detail/icon-loc.png");
        }
        .addr {
          color: #666666;
        }
        .stock {
          margin-top: 15px;
          color: #188ffc;
        }
      }
      .item-version,
      .item-color {
        margin-top: 30px;
        h2 {
          font-size: 18px;
          margin-bottom: 20px;
        }
      }
      .item-version,
      .item-color {
        .phone {
          width: 287px;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          color: #333333;
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          text-align: center;
          cursor: pointer;
          span {
            color: #666666;
            margin-left: 15px;
          }
          .color {
            display: inline-block;
            width: 14px;
            height: 14px;
            background-color: #666666;
          }
          &.checked {
            border: 1px solid #188ffc;
            color: #188ffc;
          }
        }
      }
      .item-total {
        height: 108px;
        background: #fafafa;
        padding: 24px 33px 29px 30px;
        font-size: 14px;
        margin-top: 50px;
        margin-bottom: 30px;
        box-sizing: border-box;
        .phone-total {
          font-size: 24px;
          color: #188ffc;
          margin-top: 18px;
        }
      }
    }
  }
  .price-info {
    background-color: #f4f4f4;
    height: auto;
    h2 {
      font-size: 24px;
      color: #333333;
      padding-top: 38px;
      margin-bottom: 30px;
    }
  }
}
</style>
