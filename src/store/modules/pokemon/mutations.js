const mutations = {
  updateInput: (state, input) => (state.input = input),
  fetchPokemon: (state, pokemon) => (state.pokemon = pokemon),
  loading: (state, loading) => (state.loading = loading),
  error: (state, error) => (state.error = error),
  success: (state, success) => (state.success = success),
}

export default mutations
