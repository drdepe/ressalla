import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SendImage from "../views/SendImage.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/images',
    name: 'images',
    component: SendImage
  },
]

const router = new VueRouter({
  routes
})

export default router
