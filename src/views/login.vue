<template>
  <div class="login">
    <page-header-login></page-header-login>
  </div>
</template>

<script>
import PageHeaderLogin from "../components/PageHeaderLogin.vue";
// @ is an alias to /src

export default {
  name: "Login",
  components: {
    PageHeaderLogin,
  },
};
</script>
