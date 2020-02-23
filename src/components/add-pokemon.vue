<template>
  <form @submit.prevent="fetchPoke">
    <button @click="fetchPoke">GET</button>
    <label for="pokemon">
      Pokemon:
      <input type="text" list="pokemon" :value="getInput" @input="updateInput" />
      <datalist id="pokemon">
        <option v-for="poke in getPokemonNames" :key="poke.id" :value="poke.name.english" />
      </datalist>
    </label>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AddPokemon',
  methods: {
    ...mapActions(['fetchPokemon', 'fetchPokemonNames']),
    updateInput(e) {
      this.$store.commit('updateInput', e.target.value.toLowerCase())
    },
    fetchPoke() {
      if (this.getInput === '') {
        return
      } else {
        this.fetchPokemon()
        this.$store.commit('updateInput', '')
      }
    },
  },
  computed: mapGetters(['getInput', 'getPokemonNames']),
  mounted() {
    this.fetchPokemonNames()
  },
}
</script>

<style scoped lang="scss">
form {
  input {
    font-size: 1rem;
    line-height: 30px;
    padding: 1rem 2rem;
    border: 1px solid #e3e3e3;
    color: #273849;
    outline: none;
    border-radius: 40px;
    margin-right: 10px;
    transition: border-color 0.2s ease;
  }

  button {
    font-size: 1rem;
    padding: 1rem 2rem;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    transition: border-color 0.2s ease;
  }
}
</style>
