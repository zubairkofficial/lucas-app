<template>
  <div class="container mt-3">
    <button class="btn btn-primary" v-on:click="fetchGraphql" :disabled="isLoading">{{ isLoading ? "Please wait..." : "Fetch All Users" }}</button>
    <UsersTable :users="users" :isLoading="isLoading" />
  </div>
</template>

<script>
// Importing Required Components & Libraries
import Helpers from '../Helpers/Helpers';
import axios from 'axios';
import UsersTable from '../components/Users.vue';
export default {
  name: 'IndexPage',
  components:{
    UsersTable
  },
  data() {
    return {
      // Initializing Users array
      users:[],
      // Setting loading state variable
      isLoading:false,
      // Query to execute for GraphQL for fetching All Users
      operationsDoc: `
        query AllUsers {
          users {
            created_at
            email
            id
            last_login
            name
            updated_at
            username
          }
        }
      `,
    }
  },
  methods: {
    async fetchGraphql(){
      this.isLoading = true;
      // Request Body: Query for GraphQL
      const requestBody = {
        query: this.operationsDoc,
      };
      // Setting up Axios Request Options
      const options = {
        method: 'GET',
        url: `${Helpers.URL}users`,
        headers: Helpers.defaultHeaders,
        data: requestBody,
      };
      // Sending Axios Request to defined Options
      await axios(options).then(response => {
        // Setting Users response
        this.users = response.data.users;
        this.isLoading = false;
      });
    },
  },
}
</script>
<style>
  .w-100{
    width:100%;
  }
</style>
