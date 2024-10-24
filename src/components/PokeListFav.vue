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

    <ul v-if="filteredFavoritePokemons.length > 0">
      <li
        v-for="pokemon in filteredFavoritePokemons"
        :key="pokemon.name"
        class="list-element"
      >
        <p class="title-element" tabindex="0" @click="showDescription(pokemon)">
          {{ pokemon.name }}
        </p>
        <font-awesome-icon
          class="favorite-icon"
          :class="{ 'favorite-icon-active': isFavorite(pokemon) }"
          :icon="['fas', 'star']"
          role="button"
          @click="toggleFavorite(pokemon)"
        />
      </li>
    </ul>

    <div v-else>
      <h2 tabindex="0">No favorites</h2>
      <p tabindex="0">You have not added any Pokémon to your favorites list</p>
    </div>

    <NavigationButtons />
    <PokeDescription
      v-if="showPopup"
      :pokemon="selectedPokemon"
      @close="closeDescription"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import NavigationButtons from './NavigationButtons.vue'
import PokeDescription from './PokeDescription.vue'
import '@/assets/styles/PokeList.css'

const store = useStore()
const searchQuery = ref('')
const favoritePokemons = computed(() => store.getters.favoritePokemons)
// const filteredFavoritePokemons = ref([])
const isFavorite = pokemon => store.getters.isFavorite(pokemon)
const selectedPokemon = ref(null)
const showPopup = ref(false)

const filteredFavoritePokemons = computed(() => {
  return favoritePokemons.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

onMounted(() => {
  window.scrollTo(0, 0)
})

function toggleFavorite(pokemon) {
  store.dispatch('toggleFavoritePokemon', pokemon)
}

async function showDescription(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
    )

    const data = await response.json()
    selectedPokemon.value = {
      name: data.name,
      weight: data.weight,
      height: data.height,
      types: data.types.map(typeInfo => typeInfo.type.name),
      image: data.sprites.other['official-artwork'].front_default,
    }
    showPopup.value = true
  } catch (error) {
    console.error('Error fetching Pokémon details:', error)
  }
}

function closeDescription() {
  showPopup.value = false
}
</script>
