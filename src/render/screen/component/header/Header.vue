<template>
  <div class="header">
    <Logo></Logo>
    <Search></Search>
    <Navigate></Navigate>
    <SiteMsg></SiteMsg>
    <Auth></Auth>
    <Setting></Setting>
    <Control></Control>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import Control from "./Control.vue";
import Navigate from "../navigate/Navigate.vue"
import Search from "./Search.vue";
import Auth from "./Auth.vue";
import SiteMsg from "./SiteMsg.vue";
import Setting from "./Setting.vue";
export default {
  name: "HeaderScreen",
  components: { Logo, Control, Navigate, Search, Auth, SiteMsg, Setting }
};
</script>

<style scoped>
.header {
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: pink;
  -webkit-app-region: drag;
}
</style>