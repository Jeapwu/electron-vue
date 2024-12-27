<template>
    <div class="main-screen">
        <div class="main-content">
            <Header></Header>
            <Home></Home>
        </div>
    </div>
</template>

<script>
import Header from './component/header/Header.vue'
import Home from './component/main/Home.vue'

export default {
    name: "MainScreen",
    components: { Header, Home}
};
</script>