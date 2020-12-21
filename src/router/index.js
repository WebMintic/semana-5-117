import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
  },
  {
    path: '/cruds',
    name: 'cruds',
    component: () => import(/* webpackChunkName: "Cruds" */ '../views/Cruds.vue'),
    meta:{
      requireAuth: true
    }
  },
  {
    path: '/service/:id',
    name: 'service',
    component: () => import(/* webpackChunkName: "Service" */ '../views/Servicio.vue'),
  }
]

const router = new VueRouter({
  //history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)){
    if(localStorage.getItem('token') === null){
      next({
        path:'/'
      });
    }else{
      next();
    }
  }else{
    next();
  }
});

export default router
