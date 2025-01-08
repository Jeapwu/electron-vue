<template>
    <nav class="navigate">
        <router-link to="home" class="tab-item" :class="{ active: $route.path === '/home' }">首页</router-link>
        <router-link to="games" class="tab-item" :class="{ active: $route.path === '/games' }">游戏库</router-link>
        <router-link to="member" class="tab-item" :class="{ active: $route.path === '/member' }">会员</router-link>
        <router-link to="support" class="tab-item" :class="{ active: $route.path === '/support' }">客服</router-link>
    </nav>
</template>

<script>
</script>

<style>
.navigate {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  background: #f0f0f0;
  padding: 10px 10px;
  -webkit-app-region: no-drag;
}

.tab-item {
  text-decoration: none;
  color: #555;
  font-size: 16px;
}

.tab-item.active {
  color: #007bff;
  font-weight: bold;
}
</style>
