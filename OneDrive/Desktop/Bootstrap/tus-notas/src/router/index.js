import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Form from '../views/Form.vue'
import Editar from '../views/Editar.vue'
import Buscar from '../views/Buscar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '/editar/',
    name: 'editar',
    component: Editar
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/find',
    name: 'find',
    component: Buscar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router