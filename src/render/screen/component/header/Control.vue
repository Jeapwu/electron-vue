<template>
    <div class="control">
        <el-button size="small" :icon="Minus" id="minimize" @click="MinimizeHandler"></el-button>
        <el-button size="small" :icon="Expand" id="maximize" @click="MaximizeHandler"></el-button>
        <el-button size="small" :icon="Close" id="close" type="danger" @click="CloseHandler"></el-button>
    </div>
</template>

<script>
import { ElButton } from 'element-plus';
import { Minus, Expand, Close } from '@element-plus/icons-vue';
import { useControlStore } from '@/render/stores/ControlStore';
export default {
    name: "ControlScreen",
    components: { ElButton },
    setup() {
        const controlStore = useControlStore();

        const MinimizeHandler = async () => {
            await controlStore.Minimize();
        };

        const MaximizeHandler = async () => {
            await controlStore.Maximize();
        };

        const CloseHandler = async () => {
            await controlStore.Close();
        };

        return { Minus, Expand, Close, MinimizeHandler, MaximizeHandler, CloseHandler };
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