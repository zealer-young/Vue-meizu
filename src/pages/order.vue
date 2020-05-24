<template>
  <div>
    <router-view></router-view>
    <new-footer></new-footer>
  </div>
</template>
<script>
  import NewFooter from './../components/newFooter'
  export default{
    name:'order',
    data(){
      return {
        title:'',
        tip:''
      }
    },
    components:{
      NewFooter
    }
  }
</script>
