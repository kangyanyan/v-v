
import Vue from 'vue'
import App from './listApp'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Form from '../../../components/Form'

import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

import '../../../assets/mui/mui.min.css'

// var router =new VueRouter({
//   rouetrs:[
//     {name:'form',path:'/form',component:Form}
//   ]
// })

new Vue({
  //  rouetr,
  render: h => h(App)
}).$mount('#app')
