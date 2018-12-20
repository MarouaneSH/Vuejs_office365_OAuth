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
      login : false,
      permissionError : false,
    }
  },

}
</script>


<style>
 #app-wrapper {
     height: 100vh;
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .error_login {
     color: red;
     margin-top: 15px;
 }
 .text-center {
     text-align: center;
 }
  .card-box img {
      width: 200px;
      align-self: center;
     margin-right: 30px;
  }
 .card-box {
         background: white;
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
    padding: 50px 100PX;
    border-radius: 11px;
     display: flex;
    flex-wrap: none;
    flex-direction: column;
 }
 .form-group input {
    display: block;
    height: 40px;
    border-radius: 5px;
    padding: 2px 20px;
    border: solid 1px #4a4c733b;
    width: 200px;
      box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
    margin-bottom: 16px;
 }
  .form-group  label {
    font-size: 12px;
    color: #4a6067;
 }

 .card-body{
     margin-top: 30px;
 }

 .card-bottom {
     display: flex;
     justify-content: center;
     margin-top: 20px;  
 }

 .card-bottom button {
         padding: 15px 30px;
    border-radius: 5px;
    border: none;
    background: #eb3c00;
    color: white;
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(235, 60, 0, 0.63);
 }

</style>
