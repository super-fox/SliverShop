<template>
    <div class="nav-bar">
        <div class="center"><slot name="center"></slot></div>
<!--        <div class="input"><slot name="input"></slot></div>-->
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nav-bar{
        /*display: flex;*/
        height: 49px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,.1);
        background-color: rgb(217,81,85);
        color: #fff;
    }
    .center{
        height: 40px;
    }
    .input{
        position: relative;
        height: 38px;
        background-color: rgb(210,65,40);
    }

</style>