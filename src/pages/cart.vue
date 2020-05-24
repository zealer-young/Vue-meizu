<template>
  <div class="cart">
    <order-header></order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1">
              <span class="checkbox" v-bind:class="{ checked: allChecked }" @click="toggleAll"></span>
            </li>
            <li class="col-1-info">全选</li>
            <li class="col-3"></li>
            <li class="col-1">单价（元）</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计（元）</li>
            <li class="col-1">编辑</li>
          </ul>
          <ul class="cart-item-list">
            <!-- v-for="(item,index) in 列表名" v-bind:key="index" 使用v-for的语法格式-->
            <li class="cart-item" v-for="(item, index) in list" v-bind:key="index">
              <div class="item-check">
                <span
                  class="checkbox"
                  v-bind:class="{ checked: item.productSelected }"
                  @click="updataCart(item)"
                ></span>
              </div>
              <div class="item-name">
                <img v-lazy="item.productMainImage" alt />
                <span>{{ item.productName + "," + item.productSubtitle }}</span>
              </div>
              <div class="item-price">￥{{ item.productPrice }}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updataCart(item, '-')">-</a>
                  <span>{{ item.quantity }}</span>
                  <a href="javascript:;" @click="updataCart(item, '+')">+</a>
                </div>
              </div>
              <div class="item-total">￥{{ item.productTotalPrice }}</div>
              <div class="item-del" @click="delProduct(item)"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/#/index">继续购物</a>
            共
            <span>{{ list.length }}</span>件商品，已选择
            <span>{{ checkedNum }}</span>件
          </div>
          <div class="total fr">
            <span class="totalText">
              已优惠0.00元， 合计(不含运费)：
              <span class="totalPrice">￥{{ cartTotalPrice }}</span>
            </span>
            <a href="javascript:;" class="btn" @click="order()">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <new-footer></new-footer>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader";
