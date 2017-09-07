
import Vue from 'vue'
import App from './listApp'

import VueRouter from 'vue-router'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(VueRouter)
Vue.use(MintUi)

// var router =new VueRouter({
//   rouetrs:[
//     {name:'form',path:'/form',component:Form}
//   ]
// })

new Vue({
  //  rouetr,
  render: h => h(App)
}).$mount('#app')


