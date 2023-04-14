<template>
    <div class="bg-light p-5 rounded-lg m-3">
        <h1 class="display-4">Users App</h1>
        <p class="lead">This is a simple users app showing users by GraphQL API using Hasura</p>
        <hr class="my-4">
        <p>Click on the button below to get list of all users</p>
        <button class="btn btn-primary btn-lg" v-on:click="fetchUsers" :disabled="isLoading">{{ isLoading ? "Please wait..." : "Fetch All Users" }}</button>
    </div>
</template>
<script>
export default {
    name:"AppHeader",
    props:{
        isLoading:false,
    },
    methods: {
        fetchUsers(){
            this.$emit('onClick');
        }
    },
}
</script>