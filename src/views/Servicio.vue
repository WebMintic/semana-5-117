<template>
<div>
    <page-header-home></page-header-home>
    <the-service></the-service>
</div>

</template>

<script>

import TheService from '../components/TheService.vue';
import PageHeaderHome from '../components/PageHeaderHome.vue'
export default {
    components:{
        TheService,
        PageHeaderHome
    }
}
</script>

<style scoped>

</style>