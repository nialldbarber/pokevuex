<template>
  <div>
    <Pokemon />
  </div>
</template>

<script>
import Pokemon from "./components/pokemon.vue";

export default {
  name: "App",
  components: {
    Pokemon
  },
  data: () => ({
    name: "Niall"
  })
};
</script>

<style>
h1 {
  color: red;
}
</style>
