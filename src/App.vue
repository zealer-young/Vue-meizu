<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import storage from './storage'
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    this.getUser();
    this.getCartCount();
  },
  methods: {
    //拉取用户信息
    getUser() {
      this.axios.get('/user').then(() => {
        //to-do 保存到Vuex里面
      });
    },
    //获取商品的购物车的数量
    getCartCount() {
      this.axios.get('/carts/products/sum').then(() => {
        //to-do 保存到Vuex里面
      });
    }
  }
};
</script>
<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
