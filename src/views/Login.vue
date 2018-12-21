<template>
    <div id="app-wrapper">
        <div class="card-box">
            <img src="./../assets/office.png">
            <div class="card-content">
                 <div class="text-xs-center" v-if="loading">
                      Loading....
                 </div>
                <div class="card-bottom" v-else>
                    <button @click="login()">Login</button>
                </div>
                <div class="error_login" v-if="permissionError" >
                    vous n'avez pas la permission d'accéder à cette page
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      loading : false,
      permissionError : false,
    }
  },
  methods : {
        login() {
            this.loading = true;
            this.permissionError = false;

            this.$store.dispatch("login").then((response)=>{
                 if(response.success) {
                     console.log(response);
                      this.$store.commit('add_token', response.token);    
                      this.$store.commit('isAuthenticated', true);  
                      this.$store.commit('set_user', response.user);  
                      this.$router.push({name : "home"})  
                  } else {
                     this.permissionError = true;
                  }
            }).then(()=>{
                this.loading = false;
            })
              
        }
    }
}
</script>


<style>

</style>
