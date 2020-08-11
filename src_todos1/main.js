import Vue from 'vue'
import App from './App'
// import Pbusub from 'Pubsub'

Vue.config.productionTip = false
import './base.css'
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
