import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from "vue-router"
import App from './App.vue'
import axios from 'axios'
import 'vuetify/dist/vuetify.min.css'
import HelloWorld from './components/HelloWorld.vue'
import Send from './components/Send.vue'

import { store } from './store/store'
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const routes = [
  { path: '/users', component: HelloWorld },
  { path: '/send', component: Send }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
