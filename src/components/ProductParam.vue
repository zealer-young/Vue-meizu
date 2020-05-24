<template>
  <div class="nav-bar" v-bind:class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        魅族 17
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a>
        <a href="javascript:;">魅族 17 航母限定版</a>
        <a href="javascript:;">参数</a>
        <a href="javascript:;">换机指引</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'nav-bar',
  props:{
    title:String
  },
  data(){
    return{
      isFixed:false,
    }
  },
  mounted(){
    window.addEventListener('scroll',this.initHeight)
  },
  methods:{
    initHeight(){
      //考虑到浏览器的兼容性，可使用三种语法获取页面高度
      //1. window.pageYOffset页面Y轴的偏移量
      //2. document.documentElement.scrollTop 文档的html元素的高度
      //3. ocument.body.scrollTop 在IE下，获取html的高度
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //该语句判断是否需要进行fixed定位
      this.isFixed = scrollTop > 152?true:false;
    }
  },
  destroyed(){
    //利用Vue的生命周期，销毁添加的事件
    //设置冒泡为false，防止冒泡
    window.removeEventListener('scroll',this.initHeight,false)
  }
}
</script>
<style lang='scss'>
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';

  .nav-bar{
    height: 70px;
    line-height: 70px;
    border-top:1px solid #e5e5e5;
    border-bottom: 1px solid #dedede;
    background: #f6f8fb;
    opacity: .9;
    z-index:10; 
    &.is_fixed{
      position:fixed;
      top:0;
      width: 100%;
    }
    .container{
      @include flex();
      .pro-title{
        font-size:26px;
        color:#000;
      }
      .pro-param{
        font-size: 16px;
        line-height: 20px;
        a{
          display: inline-block;
          padding: 0 20px;
          border-right: 1px solid #dfe1e1;
          color:#333;
        }
        a:hover{
          color: #008cff;
        }
        a:last-child{
          border: none;
        }
      }
    }
  }
</style>
