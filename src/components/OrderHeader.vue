<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="logo">
        <a href="/#/index"
          ><img src="../../public/imgs/goodDetails/logo-meizu.png" alt=""
        /></a>
      </div>
      <div class="bread">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item,index) in breadList"
          :key="index">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="username">
        <a href="/#/order/list" class="orderList">我的订单</a>
        <a href="javascript:;">{{ username }}的商城</a>
        <!-- <el-dropdown :hide-on-click="false">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Breadcrumb,BreadcrumbItem } from "element-ui";
// import { Dropdown,DropdownMenu,DropdownItem } from "element-ui"
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
  components: {
    [Breadcrumb.name]:Breadcrumb,
    [BreadcrumbItem.name]:BreadcrumbItem,
    // [Dropdown.name]:Dropdown,
    // [DropdownMenu.name]:Dropdown,
    // [DropdownItem.name]:Dropdown
  },
  props: {
    title: String,
  },
  computed: {
    //mapState 辅助函数
    ...mapState(["username"]),
  },
  // watch: {
  //   $route() {
  //     this.getBreadcrumb();
  //   }
  // },
  // methods: {
  //   isHome(route) {
  //     return route.path === "cart";
  //   },
  //   getBreadcrumb() {
  //     let matched = this.$route.matched;
  //     //如果不是首页
  //     if (!this.isHome(matched[0])) {
  //       console.log(this.isHome([0]));
        
  //       matched = [{ path: "/cart", name:"购物车" }].concat(matched);
  //     }else if (!this.isHome(matched[0])) {
  //       matched = [{ path: "/order/commit", name:"确认订单" }].concat(matched);
  //     }
  //     this.breadList = matched;
  //   }
  // },
  // created() {
  //   this.getBreadcrumb();
  // }
};
</script>
<style lang="scss">
// @import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
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
  .bread{
    width: 300px;
    height: 80px;
    margin-left: 50px;
    float: left;
    display: flex;
    align-items: center;
  }
  .username {
    float: right;
    .orderList {
      padding: 0 20px;
    }
  }
  .username a {
    //  display: block;
    //  float: right;
    //  width: 150px;
    //  height: 80px;
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
