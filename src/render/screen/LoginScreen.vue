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
                <div class="agreement-text">
                    登录/注册即代表同意
                    <a href="#" class="agreement-link" @click.prevent="showAgreement">《用户协议》</a>
                </div>
                <div class="other-login">
                    <p>其他登录方式</p>
                    <div class="social-icons">
                        <a href="#" class="social-icon wechat">
                            <!-- <img src="./assets/icon-wechat.png" alt="微信"> -->
                            <svg width="1em" height="1em" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.2 5.967C16.464 2.552 12.772 0 8.567 0 3.864.017.011 3.195.011 7.23c0 2.327 1.285 4.246 3.418 5.732l-.861 2.549 2.995-1.484c1.073.21 1.934.42 2.993.42.275 0 .537-.013.798-.037a6.48 6.48 0 0 1-.261-1.784c.012-3.7 3.219-6.707 7.285-6.707.273-.002.548.024.822.048Zm-4.354-1.285c0 .63-.423 1.064-1.072 1.064-.637 0-1.285-.42-1.285-1.064 0-.645.648-1.064 1.285-1.064.65 0 1.072.42 1.072 1.064ZM5.785 5.746c-.635 0-1.284-.42-1.284-1.064 0-.645.65-1.064 1.284-1.064.636 0 1.073.42 1.073 1.064 0 .63-.423 1.064-1.073 1.064Zm11.13.629c-4.067 0-7.274 2.772-7.274 6.163 0 3.403 3.207 6.164 7.273 6.164.85 0 1.71-.21 2.57-.42l2.346 1.274-.648-2.117c1.722-1.299 3.007-2.996 3.007-4.901 0-3.391-3.418-6.163-7.275-6.163Zm-3.22 4.244c0-.42.439-.855.862-.855.65 0 1.073.422 1.073.855 0 .435-.423.854-1.073.854-.423 0-.861-.42-.861-.854Zm4.717 0c0-.42.423-.855.85-.855.647 0 1.072.422 1.072.855 0 .435-.425.854-1.073.854-.424 0-.85-.42-.85-.854Z"
                                    fill="currentColor" fill-rule="nonzero"></path>
                            </svg>
                        </a>
                        <a href="#" class="social-icon qq">
                            <!-- <img src="./assets/icon-qq.png" alt="QQ"> -->
                            <div class="icon phone"><svg width="1em" height="1em" viewBox="0 0 17 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.035 21.289c0 .175-.027.344-.076.502a2.635 2.635 0 0 1-2.545 1.988H2.636c-1.224 0-2.259-.85-2.544-1.99a1.637 1.637 0 0 1-.077-.5V2.642A2.63 2.63 0 0 1 2.636.021h10.778a2.63 2.63 0 0 1 2.621 2.621Zm-8.04-2.17a1.33 1.33 0 0 0-1.324 1.325 1.33 1.33 0 0 0 1.325 1.325 1.33 1.33 0 0 0 1.325-1.325 1.33 1.33 0 0 0-1.325-1.325ZM13.415 2.03H2.636c-.48 0-.873.37-.873.822l-.001 15.493h12.525V2.853c0-.417-.335-.764-.764-.815l-.11-.007Z"
                                        fill="currentColor" fill-rule="nonzero"></path>
                                </svg></div>
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

const showAgreement = () => {
    // 处理显示用户协议逻辑
    console.log('显示用户协议')
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
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
}

.game-title {
    position: relative;
    z-index: 2;
    margin-bottom: 10px;
}

.game-title h1 {
    color: #fff;
    font-size: 36px;
    margin-bottom: 10px;
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
    margin-bottom: 20px;
}

.login-header h2 {
    color: #fff;
    font-size: 22px;
    margin-bottom: 8px;
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

.agreement-text {
    margin-top: 10px;
    text-align: center;
    padding-bottom: 20px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
}

.agreement-link {
    color: #FFD700;
    text-decoration: none;
    font-size: 13px;
    transition: color 0.2s ease;
}

.agreement-link:hover {
    color: #FFD700;
}

.other-login {
    margin-top: 5px;
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
    align-items: center;
    gap: 20px;
}

.social-icon {
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}

.social-icon img {
    width: 20px;
    height: 20px;
    display: block;
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