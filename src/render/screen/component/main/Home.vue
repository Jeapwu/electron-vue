<template>
    <div class="home">
        {{ status }}
    </div>
</template>

<script>
import { useUpdateStore } from '@/render/stores/UpdateStore';
import { storeToRefs } from 'pinia';

export default {
    setup() {
        const updateStore = useUpdateStore();
        const { status } = storeToRefs(updateStore);

        // onMounted(() => {
        //     updateStore.AutoBind();
        // });

        return { status };
    },
};
</script>

<style scoped>
.home {
    height: 100%;
    width: 100%;
}
</style>