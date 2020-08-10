<template>
    <div class="slide2">
        <ul class="img">
            <li v-for="(item,index) in imgList">
                <img v-lazy="item" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Slide2",
        data(){
            return {
                imgList:[
                    require('../../../../assets/img/slide/img3.jpg'),
                    require('../../../../assets/img/slide/img4.jpg')
                ]
            }
        }
    }
</script>

<style scoped>
    .slide2 img {
        width: 130px;
        height: 100px;
        margin-left: 10px;
    }
    .img li{
        display: inline-block;
    }
</style>
