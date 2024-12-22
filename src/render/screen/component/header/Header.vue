<template>
    <div class="header">
      {{ data }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: '' // 初始化 data
      };
    },
    mounted() {
      // 确保在组件挂载时，监听 UpdateReply 消息
      electron.recv('UpdateReply', this.setResponse);
    },
    methods: {
      // 设置响应数据
      setResponse(data) {
        this.data = data; // 更新 data
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
      height: 50px;
      text-align: center;
  }
  </style>