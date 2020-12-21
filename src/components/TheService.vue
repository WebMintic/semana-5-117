<template>
    <div class="">
        <div class="service-header">
            <h1>{{dataService.nombre}}</h1>
            <h2>{{dataService.descripcion}}</h2>
        </div>
        <div class="container-master">
            <div class="row justify-content-center cards-services ">
                <div class="card m-3 shadow card-s" style="width: 21rem;" v-for="(service,index) of dataService.articulo" :key="index">
                    <div class="c-top">
                        <h1><i v-bind:class="service.image"></i></h1>
                    </div>
                    <div class="card-body c-body">
                        <h5 class="card-title">{{service.nombre}}</h5>
                        <p class="card-text">{{service.descripcion}}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <page-footer class="mt-3"></page-footer>
    </div>
</template>

<script>
import PageFooter from '../components/PageFooter.vue'

export default {
    name:'TheService',
    components:{
        PageFooter
    },
    data(){
        return{
            dataService:{
                nombre: '',
                descripcion: '',
                image:''
            },
        }
    },
    methods:{
        async getDataService(){
            let idS = this.$route.params.id;
            let services = await this.$http.get(`/api/categoria/list/${idS}`);
            this.dataService = services.data[0]
            console.log(this.dataService)
        }
    },
    mounted(){
        this.getDataService();
    }
}
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
  /*height: 200px;*/
  overflow: hidden;
}
/*.card-s .c-top img{
  border-radius: 20px 20px 0px 0px;
  height: 100px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}*/
.card-s .c-top h1{
    font-size: 8rem;
    color:#f2b705
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


.image-service{
    width: 100%;
    height: 60vh;
    margin: auto;
    overflow: hidden;
}
.image-service img{
    width: 100%;
    object-fit: cover;
    object-position: center center;
}
.service-header{
    width: 80%;
    margin: auto;
    text-align: start;
    margin-top: 40px;
    margin-bottom: 40px;
    color: #1e1c1d;
}
</style>