<template>
    <div class="auth-container">
        <div class="window-controls">
            <button class="control-btn minimize" @click="handleMinimize">
                <i class="icon-minimize"></i>
            </button>
            <button class="control-btn close" @click="handleClose">
                <i class="icon-close"></i>
            </button>
        </div>
        <div class="left-section">
        </div>
        <div class="login-container">
            <div class="login-header">
                <h2>手机验证登录</h2>
            </div>
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <div class="input-group">
                        <i class="icon-phone"></i>
                        <input type="tel" v-model="form.phone" placeholder="请输入手机号" required>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <i class="icon-lock"></i>
                        <input type="text" v-model="form.code" placeholder="请输入验证码" required>
                        <a href="#" class="get-code" @click.prevent="getCode">获取验证码</a>
                    </div>
                </div>
                <button type="submit" class="login-button">
                    <span>点击登录</span>
                    <i class="icon-arrow-right"></i>
                </button>
                <div class="other-login">
                    <p>其他登录方式</p>
                    <div class="social-icons">
                        <a href="#" class="social-icon wechat">
                            <img src="./assets/icon-wechat.png" alt="微信">
                        </a>
                        <a href="#" class="social-icon qq">
                            <img src="./assets/icon-qq.png" alt="QQ">
                        </a>
                    </div>
                </div>
            </form>
            <a href="#" class="help-link">
                <img src="./assets/icon-help.png" alt="帮助">
                遇到问题，点这里联系客服
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const form = reactive({
    phone: '',
    code: ''
})

const handleMinimize = () => {
    // 处理最小化逻辑
    console.log('最小化窗口')
}

const handleClose = () => {
    // 处理关闭逻辑
    console.log('关闭窗口')
}

const handleLogin = () => {
    // 处理登录逻辑
    console.log('登录表单：', form)
}

const getCode = () => {
    // 处理获取验证码逻辑
    console.log('获取验证码')
}

onMounted(() => {
    // 禁用缩放
    document.body.style.zoom = '1'
    document.body.style.transform = 'scale(1)'
    document.body.style.transformOrigin = '0 0'

    // 禁止双击最大化
    document.addEventListener('dblclick', (e) => {
        e.preventDefault()
        e.stopPropagation()
    }, true)

    // 禁止双击选择文本
    document.addEventListener('selectstart', (e) => {
        e.preventDefault()
    }, true)
})
</script>

<style scoped>
/* 添加禁止缩放的样式 */
html,
body {
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
}

.auth-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('@/assets/render/login/login.png') no-repeat center center;
    background-size: cover;
    position: relative;
    padding: 20px;
    -webkit-app-region: drag;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    pointer-events: auto;
}

.auth-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    backdrop-filter: none;
}

.window-controls {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    z-index: 1000;
    -webkit-app-region: no-drag;
}

.control-btn {
    width: 46px;
    height: 32px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.control-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.control-btn.close:hover {
    background-color: #e81123;
}

.control-btn i {
    width: 12px;
    height: 12px;
    position: relative;
}

.icon-minimize::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.8);
}

.icon-close::before,
.icon-close::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.8);
}

.icon-close::before {
    transform: rotate(45deg);
}

.icon-close::after {
    transform: rotate(-45deg);
}

.left-section {
    flex: 1;
    padding: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
}

.game-title {
    position: relative;
    z-index: 2;
    margin-bottom: 40px;
}

.game-title h1 {
    color: #fff;
    font-size: 36px;
    margin-bottom: 15px;
}

.game-title h1 span {
    color: #FFD700;
}

.game-title .subtitle {
    color: #FFD700;
    font-size: 22px;
    padding: 10px 0;
    border-top: 2px solid rgba(255, 215, 0, 0.3);
    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
    display: inline-block;
}

.features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 40px;
    position: relative;
    z-index: 2;
}

.feature-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 215, 0, 0.1);
    text-align: center;
}

.feature-item img {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
}

.feature-item p {
    color: #FFD700;
    font-size: 14px;
}

.login-container {
    width: 300px;
    background: rgba(0, 0, 0, 0.8);
    padding: 30px;
    position: relative;
    z-index: 2;
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 8px;
    margin-right: 35px;
}

.login-header {
    text-align: center;
    margin-bottom: 30px;
}

.login-header h2 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 10px;
}

.form-group {
    margin-bottom: 20px;
}

.input-group {
    position: relative;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    padding: 10px 12px;
}

.input-group input {
    flex: 1;
    background: none;
    border: none;
    color: #fff;
    font-size: 12px;
    outline: none;
}

.input-group input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.input-group i {
    color: rgba(255, 255, 255, 0.5);
    margin-right: 10px;
    font-size: 12px;
}

.get-code {
    color: #FFD700;
    text-decoration: none;
    font-size: 11px;
    float: right;
}

.login-button {
    width: 100%;
    padding: 10px;
    background: #FFD700;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.login-button:hover {
    background: #F0C800;
}

.other-login {
    margin-top: 30px;
    text-align: center;
    padding-bottom: 20px;
}

.other-login p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    margin-bottom: 12px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.other-login p::before,
.other-login p::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
    max-width: 80px;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-icon img {
    width: 20px;
    height: 20px;
}

.help-link {
    color: #FFD700;
    text-decoration: none;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.help-link img {
    width: 14px;
    height: 14px;
    margin-right: 4px;
}

.character-bg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 80%;
    background: url('./assets/game-character.png') no-repeat bottom left;
    background-size: contain;
    opacity: 0.8;
    z-index: 1;
}

@media (max-width: 480px) {
    .auth-box {
        padding: 30px 20px;
    }

    .tabs {
        gap: 10px;
    }

    .tab-btn {
        font-size: 16px;
        padding: 8px 16px;
    }

    .social-icons {
        gap: 15px;
    }

    .social-icon {
        width: 35px;
        height: 35px;
    }
}
</style>