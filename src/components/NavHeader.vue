<template>
  <div class="header">
    <div class="box">
      <div class="nav-header">
        <div class="con">
          <div class="logo">
            <a href="/#/index">
              <img src="../../public/imgs/goodDetails/logo-meizu.png" />
            </a>
          </div>
          <div class="header-menu">
            <div class="item-menu">
              <span>手机</span>
              <div class="children">
                <ul>
                  <li
                    class="product"
                    v-for="(item, index) in phoneList"
                    :key="index"
                  >
                    <a v-bind:href="'/#/product/' + item.id" target="_blank">
                      <div class="pro-img">
                        <!-- v-lazy指令懒加载 双引号中储存的是变量名 -->
                        <img v-lazy="item.mainImage" :alt="item.subtitle" />
                      </div>
                      <div class="pro-name">{{ item.name }}</div>
                      <div class="pro-price">{{ item.price | currency }}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-menu">
              <span>声学</span>
            </div>
            <div class="item-menu">
              <span>配件</span>
            </div>
            <div class="item-menu">
              <span>红米</span>
            </div>
            <div class="item-menu">
              <span>电视</span>
              <div class="children">
                <ul>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt />
                      </div>
                      <div class="pro-name">小米壁画电视 65英寸</div>
                      <div class="pro-price">6999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt />
                      </div>
                      <div class="pro-name">小米全面屏电视E55A</div>
                      <div class="pro-price">1999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt />
                      </div>
                      <div class="pro-name">小米电视4A 32英寸</div>
                      <div class="pro-price">699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <!-- v-lazy指令懒加载 双引号中储存的是字符串，需要用单引号再次引起来 -->
                        <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt />
                      </div>
                      <div class="pro-name">小米电视4A 55英寸</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt />
                      </div>
                      <div class="pro-name">小米电视4A 65英寸</div>
                      <div class="pro-price">2699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt />
                      </div>
                      <div class="pro-name">查看全部</div>
                      <div class="pro-price">查看全部</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt />
                      </div>
                      <div class="pro-name">小米电视4A 65英寸</div>
                      <div class="pro-price">2699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt />
                      </div>
                      <div class="pro-name">查看全部</div>
                      <div class="pro-price">查看全部</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="header-search">
            <div class="wrapper">
              <input type="text" name="keyword" placeholder="魅族16T" />
              <a href="#"></a>
            </div>
          </div>
          <div class="user">
            <a href="javascript:;" v-if="username">{{ username }}</a>
            <a
              href="javascript:;"
              v-if="!username"
              @click="login"
              ref="userLogin"
            >
              <div class="icon-login iconfont">
                <span ref="icon">&#xe673;</span>
                <div class="dropdown" v-if="loginShow">
                  <div class="triangle-up "></div>
                  <ul class="dropdown-list">
                    <li>立即登录</li>
                    <li>立即注册</li>
                    <li>我的订单</li>
                    <li>M码通道</li>
                  </ul>
                </div>
              </div>
            </a>
            <a href="javascript:;" v-if="username" @click="logout">退出</a>
            <a href="/#/order/list" v-if="username">我的订单</a>
            <a href="javascript:;" class="my-cart" @click="goToCart">
              <span class="icon-cart iconfont">&#xe6d5;</span>
              <!--              ({{cartCount}})-->
            </a>
          </div>
        </div>
      </div>
      <!--      <div class="swiper">-->
      <!--        <swiper v-bind:options="swiperOption">-->
      <!--          &lt;!&ndash; <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">-->
      <!--                    <a v-bind:href="'/#/product/' + item.id"-->
      <!--                      ><img v-bind:src="item.img"-->
      <!--                    />-->
      <!--                    <img src="../../public/imgs/banner/002.jpg"-->
      <!--                    /></a>-->
      <!--          </swiper-slide>&ndash;&gt;-->
      <!--          <swiper-slide>-->
      <!--            <img src="../../public/imgs/goodDetails/swiper-2.jpg" ref="img" :style="{marginLeft:left}" />-->
      <!--          </swiper-slide>-->
      <!--          <swiper-slide>-->
      <!--            <img src="../../public/imgs/goodDetails/swiper-3.jpg" />-->
      <!--          </swiper-slide>-->
      <!--          &lt;!&ndash; Optional controls &ndash;&gt;-->
      <!--          <div class="swiper-pagination" slot="pagination"></div>-->
      <!--          <div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--          <div class="swiper-button-next" slot="button-next"></div>-->
      <!--        </swiper>-->
      <!--      </div>-->
    </div>
  </div>
