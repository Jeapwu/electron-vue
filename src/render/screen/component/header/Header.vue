<template>
  <div class="header">
    <Logo></Logo>
  </div>
</template>

<script>
import Logo from "./logo/Logo.vue";
export default {
  name: "HeaderScreen",
  components: { Logo }
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: pink;
}
</style>