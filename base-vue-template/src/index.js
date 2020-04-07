import './js/common'
import './css/main.css'
import './scss/main.scss'

window.Vue = require('vue');
import store from './store'

Vue.component('example', require('./components/Example.vue').default)

const app = new Vue({
  data () {
    return {
      show: true
    }
  },
  store,
  el: '#app'
})