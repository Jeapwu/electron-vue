<template>
    <div class="update-screen">
        <h6>{{ status }}</h6>
    </div>
</template>

<script>
import { useUpdateStore } from '@/render/stores/UpdateStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

export default {
    name: "UpdateScreen",
    setup() {
        const updateStore = useUpdateStore();
        const { status } = storeToRefs(updateStore);

        onMounted(() => {
            updateStore.AutoBind();
        });

        return { status };
    },
};
</script>

<style scoped>
.update-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
</style>