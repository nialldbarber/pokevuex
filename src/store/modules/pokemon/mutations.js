const mutations = {
  updateInput: (state, input) => (state.input = input),
  fetchPokemon: (state, pokemon) => (state.pokemon = pokemon),
  setLoading: (state, loading) => (state.loading = loading),
  setError: (state, error) => (state.error = error),
  setSuccess: (state, success) => (state.success = success),
}

export default mutations
