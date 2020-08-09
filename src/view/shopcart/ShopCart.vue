<template>
    <div class="shop-cart">
        <!--        导航-->
        <nav-bar >
            <div slot="center" class="slot-font">购物车({{goodsLength}})</div>
        </nav-bar>
        <!--商品-->
        <shop-car></shop-car>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import ShopCar from "./childComps/CartList";

    import {mapGetters} from 'vuex'

    export default {
        name: "ShopCart",
        components: {
            NavBar,
            ShopCar,
        },
        computed: {
            // goodsLength(){
            //     //获取购物车商品数量
            //     // return this.$store.state.goods.length
            //     // return this.$store.getters.goodsLength
            // }
            ...mapGetters([
                'goodsLength', 'goodsList'
            ])
        }
    }
</script>

<style scoped>
    .slot-font{
        font-size: 16px;
        line-height: 49px;
    }
    .shop-cart {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

</style>