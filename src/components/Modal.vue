<template>
  <!-- vue官方提供的transition组件无需引入注册，参看官网详情 -->
  <transition name="slide">
    <!-- 遮罩层和弹框的父级容器 -->
    <div class="modal" v-show="showModal">
      <!-- 遮罩层 -->
      <div class="mask"></div>
      <!-- 弹框 -->
      <div class="modal-dialog">
        <div class="modal-header">
          <!-- 使用{{变量名}}的方法传递参数 实现可扩展（‘不写死’的名称） -->
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <!-- 父子事件传递 使用$emit语法-->
          <!-- 使用{{变量名}}的方法传递参数 实现可扩展（‘不写死’的名称）-->
          <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit('submit')">{{sureText}}</a>
          <a href="javascript:;" class="btn" v-if="btnType==2" v-on:click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType==3">
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn" v-on:click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  props: {
    //弹框类型：小框small，中框middle，大框large，表单form
    modalType: {
      type: String,
      default: "form"
    },
    //弹框标题
    title: String,
    //按钮类型：1：确定按钮 2：取消按钮 3：确定取消两个按钮
    btnType: String,
    sureText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showModal: Boolean
  }
};
</script>
<style lang="scss" >
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/modal.scss";
</style>
