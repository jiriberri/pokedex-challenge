<template>
  <main>
    <img
      src="@/assets/images/mainPageLogo.png"
      alt="Pikachu image"
      tabindex="0"
    />
    <h1 tabindex="0">Welcome to Pokédex</h1>
    <p tabindex="0">
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      trainers in the Pokémon world
    </p>
    <button tabindex="0" @click="goToPokeList">Get started</button>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPokeList() {
  router.push('pokemon-list')
}
</script>
<style scoped></style>
