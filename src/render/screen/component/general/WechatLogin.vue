<template>
    <div class="wechat-login">
        <div class="login-header">
            <h2>微信扫码登录</h2>
            <p class="login-tip">请使用微信扫描二维码完成登录</p>
        </div>
        <div class="qr-code-container">
            <div class="qr-code">
                <!-- 使用Base64编码的二维码图片 -->
                <img :src="qrCodeBase64" alt="微信登录二维码">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Base64编码的二维码图片
const qrCodeBase64 = ref('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAABlBMVEX///8AAABVwtN+AAACUElEQVR42uzaMQ7DMAwE0Pz/p3NQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFCj4B/4A+3QZ7WZ6/2QAAAAASUVORK5CYII=');

</script>

<style scoped>

.wechat-login {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
}

.login-header {
    text-align: center;
    color: #fff;
}

.login-header h2 {
    font-size: 22px;
    margin-bottom: 8px;
}

.login-header p {
    font-size: 14px;
    margin-top: 8px;
}

.qr-code-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 170px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
}

.qr-code {
    width: 150px;
    height: 150px;
    background: yellow;
    border-radius: 5px;
}
</style>