<template>
    <div>
        <h1>User Management</h1>
        <ul>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
        <input v-model="newUserName" placeholder="Add new user" />
        <button @click="handleAddUser">Add User</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            newUserName: '', // 用于输入新用户的名称
        };
    },
    computed: {
        ...mapState('user', ['users']), // 使用命名空间 'user' 获取状态
    },
    methods: {
        ...mapActions('user', ['fetchUsers', 'addUser']), // 使用命名空间 'user' 映射方法
        async handleAddUser() {
            if (this.newUserName) {
                await this.addUser({ id: Date.now(), name: this.newUserName });
                this.newUserName = ''; // 清空输入框
            }
        },
    },
    created() {
        this.fetchUsers(); // 在组件创建时加载用户数据
    },
};
</script>
