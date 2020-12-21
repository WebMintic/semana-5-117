<template>
  <div class="home">

    <section-services class="bg-gray"></section-services>
    <page-footer></page-footer>

    <page-header-home class="mb-3"></page-header-home>
    <section-info></section-info>

  </div>
</template>

<script>

import SectionServices from "../components/SectionServices.vue"
import PageFooter from "../components/PageFooter.vue"

import PageHeaderHome from "../components/PageHeaderHome.vue";
import SectionInfo from "../components/SectionInfo.vue";
// @ is an alias to /src


export default {
  name: "Home",
  components: {
    SectionServices,
    PageFooter,
    PageHeaderHome,
    SectionInfo,
  },
};

</script>

<style scoped>

</style>
