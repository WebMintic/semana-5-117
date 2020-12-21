<template>
  <div class="home">
    <page-header-home class="mb-3"></page-header-home>
    <section-info></section-info>
  </div>
</template>

<script>
import PageHeaderHome from "../components/PageHeaderHome.vue";
import SectionInfo from "../components/SectionInfo.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    PageHeaderHome,
    SectionInfo,
  },
};
</script>
