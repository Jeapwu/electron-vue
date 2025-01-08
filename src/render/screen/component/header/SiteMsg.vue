<template>
    <div class="header-auth">
        <button class="auth-btn-avatar" @click="toggleMinimize">
            <img class="btn-img" src="@/assets/render/header/btn-avatar.svg" alt="minimize" />
        </button>
    </div>
</template>

<style scoped>
.header-auth {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #121212;
    padding: 2px;
    -webkit-app-region: no-drag;
}

.auth-btn-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
}

.btn-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background-color: transparent;
}
</style>