import NewFooter from "./../components/newFooter";
export default {
  name: "index",
  components: {
    OrderHeader,
    NewFooter
  },
  data() {
    return {
      list: [], //商品列表
      allChecked: false, //是否全选
      cartTotalPrice: 0, //商品总金额
      checkedNum: 0 //选中商品数量
    };
  },
  mounted() {
    this.getCartList();
  },
  methods: {
    //获取购物车列表
    getCartList() {
      this.axios.get("/carts").then(res => {
        this.renderData(res);
      });
    },
    // 更新购物车数量和购物车单选状态
    updataCart(item, type) {
      //item接收当前点击的商品信息，type控制操作类型
      let quantity = item.quantity,
        selected = item.productSelected;
      if (type == "-") {
        if (quantity == 1) {
          //element-ui插件 this.$message.success/info/warning/error()语法格式之二
          this.$message.warning("商品至少保留一件");
          return;
        }
        //必须写成--quantity，（不可写成quantity--，这样是后计算，下次运算才会发生变化）
        --quantity;
      } else if (type == "+") {
        if (quantity > item.productStock) {
          this.$message.warning("购买数量无法超过库存数量");
          return;
        }
        ++quantity;
      } else {
        selected = !item.productSelected;
      }
      this.axios
        .put(`/carts/${item.productId}`, {
          quantity,
          selected
        })
        .then(res => {
          this.renderData(res);
        });
    },
    //删除购物车商品
    delProduct(item) {
      this.axios.delete(`/carts/${item.productId}`).then(res => {
        this.$message.success("删除成功");
        this.renderData(res);
      });
    },
    //控制全选与非全选功能
    toggleAll() {
      let url = this.allChecked ? "/carts/unSelectAll" : "/carts/selectAll";
      this.axios.put(url).then(res => {
        this.renderData(res);
      });
    },
    //公共赋值
    renderData(res) {
      this.list = res.cartProductVoList || [];
      this.allChecked = res.selectedAll;
      this.cartTotalPrice = res.cartTotalPrice;
      this.checkedNum = this.list.filter(item => item.productSelected).length;
    },
    //购物车下单
    order() {
      let isCheck = this.list.every(item => !item.productSelected);
      if (isCheck) {
        this.$message.warning("请选择一件商品");
      } else {
        this.$router.push("/order/confirm");
      }
    }
  }
};
</script>
<style lang="scss">
.cart {
  .wrapper {
    background-color: #f6f4fa;
    padding-top: 10px;
    padding-bottom: 114px;
    .cart-box {
      background-color: #fff;
      font-size: 12px;
      color: #999999;
      text-align: center;
      .checkbox {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 1px solid #e5e5e5;
        border-color: #00c3f5;
        vertical-align: middle;
        margin-left: -60px;
        cursor: pointer;
        text-align: none;

        &.checked {
          background: url("/imgs/icon-gou.png") #00c3f5 no-repeat center;
          background-size: 16px 12px;
          border: none;
        }
      }
      .cart-item-head {
        display: flex;
        height: 50px;
        font-size: 12px;
        background-color: #fff;
        color: rgba(51, 51, 51, 0.4);
        border-bottom: 1px solid #efefef;
        line-height: 50px;
        .col-1 {
          flex: 1;
        }
        .col-1-info {
          font-size: 14px;
          color: #333;
          padding-right: 50px;
          margin-left: -78px;
        }
        .col-2 {
          flex: 2;
        }
        .col-3 {
          flex: 3;
        }
        li:last-child {
          color: #00c3f5;
        }
      }
      .cart-item-list {
        .cart-item {
          display: flex;
          align-items: center;
          height: 150px;
          border-bottom: 1px solid #efefef;
          font-size: 16px;
          .item-check {
            flex: 1;
          }
          .item-name {
            flex: 3;
            font-size: 16px;
            color: #262626;
            display: flex;
            align-items: center;
            margin-left: 0;
            img {
              width: 80px;
              height: 80px;
              vertical-align: middle;
            }
            span {
              margin-left: 30px;
            }
          }
          .item-price {
            flex: 1;
            color: #333333;
          }
          .item-num {
            flex: 2;
            .num-box {
              display: inline-block;
              width: 87px;
              height: 26px;
              line-height: 26px;
              border: 1px solid #e5e5e5;
              font-size: 12px;
              font-weight: bolder;
              border: 1px solid #efefef;
              a {
                display: inline-block;
                width: 24px;
                font-size: 14px;
                color: #333333;
              }
              span {
                display: inline-block;
                width: 35px;
                color: #333333;
                border-left: 1px solid #efefef;
                border-right: 1px solid #efefef;
              }
            }
          }
          .item-total {
            flex: 1;
            color: #e52b41;
          }
          .item-del {
            flex: 1;
            width: 14px;
            height: 12px;
            background: url("/imgs/icon-close.png") no-repeat center;
            background-size: contain;
            cursor: pointer;
          }
        }
      }
    }
    .order-wrap {
      // width: 1240px;
      height: 70px;
      font-size: 14px;
      color: #666;
      line-height: 67px;
      transition: background-color 1s;
      background-color: #fff;
      margin-top: 10px;
      .cart-tip {
        margin-left: 29px;
        a {
          color: #666666;
          margin-right: 37px;
        }
        span:first-child {
          color: #8c8c8c;
          margin: 0 5px;
        }
        span:last-child {
          color: #00c3f5;
        }
      }
      .total {
        .totalText {
          font-size: 14px;
          color: #595959;
        }
        .btn:hover {
          transition: opacity 0.2s linear;
          opacity: 0.8;
        }
        .totalPrice {
          font-size: 20px;
          font-weight: bolder;
          color: #e02b41;
          margin-right: 24px;
          vertical-align: middle;
        }
        a {
          width: 98px;
          height: 34px;
          line-height: 34px;
          font-size: 14px;
          margin-right: 30px;
          background-color: #f66567;
        }
      }
    }
  }
}
</style>
