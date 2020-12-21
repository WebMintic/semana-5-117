<template>
    <div>
        <div class="card-crud">
            <button type="button" class="btn btn-primary" @click.prevent="vRegistrarCategoria=true">Registrar categoria</button>
        </div>

        <table class="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descricion</th>
                <th scope="col">Image</th>
                <th scope="col">guardar</th>
                <th scope="col">updateEstado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(categoria,index) of dataCategorias" :key="categoria.id" v-bind:class="categoria.estado? 'bg-success':'bg-danger'">
                    <th scope="row">{{categoria.id}}</th>
                    <td scope="row"><input type="text"  v-model="categoria.nombre"></td>
                    <td scope="row"><input type="text" v-model="categoria.descripcion" ></td>
                    <td scope="row"><input type="text" v-model="categoria.image"></td>
                    <td scope="row"><button type="button" class="btn btn-primary" @click.prevent="updateCategoria(index)">guardar</button></td>
                    <td scope="row"><button type="button" class="btn btn-primary" @click.prevent="activateEstado(index)">A</button>
                    <button type="button" class="btn btn-primary" @click.prevent="DeactivateEstado(index)">D</button></td>
                </tr>
            </tbody>
        </table>

        <pre>
            {{UpdateDataCategoria}}
        </pre>

        <button type="button" class="btn btn-primary" @click.prevent="vRegistrarArticulo=true">Registrar Articulo</button>  


        <table class="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Codigo</th>
                <th scope="col">CatId</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descricion</th>
                <th scope="col">Image</th>
                <th scope="col">guardar</th>
                <th scope="col">updateEstado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(articulo,index) of dataArticulos" :key="articulo.id" v-bind:class="articulo.estado? 'bg-success':'bg-danger'">
                    <th scope="row">{{articulo.id}}</th>
                    <td scope="row"><input type="text"  v-model="articulo.codigo" size="5"></td>
                    <td scope="row"><input type="text"  v-model="articulo.categoriaId" size="1"></td>
                    <td scope="row"><input type="text"  v-model="articulo.nombre" size="10"></td>
                    <td scope="row"><input type="text" v-model="articulo.descripcion" ></td>
                    <td scope="row"><input type="text" v-model="articulo.image"></td>
                    <td scope="row"><button type="button" class="btn btn-primary" @click.prevent="updateArticulo(index)">guardar</button></td>
                    <td scope="row"><button type="button" class="btn btn-primary" @click.prevent="activateEstadoA(index)">A</button>
                    <button type="button" class="btn btn-primary" @click.prevent="DeactivateEstadoA(index)">D</button></td>
                </tr>
            </tbody>
        </table>
        <pre>
            {{UpdateDataArticulo}}
        </pre>
        

        <div v-if="vRegistrarCategoria" class="pop-up">
            <form>
                <div class="modalTitle">
                    <h1>Registrar Categoria</h1>
                </div>
                <div class="modalBody">
                    <div class="input">
                        <label for="inputNameCategoria">Nombre: </label>
                        <input type="text" name="" id="" v-model="dataCategoria.nombre">
                    </div>
                   <div class="input">
                        <label for="inputNameCategoria">Descricion: </label>
                        <input type="text" name="" id="" v-model="dataCategoria.descripcion">
                    </div>
                    <div class="input">
                        <label for="inputNameCategoria">Image: </label>
                        <input type="text" name="" id="" v-model="dataCategoria.image">
                    </div>
                    <div class="input">
                        <label for="inputNameCategoria">Activo </label>
                        <input type="checkbox" name="" id="" v-model="dataCategoria.estado">
                    </div>
                </div>
                <button type="button" class="btn btn-primary" @click.prevent="registerCategoria">Guardar</button>
                <button type="button" class="btn btn-primary" @click.prevent="cleanInputs">cancelar</button>
                <pre>
                    {{dataCategoria}}
                </pre>
            </form>
        </div>

        <div v-if="vRegistrarArticulo" class="pop-up">
            <form>
                <div class="modalTitle">
                    <h1>Registrar Articulo</h1>
                </div>
                <div class="modalBody">
                    <div class="input">
                        <label for="inputNameCategoria">Codigo: </label>
                        <input type="text" name="" id="" v-model="dataArticulo.codigo">
                    </div>
                    <div class="input">
                        <label for="inputNameCategoria">Nombre: </label>
                        <input type="text" name="" id="" v-model="dataArticulo.nombre">
                    </div>
                   <div class="input">
                        <label for="inputNameCategoria">Descricion: </label>
                        <input type="text" name="" id="" v-model="dataArticulo.descripcion">
                    </div>
                    <div class="input">
                        <label for="inputNameCategoria">CatID: </label>
                        <input type="text" name="" id="" v-model="dataArticulo.categoriaId">
                    </div>
                    <div class="input">
                        <label for="inputNameCategoria">Image: </label>
                        <input type="text" name="" id="" v-model="dataArticulo.image">
                    </div>
                    <div class="input">
                        <label for="inputNameCategoria">Activo </label>
                        <input type="checkbox" name="" id="" v-model="dataCategoria.estado">
                    </div>
                </div>
                <button type="button" class="btn btn-primary" @click.prevent="registerArticulo">Guardar</button>
                <button type="button" class="btn btn-primary" @click.prevent="cleanInputsA">cancelar</button>
                <pre>
                    {{dataArticulo}}
                </pre>
            </form>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'TheCruds',
    data(){
        return{
            vRegistrarCategoria:false,
            vRegistrarArticulo:false,
            dataCategoria:{
                nombre:'',
                descripcion:'',
                image:'',
                estado: true
            },
            UpdateDataCategoria:{
                id:'',
                nombre:'',
                descripcion:'',
                image:'',
                estado: true
            },
            dataCategorias: null,


            dataArticulo:{
                codigo:'',
                nombre:'',
                descripcion:'',
                categoriaId:'',
                image:'',
                estado: true
            },
            UpdateDataArticulo:{
                id:'',
                codigo:'',
                nombre:'',
                descripcion:'',
                categoriaId:'',
                image:'',
                estado: true
            },
            dataArticulos:null
        }
    },
    methods:{
        cleanInputs(){
            this.dataCategoria.nombre='';
            this.dataCategoria.descripcion='';
            this.dataCategoria.image='';
            this.dataCategoria.estado=true;
            this.vRegistrarCategoria=false;
        },
        cleanInputsA(){
            this.dataArticulo.codigo='';
            this.dataArticulo.categoriaId='';
            this.dataArticulo.nombre='';
            this.dataArticulo.descripcion='';
            this.dataArticulo.image='';
            this.dataArticulo.estado=true;
            this.vRegistrarArticulo=false;
        },
        async registerCategoria(){
            if(this.dataCategoria.estado){
                this.dataCategoria.estado = 1;
            }else{
                this.dataCategoria.estado = 0
            }
            let response = await this.$http.post('/api/categoria/add',this.dataCategoria)
            console.log(response);
            this.cleanInputs();
            this.getCategorias();
        },
        async getCategorias(){
            let services = await this.$http.get('/api/categoria/list');
            this.dataCategorias = services.data
            console.log(this.dataCategorias)
        },
        async updateCategoria(index){
            this.UpdateDataCategoria.id = this.dataCategorias[index].id;
            this.UpdateDataCategoria.nombre = this.dataCategorias[index].nombre;
            this.UpdateDataCategoria.descripcion = this.dataCategorias[index].descripcion;
            this.UpdateDataCategoria.estado = this.dataCategorias[index].estado;
            this.UpdateDataCategoria.image = this.dataCategorias[index].image;
            let response = await this.$http.put('/api/categoria/update',this.UpdateDataCategoria);
            console.log(response)
        },
        async activateEstado(index){
            this.UpdateDataCategoria.id = this.dataCategorias[index].id;
            this.dataCategorias[index].estado = 1;
            let response = await this.$http.put('/api/categoria/activate',this.UpdateDataCategoria);
            console.log(response)
        },
        async DeactivateEstado(index){
            this.UpdateDataCategoria.id = this.dataCategorias[index].id;
            this.dataCategorias[index].estado = 0;
            let response = await this.$http.put('/api/categoria/deactivate',this.UpdateDataCategoria);
            console.log(response)
        },
/******************************************************************************************************************* */
        async getArticulos(){
            let response = await this.$http.get('/api/articulo/list');
            this.dataArticulos = response.data
            console.log(response)
        },
        async registerArticulo(){
            if(this.dataArticulo.estado){
                this.dataArticulo.estado = 1;
            }else{
                this.dataArticulo.estado = 0
            }
            let response = await this.$http.post('/api/articulo/add',this.dataArticulo)
            console.log(response);
            this.cleanInputsA();
            this.getArticulos();
        },
        async updateArticulo(index){
            this.UpdateDataArticulo.id = this.dataArticulos[index].id;
            this.UpdateDataArticulo.codigo = this.dataArticulos[index].codigo;
            this.UpdateDataArticulo.nombre = this.dataArticulos[index].nombre;
            this.UpdateDataArticulo.descripcion = this.dataArticulos[index].descripcion;
            this.UpdateDataArticulo.categoriaId = this.dataArticulos[index].categoriaId;
            this.UpdateDataArticulo.estado = this.dataArticulos[index].estado;
            this.UpdateDataArticulo.image = this.dataArticulos[index].image;
            let response = await this.$http.put('/api/articulo/update',this.UpdateDataArticulo);
            console.log(response)
        },
        async activateEstadoA(index){
            this.UpdateDataArticulo.id = this.dataArticulos[index].id;
            this.dataArticulos[index].estado = 1;
            let response = await this.$http.put('/api/articulo/activate',this.UpdateDataArticulo);
            console.log(response)
        },
        async DeactivateEstadoA(index){
            this.UpdateDataArticulo.id = this.dataArticulos[index].id;
            this.dataArticulos[index].estado = 0;
            let response = await this.$http.put('/api/articulo/deactivate',this.UpdateDataArticulo);
            console.log(response)
        },
    },
    mounted(){
        this.getCategorias();
        this.getArticulos();
    }
}
</script>

<style scoped>
.card-crud{

}

.pop-up{
    background-color: aquamarine;
    width: 50%;
    margin:auto;
    position: fixed;
    left: 25%;
    top: 25%;
    /*z-index: -1;*/
}

.pop-up .modalBody{
}
.pop-up .modalBody .input{
    margin: 5px;
    padding: 5px;
}
</style>