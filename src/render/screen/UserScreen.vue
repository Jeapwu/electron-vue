<template>
    <div>
        <h1>User List</h1>
        <ul>
            <li v-for="user in userStore.users" :key="user.id">{{ user.name }}</li>
        </ul>
        <button @click="fetchUsers">Fetch Users</button>
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
import { useUserStore } from '../stores/UserStore';

export default {
    setup() {
        const userStore = useUserStore();

        const fetchUsers = async () => {
            await userStore.fetchUsers();
        };

        const addUser = async () => {
            const newUser = { id: Date.now(), name: 'New User' };
            await userStore.addUser(newUser);
        };

        return { userStore, fetchUsers, addUser };
    },
};
</script>