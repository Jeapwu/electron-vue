<template>
    <div class="phone-login">
        <div class="login-header">
            <h2>手机验证登录</h2>
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
                    <input type="text" v-model="form.code" placeholder="请输入验证码" required>
                    <a href="#" class="get-code" @click.prevent="getCode">获取验证码</a>
                </div>
            </div>
            <button type="submit" class="login-button">
                <span>点击登录</span>
                <i class="icon-arrow-right"></i>
            </button>

        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['login', 'getCode', 'showAgreement']);

const form = reactive({
    phone: '',
    code: ''
});

const handleSubmit = () => {
    emit('login', form);
};

const getCode = () => {
    emit('getCode');
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

.form-group {
    margin-bottom: 20px;
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
    min-width: 0;
    background: none;
    border: none;
    color: #fff;
    font-size: 12px;
    outline: none;
}

.input-group input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.get-code {
    color: #FFD700;
    text-decoration: none;
    font-size: 11px;
    float: right;
    white-space: nowrap;
    margin-left: 3px;
    margin-right: 5px;
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
</style>