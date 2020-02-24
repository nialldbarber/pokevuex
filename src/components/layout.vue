<template>
  <div class="form">
    <AddPokemon />
    <p v-if="getLoading">LOADING...</p>
    <Pokemon :poketails="getPokemon" />
    <p v-if="getError">ERROR!</p>
    <Button />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddPokemon from '~/components/add-pokemon.vue'
import Pokemon from '~/components/pokemon.vue'
import Button from '~/components/button.vue'

export default {
  name: 'Layout',
  components: {
    AddPokemon,
    Pokemon,
    Button
  },
  computed: mapGetters(['getPokemon', 'getLoading', 'getError']),
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
