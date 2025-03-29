import { defineStore } from 'pinia';

const useAccountModalStore = defineStore('accountModalStore', {
    state: () => ({
        visible: false,
        currentStep: 1,
        countdown: 0,
        form: {
            phone: '',
            code: '',
        },
        codeShow1: false,
        codeShow2: false,
    }),

    actions: {

        async SetCodeShow1(show) {
            this.codeShow1 = show;
            console.log(this.codeShow1);
        },

        async SetCodeShow2(show) {
            this.codeShow2 = show;
        },

        async SetVisiable(visible) {
            this.visible = visible;
        },

        async NextStep() {
            if (this.currentStep < 3) {
                this.currentStep++
            } else {
                this.currentStep = 1;
                this.visible = false;
            }
        },

        async GetCode() {
            if (!this.form.phone) {
                console.error('请输入手机号')
                return
            }

            this.countdown = 60
            const timer = setInterval(() => {
                this.countdown--
                if (this.countdown <= 0) {
                    clearInterval(timer)
                }
            }, 1000)

            // TODO: Send verification code request
            console.log('Sending verification code to:', this.form.phone)
        },

        async ToggleSubmit() {
            console.log('Form submitted:', this.form)
        },

        async ToggleReset() {
            this.visible = true;
            this.currentStep = 1;
            this.countdown = 0;
            this.codeShow1 = false;
            this.codeShow2 = false;
            this.form.phone = '';
            this.form.code = '';
        }
    }
});

const store = useAccountModalStore()
export default store;