<template>
<div class="box-header">
  <div class="swiper">
    <swiper v-bind:options="swiperOption">
      <!-- <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/' + item.id"
              ><img v-bind:src="item.img"
            />
            <img src="../../public/imgs/banner/002.jpg"
            /></a>
          </swiper-slide> -->
      <swiper-slide>
        <img src="../../public/imgs/goodDetails/swiper-2.jpg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="../../public/imgs/goodDetails/swiper-3.jpg"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</div>  
</template>

<script>


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
    };
  },
};
</script>

<style lang="scss">
.swiper {
  position: relative;
  nav-header{
    position: absolute;
    bottom: -180px;
  }
  .swiper-container {
    img {
      height: 100%;
      margin-left: -320px;
    }
    .swiper-button-next {
      right: 12px;
    }
  }
}
</style>
