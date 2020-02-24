import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import store from '~/store'
import App from '~/app.vue'

Vue.use(VueCompositionApi)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
