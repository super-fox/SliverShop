<template>
    <div class="culture">
        <h1 class="culture-text" :class="{'is_fixed':isFixed}">苗域文化</h1>
        <div class="culture-img">
            <ul class="culture-img-left">
                <li v-for="(item,index) in cultureImgLeft">
                    <img v-lazy="item" alt="">
                </li>
            </ul>
            <ul class="culture-img-right">
                <li v-for="(item,index) in cultureImgRight">
                    <img v-lazy="item" alt="">
                </li>
            </ul>
        </div>
        <h1 class="culture-text">制作工艺</h1>
        <div class="culture-img">
            <ul class="culture-img-left">
                <li v-for="(item,index) in actImg">
                    <img v-lazy="item" alt="">
                </li>
            </ul>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Feature",
        data() {
            return {
                isFixed: false,
                offsetTop: 0,
                cultureImgLeft: [
                    require('../../../assets/img/culture/img1.jpg'),
                    require('../../../assets/img/culture/img2.jpg'),
                    require('../../../assets/img/culture/img3.jpg'),
                    require('../../../assets/img/culture/img4.jpg')
                ],
                cultureImgRight:[
                    require('../../../assets/img/culture/img5.jpg'),
                    require('../../../assets/img/culture/img6.jpg'),
                    require('../../../assets/img/culture/img7.jpg'),
                    require('../../../assets/img/culture/img8.jpg'),
                ],
                actImg:[
                    require('../../../assets/img/act/img1.jpg'),
                    require('../../../assets/img/act/img2.jpg'),
                    require('../../../assets/img/act/img3.jpg'),
                    require('../../../assets/img/act/img4.jpg')
                ]
            }
        }
    }
</script>

<style scoped>
    .culture-text {
        font-size: var(--font-size);
        text-align: center;
    }

    .culture-img-left, .culture-img-right {
        margin: 0 10px;
    }

    .culture-img img {
        width: 175px;
        height: 160px;
        margin-left: 2px;
    }
    li{
        display: inline-block;
    }
</style>
