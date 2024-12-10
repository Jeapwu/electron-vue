<template>
    <div>
        <h2>Home Screen</h2>
        <ul>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
    </div>
</template>

<script>
import HomeModule from '../module/HomeModule';
export default {
    name: 'HomeScreen1',
    data() {
        return {
            users: [],
        };
    },
    async created() {
        console.log('1111');
        try {
            this.users = await HomeModule.GetAllUsers();
            console.log(this.users);
        } catch (error) {
            console.error('Error in created():', error);
        }
    }
};
</script>