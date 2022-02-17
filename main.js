import Vue from 'vue'
import App from './App.vue'
//bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
