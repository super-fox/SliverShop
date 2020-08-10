<template>
    <swiper>
        <swiper-item v-for="item in banners" class="swiper-item">
            <img v-lazy="item.imgUrl" alt="" @load="swiperLoad">
        </swiper-item>
    </swiper>
</template>

<script>

    import {Swiper, SwiperItem} from 'components/common/swiper'

    export default {
        name: "HomeSwiper",
        components: {
            Swiper,
            SwiperItem
        },
        data() {
            return {
                isLoad: false,
                banners: [
                    {
                        imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715841876,1335458262&fm=26&gp=0.jpg'
                    },
                    {
                        imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=821368947,1457856022&fm=26&gp=0.jpg'
                    }
                ]
            }
        },
        methods: {
            swiperLoad() {
                if (!this.isLoad) {
                    this.$emit('swiperImgLoad')
                    this.isLoad = true
                }
            }
        }
    }
</script>

<style scoped>
    .swiper-item {
        height: 200px;
    }

    .swiper-item img {
        width: 100%;
        height: 200px;
    }
</style>
