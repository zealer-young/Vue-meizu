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
                <ul class="container">
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
                      <div class="pro-price">￥ {{ item.price }}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-menu">
              <span>声学</span>
              <div class="children">
                <ul class="container">
                  <li
                    class="product"
                    v-for="(item, index) in musicList"
                    :key="index"
                  >
                    <a v-bind:href="'/#/product/' + item.id" target="_blank">
                      <div class="pro-img">
                        <!-- v-lazy指令懒加载 双引号中储存的是变量名 -->
                        <img v-lazy="item.mainImage" :alt="item.subtitle" />
                      </div>
                      <div class="pro-name">{{ item.name }}</div>
                      <div class="pro-price">￥ {{ item.price }}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-menu">
              <span>配件</span>
              <div class="children">
                <ul class="container">
                  <li
                    class="product"
                    v-for="(item, index) in accessoriesList"
                    :key="index"
                  >
                    <a v-bind:href="'/#/product/' + item.id" target="_blank">
                      <div class="pro-img">
                        <!-- v-lazy指令懒加载 双引号中储存的是变量名 -->
                        <img v-lazy="item.mainImage" :alt="item.subtitle" />
                      </div>
                      <div class="pro-name">{{ item.name }}</div>
                      <div class="pro-price">￥ {{ item.price }}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-menu">
              <span><a 
              href="https://github.com/zealer-young"
                target="_blank"
                class="clearUnderline"
                >Flyme</a></span>
            </div>
            <div class="item-menu">
              <span><a 
              href="https://github.com/zealer-young"
                target="_blank"
                class="clearUnderline"
                >社区</a></span>
            </div>
          </div>
          <div class="header-search">
            <div class="wrapper">
              <input type="text" name="keyword" placeholder="魅族16T" />
              <a href="#"></a>
            </div>
          </div>
          <div class="user">
            <div class="icon-login iconfont" ref="userLogin">
              <span ref="icon">&#xe673;</span>
              <div class="dropdown" v-if="loginShow">
                <div class="triangle-up "></div>
                <ul class="dropdown-list">
                  <li>
                    <a
                      href="javascript:;"
                      v-if="!username"
                      @click="login"
                      
                      >立即登录</a
                    >
                    <a href="javascript:;" v-if="username">{{ username }}</a>
                  </li>
                  <li><a href="/#/cart" v-if="username">购物车</a><a href="javascript:;" v-if="!username" @click="login">立即注册</a></li>
                  <li><a href="/#/order/list" v-if="username">我的订单</a><a href="javascript:;" v-if="!username" @click="login">我的订单</a></li>
                  <li>
                    <a href="javascript:;" v-if="username" @click="logout"
                      >退出</a
                    ><a href="javascript:;" v-if="!username" @click="login">M码通道</a>
                  </li>
                </ul>
              </div>
            </div>

            <a href="javascript:;" class="my-cart" @click="goToCart">
              <div class="cart-box">
                <span class="icon-cart iconfont">&#xe6d5;</span>

                <div class="cartCount">{{ cartCount }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//mapState 辅助函数
import { mapState } from "vuex";
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: [],
      musicList: [],
      accessoriesList: [],
      loginShow: false,
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
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },
  mounted() {
    // this.swiperCenter();
    this.iconLogin();
    this.getPhoneList();
    this.getMusicList();
    this.getAccessoriesList();
    //如果是从登录页面过来的就获取购物车数量
    let params = this.$route.params;
    if (params && params.from == "login") {
      this.getCartCount();
    }
  },
  methods: {
    //跳转登录页面
    login() {
      this.$router.push("/login");
    },
    //用户登录dropdown demo（鼠标移入下拉菜单）
    iconLogin() {
      const userLogin = this.$refs.userLogin;
      userLogin.addEventListener("mouseenter", () => {
        this.loginShow = true;
      });
      userLogin.addEventListener("mouseleave", () => {
        this.loginShow = false;
      });
    },
    //获取 Navheader > children 手机 产品列表数据（http://rap2.taobao.org）
    getPhoneList() {
      this.axios
        .get("http://rap2.taobao.org:38080/app/mock/255494/example/products/phone", {
          params: {
            categoryId: "100012",
            pageSize: 8,
          },
        })
        .then((res) => {
          this.phoneList = res.list;
        });
    },
    //获取 Navheader > children 声学 产品列表数据（http://rap2.taobao.org）
    getMusicList() {
      this.axios
        .get("http://rap2.taobao.org:38080/app/mock/255494/example/products/music", {
          params: {
            categoryId: "100012",
            pageSize: 8,
          },
        })
        .then((res) => {
          this.musicList = res.list;
        });
    },
    //获取 Navheader > children 配件 产品列表数据（http://rap2.taobao.org）
    getAccessoriesList() {
      this.axios
        .get("http://rap2.taobao.org:38080/app/mock/255494/example/products/accessories", {
          params: {
            categoryId: "100012",
            pageSize: 8,
          },
        })
        .then((res) => {
          this.accessoriesList = res.list;
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
};
</script>
<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .user {
    width: 100px;
    position: relative;
    .icon-login {
      position: absolute;
      top: -10px;
      left: 0;
      Cursor : pointer
    }
    .dropdown {
      position: absolute;
      width: 100px;
      height: 150px;
      background-color: #fff;
      top: 35px;
      left: -18px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
      .triangle-up {
        display: inline-block;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid #fff;
        position: absolute;
        top: -7px;
        left: 44px;
      }
      li {
        display: block;
        line-height: 30px;
        text-align: center;
        a{
          font-size: 14px;
          color: #515151;
        }
      }
      li:hover a{
        color: #008cff;
      }
    }
    .iconfont {
      padding-left: 15px;
      el-dropdown-link {
        cursor: pointer;
        color: #409eff;
      }
    }
    .cart-box {
      .icon-cart {
        display: block;
        font-size: 22px;
        position: absolute;
        top: -6px;
        left: 40px;
      }
      .cartCount {
        position: absolute;
        width: 15px;
        height: 15px;
        top: -12px;
        right: 14px;
        background-color: red;
        color: #fff;
        text-align: center;
        line-height: 15px;
        border-radius: 50%;
      }
    }
  }
  .box {
    .nav-header {
      display: flex;
      justify-content: center;
      top: 0;
      width: 101%;
      .con {
        z-index: 999;
        position: relative;
        width: 99.8%;
        height: 82px;
        margin-left: auto;
        margin-right: auto;
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
          .item-menu {
            display: inline-block;
            color: #333;
            font-size: 14px;
            line-height: 82px;
            span {
              display: block;
              width: 62px;
              height: 82px;
              text-align: center;
              .clearUnderline  {
                text-decoration: none;
                color:#333;
              }
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
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              z-index: 10;
              transition: all 0.5s;
              background-color: #ffffff;
              ul {
                width: 1240px;
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
                    /* 文字溢出显示为省略号 */
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    width: 150px;                  
                    }
                  .pro-price {
                    color: #333;
                  }
                  &:before {
                    content: " ";
                    position: absolute;
                    top: 28px;
                    right: 0;
                    // border-left: 1px solid $colorF;
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
            border: 1px solid #d9d9d9;
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
  }
}
</style>
