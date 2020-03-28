<template>
  <!-- 遮罩层和弹框的父级容器 -->
  <div class="modal" v-show="showModal">
    <!-- 遮罩层 -->
    <div class="mask"></div>
    <!-- 弹框 -->
    <div class="modal-dialog">
      <div class="modal-header">
        <span>标题</span>
        <a href="javascript:;" class="icon-close"></a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <a href="javascript:;" class="btn">确定</a>
        <a href="javascript:;" class="btn">取消</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'modal',
  props:{
    //弹框类型：小框small，中框middle，大框large，表单form
    modalType:{
      type:String,
      default:'form'
    },
    //弹框标题
    title:String,
    //按钮类型：1：确定按钮 2：取消按钮 3：确定取消两个按钮
    btnType:String,
    sureText:{
      type:String,
      default:'确定'
    },
    cancelText:{
      type:String,
      default:'取消'
    },
    showModal:Boolean

  }
};
</script>
<style lang="scss" >
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
@import './../assets/scss/config.scss';
</style>
