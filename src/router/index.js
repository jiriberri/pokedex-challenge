import { createRouter, createWebHistory } from 'vue-router'
import { isLoading } from '@/loadingState.js'
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

router.beforeEach((to, from, next) => {
  isLoading.value = true
  setTimeout(() => {
    next()
  }, 200)
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 200)
})

export default router
