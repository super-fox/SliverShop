<template>
    <div class="culture">
        <h1 class="culture-text" :class="{'is_fixed':isFixed}">苗域文化</h1>
        <div class="culture-img">
            <div class="culture-img-left">
                <img src="~assets/img/culture/img1.jpg" alt="">
                <img src="~assets/img/culture/img2.jpg" alt="">
                <img src="~assets/img/culture/img3.jpg" alt="">
                <img src="~assets/img/culture/img4.jpg" alt="">
            </div>
            <div class="culture-img-right">
                <img src="~assets/img/culture/img5.jpg" alt="">
                <img src="~assets/img/culture/img6.jpg" alt="">
                <img src="~assets/img/culture/img7.jpg" alt="">
                <img src="~assets/img/culture/img8.jpg" alt="">
            </div>
        </div>
        <h1 class="culture-text">制作工艺</h1>
        <div class="culture-img">
            <div class="culture-img-left">
                <img src="~assets/img/act/img1.jpg" alt="">
                <img src="~assets/img/act/img2.jpg" alt="">
                <img src="~assets/img/act/img3.jpg" alt="">
                <img src="~assets/img/act/img4.jpg" alt="">
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Feature",
        data() {
            return {
                isFixed: false,
                offsetTop: 0
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

</style>