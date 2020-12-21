<template>
  <div class="home">
    <section-services class="bg-gray"></section-services>
    <page-footer></page-footer>
  </div>
</template>

<script>
import SectionServices from "../components/SectionServices.vue"
import PageFooter from "../components/PageFooter.vue"

export default {
  name: 'Home',
  components: {
    SectionServices,
    PageFooter
  }
}
</script>

<style scoped>

</style>
