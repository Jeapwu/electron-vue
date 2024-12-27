<template>
  <div class="header">
    <Logo></Logo>
    <Control></Control>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import Control from "./Control.vue";
export default {
  name: "HeaderScreen",
  components: { Logo, Control }
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