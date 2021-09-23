import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cart-list",
    name: "CartList",
    component: () => import("../views/CartList.vue")
  },
  {
    path: "/todo",
    name: "ProductList",
    component: () => import("../views/ProductList.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
