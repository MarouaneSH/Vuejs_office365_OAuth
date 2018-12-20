import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {VueAuthenticate} from 'vue-authenticate'

Vue.use(VueAxios, axios)
Vue.use(Vuex)


const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: 'http://localhost:8000', // Your API domain
  
  providers: {
    live: {
      clientId: '00970931-21bf-46bc-9be9-f460d43fb6b7',
      redirectUri: 'http://localhost:8080' ,// Your client app URL
      authorizationEndpoint : "https://login.microsoftonline.com/common/oauth2/v2.0/authorize/",
      scope: ["openid","profile","offline_access","User.Read"],
      scopeDelimiter: ' ',
      oauthType: '2.0',
    }
  }
})

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    isAuthenthicated : false,
  },
  getters : {
    isAuthenticated() {
      return vueAuth.isAuthenticated()
    }
  },
  mutations: {

  },
  actions: {

  }
})
