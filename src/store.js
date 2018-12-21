import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {VueAuthenticate} from 'vue-authenticate'


Vue.use(VueAxios, axios)

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


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    isAuthenthicated : false,
    user : null,
  },
  getters : {
    isAuthenticated() {
      return vueAuth.isAuthenticated()
    },
    user(state) {
      return state.user;
    }
  },
  mutations: {
    add_token(state , token) {
      localStorage.setItem("token",token);
      state.token = token;
    },
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    set_user(state, user) {
      state.user = user;
    }
    
  },
  actions: {
      login() {
       
         return new Promise((resolve) => {
              vueAuth.authenticate("live").then((response)=>{
                  resolve(response.data);
              })
         })
      }
  }
})
