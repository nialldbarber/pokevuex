<template>
  <div>
    <h1>POKEMON</h1>
    <template v-if="getSuccess">
      <p>POKEMON: {{ poketails.species.name }}</p>
      <p>Height: {{ poketails.height }}</p>
      <img
        @click="reversePokemon"
        :src="clicked ? poketails.sprites.back_default : poketails.sprites.front_default"
        alt="Pokemon"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Pokemon",
  props: ["poketails"],
  data: () => ({
    clicked: false
  }),
  methods: {
    reversePokemon() {
      this.clicked = !this.clicked;
    }
  },
  computed: mapGetters(["getSuccess"])
};
</script>

<style scoped lang="scss">
img {
  width: 100vw;
  height: auto;
  max-width: 700px;
}
</style>
