<template>
    <div>
        <h1>User List</h1>
        <ul>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
        <button @click="fetchUsers">Fetch Users</button>
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
import { useUserStore } from '../stores/UserStore';
import { storeToRefs } from 'pinia';

export default {
    setup() {
        const userStore = useUserStore();
        const { users } = storeToRefs(userStore);

        const fetchUsers = async () => {
            await userStore.fetchUsers();
        };

        const addUser = async () => {
            const newUser = { id: 3, name: 'Jack' };
            await userStore.addUser(newUser);
        };

        return { users, fetchUsers, addUser };
    },
};
</script>