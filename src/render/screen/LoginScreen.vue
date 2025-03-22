<template>
    <div class="login-page">
        <div class="left-section">
            <div class="game-title">
                <h1>花小钱<span>玩大作</span></h1>
                <div class="subtitle">10年老品牌，2000万用户的信赖</div>
            </div>
            <div class="features">
                <div class="feature-item">
                    <img src="@/assets/render/login/icon-games.ico" alt="正版游戏">
                    <p>正版游戏</p>
                </div>
                <div class="feature-item">
                    <img src="@/assets/render/login/icon-service.ico" alt="售后无忧">
                    <p>售后无忧</p>
                </div>
                <div class="feature-item">
                    <img src="@/assets/render/login/icon-cloud.ico" alt="支持云游戏">
                    <p>支持云游戏</p>
                </div>
                <div class="feature-item">
                    <img src="@/assets/render/login/icon-data.ico" alt="支持存档">
                    <p>支持存档</p>
                </div>
            </div>
            <div class="character-bg"></div>
        </div>
        <div class="login-container">
            <div class="login-header">
                <h2>手机验证登录</h2>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <input type="tel" v-model="phoneNumber" placeholder="请输入手机号" required>
                </div>
                <div class="form-group">
                    <input type="text" v-model="verificationCode" placeholder="请输入验证码" required>
                    <a href="#" class="get-code" @click.prevent="getVerificationCode">获取验证码</a>
                </div>
                <button type="submit" class="login-button">点击登录</button>
                <div class="other-login">
                    <p>其他登录方式</p>
                    <div class="login-icons">
                        <a href="#"><img src="@/assets/render/login/icon-wechat.ico" alt="微信"></a>
                        <a href="#"><img src="@/assets/render/login/icon-qq.ico" alt="QQ"></a>
                    </div>
                </div>
            </form>
            <a href="#" class="help-link">
                <img src="@/assets/render/login/icon-help.ico" alt="帮助">
                遇到问题，点这里联系客服
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phoneNumber: '',
            verificationCode: ''
        };
    },
    methods: {
        handleSubmit() {
            // 这里可以添加登录逻辑
            console.log('手机号:', this.phoneNumber);
            console.log('验证码:', this.verificationCode);
            alert('登录成功！');
        },
        getVerificationCode() {
            // 这里可以添加获取验证码的逻辑
            alert('验证码已发送');
        }
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Microsoft YaHei", sans-serif;
}

body {
    background: #1a1a1a;
    min-height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
}

.left-section {
    flex: 1;
    padding: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.game-title {
    position: relative;
    z-index: 2;
    margin-bottom: 40px;
}

.game-title h1 {
    color: #fff;
    font-size: 36px;
    margin-bottom: 15px;
}

.game-title h1 span {
    color: #FFD700;
}

.game-title .subtitle {
    color: #FFD700;
    font-size: 24px;
    padding: 10px 0;
    border-top: 2px solid rgba(255, 215, 0, 0.3);
    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
    display: inline-block;
}

.features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 40px;
    position: relative;
    z-index: 2;
}

.feature-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 215, 0, 0.1);
    text-align: center;
}

.feature-item img {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
}

.feature-item p {
    color: #FFD700;
    font-size: 14px;
}

.login-container {
    width: 400px;
    background: rgba(0, 0, 0, 0.8);
    padding: 40px;
    position: relative;
    z-index: 2;
    backdrop-filter: blur(10px);
}

.login-header {
    text-align: center;
    margin-bottom: 30px;
}

.login-header h2 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 10px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group input {
    width: 100%;
    padding: 12px 15px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
}

.form-group input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.form-group input:focus {
    outline: none;
    border-color: #FFD700;
}

.get-code {
    color: #FFD700;
    text-decoration: none;
    font-size: 14px;
    float: right;
    margin-top: 5px;
}

.login-button {
    width: 100%;
    padding: 12px;
    background: #FFD700;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
}

.login-button:hover {
    background: #F0C800;
}

.other-login {
    margin-top: 30px;
    text-align: center;
}

.other-login p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    margin-bottom: 15px;
}

.login-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.login-icons a {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-icons img {
    width: 20px;
    height: 20px;
}

.help-link {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: #FFD700;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    align-items: center;
}

.help-link img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
}

.character-bg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 80%;
    background: url('@/assets/render/login/game-character.ico') no-repeat bottom left;
    background-size: contain;
    opacity: 0.8;
    z-index: 1;
}
</style>