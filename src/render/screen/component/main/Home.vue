<template>
    <div class="home">
        <h3>{{ status }}</h3>
    </div>
</template>

<script>
import { useUpdateStore } from '@/render/stores/UpdateStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

export default {
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
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
</style>