<template>
    <div class="slide-right">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "SlideRight"
    }
</script>

<style scoped>
    .slide-right{
        flex:1;
        width: 400px;
        margin-top: 10px;
    }
</style>