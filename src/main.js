import Vue from 'vue'

import './filters'

import AppComponent from './components/app.component'


require('materialize-css/dist/css/materialize.min.css')
require('materialize-css/dist/js/materialize.min')
require('materialize-css/dist/fonts/roboto/Roboto-Light.woff')


let vueApp = new Vue({
  el: '#app',
  components: {
    'app': AppComponent,
  }
})
