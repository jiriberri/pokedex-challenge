<template>
  <div class="pokemon-list-container">
    <input
      class="search-input"
      type="text"
      v-model="searchQuery"
      @keyup.enter="filterPokemon"
      placeholder="Search"
    />
    <font-awesome-icon
      class="search-icon"
      icon="fa-solid fa-magnifying-glass"
    />
    <div v-if="filteredPokemonList.length > 0">
      <ul>
        <li
          class="list-element"
          v-for="pokemon in filteredPokemonList"
          :key="pokemon.name"
        >
          <p class="title-element" tabindex="0">{{ pokemon.name }}</p>
          <font-awesome-icon
            class="favorite-icon"
            :class="{ 'favorite-icon-active': isFavorite(pokemon) }"
            :alt="
              isFavorite(pokemon) ? 'Add to favorites' : 'Remove from favorites'
            "
            :icon="['fas', 'star']"
            role="button"
            @click="toggleFavorite(pokemon)"
          />
        </li>
      </ul>

      <NavigationButtons />
    </div>
    <div class="error-message-container" v-else>
      <h2 class="error-title" tabindex="0">Uh-ok!</h2>
      <p class="error-description" tabindex="0">
        You look lost on your journey!
      </p>
      <button class="go-back-button" tabindex="0" @click="goToMainPage">
        Go Back Home
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import NavigationButtons from './NavigationButtons.vue'
import '@/assets/styles/PokeList.css'

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
    pokemon.name.includes(searchQuery.value),
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
