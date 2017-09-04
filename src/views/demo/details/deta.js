import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App'
import A2pp from './A2pp'

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/list', component: A2pp }
  ]
}) 

new Vue({
  router
  // router: router
}).$mount('#app')
