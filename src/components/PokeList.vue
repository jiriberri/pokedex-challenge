<template>
  <div>
    <input
      type="text"
      v-model="searchQuery"
      @keyup.enter="filterPokemon"
      placeholder="Search"
    />
    <ul v-if="filteredPokemonList.length > 0">
      <li v-for="pokemon in filteredPokemonList" :key="pokemon.name">
        <p>{{ pokemon.name }}</p>
      </li>
    </ul>
    <div v-else>
      <h2>Uh-ok!</h2>
      <p>You look lost on your journey!</p>
      <button tabindex="0" @click="goToMainPage">Go Back Home</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const pokemonList = ref([])
const filteredPokemonList = ref([])
const searchQuery = ref('')
const router = useRouter()

function goToMainPage() {
  router.push('/')
}

async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await response.json()
    pokemonList.value = data.results
    filteredPokemonList.value = data.results
  } catch (error) {
    console.error('Error fetching Pokémon data:', error)
  }
}

function filterPokemon() {
  filteredPokemonList.value = pokemonList.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
}

onMounted(() => {
  fetchPokemon()
})
</script>
<style scoped></style>
