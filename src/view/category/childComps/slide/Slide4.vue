<template>
    <div class="slide4">
        <ul class="img">
            <li v-for="(item,index) in imgList">
                <img v-lazy="item" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Slide4",
        data(){
            return {
                imgList:[
                    require('../../../../assets/img/slide/img7.jpg'),
                    require('../../../../assets/img/slide/img8.jpg')
                ]
            }
        }
    }
</script>

<style scoped>
    .slide4 img {
        width: 130px;
        height: 100px;
        margin-left: 10px;
    }
    .img li{
        display: inline-block;
    }
</style>
