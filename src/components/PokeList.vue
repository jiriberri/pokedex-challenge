<template>
  <div>
    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.name">
        <p>{{ pokemon.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const pokemonList = ref([])

async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await response.json()
    pokemonList.value = data.results
  } catch (error) {
    console.error('Error fetching Pokémon data:', error)
  }
}

onMounted(() => {
  fetchPokemon()
})
</script>
<style scoped></style>
