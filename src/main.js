import Vue from 'vue'
import App from './App.vue'
import './assets/main.scss'
import router from './router'
import VuePageTransition from 'vue-page-transition'
import './registerServiceWorker'

Vue.use(VuePageTransition)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
