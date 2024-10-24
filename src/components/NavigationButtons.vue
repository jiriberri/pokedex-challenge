<template>
  <div class="navigation-buttons-container">
    <button :class="allButtonClass" @click="goToPokeList">
      <font-awesome-icon class="navbar-icon" :icon="['fas', 'list']" /> All
    </button>
    <button :class="favoritesButtonClass" @click="goToPokeListFav">
      <font-awesome-icon class="navbar-icon" :icon="['fas', 'star']" />
      Favorites
    </button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import '@/assets/styles/NavigationButtons.css'

const router = useRouter()
const route = useRoute()

const allButtonClass = computed(() => {
  return route.fullPath == '/pokemon-list'
    ? 'navigation-button page-active'
    : 'navigation-button page-disabled'
})
const favoritesButtonClass = computed(() => {
  return route.fullPath == '/pokemon-list-favorite'
    ? 'navigation-button page-active'
    : 'navigation-button page-disabled'
})

function goToPokeList() {
  if (route.fullPath == '/pokemon-list') {
    router.go(0)
  } else {
    router.push('pokemon-list')
  }
}

function goToPokeListFav() {
  router.push('pokemon-list-favorite')
}
</script>
