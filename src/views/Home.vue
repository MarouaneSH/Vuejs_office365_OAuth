<template>
    <div id="app-wrapper">
        <div class="card-box">
            <img src="./../assets/office.png">
            <div class="card-content text-xs-center" v-if="user">
                <p><strong>Display name :</strong> {{user.displayName}} </p>
                <p><strong>Name :</strong> {{user.givenName}} </p>
                <p><strong>User ID :</strong> {{user.id}} </p>
                <p><strong>Job Title :</strong> {{user.jobTitle}} </p>
                <p><strong>Mail:</strong> {{user.mail}} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    computed : {
        user() {
            return this.$store.getters.user;
        }
    }
}
</script>

<style>

</style>
