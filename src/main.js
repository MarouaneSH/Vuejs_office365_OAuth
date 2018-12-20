import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/";

//if loca storage has token, add it the axios default header
const token = localStorage.getItem('token');

if (token) {
    axios.defaults.headers.common = {'Authorization': "bearer " + token};
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