</template>
<script>
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";
//mapState 辅助函数
import { mapState } from "vuex";
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: [],
      loginShow: false,
      // swiperOption: {
      //   centeredSlides: true,
      //   autoplay: false,
      //   loop: true,
      //   effect: "fade",
      //   cubeEffect: {
      //     slideShadows: true,
      //     shadow: true,
      //     shadowOffset: 100,
      //     shadowScale: 0.6
      //   },
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true
      //   },
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev"
      //   }
      // },
      // left:'',
      // screenWidth: document.body.clientWidth,  //给它赋值个（个人理解为网页的宽度）
    };
  },
  //compute帮助解决延迟问题，当变量读取的时候没有，之后变量发生变化，会重新计算一次，调用该方法
  computed: {
    /*username(){
      return this.$store.state.username;
    },
    cartCount(){
      return this.$store.state.cartCount;
    }
    */

    //mapState 辅助函数
    ...mapState(["username", "cartCount"]),
  },
  components: {
    // swiper,
    // swiperSlide
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },
  mounted() {
    // this.swiperCenter();
    this.iconLogin();
    this.getProductList();
    //如果是从登录页面过来的就获取购物车数量
    let params = this.$route.params;
    if (params && params.from == "login") {
      this.getCartCount();
    }
    // const that = this;
    // window.onresize = () => {
    //   return (() => {
    //     window.screenWidth = document.body.clientWidth;
    //     that.screenWidth = window.screenWidth;
    //   })();
    // };
  },
  methods: {
    // swiper轮播居中
    // swiperCenter() {
    //   let w = this.screenWidth;
    //   let imgWidth = this.$refs.img.width;
    //   this.left = -(imgWidth - w) / 2 + "px";
    //   // console.log(this.left);
    // },
    //跳转登录页面
    login() {
      this.$router.push("/login");
    },
    iconLogin() {
      
      const userLogin = this.$refs.userLogin;
      const icon = this.$refs.icon;
      userLogin.addEventListener("mouseenter", () => {

        this.loginShow = true;
        icon.innertext = "&#xe673;"
      });
      userLogin.addEventListener("mouseleave", () => {
        this.loginShow = false;
      });
    },
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 8,
          },
        })
        .then((res) => {
          this.phoneList = res.list;
        });
    },
    //获取商品的购物车的数量
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        this.$store.dispatch("saveCartCount", res);
      });
    },
    //退出登录
    logout() {
      this.axios.post("/user/logout").then(() => {
        this.$message.success("退出登录成功");
        //cookie.set()是cookie设置的方法
        //cookie.get()是cookie获取的方法
        //expires:'-1'是设置过期时间，设置为-1，表示立即过时
        this.$cookie.set("userId", "", { expires: "-1" });
        //该步骤是清空用户名
        this.$store.dispatch("saveUserName", "");
        //该步骤清空购物车数量
        this.$store.dispatch("saveCartCount", "0");
      });
    },
    //跳转购物车页面
    goToCart() {
      this.$router.push("/cart");
    },
  },
  // watch: {
  //       screenWidth(val) {
  //       // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
  //       this.screenWidth = val; // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
  //       let imgWidth = this.$refs.img.width;
  //       this.left = -(imgWidth - val) / 2 + "px";
  //       console.log(this.left);
  //   },
  // }
};
</script>
<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .user {
    a {
      display: inline-block;
      color: #b0b0b0;
      margin-right: 10px;
    }
    .icon-login{
      position: relative;
    }
    .dropdown {
      position: absolute;
      width: 100px;
      height: 150px;
      background-color: #fff;
      top: 35px;
      left: -18px;
      .triangle-up{
        display:inline-block;
        width:0;
        height:0;
        border-left:5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom:7px solid #fff;
        position: absolute;
        top: -7px;
        left: 44px;
        }
      // margin-top: 160px;
      li {
        display: block;
        font-size: 14px;
        color: #515151;
        text-align: center;
        line-height: 37px;
      }
    }
    .iconfont {
      padding-left: 15px;
      el-dropdown-link {
        cursor: pointer;
        color: #409eff;
      }
    }
    .my-cart {
      /*width: 50px;*/
      /*background-color: #ff6600;*/
      /*text-align: center;*/
      /*color: #ffffff;*/
      /*margin-right: 0;*/
      .icon-cart {
        display: block;
        font-size: 22px;
        position: absolute;
        top: 29px;
        padding: 0;
        /*display: inline-block;*/
        /*width: 25px;*/
        /*height: 25px;*/
        /*background: url("../../public/imgs/icon-cart-checked.png") no-repeat center;*/
        /*background-size: contain;*/
        /*margin-right: 2px;*/
      }
    }
  }
  .box {
    .nav-header {
      display: flex;
      justify-content: center;
      top: 0px;
      width: 99.9%;
      .con {
        z-index: 999;
        position: relative;
        width: 99.8%;
        margin-right: auto;
        margin-left: auto;
        height: 82px;
        display: flex;
        justify-content: center;
        align-items: center;
        .logo {
          width: 128px;
          height: 24px;
        }
        .header-menu {
          display: inline-block;
          width: 852px;
          height: 82px;
          display: flex;
          justify-content: center;
          align-content: center;
          /* padding-left: 209px; */
          .item-menu {
            display: inline-block;
            color: rgb(255, 255, 255);
            font-size: 14px;
            line-height: 82px;
            span {
              display: block;
              width: 62px;
              height: 82px;
              text-align: center;
              cursor: pointer;
            }
            &:hover {
              color: $colorA;
              .children {
                height: 220px;
                opacity: 1;
              }
            }
            .children {
              position: absolute;
              top: 82px;
              left: 0;
              width: 100%;
              height: 0;
              opacity: 0;
              overflow: hidden;
              border-top: 1px solid #e5e5e5;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              z-index: 10;
              transition: all 0.5s;
              background-color: #ffffff;
              ul {
                .product {
                  position: relative;
                  float: left;
                  width: 12.5%;
                  height: 220px;
                  font-size: 12px;
                  line-height: 12px;
                  text-align: center;
                  a {
                    display: inline-block;
                  }
                  img {
                    width: auto;
                    height: 111px;
                    margin-top: 26px;
                  }
                  .pro-img {
                    height: 137px;
                  }
                  .pro-name {
                    font-weight: bold;
                    margin-top: 19px;
                    margin-bottom: 8px;
                    color: $colorB;
                  }
                  .pro-price {
                    color: $colorA;
                  }
                  &:before {
                    content: " ";
                    position: absolute;
                    top: 28px;
                    right: 0;
                    border-left: 1px solid $colorF;
                    height: 100px;
                    width: 1px;
                  }
                  &:last-child:before {
                    display: none;
                  }
                  transition: opacity 0.2s linear;
                  opacity: 0.75;
                }
                .product:hover {
                  transition: opacity 0.2s linear;
                  opacity: 1;
                }
              }
            }
          }
          .item-menu:hover {
            color: #188ffc;
          }
        }
        .header-search {
          width: 172px;
          .wrapper {
            height: 30px;
            border: 1px solid #fff;
            display: flex;
            align-items: center;
            border-radius: 30px;
            background-color: #ffffff;
            input {
              border: none;
              box-sizing: border-box;
              border-radius: 30px;

              width: 100%;
              height: 30px;
              padding-left: 14px;
            }
            input::-webkit-input-placeholder {
              /* WebKit browsers */
              font-size: 12px;
              color: #9e9e9e;
            }
            input:-moz-placeholder {
              /* Mozilla Firefox 4 to 18 */
              font-size: 12px;
              color: #9e9e9e;
            }
            input::-moz-placeholder {
              /* Mozilla Firefox 19+ */
              font-size: 12px;
              color: #9e9e9e;
            }
            input:-ms-input-placeholder {
              /* Internet Explorer 10+ */
              font-size: 12px;
              color: #9e9e9e;
            }
            a {
              @include bgImg(18px, 18px, "../../public/imgs/icon-search.png");
              margin-right: 7px;
            }
          }
        }
      }
    }
    /*.swiper {*/
    /*  position: relative;*/
    /*  .swiper-container {*/
    /*    img {*/
    /*      width: 2560px;*/
    /*      height: 100%;*/
    /*    }*/
    /*    .swiper-button-next {*/
    /*      right: 12px;*/
    /*    }*/
    /*  }*/
    /*}*/
  }
}
</style>
