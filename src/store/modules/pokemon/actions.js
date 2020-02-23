const actions = {
  async fetchPokemon({ commit, state }) {
    commit('loading', true)
    try {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${state.input}`)
        .then(res => res.json())
        .then(data => commit('fetchPokemon', data))

      commit('loading', false)
      commit('success', true)

      console.log(state.pokemon);
      console.log(state.input)
    } catch (err) {
      commit('loading', false)
      commit('error', true)
    }
  }
}

export default actions
