
import Vue from 'vue'
import App from './listApp'

import VueRouter from 'vue-router'
Vue.use(VueRouter)



import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

// import '../../../../static/mui/mui.min.css'
 

new Vue({
  //  rouetr,
  render: h => h(App)
}).$mount('#app')
