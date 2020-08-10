<template>
    <div class="slide1">
        <ul class="img">
            <li v-for="(item,index) in imgList">
                <img v-lazy="item" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Slide1",
        data(){
            return {
                imgList:[
                    require('../../../../assets/img/slide/img1.jpg'),
                    require('../../../../assets/img/slide/img2.jpg')
                ]
            }
        }
    }
</script>

<style scoped>
    .slide1 img {
        width: 130px;
        height: 100px;
        margin-left: 10px;
    }
.img li{
    display: inline-block;
}
</style>
