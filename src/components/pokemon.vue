<template>
  <div>
    <h1>{{ getInput }}</h1>
    <input type="text" :value="getInput" @input="updateInput" />
    <button @click="fetchPoke">GET</button>
    <p v-if="getLoading">LOADING...</p>
    <p v-if="getSuccess">{{ getPokemon.species.name }}</p>
    <p v-if="getError">ERROR!</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Pokemon",
  methods: {
    ...mapActions(["fetchPokemon"]),
    updateInput(e) {
      this.$store.commit("updateInput", e.target.value);
    },
    fetchPoke() {
      if (this.getInput === "") return;
      else return this.fetchPokemon();
    }
  },
  computed: mapGetters([
    "getPokemon",
    "getInput",
    "getLoading",
    "getError",
    "getSuccess"
  ])
};
</script>

<style>
</style>
