import { POKEMON_API, POKEMON_NAMES } from '~/constants/pokemon'

const actions = {
  async fetchPokemonNames({ commit }) {
    try {
      await fetch(POKEMON_NAMES)
        .then(res => res.json())
        .then(data => {
          commit('fetchPokemonNames', data)
          console.log(data)
        })
    } catch (error) {
      console.log(error)
    }
  },
  async fetchPokemon({ commit, state }) {
    commit('loading', true)
    try {
      await fetch(POKEMON_API + state.input)
        .then(res => res.json())
        .then(data => commit('fetchPokemon', data))

      commit('loading', false)
      commit('success', true)
      console.log(state.pokemon);

    } catch (err) {
      commit('loading', false)
      commit('error', true)
    }
  }
}

export default actions
