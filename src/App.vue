<template>
  <Layout />
</template>

<script>
import Layout from '~/components/layout.vue'

export default {
  name: 'App',
  components: {
    Layout,
  },
}
</script>

<style lang="scss">
$blue: #304455;
$white: #ededed;

* {
  box-sizing: inherit;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

html {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro';
  background: $white;
  color: $blue;
}

h1 {
  color: red;
}
</style>
