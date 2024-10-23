import { createStore } from 'vuex'

const FAVORITES_KEY = 'favoritePokemons'

const store = createStore({
  state() {
    return {
      favoritePokemons: JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [],
    }
  },
  mutations: {
    ADD_FAVORITE_POKEMON(state, pokemon) {
      state.favoritePokemons.push(pokemon)
      localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(state.favoritePokemons),
      )
    },
    REMOVE_FAVORITE_POKEMON(state, pokemon) {
      state.favoritePokemons = state.favoritePokemons.filter(
        fav => fav.name !== pokemon.name,
      )
      localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(state.favoritePokemons),
      )
    },
  },
  actions: {
    addFavoritePokemon({ commit }, pokemon) {
      commit('ADD_FAVORITE_POKEMON', pokemon)
    },
    removeFavoritePokemon({ commit }, pokemon) {
      commit('REMOVE_FAVORITE_POKEMON', pokemon)
    },
    toggleFavoritePokemon({ commit, getters }, pokemon) {
      if (getters.isFavorite(pokemon)) {
        commit('REMOVE_FAVORITE_POKEMON', pokemon)
      } else {
        commit('ADD_FAVORITE_POKEMON', pokemon)
      }
    },
  },
  getters: {
    favoritePokemons: state => state.favoritePokemons,
    isFavorite: state => pokemon => {
      return state.favoritePokemons.some(fav => fav.name === pokemon.name)
    },
  },
})

export default store
