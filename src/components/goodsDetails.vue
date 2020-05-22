<template>
  <div class="goodsDetails">
    <div class="item">
      <div class="banner">
          <div class="info">手机</div>
          <a href="/#/product/30">
            <img src="../../public/imgs/bannerphone/002.jpg" />
          </a>
      </div>
      <div class="wrap container">
      <div class="big" v-for="(items) in bigList" :key="items.id">
        <span class="product-sign-red">{{items.sign}}</span>
        <span class="box-info">
          <span class="goods-name">
            {{items.name}}
          </span>
          <span class="goods-desc">
            {{items.desc}}
          </span>
          <span class="goods-price">
            <i>￥</i>{{items.price}}
          </span>
        </span>
        <a>
          <!-- <img v-lazy="items.url" alt="" /> -->
          <img :src="items.url" alt="" />
        </a>
      </div>
      <div class="small" v-for="(items) in smallList" :key="items.id">
        <span class="product-sign-red">{{items.sign}}</span>
        <a>
          <img v-lazy="items.url" alt="" >
        </a>
        <span class="box-info">
          <span class="goods-name">
            {{items.name}}
          </span>
          <span class="goods-desc">
            {{items.desc}}
          </span>
          <span class="goods-price">
            <i>￥</i>{{items.price}}
          </span>
        </span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import { getGoodsDetails } from '../mock/api'
export default {
  data () {
    return {
      bigList:[
          {
            id: 'bigList-0',
            sign:"新品",
            name: "魅族 17 Pro",
            desc: "高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统",
            price: 4299,
            url:require("../../public/imgs/goodDetails/big17 pro.png"),
          },
          {
            id: 'bigList-1',
            sign:"新品",
            name: "魅族 17",
            desc: "高通骁龙 865 + UFS 3.1 高速闪存  |  6400W 全场景影像系统",
            price: 3699,
            url:require("../../public/imgs/goodDetails/big17.png"),
          }
        ],
      smallList:[
          {
            id: 'smallList-0',
            sign:"新品",
            url:require("../../public/imgs/goodDetails/small-1.png"),
            name: "魅族 17 航母限定版",
            desc: "以梦为舰 热爱起航",
            price: 4299,
          },
          {
            id: 'smallList-1',
            sign:"领券",
            name: "魅族 16s",
            desc: "【限时领券立减400】高通骁龙855",
            price: 2699,
            url:require("../../public/imgs/goodDetails/small-L.png"),
          },
          {
            id: 'smallList-2',
            sign:"热卖",
            name: "魅族 16T",
            desc: " 6.5英寸极边全面屏 | 骁龙855旗舰处理器",
            price: 1999,
            url:require("../../public/imgs/goodDetails/small-R1.png"),
          },
          {
            id: 'smallList-3',
            sign:"热卖",
            name: "魅族 16Xs",
            desc: " 极边全面屏 | 4800W AI三摄 ",
            price: 1499,
            url:require("../../public/imgs/goodDetails/small-R2.png"),
          }
        ],
    }
  },

    // methods: {
      // getGoodsDetailsData() {
      //   axios.get('/js/index.json').then((res)=>{
      //     console.log('data:', res.data)
      //     // this.mockData = res.data.data.bigList;
      //   })
        // .catch(()=> {
        //   console.log('catch')
        // })
      //    getProductInfo(){
      //   //获取路由的参数方法this.$route.parmas
      //   let id = this.$route.params.id;
      //   this.axios.get(`/products/${id}`).then((res)=>{
      //     this.product = res;
      //   })
      // }
  //     init() {
  //     //为给定 ID 的 user 创建请求,params用来传递参数
  //     this.axios
  //       .get("/products", {//使用get请求
  //         params: {
  //           categoryId: 100012,
  //           pageSize: 14
  //         }
  //       })
  //       .then(res => {
  //         // 二维数组分割
  //         //后台返回14条数据，前六条用于topbar导航（小米手机），后八条用于wrapper商品页面
  //         res.list = res.list.slice(6, 14);
  //         this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
  //       });
  //   },
  // },
  // mounted(){
  // this.getGoodsDetailsData();
  // }
}

</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";
.goodsDetails {
  // width: 100%;
  // height: 1495px;
  .item{
      
      border-radius: 4px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      background-color: #f4f4f4;
      
        .info {
        width: 100%;
        height: 108px;
        background-color: #f4f4f4;
        font-size: 30px;
        font-weight: 400;
        text-align: center;
        line-height: 150px;

        }
        .banner a {
          position: relative;
          display: block;
          width: auto;
          height: 100%;
          background-position: 50%;
          background-repeat: no-repeat;
        }
          .banner a img {
            width: auto;
            height: 450px;
          }
        
        .item a:hover{
          transition: opacity .2s linear;
          opacity: 0.8
        }
      
      .wrap {
        width: 1250px;
        height: auto;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        left: 5px;

      }
      .big {
        width:615px;
        height: 610px;
        background-color: #fff;
        border-radius: 4px;
        position: relative;
        margin-right: 9px;
        margin-top: 10px;
        .product-sign-red{
          position: absolute;
          top: 30px;
          left: 30px;
          display: block;
          width: 60px;
          height: 60px;
          line-height: 60px;
          color: #fff;
          font-size: 16px;
          text-align: center;
          border-radius: 50%;
          background-image: linear-gradient(120deg,#ff3149,#ff64a6);
        }
        .box-info{
          @include flex-c();
          flex-direction:column;
          padding-top:65px;
          .goods-name{
            font-size: 28px;
            color: rgb(51, 51, 51);
          }
          .goods-desc{
            font-size: 18px;
            color: rgb(51, 51, 51);
          }
          .goods-price {
            font-size: 22px;
            color:rgb(204, 0, 0);
            i {
              font-size: 8px;
            }
          }
        }
        a {
          display: block;
          display: flex;
          justify-content: center;
          img {
            width: 460px;
            height: 460px;

          }
        }
        &:hover {
          transition: all .3s ease;
          box-shadow:5px 15px 20px rgba(0,0,0,0.1);
        }
      }
      .small {
        width:303px;
        height: 375px;
        background-color: #fff;
        border-radius: 4px;
        position: relative;
        margin-right: 9px;
        // margin-top: 10px;

        .product-sign-red{
          position: absolute;
          top: 30px;
          left: 30px;
          display: block;
          width: 60px;
          height: 60px;
          line-height: 60px;
          color: #fff;
          font-size: 16px;
          text-align: center;
          border-radius: 50%;
          background-image: linear-gradient(120deg,#ff3149,#ff64a6);
        }
        .box-info{
          @include flex-c();
          flex-direction:column;
          .goods-name{
            font-size: 16px;
            color: rgb(51, 51, 51);
          }
          .goods-desc{
            font-size: 13px;
            color: #999;
          }
          .goods-price {
            font-size: 22px;
            color:rgb(204, 0, 0);
            i {
              font-size: 8px;
            }
          }
        }
        a {
          display: block;
          margin-top: 30px;
          display: flex;
          justify-content: center;
          img {
            width: 230px;
            height: 230px;

          }
        }
        &:hover {
          box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
        }
      }
    }
}
</style>
