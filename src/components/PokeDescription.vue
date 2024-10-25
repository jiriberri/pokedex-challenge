<template>
  <div class="popup-container">
    <div class="description-container">
      <font-awesome-icon
        class="close-button"
        :icon="['fas', 'circle-xmark']"
        @click="$emit('close')"
      />
      <img
        class="background-image"
        src="../assets/images/pokemon-background.png"
        alt="Background Image"
      />
      <!-- <img class="pokemon-image" :src="pokemon.image" alt="Pokemon image" /> -->
      <p class="pokemon-info">Name: {{ pokemon.name }}</p>
      <p class="pokemon-info">Weight: {{ pokemon.weight }}</p>
      <p class="pokemon-info">Height: {{ pokemon.height }}</p>
      <p class="pokemon-info">Types: {{ pokemon.types.join(', ') }}</p>
      <div class="buttons-container">
        <button class="share-button" @click="sharePokemon">
          Share to my friends
        </button>
        <font-awesome-icon
          class="favorite-icon"
          :class="{ 'favorite-icon-active': isFavorite }"
          :icon="['fas', 'star']"
          @click="toggleFavorite"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import '@/assets/styles/PokeDescription.css'

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
})
const store = useStore()
const isFavorite = computed(() => store.getters.isFavorite(props.pokemon))

onMounted(() => {
  document.body.classList.add('no-scroll')
})

onUnmounted(() => {
  document.body.classList.remove('no-scroll')
})

function toggleFavorite() {
  store.dispatch('toggleFavoritePokemon', props.pokemon)
}

function sharePokemon() {
  const pokemonDetails = `Name: ${props.pokemon.name}, Weight: ${props.pokemon.weight}, Height: ${props.pokemon.height}, Types: ${props.pokemon.types.join(', ')}`
  navigator.clipboard
    .writeText(pokemonDetails)
    .then(() => {
      alert('Pokémon details copied to clipboard!')
    })
    .catch(err => {
      console.error('Failed to copy text: ', err)
    })
}
</script>
