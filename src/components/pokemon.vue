<template>
  <div>
    <h1>POKEMON</h1>
    <template v-if="getSuccess">
      <p>POKEMON: {{ poketails.species.name }}</p>
      <p>Height: {{ poketails.height }}</p>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Pokemon",
  props: ["poketails"],
  computed: mapGetters(["getSuccess"])
};
</script>

<style>
</style>
