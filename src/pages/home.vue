<template>
    <div>
       <nav-header></nav-header>
       <router-view></router-view>
       <new-footer></new-footer>
    </div>
</template>
<script>
import NavHeader from './../components/NavHeader'
import NewFooter from './../components/newFooter'
export default {
    name: 'nav-home',
    components: {
        NavHeader,
        NewFooter,
    }
}
</script>
