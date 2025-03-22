<template>
    <div class="header-controls">
        <!-- 最小化按钮 -->
        <button class="control-btn minimize" @click="toggleMinimize">
            <img class="btn-img" src="@/assets/render/header/btn-minimize.svg" alt="minimize" />
        </button>

        <!-- 最大化/还原按钮 -->
        <button class="control-btn maximize" @click="toggleMaximize">
            <img class="btn-img" src="@/assets/render/header/btn-maximize.svg" alt="maximize" />
        </button>

        <!-- 关闭按钮 -->
        <button class="control-btn close" @click="toggleClose">
            <img class="btn-img" src="@/assets/render/header/btn-close.svg" alt="close" />
        </button>
    </div>
</template>

<script>
import controlStore from '@/render/stores/ControlStore';
export default {
    name: "ControlScreen",
    setup() {
        const toggleMinimize = async () => {
            await controlStore.Minimize();
        };

        const toggleMaximize = async () => {
            await controlStore.Maximize();
        };

        const toggleClose = async () => {
            await controlStore.Close();
        };

        return { toggleMinimize, toggleMaximize, toggleClose };
    }
};
</script>

<style scoped>
.header-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: #121212;
    /* 背景色 */
    padding: 5px;
    -webkit-app-region: no-drag;
}

.control-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    margin: 0 5px;
    border: none;
    background-color: transparent;
}

/* 最小化按钮悬停样式 */
.control-btn.minimize:hover .btn-img {
    content: url("@/assets/render/header/btn-minimize-hover.svg");
}

/* 最大化按钮悬停样式 */
.control-btn.maximize:hover .btn-img {
    content: url("@/assets/render/header/btn-maximize-hover.svg");
}

/* 关闭按钮悬停样式 */
.control-btn.close:hover .btn-img {
    content: url("@/assets/render/header/btn-close-hover.svg");
}
</style>