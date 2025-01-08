<template>
    <div class="search-container">
        <div class="search-box">
            <!-- 左侧搜索图标 -->
            <span class="icon search-icon" @click="onSearch">
                🔍
            </span>
            <!-- 输入框 -->
            <input type="text" v-model="query" placeholder="Search..." class="search-input" />
            <!-- 右侧图标 -->
            <div class="right-icons">
                <span class="icon mic-icon" @click="onMicClick">
                    🎤
                </span>
                <span class="icon ai-icon" @click="onAiClick">
                    🤖
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: "", // 输入框内容
        };
    },
    methods: {
        onSearch() {
            console.log("Search:", this.query);
            // 在此添加搜索逻辑
        },
        onMicClick() {
            console.log("Mic clicked!");
            // 麦克风功能逻辑
        },
        onAiClick() {
            console.log("AI clicked!");
            // AI 功能逻辑
        },
    },
};
</script>

<style scoped>
/* 搜索框外容器 */
.search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    /* 全屏居中 */
    background-color: #f5f5f5;
    /* 浅灰背景 */
    -webkit-app-region: no-drag;
}

/* 搜索框 */
.search-box {
    display: flex;
    align-items: center;
    width: 300px;
    height: 45px;
    background-color: #fff;
    border-radius: 25px;
    /* 圆角 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    /* 阴影 */
    padding: 0 15px;
    overflow: hidden;
}

/* 输入框 */
.search-input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 0 10px;
}

/* 图标通用样式 */
.icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin: 0 5px;
    color: #555;
    transition: color 0.3s ease;
}

.icon:hover {
    color: #000;
}

/* 右侧图标容器 */
.right-icons {
    display: flex;
    align-items: center;
}
</style>