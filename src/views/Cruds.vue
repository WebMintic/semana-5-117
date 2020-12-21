<template>
  <div class="cruds">
    <page-header-login></page-header-login>
    <the-cruds></the-cruds>
  </div>
</template>

<script>

import TheCruds from '../components/TheCruds.vue'
import PageHeaderLogin from '../components/PageHeaderLogin.vue'
export default {
  name: 'cruds',
  components: {
    TheCruds,
    PageHeaderLogin
  }
}
</script>

<style scoped>

</style>