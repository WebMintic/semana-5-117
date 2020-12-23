<template>
  <div class="home">
    <page-header-home class="mb-3"></page-header-home>
    <section-info class="my-5"></section-info>
    <section-services class="bg-gray my-5"></section-services>
    <section-exitos></section-exitos>
    <page-footer></page-footer>

  </div>
</template>

<script>

import SectionServices from "../components/SectionServices.vue"
import PageFooter from "../components/PageFooter.vue"
import PageHeaderHome from "../components/PageHeaderHome.vue";
import SectionInfo from "../components/SectionInfo.vue";
import SectionExitos from "../components/SectionExitos.vue"
// @ is an alias to /src


export default {
  name: "Home",
  components: {
    SectionServices,
    PageFooter,
    PageHeaderHome,
    SectionInfo,
    SectionExitos
  },
};

</script>

<style scoped>

</style>
