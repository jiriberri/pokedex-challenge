import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import PokemonList from '@/components/PokemonList.vue'
import ListFav from '@/components/ListFav.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/list', component: PokemonList },
  { path: '/favlist', component: ListFav },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
