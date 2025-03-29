<template>
    <div class="phone-login">
        <div class="login-header">
            <h2>账号密码登录</h2>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <div class="input-group">
                    <div class="icon-phone">
                        <svg width="10" height="13" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M9.961 10.16v1.92c0 .353-.318.64-.711.64H.717c-.393 0-.711-.287-.711-.64v-1.92H9.96Zm-4.978 1.92a.729.729 0 0 0 .616-.32.585.585 0 0 0 0-.64.729.729 0 0 0-.616-.32c-.392 0-.71.287-.71.64 0 .353.318.64.71.64Z"
                                    fill="#FFC62D" fill-rule="nonzero">
                                </path>
                                <path
                                    d="M9.25 0c.393 0 .711.287.711.64v8.88H.006V.64c0-.353.318-.64.71-.64H9.25ZM9 1H1v7h8V1Z"
                                    fill="#FFF">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <input type="tel" v-model="form.phone" placeholder="请输入手机号" required>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="icon-lock">
                        <svg width="10" height="14" xmlns="http://www.w3.org/2000/svg">
                            <g fill-rule="nonzero" fill="none">
                                <path
                                    d="M8.838 5.014H1.017C.463 5.014.01 5.467.01 6.02v6.257a1.01 1.01 0 0 0 1.006 1.006h7.821c.552 0 1.004-.454 1.004-1.006V6.02c0-.553-.452-1.006-1.004-1.006ZM5.551 8.603l.002 2.03c.001.513-.054.917-.626.917s-.62-.417-.62-.93L4.29 8.603s-.4-.353-.4-.958.464-.93 1.036-.93c.572 0 1.037.338 1.037.93 0 .593-.413.958-.413.958Z"
                                    fill="#FFC62D">
                                </path>
                                <path
                                    d="M6.894 4.13V2.95A1.972 1.972 0 0 0 4.928.982 1.971 1.971 0 0 0 2.96 2.949V4.13h-.983V2.95A2.955 2.955 0 0 1 4.927 0a2.954 2.954 0 0 1 2.95 2.95v1.18h-.983Z"
                                    fill="#FFF">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <input :type="showPassword ? 'text' : 'password'" v-model="form.password" placeholder="请输入密码"
                        required>
                    <a href="#" class="toggle-password" @click.prevent="togglePasswordVisibility">
                        <svg v-if="!showPassword" viewBox="64 64 896 896" focusable="false" width="1em" height="1em"
                            fill="#FFFFFF80" aria-hidden="true">
                            <path
                                d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z">
                            </path>
                            <path
                                d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z">
                            </path>
                        </svg>
                        <svg v-else viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em"
                            fill="#FFFFFF80" aria-hidden="true">
                            <path
                                d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                            </path>
                        </svg>
                    </a>
                </div>
                <a href="#" class="forgot-password" @click.prevent="handleForgotPassword">忘记密码？</a>
            </div>
            <button type="submit" class="login-button">
                <span>点击登录</span>
                <i class="icon-arrow-right"></i>
            </button>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const emit = defineEmits(['login', 'showAgreement']);

const showPassword = ref(false);
const form = reactive({
    phone: '',
    password: ''
});

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const handleSubmit = () => {
    emit('login', form);
};

const showAgreement = () => {
    emit('showAgreement');
};
</script>

<style scoped>
/* 从原样式中复制 login-container 及其子元素的所有样式 */

.login-header {
    text-align: center;
    margin-bottom: 20px;
}

.login-header h2 {
    color: #fff;
    font-size: 22px;
    margin-bottom: 8px;
}

.icon-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
}

.icon-lock {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
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
    padding: 5px;
    gap: 8px;
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

.forgot-password {
    display: flex;
    justify-content: right;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    text-decoration: none;
    transition: color 0.2s ease;
    margin-top: 5px;
    margin-bottom: -10px;
}

.forgot-password:hover {
    color: #FFD700;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.login-button:hover {
    background: #F0C800;
}

.toggle-password {
    text-decoration: none;
    font-size: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.toggle-password svg {
    width: 22px;
    height: 15px;
    vertical-align: middle;
}

.input-group {
    padding-right: 8px;
}
</style>