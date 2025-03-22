<template>
    <div class="auth-container">
        <div class="auth-box">
            <div class="auth-header">
                <!-- <div class="logo">
                    <img src="@/assets/render/header/logo/logo.ico" alt="Logo">
                </div> -->
                <div class="tabs">
                    <button :class="['tab-btn', { active: isLogin }]" @click="isLogin = true">
                        登录
                    </button>
                    <button :class="['tab-btn', { active: !isLogin }]" @click="isLogin = false">
                        注册
                    </button>
                </div>
            </div>

            <transition name="fade" mode="out-in">
                <form v-if="isLogin" @submit.prevent="handleLogin" class="auth-form">
                    <div class="form-group">
                        <div class="input-group">
                            <i class="icon-user"></i>
                            <input type="text" v-model="loginForm.username" placeholder="用户名/手机号" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <i class="icon-lock"></i>
                            <input :type="showPassword ? 'text' : 'password'" v-model="loginForm.password"
                                placeholder="密码" required>
                            <i :class="['icon-eye', { active: showPassword }]"
                                @click="showPassword = !showPassword"></i>
                        </div>
                    </div>
                    <div class="form-options">
                        <label class="remember-me">
                            <input type="checkbox" v-model="loginForm.remember">
                            <span>记住我</span>
                        </label>
                        <a href="#" class="forgot-password">忘记密码？</a>
                    </div>
                    <button type="submit" class="submit-btn">
                        <span>登录</span>
                        <i class="icon-arrow-right"></i>
                    </button>
                </form>

                <form v-else @submit.prevent="handleRegister" class="auth-form">
                    <div class="form-group">
                        <div class="input-group">
                            <i class="icon-user"></i>
                            <input type="text" v-model="registerForm.username" placeholder="用户名" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <i class="icon-phone"></i>
                            <input type="tel" v-model="registerForm.phone" placeholder="手机号" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <i class="icon-lock"></i>
                            <input :type="showPassword ? 'text' : 'password'" v-model="registerForm.password"
                                placeholder="密码" required>
                            <i :class="['icon-eye', { active: showPassword }]"
                                @click="showPassword = !showPassword"></i>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <i class="icon-lock"></i>
                            <input :type="showPassword ? 'text' : 'password'" v-model="registerForm.confirmPassword"
                                placeholder="确认密码" required>
                        </div>
                    </div>
                    <button type="submit" class="submit-btn">
                        <span>注册</span>
                        <i class="icon-arrow-right"></i>
                    </button>
                </form>
            </transition>

            <div class="social-login">
                <div class="divider">
                    <span>其他登录方式</span>
                </div>
                <div class="social-icons">
                    <a href="#" class="social-icon wechat">
                        <i class="icon-wechat"></i>
                    </a>
                    <a href="#" class="social-icon qq">
                        <i class="icon-qq"></i>
                    </a>
                    <a href="#" class="social-icon weibo">
                        <i class="icon-weibo"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isLogin = ref(true)
const showPassword = ref(false)

const loginForm = reactive({
    username: '',
    password: '',
    remember: false
})

const registerForm = reactive({
    username: '',
    phone: '',
    password: '',
    confirmPassword: ''
})

const handleLogin = () => {
    // 处理登录逻辑
    console.log('登录表单：', loginForm)
}

const handleRegister = () => {
    // 处理注册逻辑
    console.log('注册表单：', registerForm)
}
</script>

<style scoped>
.auth-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('@/assets/render/login/login.png') no-repeat;
    background-size: cover;
    background-position: center; /* 确保背景图居中 */
    position: relative;
}

.auth-box {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    height: 400px;
    max-width: 250px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 1;
    margin-left: 500px;
}

.auth-header {
    text-align: center;
    margin-bottom: 10px;
}

.logo {
    margin-bottom: 10px;
}

.logo img {
    height: 20px;
}

.tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10px;
}

.tab-btn {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    cursor: pointer;
    padding: 10px 20px;
    position: relative;
    transition: color 0.3s ease;
}

.tab-btn.active {
    color: #fff;
}

.tab-btn.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #007bff;
    border-radius: 2px;
}

.auth-form {
    margin-bottom: 30px;
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
    border-radius: 10px;
    padding: 12px 15px;
    transition: all 0.3s ease;
}

.input-group:focus-within {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
}

.input-group i {
    color: rgba(255, 255, 255, 0.5);
    margin-right: 10px;
    font-size: 18px;
}

.input-group input {
    flex: 1;
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    outline: none;
}

.input-group input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.remember-me {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
}

.remember-me input {
    margin-right: 8px;
}

.forgot-password {
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
}

.forgot-password:hover {
    color: #0056b3;
}

.submit-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(45deg, #007bff, #00bfff);
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
}

.submit-btn i {
    transition: transform 0.3s ease;
}

.submit-btn:hover i {
    transform: translateX(5px);
}

.social-login {
    margin-top: 30px;
}

.divider {
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
}

.divider::before,
.divider::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.divider span {
    padding: 0 15px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-icon:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.2);
}

.social-icon.wechat:hover {
    background: #07c160;
}

.social-icon.qq:hover {
    background: #12b7f5;
}

.social-icon.weibo:hover {
    background: #e6162d;
}

/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* 响应式设计 */
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