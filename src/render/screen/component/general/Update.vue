<template>
    <div class="update-page">
        <!-- 菜单栏 -->
        <div class="menu-bar">
            <!-- 左侧应用图标 -->
            <div class="app-info">
                <img src="@/assets/render/header/logo/logo.ico" alt="App Icon" class="app-icon" />
                <span class="app-name">electron-vue</span>
            </div>
            <!-- 右侧关闭按钮 -->
            <button class="close-button" @click="toggleClose">
                <img class="close-img" src="@/assets/render/header/btn-close.svg" alt="close" />
            </button>
        </div>

        <!-- 内容区域 -->
        <div class="content-area">
            <!-- 第一行：左对齐，图标 + 文本 -->
            <div class="row left-align">
                <img src="@/assets/render/header/logo/logo.ico" alt="Info Icon" class="row-icon" />
                <span class="row-text">Notion新版本现已上线！</span>
            </div>

            <!-- 初始内容：右移 -->
            <div v-if="!isUpdating" class="content-move">
                <div v-if="status">
                    <div class="row right-align">
                        <span class="row-text">{{ status.localVersion }} -> {{ status.remoteVersion }}</span>
                    </div>
                </div>

                <div class="row right-align">
                    <span class="row-text">你想要现在安装吗？我们将为你重新打开窗口和选项卡。</span>
                </div>

                <div class="row right-align">
                    <button class="action-button" @click="toggleUpdate">
                        <img src="@/assets/render/header/logo/logo.ico" alt="Update Icon" class="button-icon" />
                        <span>安装并重新启动</span>
                    </button>
                </div>

                <div class="row right-align">
                    <button class="action-button" @click="toggleClose">
                        <img src="@/assets/render/header/logo/logo.ico" alt="Later Icon" class="button-icon" />
                        <span>稍后提醒我</span>
                    </button>
                </div>
            </div>

            <!-- 更新时的进度条：不右移 -->
            <div v-else class="progress-container">
                <span class="progress-text">Downloaded: {{ progress }}%</span>
                <div class="progress-bar">
                    <div class="progress" :style="{ width: progress + '%' }"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import updateStore from '@/render/stores/UpdateStore';

export default {
    name: "UpdateScreen",
    setup() {
        const isUpdating = ref(false); // 是否正在更新
        const { status, progress } = storeToRefs(updateStore);


        const toggleClose = async () => {
            await updateStore.Close();
        };

        const toggleUpdate = () => {
            resetScreen();
            isUpdating.value = true; // 开始更新
            updateStore.ToggleUpdate();
        };

        const resetScreen = () => {
            const size = {
                width: 450,
                height: 200
            };
            updateStore.ResetScreen(size);
        };

        return { toggleClose, toggleUpdate, isUpdating, progress, status };
    },
};
</script>

<style scoped>
.update-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f5f5f5;
}

/* 菜单栏样式 */
.menu-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 0px;
    padding-left: 10px;
    padding-right: 1px;
    background-color: transparent;
    color: white;
}

/* 应用信息（图标 + 名称）样式 */
.app-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

/* 应用图标样式 */
.app-icon {
    height: 20px;
    width: auto;
}

/* 应用名称样式 */
.app-name {
    font-size: 15px;
    font-weight: bold;
    color: #45a049;
}

/* 关闭按钮样式 */
.close-button {
    width: 28px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
}

.close-button:hover {
    background-color: red;
}

.close-img {
    width: 25px;
    height: auto;
    background-color: transparent;
}

/* 内容区域样式 */
.content-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
}

/* 初始内容右移 */
.content-move {
    padding-left: 40px;
    /* 右移 40px */
}

/* 行样式 */
.row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

/* 左对齐 */
.left-align {
    justify-content: flex-start;
}

/* 右对齐 */
.right-align {
    justify-content: flex-start;
}

/* 行图标样式 */
.row-icon {
    height: 30px;
    width: auto;
    margin-right: 10px;
}

/* 行文本样式 */
.row-text {
    font-size: 14px;
    color: #333;
}

/* 按钮样式 */
.action-button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 10px;
    background-color: transparent;
    color: #45a049;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-size: 16px;
}

.action-button:hover {
    background-color: none;
    border: #45a049 1px solid;
}

/* 按钮图标样式 */
.button-icon {
    height: 25px;
    width: auto;
    margin-right: 5px;
}

/* 进度条容器样式 */
.progress-container {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-left: 0;
    /* 不右移 */
}

/* 进度条样式 */
.progress-bar {
    width: 100%;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 0px;
    overflow: hidden;
}

/* 进度样式 */
.progress {
    height: 100%;
    background-color: #45a049;
    transition: width 0.5s ease;
}

/* 进度文本样式 */
.progress-text {
    font-size: 14px;
    color: #333;
}
</style>