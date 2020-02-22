<template>
  <form @submit.prevent="fetchPoke">
    <input type="text" :value="getInput" @input="updateInput" />
    <button @click="fetchPoke">GET</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddPokemon",
  methods: {
    ...mapActions(["fetchPokemon"]),
    updateInput(e) {
      this.$store.commit("updateInput", e.target.value);
    },
    fetchPoke() {
      if (this.getInput === "") return;
      else {
        this.fetchPokemon();
        this.$store.commit("updateInput", "");
      }
    }
  },
  computed: mapGetters(["getInput"])
};
</script>

<style>
</style>
