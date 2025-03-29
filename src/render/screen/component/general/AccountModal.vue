<template>
    <div class="modal-overlay" v-if="visible" @click.self="close">
        <div class="modal-container">
            <div class="modal-header">
                <h3>密码重置</h3>
                <button class="control-btn" @click="close">
                    <i class="icon-close"></i>
                </button>
            </div>
            <div class="modal-content">
                <!-- Step progress indicator -->
                <div class="steps-container">
                    <div class="step-item active">
                        <div class="step-num">
                            <span v-if="currentStep > 1" class="anticon anticon-check">
                                <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em"
                                    fill="currentColor">
                                    <path
                                        d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z">
                                    </path>
                                </svg>
                            </span>
                            <span v-else>1</span>
                        </div>
                        <div class="step-text">验证身份</div>
                    </div>

                    <div class="line"></div>

                    <div class="step-item" :class="{ active: currentStep > 1 }">
                        <div class="step-num">
                            <span v-if="currentStep > 2" class="anticon anticon-check">
                                <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em"
                                    fill="currentColor">
                                    <path
                                        d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z">
                                    </path>
                                </svg>
                            </span>
                            <span v-else>2</span>
                        </div>
                        <div class="step-text">重置密码</div>
                    </div>

                    <div class="line"></div>

                    <div class="step-item" :class="{ active: currentStep > 2 }">
                        <div class="step-num">3</div>
                        <div class="step-text">完成</div>
                    </div>
                </div>

                <!-- Form content -->
                <div class="form-container">
                    <form class="custom-form" @submit.prevent="handleSubmit">
                        <!-- Step 1: Phone verification -->
                        <div v-if="currentStep === 1" class="form-step">
                            <div class="ant-form-item">
                                <label for="phone">绑定手机号</label>
                                <div class="ant-input-wrapper">
                                    <span class="ant-input-prefix">
                                        <svg width="10" height="13" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="none" fill-rule="evenodd">
                                                <path
                                                    d="M9.961 10.16v1.92c0 .353-.318.64-.711.64H.717c-.393 0-.711-.287-.711-.64v-1.92H9.96Zm-4.978 1.92a.729.729 0 0 0 .616-.32.585.585 0 0 0 0-.64.729.729 0 0 0-.616-.32c-.392 0-.71.287-.71.64 0 .353.318.64.71.64Z"
                                                    fill="#FFC62D" fill-rule="nonzero"></path>
                                                <path
                                                    d="M9.25 0c.393 0 .711.287.711.64v8.88H.006V.64c0-.353.318-.64.71-.64H9.25ZM9 1H1v7h8V1Z"
                                                    fill="#FFF"></path>
                                            </g>
                                        </svg>
                                    </span>
                                    <input v-model="form.phone" id="phone" type="text" maxlength="11"
                                        placeholder="请输入绑定的手机号" class="ant-input">
                                </div>
                            </div>

                            <div class="ant-form-item">
                                <label for="code">短信验证码</label>
                                <div class="ant-input-wrapper">
                                    <span class="ant-input-prefix">
                                        <svg width="10" height="14" xmlns="http://www.w3.org/2000/svg">
                                            <g fill-rule="nonzero" fill="none">
                                                <path
                                                    d="M8.838 5.014H1.017C.463 5.014.01 5.467.01 6.02v6.257a1.01 1.01 0 0 0 1.006 1.006h7.821c.552 0 1.004-.454 1.004-1.006V6.02c0-.553-.452-1.006-1.004-1.006ZM5.551 8.603l.002 2.03c.001.513-.054.917-.626.917s-.62-.417-.62-.93L4.29 8.603s-.4-.353-.4-.958.464-.93 1.036-.93c.572 0 1.037.338 1.037.93 0 .593-.413.958-.413.958Z"
                                                    fill="#FFC62D"></path>
                                                <path
                                                    d="M6.894 4.13V2.95A1.972 1.972 0 0 0 4.928.982 1.971 1.971 0 0 0 2.96 2.949V4.13h-.983V2.95A2.955 2.955 0 0 1 4.927 0a2.954 2.954 0 0 1 2.95 2.95v1.18h-.983Z"
                                                    fill="#FFF"></path>
                                            </g>
                                        </svg>
                                    </span>
                                    <input v-model="form.code" id="code" type="text" maxlength="4" placeholder="请输入验证码"
                                        class="ant-input">
                                    <span class="ant-input-suffix">
                                        <button type="button" class="ant-btn code-btn" :disabled="countdown > 0"
                                            @click="getVerificationCode">
                                            <span>{{ countdown > 0 ? `${countdown}s后重试` : '获取验证码' }}</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Step 2: Reset password -->
                        <div v-if="currentStep === 2" class="form-step">
                            <!-- Password reset form fields would go here -->
                            <div class="password-reset-fields">
                                <!-- Add your password reset fields -->
                            </div>
                        </div>

                        <!-- Step 3: Completion -->
                        <div v-if="currentStep === 3" class="form-step">
                            <div class="completion-message">
                                <p>密码重置成功！</p>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="action-buttons">
                    <button type="button" class="ant-btn primary-btn" @click="nextStep">
                        <span>{{ currentStep === 3 ? '完成' : '下一步' }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
    visible: Boolean
});

