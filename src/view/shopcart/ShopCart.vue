<template>
    <div class="shop-cart">
        <!--        导航-->
        <div class="cart-title">
            <span class="cart-title-font1">购物车</span>
            <span class="cart-title-font2">共{{goodsLength}}件宝贝</span>
        </div>
        <!--商品-->
        <shop-car></shop-car>
    </div>
</template>

<script>
    import ShopCar from "./childComps/CartList";

    import {mapGetters} from 'vuex'

    export default {
        name: "ShopCart",
        components: {
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
    .shop-cart {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    .cart-title{
        position: fixed;
        width: 100%;
        height: 150px;
        background:linear-gradient(to bottom,#d95155 40%,#fff);
    }
    .cart-title-font1{
        position: absolute;
        display:block;
        font-size: 26px;
        color: #fff;
        font-weight:bold;

        margin: 25px 20px;
    }
    .cart-title-font2{
        position: absolute;
        font-size: 18px;
        color: #fff;
        margin: 70px 20px;
    }

</style>
