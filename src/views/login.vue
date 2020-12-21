<template>
    <div class="mx-auto log shadow">
        <the-login></the-login>
    </div>
</template>

<script>

import TheLogin from '../components/TheLogin.vue'

export default {
    components:{
        TheLogin
    }
}
</script>

<style scoped>
.log{
    width: 30%;
}

@media only screen and (max-width: 600px) {
  .log{width: 80%;}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .log{width: 60%;}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .log{width: 50%;}
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .log{width: 45%;}
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .log{width: 30%;}
}
</style>

<script>
import PageHeaderLogin from "../components/PageHeaderLogin.vue";
// @ is an alias to /src
