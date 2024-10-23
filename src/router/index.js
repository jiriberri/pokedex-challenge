import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import PokeList from '@/components/PokeList.vue'
import PokeListFav from '@/components/PokeListFav.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/pokemon-list', component: PokeList },
  { path: '/pokemon-list-favorite', component: PokeListFav },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
