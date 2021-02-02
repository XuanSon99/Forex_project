import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import './assets/css/custom.css'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import 'uikit/dist/css/uikit-core.min.css'
import 'uikit/dist/js/uikit-core.min.js'
// import './assets/js/vendors/indonez.min.js'
// import './assets/js/config-theme.js'


Vue.config.productionTip = false

new Vue({
  router,
  bootstrap,
  render: h => h(App)
}).$mount('#app')
