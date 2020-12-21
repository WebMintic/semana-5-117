<template>
<div class="container-master">
<div class="row justify-content-center cards-services">
    <div class="card m-3 shadow card-s" style="width: 21rem;" v-for="(service,index) of dataService" :key="index" v-if="service.estado===1">
        <div class="c-top">
            <img class="" width="100%" :src="service.image" alt="Card image cap">
        </div>
        <div class="card-body c-body">
            <h5 class="card-title">{{service.nombre}}</h5>
            <p class="card-text">{{service.descripcion}}</p>
            <a href="#" class="btn btn-color" @click.prevent="getDataServiceUnic(index)" >Ver Mas</a>
        </div>
    </div>
    <pre>{{dataService2}}</pre>
</div>
</div>


</template>

<script>
export default {
  name: "SectionServices",
  data(){
      return{
          dataService: null,
          dataService2: null,
      }
  },
  methods:{
      async getDataServices(){
          let services = await this.$http.get('/api/categoria/list');
          this.dataService = services.data
          console.log(this.dataService)
      },
      async getDataServiceUnic(index){
          let idS = this.dataService[index].id;
          this.$router.push(`/service/${idS}`);
      }
  },
  mounted(){
      this.getDataServices();
  }
};
</script>

<style scoped>
.container-master{
  background-color: #1e1c1d;
  width: 100%;
  margin: auto;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.cards-services{
  width: 90%;
  margin: auto;
}
.card-s{
  border: 2px solid;
  border-color: #f2b705;
  background-color: rgba(0,0,0,0);
  border-radius: 20px;
  color: #f7f7f7;
  transition: 500ms ease;
}
.card-s:hover{
  transform: scale(1.05);
}
.card-s .c-top{
  width: 21rem;
  margin-left: -15px;
  margin-top: -2px;
  height: 200px;
  overflow: hidden;
}
.card-s .c-top img{
  border-radius: 20px 20px 0px 0px;
  height: 100px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
.btn-color{
  background-color: #f2b705;
}
.c-body h5{
    font-size: 2.5rem;
}
.c-body p{
    font-size: 0.85rem;
}

</style>
