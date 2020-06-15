import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from "../views/Blog.vue"
import Detail from "../views/Detail.vue"
import Pa from "../components/Pagination.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog 
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail 
  },
  {
    path: "/test",
    name: "P",
    component: Pa
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
