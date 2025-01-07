<template>
    <div class="main-screen">
        <div class="main-content">
            <Header></Header>
            <router-view />
        </div>
    </div>
</template>

<script>
import Header from './component/header/Header.vue'

export default {
    name: "MainScreen",
    components: { Header }
};
</script>