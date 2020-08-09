<template>
    <div class="profile-item">
        <scroll class="content">
            <div class="profile-detail">
                <img src="~assets/img/profile/img1.png" alt="">
                <span>姓名</span>
                <input type="text" class="input-name" placeholder="请输入您的姓名">
                <span>性别</span>
                <label for="" class="input-select"><input type="radio" name="sex" value="male">男</label><br>
                <label for="" class="input-select"><input type="radio" name="sex" value="female">女</label><br>
                <label for="" class="input-select"><input type="radio" name="sex" value="secret">不想透露</label><br>
                <span>手机</span>
                <input type="number" class="input-name" placeholder="请输入手机号码">
                <span>年龄范围</span>
                <label for="" class="input-select"><input type="radio" name="age" value="twenty">10~20</label><br>
                <label for="" class="input-select"><input type="radio" name="age" value="thirty">20-30</label><br>
                <label for="" class="input-select"><input type="radio" name="age" value="forty">30-40</label><br>
                <label for="" class="input-select"><input type="radio" name="age" value="more">40以上</label><br>
                <input type="submit" value="提交" class="profile-submit" @click="toastClick">
            </div>
        </scroll>
<!--        <toast :message="message" :show="isShow"/>-->
    </div>
</template>

<script>
    import Scroll from "../../../components/common/scroll/Scroll";
    import Toast from "../../../components/common/toast/Toast";

    export default {
        name: "ProfileItem",
        components: {
            Scroll,
            Toast
        },
        // data() {
        //     return {
        //         message: '',
        //         isShow: false
        //     }
        // },
        methods: {
            toastClick() {
                this.$toast.show('提交成功',500)
            }
        }
    }
</script>

<style scoped>
    .content {
        overflow: hidden;

        position: absolute;
        top: 49px;
        bottom: 49px;
        left: 0;
        right: 0;
    }

    .profile-detail img {
        width: 380px;
        height: 200px;
    }

    .profile-detail span {
        display: block;
        background-color: #F0F0F5;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        color: #A6A6A7;
        font-size: var(--font-size);
    }

    .input-name {
        width: 100%;
        border: none;
        height: 30px;
    }

    .input-name::-webkit-input-placeholder {
        font-size: 12px;
        color: #838383;
        padding-left: 20px;
    }

    .input-name:-moz-placeholder {
        font-size: 12px;
        color: #838383;
        padding-left: 20px;
    }

    .input-name:-ms-input-placeholder {
        font-size: 12px;
        color: #838383;
        padding-left: 20px;
    }

    .input-select input {
        margin-top: 10px;
        margin-bottom: 10px;
        line-height: 20px;
        margin-left: 20px;
    }

    /*提交*/
    .profile-submit {
        display: block;
        width: 150px;
        height: 35px;
        margin: 30px auto;
        background-color: #FE8533;
        border: none;
        border-radius: 10px;
        color: #fff;
        outline: none;
    }
</style>