<template>
    <div class="main-screen">
        <!-- 左侧部分 -->
        <Navigate></Navigate>
        <!-- 右侧部分 -->
        <div class="main-content">
            <Header></Header>
            <Home></Home>
        </div>
    </div>
</template>

<script>
import Header from './component/header/Header.vue'
import Home from './component/main/Home.vue'
import Navigate from './component/navigate/Navigate.vue'

export default {
    name: "MainScreen",
    components: { Header, Home, Navigate }
};
</script>