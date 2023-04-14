<template>
    <div>
        <table class="table table-bordered mt-3 w-100">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Last Login</th>
            </tr>
            <tr class="text-center" v-if="isLoading && users.length === 0">
                <td colspan="5">Fetching users. Please wait...</td>
            </tr>
            <tr class="text-center" v-if="!isLoading && users.length === 0">
                <td colspan="5">Click on button to see all users</td>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ $moment(user.last_login).format("ddd, MMM Do YYYY, h:mm:ss A") }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'UsersTable',
    // Setting up User's Component Properties
    props:{
        users: Array,
        isLoading: false,
    }
}
</script>