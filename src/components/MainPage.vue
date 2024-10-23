<template>
  <div class="main-page">
    <img
      src="@/assets/images/mainPageLogo.png"
      alt="Pikachu image"
      tabindex="0"
      class="main-page-logo"
    />
    <h1 tabindex="0" class="main-title">Welcome to Pokédex</h1>
    <p tabindex="0" class="main-description">
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      trainers in the Pokémon world
    </p>
    <button tabindex="0" class="get-started-button" @click="goToPokeList">
      Get started
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import '@/assets/styles/MainPage.css'

const router = useRouter()

function goToPokeList() {
  router.push('pokemon-list')
}
</script>
<style scoped></style>
