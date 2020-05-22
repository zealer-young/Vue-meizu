<template>
  <div class="container">
    <div class="ads-box">
      <a
        v-bind:href="'/#/prosuct/' + item.di"
        v-for="(item, index) in adsList"
        :key="index"
      >
        <img v-lazy="item.img" alt="" />
        <div class="ads-title">{{ item.title }}</div>
        <div class="ads-info">{{ item.info }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adsList: [
        {
          id: 33,
          img: require("../../public/imgs/ads/ads-5.jpg"),
          title: "520礼遇季",
          info: "购物抽双份礼",
        },
        {
          id: 48,
          img: require("../../public/imgs/ads/ads-6.jpg"),
          title: "魅族配件",
          info: "焕新登场",
        },
        {
          id: 45,
          img: require("../../public/imgs/ads/ads-7.png"),
          title: "魅族 16T",
          info: "限时3期免息",
        },
        {
          id: 47,
          img: require("../../public/imgs/ads/ads-8.jpg"),
          title: "mCycle",
          info: "以旧换新",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.ads-box {
  box-sizing: border-box;
  width: 310px;
  height: 187px;
  @include flex();
  margin-top: 13px;
  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;

    img {
      padding: 0 90px;
      width: 130px;
      height: 130px;
    }
    .ads-title {
      color: #333;
      font-size: 20px;
      padding-top: 6px;
    }
    .ads-info {
      color: #999;
      font-size: 16px;
      padding-top: 2px;
    }
  }
}
</style>
