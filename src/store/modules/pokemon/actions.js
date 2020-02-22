const actions = {
  async fetchPokemon({ commit, state }) {
    commit('setLoading', true)
    try {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${state.input}`)
        .then(res => res.json())
        .then(data => commit('fetchPokemon', data))

      commit('setLoading', false)
      commit('setSuccess', true)
      console.log(state.input)
    } catch (err) {
      commit('setLoading', false)
      commit('setError', true)
    }
  }
}

export default actions