const currentStep = ref(1);
const countdown = ref(0);
const form = ref({
    phone: '',
    code: ''
});

const emit = defineEmits(['update:visible']);

const close = () => {
    emit('update:visible', false);
};

const nextStep = () => {
    if (this.currentStep < 3) {
        this.currentStep++
    } else {
        // Handle completion
        this.$emit('close')
    }
};

const getVerificationCode = () => {
    if (!this.form.phone) {
        this.$message.error('请输入手机号')
        return
    }

    // Start countdown
    this.countdown = 60
    const timer = setInterval(() => {
        this.countdown--
        if (this.countdown <= 0) {
            clearInterval(timer)
        }
    }, 1000)

    // TODO: Send verification code request
    console.log('Sending verification code to:', this.form.phone)
};
const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', this.form)
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
}

.modal-container {
    background-color: rgba(34, 38, 42, 1);
    border: none;
    border-radius: 3px;
    width: 80%;
    max-width: 500px;
    max-height: 350px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.modal-header {
    padding: 10px 10px;
    background-color: rgba(18, 21, 23, 1);
    border-bottom: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h3 {
    color: #FFFFFF;
    margin: 0;
    font-size: 16px;
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

.control-btn {
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.control-btn i {
    width: 15px;
    height: 15px;
    position: relative;
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

.modal-content {
    padding: 20px 50px;
    overflow-y: auto;
    color: #B0B0B0;
    line-height: 1.6;
    flex-grow: 1;
    font-size: 14px;
}

.steps-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 24px;
    position: relative;
}

.step-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: space-between;
}

.step-item.active .step-num {
    color: #FFD700;
    border-color: #FFD700;
}

.step-item.active .step-text {
    color: #FFD700;
}

.step-num {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    color: #d9d9d9;
    background-color: rgba(34, 38, 42, 1);
    position: relative;
    z-index: 2;
}

.step-text {
    color: #d9d9d9;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}

.line {
    margin-top: 12px;
    width: 100px;
    height: 1px;
    background-color: #d9d9d9;
    z-index: 1;
}


.form-container {
    margin-bottom: 12px;
}

.ant-form-item {
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
    gap: 8px;
}

.ant-form-item label {
    white-space: nowrap;
    font-size: 14px;
}

.ant-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    padding: 4px 11px;
    width: 100%;
}

.ant-input-prefix {
    margin-right: 8px;
}

.ant-input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    height: 26px;
}

.ant-input-suffix {
    margin-left: 8px;
}

.ant-btn {
    white-space: nowrap;
    text-align: center;
    user-select: none;
    padding: 4px 4px;
    font-size: 12px;
    color: #FFD700;
    background: transparent;
    border: none;
}

.code-btn {
    color: #FFD700;
}

.primary-btn {
    color: #000000;
    background: #FFD700;
    border-color: #FFD700;
}

.action-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
}
</style>