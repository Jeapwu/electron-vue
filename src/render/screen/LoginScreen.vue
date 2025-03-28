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
        <div class="left-section"></div>
        <div class="login-container">
            <!-- 引用登录组件 -->
            <PhoneLogin v-if="loginType === 'phone'" />
            <WechatLogin v-if="loginType === 'wechat'" />
            <AccountLogin v-if="loginType === 'account'" />

            <div class="agreement-text">
                登录/注册即代表同意
                <a href="#" class="agreement-link" @click.prevent="showAgreement">《用户协议》</a>
            </div>
            <div class="other-login">
                <p>其他登录方式</p>
                <div class="social-icons">
                    <div v-if="loginType === 'wechat' || loginType === 'account'" class="social-item">
                        <a href="#" class="social-icon phone" @click="switchPhoneLogin">
                            <svg width="1em" height="1em" viewBox="0 0 17 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.035 21.289c0 .175-.027.344-.076.502a2.635 2.635 0 0 1-2.545 1.988H2.636c-1.224 0-2.259-.85-2.544-1.99a1.637 1.637 0 0 1-.077-.5V2.642A2.63 2.63 0 0 1 2.636.021h10.778a2.63 2.63 0 0 1 2.621 2.621Zm-8.04-2.17a1.33 1.33 0 0 0-1.324 1.325 1.33 1.33 0 0 0 1.325 1.325 1.33 1.33 0 0 0 1.325-1.325 1.33 1.33 0 0 0-1.325-1.325ZM13.415 2.03H2.636c-.48 0-.873.37-.873.822l-.001 15.493h12.525V2.853c0-.417-.335-.764-.764-.815l-.11-.007Z"
                                    fill="#ffffff" fill-rule="nonzero">
                                </path>
                            </svg>
                        </a>
                        <span class="social-text">手机</span>
                    </div>
                    <div v-if="loginType === 'phone' || loginType === 'account'" class="social-item">
                        <a href="#" class="social-icon wechat" @click="switchWechatLogin">
                            <svg width="1em" height="1em" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.2 5.967C16.464 2.552 12.772 0 8.567 0 3.864.017.011 3.195.011 7.23c0 2.327 1.285 4.246 3.418 5.732l-.861 2.549 2.995-1.484c1.073.21 1.934.42 2.993.42.275 0 .537-.013.798-.037a6.48 6.48 0 0 1-.261-1.784c.012-3.7 3.219-6.707 7.285-6.707.273-.002.548.024.822.048Zm-4.354-1.285c0 .63-.423 1.064-1.072 1.064-.637 0-1.285-.42-1.285-1.064 0-.645.648-1.064 1.285-1.064.65 0 1.072.42 1.072 1.064ZM5.785 5.746c-.635 0-1.284-.42-1.284-1.064 0-.645.65-1.064 1.284-1.064.636 0 1.073.42 1.073 1.064 0 .63-.423 1.064-1.073 1.064Zm11.13.629c-4.067 0-7.274 2.772-7.274 6.163 0 3.403 3.207 6.164 7.273 6.164.85 0 1.71-.21 2.57-.42l2.346 1.274-.648-2.117c1.722-1.299 3.007-2.996 3.007-4.901 0-3.391-3.418-6.163-7.275-6.163Zm-3.22 4.244c0-.42.439-.855.862-.855.65 0 1.073.422 1.073.855 0 .435-.423.854-1.073.854-.423 0-.861-.42-.861-.854Zm4.717 0c0-.42.423-.855.85-.855.647 0 1.072.422 1.072.855 0 .435-.425.854-1.073.854-.424 0-.85-.42-.85-.854Z"
                                    fill="#ffffff" fill-rule="nonzero">
                                </path>
                            </svg>
                        </a>
                        <span class="social-text">微信</span>
                    </div>
                    <div v-if="loginType === 'phone' || loginType === 'wechat'" class="social-item">
                        <a href="#" class="social-icon account" @click="switchAccountLogin">
                            <svg width="15" height="17" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.44 16.814a2.437 2.437 0 0 1-2.436-2.437V9.26a2.437 2.437 0 0 1 2.437-2.437h.466V4.599A4.593 4.593 0 0 1 7.495.012a4.593 4.593 0 0 1 4.588 4.587v2.225h.476a2.437 2.437 0 0 1 2.437 2.436v5.118a2.437 2.437 0 0 1-2.437 2.437H2.441ZM1.63 9.26v5.117a.812.812 0 0 0 .812.813h10.117a.812.812 0 0 0 .813-.813V9.26a.812.812 0 0 0-.813-.813H2.441a.812.812 0 0 0-.812.813Zm8.829-2.437V4.599a2.967 2.967 0 0 0-2.963-2.963A2.967 2.967 0 0 0 4.532 4.6v2.225l5.926-.001ZM6.416 12.8v-2.265a.812.812 0 1 1 1.625 0v2.266a.812.812 0 1 1-1.625 0V12.8Z"
                                    fill="#ffffff" fill-rule="nonzero">
                                </path>
                            </svg>
                        </a>
                        <span class="social-text">账密</span>
                    </div>
                </div>
                <a href="#" class="help-link">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.82 12.623A2.006 2.006 0 0 0 9.72 11.24a.113.113 0 0 0-.06-.14.115.115 0 0 0-.146.047c-.003.005-.308.498-1.496.658-.178.024-.351.036-.515.036-.833 0-1.203-.314-1.207-.317a.114.114 0 0 0-.172.146 2.01 2.01 0 0 0 1.697.953Zm6.388-7.363-.03.002C13.482 2.248 10.822 0 7.633 0c-3.276 0-5.997 2.372-6.6 5.51A1.261 1.261 0 0 0 0 6.756v2.494c0 .7.56 1.267 1.253 1.267.39 0 .735-.185.964-.468a5.822 5.822 0 0 0 3.11 3.27.663.663 0 0 1 .063-.102c.022-.029.047-.052.069-.052.022 0 .043.008.06.02-.33-.246-1.523-1.51-1.782-3.275-.113-.776.469-1.538 1.146-1.664 1.087-.203 2.17-.434 3.257-.632.691-.126 1.164-.506 1.452-1.137.068-.148.166-.446.21-.876a.135.135 0 0 1 .132-.114c.045 0 .083.023.109.056l.03-.018c.428.622 1.278 2 1.4 3.453.14 1.66.062 2.799-1.21 3.962a.104.104 0 0 0-.033.076c0 .036.02.067.047.085l.032.015c.008.002.016.005.025.005.008 0 .016-.003.024-.005l.053-.03a5.815 5.815 0 0 0 2.728-3.314c.184.274.473.47.809.54-.539 2.448-2.722 3.98-5.427 4.213a1.107 1.107 0 0 0-1.03-.688c-.612 0-1.109.485-1.109 1.082 0 .598.497 1.082 1.109 1.082.493 0 .907-.317 1.05-.753 3.132-.254 5.642-2.115 6.166-5.007.463-.194.788-.648.788-1.178V6.538c0-.706-.576-1.278-1.287-1.278Zm-1.155.725c-.816-2.212-2.933-3.793-5.422-3.793-2.48 0-4.588 1.567-5.413 3.765-.04-.05-.089-.093-.136-.136.467-2.679 2.772-4.715 5.551-4.715 2.767 0 5.065 2.016 5.547 4.676-.048.064-.092.13-.127.203Z"
                            fill="#FBC851" fill-rule="nonzero">
                        </path>
                    </svg>
                    遇到问题，点这里联系客服 >>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import PhoneLogin from '@/render/screen/component/general/PhoneLogin.vue'
