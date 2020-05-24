<template>
  <div class="swiper">
    <div class="swiper-box">
      <swiper v-bind:options="swiperOption">
        <!-- <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/' + item.id"
              ><img v-bind:src="item.img"
            />
            <img src="../../public/imgs/banner/002.jpg"
            /></a>
          </swiper-slide> -->
        <swiper-slide
          ><img
            src="../../public/imgs/banner/001.jpg"
            ref="img"
            :style="{ marginLeft: left }"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../public/imgs/banner/002.jpg"
            ref="img"
            :style="{ marginLeft: left }"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../public/imgs/banner/003.jpg"
            ref="img"
            :style="{ marginLeft: left }"
        /></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: false,
        loop: true,
        effect: "fade",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      left: "",
      screenWidth: document.body.clientWidth,
    };
  },
  mounted() {
    this.swiperCenter();
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  methods: {
    swiperCenter() {
      let w = this.screenWidth;
      let imgWidth = this.$refs.img.width;
      this.left = -(imgWidth - w) / 2 + "px";
      // console.log(this.left);
    },
  },
  watch: {
    screenWidth(val) {
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        this.screenWidth = val; // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        let imgWidth = this.$refs.img.width;
        this.left = -(imgWidth - val) / 2 + "px";
        // console.log(this.left);
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  position: relative;
  margin-top: -112px;   //swiper到视窗的高度，实际是navheader组件的高度
  .swiper-container {
    img {
      width: 2560px;
      height: 680px;
    }
    .swiper-button-next {
      right: 12px;
    }
  }
}
</style>
