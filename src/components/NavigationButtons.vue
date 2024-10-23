<template>
  <div>
    <button @click="goToPokeList">All</button>
    <button @click="goToPokeListFav">Favorites</button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

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
