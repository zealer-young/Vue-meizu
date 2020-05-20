<template>
    <div>
        <nav-header></nav-header>
        <good-details></good-details>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
import goodDetails from './../components/goodsDetails'
export default {
    name: 'nav-home',
    components: {
        NavHeader,
        NavFooter,
        goodDetails
    }
}
</script>
