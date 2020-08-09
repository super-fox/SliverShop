<template>
    <div class="category">
        <nav-bar>
            <div slot="center" class="slot-font">商品分类</div>
            <div slot="input"><input class="search" placeholder="搜索" type="text"></div>
        </nav-bar>

        <div class="slide">
            <slide-left></slide-left>
            <slide-right></slide-right>
        </div>

    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import SlideLeft from "./childComps/SlideLeft";
    import SlideRight from "./childComps/SlideRight";

    export default {
        name: "Category",
        components: {
            NavBar,
            SlideLeft,
            SlideRight
        },

    }
</script>

<style scoped>
    .slot-font{
        font-size: 16px;
        line-height: 49px;
    }
    .category {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    .search {
        position: absolute;
        width: 258px;
        height: 24px;
        border-radius: 5px;
        border: none;
        top: 8px;
        left: 5px;
        text-align: center;
    }

    .slide {
        width: 375px;
        height: 366px;
        display: flex;
    }


</style>