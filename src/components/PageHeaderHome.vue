<template>
  <div id="MenuHome">
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
      <a class="navbar-brand" @click.prevent="GoToHome">
        <img
          src="https://png.pngtree.com/png-clipart/20190603/original/pngtree-blue-earth-science-and-technology-png-image_572223.jpg"
          width="30"
          height="30"
          class="text-white d-inline-block align top"
          alt=" "
          loading="lazy"
          style="margin-right: 10px"
        />Desarrollo de talento digital - Equipo 117
      </a>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <form class="d-flex">
          <button class="btn btn-primary btn-lg" type="submit" style="100px" @click.prevent="GoToLogin">
            sig In
          </button>
        </form>
      </div>
    </nav>
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active ">
          <img
            class="d-block w-100 cortar"
            src="https://image.freepik.com/foto-gratis/cooperacion-analista-grafico-profesional-papel-economia_1418-47.jpg"
            alt="Responsive image"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="text-white">Soluciones Para Ti</h5>
            <p class="text-white">Te ayudamos a encontrar la mejor solución</p>
          </div>
        </div>

        <div class="carousel-item">
          <img
            class="d-block w-100 cortar"
            src="https://scontent.feoh2-1.fna.fbcdn.net/v/t1.0-9/118412774_2638390419745164_4940421439765734547_o.png?_nc_cat=111&ccb=2&_nc_sid=e3f864&_nc_eui2=AeHKPn-TE_HAB_Abb-vCegH8qHMPkZip31mocw-RmKnfWaBZTl_QtS9aC1evjIIL4HM&_nc_ohc=eiCFPAZ6TIAAX8eR8zH&_nc_ht=scontent.feoh2-1.fna&oh=1781afb0ac77c6847e55d07fd74e32dc&oe=6005555F"
            alt="Responsive image"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="text-white">Unidos por el mundo</h5>
            <p class="text-white">Descubre tecnologias de comuinación</p>
          </div>
        </div>

        <div class="carousel-item">
          <img
            class="d-block w-100 cortar"
            src="https://www.umweltmanager.net/fileadmin/user_upload/Headerbilder/Headerbild_Abfallmanagement.jpg"
            alt="Responsive image"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="text-white">La solución tecnologica que nesecitas</h5>
            <p class="text-white">Para ti y contigo</p>
          </div>
        </div>

        <a
          class="carousel-control-prev "
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href=" #carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'PageHeaderHome',
  data(){
    return{
      
    }
  },
  methods:{
    GoToLogin(){
      this.$router.push('/login')
    },
    GoToHome(){
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
.cortar {
  overflow: hidden;
  max-height: 510px;
  object-fit: cover;
}
h5 {
  text-shadow: 2px 0 0 #000000;
}
p {
  text-shadow: 2px 0 0 #000000;
}
</style>