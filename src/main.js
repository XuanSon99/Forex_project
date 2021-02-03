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
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
// import './assets/js/vendors/indonez.min.js'
// import './assets/js/config-theme.js'
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.prototype.$urlAPI = 'http://45.77.9.47/api/';
Vue.prototype.$headers = {
  headers: {
    "Authorization": localStorage.getItem("token"),
  },
};
Vue.prototype.CallAPI = function (method, url, data, callResponse, callError) {
  switch (method) {
    case "post":
      this.$axios
        .post(this.$urlAPI + url, data, this.$headers)
        .then((response) => {
          if (response.data.statusCode === 401) {
            localStorage.clear();
            location.reload();
          }
          callResponse(response);
        })
        .catch((error)=> {
          callError(error.response);
        })
        break;
    case "delete":
      this.$axios
        .delete(this.$urlAPI + url, data, this.$headers)
        .then((response) => {
          if (response.data.statusCode === 401) {
            localStorage.clear();
            location.reload();
          }
          callResponse(response);
        })
        break;
  }
}
new Vue({
  router,
  bootstrap,
  axios,
  render: h => h(App)
}).$mount('#app')