import WechatLogin from '@/render/screen/component/general/WechatLogin.vue'
import AccountLogin from '@/render/screen/component/general/AccountLogin.vue'

const loginType = ref('phone');
const switchPhoneLogin = () => {
    loginType.value = 'phone';
};

const switchWechatLogin = () => {
    loginType.value = 'wechat';
};

const switchAccountLogin = () => {
    loginType.value = 'account';
};

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
    background: url('@/assets/render/login/login-bg.png') no-repeat center center;
    background-size: cover;
    position: relative;
    padding: 20px;
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
    padding: 20px 30px;
    position: relative;
    z-index: 2;
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 8px;
    margin-right: 35px;
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
    padding-bottom: 10px;
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
    gap: 30px;
    margin-top: 15px;
}

.social-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.social-icon {
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.social-icon svg {
    width: 17px;
    height: 17px;
    pointer-events: none;
}

/* 强制提高悬停优先级 */
.other-login .social-icons .social-item .social-icon.wechat:hover {
    background-color: #07C160 !important;
    transform: scale(1.1) !important;
}

.other-login .social-icons .social-item .social-icon.phone:hover {
    background-color: #12B7F5 !important;
    transform: scale(1.1) !important;
}

.other-login .social-icons .social-item .social-icon.account:hover {
    background-color: #9400D3 !important;
    transform: scale(1.1) !important;
}

.social-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    margin-top: 5px;
}

.help-link {
    color: #FFD700;
    text-decoration: none;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 5px;
    margin-top: 20px;
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