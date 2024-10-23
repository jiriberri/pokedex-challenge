<template>
  <div>
    <ul v-if="favoritePokemons.length > 0">
      <li v-for="pokemon in favoritePokemons" :key="pokemon.name">
        <p tabindex="0">{{ pokemon.name }}</p>
        <img
          role="button"
          :src="isFavorite(pokemon) ? addFavoriteImage : removeFavoriteImage"
          :alt="
            isFavorite(pokemon) ? 'Add to favorites' : 'Remove from favorites'
          "
          @click="toggleFavorite(pokemon)"
          class="favorite-icon"
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
import { computed } from 'vue'
import { useStore } from 'vuex'
import NavigationButtons from './NavigationButtons.vue'
import addFavoriteImage from '@/assets/images/fav-active.png'
import removeFavoriteImage from '@/assets/images/fav-disabled.png'

const store = useStore()

const favoritePokemons = computed(() => store.getters.favoritePokemons)

function toggleFavorite(pokemon) {
  store.dispatch('toggleFavoritePokemon', pokemon)
}

const isFavorite = pokemon => store.getters.isFavorite(pokemon)
</script>

<style scoped>
.favorite-icon {
  cursor: pointer;
  width: 24px;
  height: 24px;
}
</style>
