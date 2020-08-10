<template>
    <div class="slide3">
        <ul class="img">
            <li v-for="(item,index) in imgList">
                <img v-lazy="item" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Slide3",
        data(){
            return {
                imgList:[
                    require('../../../../assets/img/slide/img5.jpg'),
                    require('../../../../assets/img/slide/img6.jpg')
                ]
            }
        }
    }
</script>

<style scoped>
    .slide3 img {
        width: 130px;
        height: 100px;
        margin-left: 10px;
    }
    .img li{
        display: inline-block;
    }
</style>
