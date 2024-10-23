<template>
  <div>
    <input
      type="text"
      v-model="searchQuery"
      @keyup.enter="filterPokemon"
      placeholder="Search"
    />
    <div v-if="filteredPokemonList.length > 0">
      <ul>
        <li v-for="pokemon in filteredPokemonList" :key="pokemon.name">
          <p tabindex="0">{{ pokemon.name }}</p>
          <button
            :class="{ favorite: isFavorite(pokemon) }"
            @click="toggleFavorite(pokemon)"
          >
            Add
          </button>
        </li>
      </ul>

      <NavigationButtons />
    </div>
    <div v-else>
      <h2 tabindex="0">Uh-ok!</h2>
      <p tabindex="0">You look lost on your journey!</p>
      <button tabindex="0" @click="goToMainPage">Go Back Home</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import NavigationButtons from './NavigationButtons.vue'

const pokemonList = ref([])
const filteredPokemonList = ref([])
const searchQuery = ref('')
const router = useRouter()
const store = useStore()

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

function toggleFavorite(pokemon) {
  store.dispatch('toggleFavoritePokemon', pokemon)
}

const isFavorite = pokemon => store.getters.isFavorite(pokemon)

onMounted(() => {
  fetchPokemon()
})
</script>
<style scoped>
.favorite {
  background-color: yellow;
}
</style>
