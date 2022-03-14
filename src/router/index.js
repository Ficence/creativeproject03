import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Favorites from '../views/Favorites.vue'
import TagSearch from '../views/TagSearch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  },
  {
    path: '/tagsearch',
    name: 'TagSearch',
    component: TagSearch
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
