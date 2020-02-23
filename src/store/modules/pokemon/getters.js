const getters = {
  getInput: state => state.input,
  getPokemonNames: state => state.listOfPokemonNames,
  getPokemon: state => state.pokemon,
  getLoading: state => state.loading,
  getError: state => state.error,
  getSuccess: state => state.success,
}

export default getters
