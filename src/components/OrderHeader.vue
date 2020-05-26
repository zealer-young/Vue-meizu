<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="logo">
        <a href="/#/index"
          ><img src="../../public/imgs/goodDetails/logo-meizu.png" alt=""
        /></a>
      </div>
      <div class="username">
        <a href="/#/order/list" class="orderList">我的订单</a>
        <a href="javascript:;">{{ username }}的商城</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "order-header",
  data () {
    return {
      breadList: [{
          name: "购物车",
          // path: "/cart"
        }, {
          name: "确认订单",
          // path: "/order/commit"
        }, {
          name: "在线支付",
          // path: "/order/pay"
        }, {
          name: "完成",
          // path: "/order/list"
        }]
    }
  },
  props: {
    title: String,
  },
  computed: {
    //mapState 辅助函数
    ...mapState(["username"]),
  },
};
</script>
<style lang="scss">
.order-header {
  height: 80px;
  border-bottom: 1px solid #efefef;
  .container {
    height: 80px;
  }
  .logo {
    
    float: left;
    a {
      display: block;
      width: 128px;
      height: 80px;
      line-height: 92px;
      img {
        width: 128px;
        height: 24px;
      }
    }
  }
  .username {
    float: right;
    .orderList {
      padding: 0 20px;
    }
  }
  .username a {
    padding: 0 20px;
    line-height: 80px;
    color: #666666;
    font-size: 12px;
  }
  a:hover{
    color: #008CFF;
  }
}
</style>
