<template>
  <div>
    <AddPokemon />
    <p v-if="getLoading">LOADING...</p>
    <Pokemon :poketails="getPokemon" />
    <p v-if="getError">ERROR!</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddPokemon from '~/components/add-pokemon.vue'
import Pokemon from '~/components/pokemon.vue'

export default {
  name: 'Layout',
  components: {
    AddPokemon,
    Pokemon,
  },
  computed: mapGetters(['getPokemon', 'getLoading', 'getError']),
}
</script>

<style>
</style>
