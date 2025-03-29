<template>
    <div class="modal-overlay" v-if="visible">
        <div class="modal-container">
            <div class="modal-header">
                <h3>忘记密码</h3>
                <button class="control-btn" @click="Close">
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
                    <form class="custom-form" @submit.prevent="ToggleSubmit">
                        <!-- Step 1: Phone verification -->
                        <div v-if="currentStep === 1" class="form-step">
                            <div class="form-item">
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

                            <div class="form-item">
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
                                        <button type="button" class="code-btn" :disabled="countdown > 0"
                                            @click="GetCode">
                                            <span>{{ countdown > 0 ? `${countdown}s后重试` : '获取验证码' }}</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Step 2: Reset password -->
                        <div v-if="currentStep === 2" class="form-step">
                            <div class="form-item">
                                <label for="phone">密<span>  </span>码:</label>
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
                                    <input v-model="form.phone" id="phone" :type="codeShow1 ? 'text' : 'password'" maxlength="11"
                                        placeholder="请输入密码" class="ant-input">
                                    <span class="ant-input-suffix">
                                        <a href="#" class="toggle-password" @click="ToggleCodeShow1">
                                            <svg v-if="!codeShow1" viewBox="64 64 896 896" focusable="false" width="1em"
                                                height="1em" fill="#FFFFFF80" aria-hidden="true">
                                                <path
                                                    d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z">
                                                </path>
                                                <path
                                                    d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z">
                                                </path>
                                            </svg>
                                            <svg v-else viewBox="64 64 896 896" focusable="false" data-icon="eye"
                                                width="1em" height="1em" fill="#FFFFFF80" aria-hidden="true">
                                                <path
                                                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                                                </path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <div class="form-item">
                                <label for="code">确认密码:</label>
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
                                    <input v-model="form.code" id="code" :type="codeShow2 ? 'text' : 'password'" maxlength="4" placeholder="请输入确认密码"
                                        class="ant-input">
                                    <span class="ant-input-suffix">
                                        <a href="#" class="toggle-password" @click="ToggleCodeShow2">
                                            <svg v-if="!codeShow2" viewBox="64 64 896 896" focusable="false" width="1em"
                                                height="1em" fill="#FFFFFF80" aria-hidden="true">
                                                <path
                                                    d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z">
                                                </path>
                                                <path
                                                    d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z">
                                                </path>
                                            </svg>
                                            <svg v-else viewBox="64 64 896 896" focusable="false" data-icon="eye"
                                                width="1em" height="1em" fill="#FFFFFF80" aria-hidden="true">
                                                <path
                                                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                                                </path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
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

                <div class="action">
                    <button type="button" class="action-btn" @click="NextStep">
                        <span>{{ currentStep === 3 ? '完成' : '下一步' }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import accountModalStore from '@/render/stores/AccountModalStore';

export default {
    name: "AccountModalScreen",
    setup() {
        const { visible, currentStep, countdown, form, codeShow1, codeShow2 } = storeToRefs(accountModalStore);

        const NextStep = () => {
            accountModalStore.NextStep();
        };

        const GetCode = () => {
            accountModalStore.GetCode();
        };

        const ToggleCodeShow1 = () => {
            accountModalStore.SetCodeShow1(!codeShow1.value);
        };

        const ToggleCodeShow2 = () => {
            accountModalStore.SetCodeShow2(!codeShow2.value);
        };

        const ToggleSubmit = () => {
            accountModalStore.ToggleSubmit();
        };

        const Close = () => {
            accountModalStore.SetVisiable(false);
        }

        return { visible, currentStep, countdown, form, NextStep, GetCode, ToggleSubmit, Close, codeShow1, codeShow2, ToggleCodeShow1, ToggleCodeShow2 };
    },
};
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

.form-item {
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
    gap: 8px;
}

.form-item label {
    white-space: nowrap;
    font-size: 14px;
}

.ant-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid #696969;
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
    color: #B0B0B0;
}

.ant-input-suffix {
    margin-left: 8px;
}

.code-btn {
    white-space: nowrap;
    text-align: center;
    color: #FFD700;
    background: transparent;
    border: none;
    font-size: 12px;
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

.action {
    display: flex;
    align-items: center;
    justify-content: center;
}

.action-btn {
    text-align: center;
    color: #000000;
    background: #FFD700;
    font-weight: 500;
    font-size: 16px;
    border: none;
    padding: 4px 10px;
    border-radius: 2px;
}
</style>