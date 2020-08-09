<template>
    <div class="toast" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
    export default {
        name: "Toast",
        // props: {
        //     message: {
        //         type: String,
        //         default: ''
        //     },
        //     isshow: {
        //         type: Boolean,
        //         default: false
        //     }
        // },
        data() {
            return {
                message: '',
                isShow: false
            }
        },
        methods: {
            show(message, duration) {
                this.isShow = true;
                this.message = message;

                setTimeout(() => {
                    this.isShow = false;
                    this.message = '';
                },duration)
            }
        }

    }
</script>

<style scoped>
    .toast {
        position: fixed;
        width: 100px;
        height: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, .56);

        line-height: 50px;
        text-align: center;
        color: #fff;
    }
</style>