<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center" class="slot-font">苗域银创商城</div>
        </nav-bar>
        <tab-control :titles="titles"
                     ref="tabControl"
                     class="tab-control"
                     v-show="isTabFixed">
        </tab-control>

        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
            <home-swiper @swiperImgLoad="swiperImageLoad"/>
            <tab-control :titles="titles"
                         ref="tabControl">
            </tab-control>
            <culture/>
        </scroll>

        <back-top @click.native="topClick" v-show="isShowTop"/>
    </div>

</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import Culture from "./childComps/Culture";
    import TabControl from "../../components/content/tabcontrol/TabControl";
    import Scroll from "../../components/common/scroll/Scroll";
    import HomeSwiper from "./childComps/HomeSwiper";
    import BackTop from "../../components/content/backTop/BackTop";


    export default {
        name: "Home",
        components: {
            NavBar,
            Culture,
            TabControl,
            Scroll,
            HomeSwiper,
            BackTop
        },
        data() {
            return {
                titles: ['苗域文化', '制作工艺'],
                isShowTop: false,
                tabOffsetTop: 0,
                isTabFixed: false,
            }
        },
        methods: {
            topClick() {
                this.$refs.scroll.scrollTo(0, 0, 300)
            },
            contentScroll(position) {
                //1.判断返回顶部是否显示
                this.isShowTop = (-position.y) > 300
                //2.判断是否吸顶
                this.isTabFixed = (-position.y) > this.tabOffsetTop
            },
            swiperImageLoad() {
                // console.log(this.$refs.tabControl.$el.offsetTop);
                this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
            }
        }
    }
</script>

<style scoped>
    #home {
        height: 100vh;
        position: relative;
    }
    .slot-font{
        font-size: 16px;
        line-height: 49px;
    }
    /*.home-nav {*/
    /*    position: fixed;*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*    z-index: 9;*/
    /*}*/

    .content {
        overflow: hidden;

        position: absolute;
        top: 49px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    /*.fixed{*/
    /*    position: fixed;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*    top: 40px;*/
    /*}*/
    .tab-control{
        position: relative;
        z-index: 9;
    }
</style>