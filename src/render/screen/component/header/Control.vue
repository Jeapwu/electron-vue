<template>
    <div class="control">
        <el-button size="small" :icon="Minus" id="minimize" @click="handleMinimize"></el-button>
        <el-button size="small" :icon="Expand" id="maximize" @click="handleMaximize"></el-button>
        <el-button size="small" :icon="Close" id="close" type="danger" @click="handleClose"></el-button>
    </div>
</template>

<script>
import { ElButton } from 'element-plus';
import { Minus, Expand, Close } from '@element-plus/icons-vue';
export default {
    name: "ControlScreen",
    components: { ElButton },
    setup() {
        const handleMinimize = () => {
            console.log("最小化按钮被点击");
        };

        const handleMaximize = () => {
            console.log("最大化按钮被点击");
        };

        const handleClose = () => {
            console.log("关闭按钮被点击");
        };
        return {
            Minus, Expand, Close, handleMinimize, handleMaximize, handleClose
        };
    }
};
</script>

<style scoped>
.control {
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: yellow;
    -webkit-app-region: no-drag;
}
</style>