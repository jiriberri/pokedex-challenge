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
        class="list-element"
        v-for="pokemon in filteredFavoritePokemons"
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
    <div v-else>
      <h2 tabindex="0">No favorites</h2>
      <p tabindex="0">You have not added any Pokémon to your favorites list</p>
    </div>
    <NavigationButtons />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import NavigationButtons from './NavigationButtons.vue'
import '@/assets/styles/PokeList.css'

const store = useStore()
const searchQuery = ref('')
const favoritePokemons = computed(() => store.getters.favoritePokemons)
const filteredFavoritePokemons = ref([])
const isFavorite = pokemon => store.getters.isFavorite(pokemon)

onMounted(() => {
  filterPokemon()
  window.scrollTo(0, 0)
})

function filterPokemon() {
  filteredFavoritePokemons.value = favoritePokemons.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
}

function toggleFavorite(pokemon) {
  store.dispatch('toggleFavoritePokemon', pokemon)
  filterPokemon()
}
</script>
