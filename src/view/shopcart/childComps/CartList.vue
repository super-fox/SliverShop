<template>
    <div v-if="goodsList.length">
        <div class="cart-list">
            <!--            全选功能-->


            <!--        具体商品展示-->
            <div class="cart-item" v-for="(product,index) in goodsList"
                 :key="index">
                <!--            选框-->
                <div class=" gds_check">
                    <input type="checkbox"
                           :checked="goodsIds.indexOf(product.index) !== -1"
                           @click="checkedOnce(product.id)">
                </div>
                <!--            图片-->
                <div class="gds_img">
                    <img :src="product.img"/>
                </div>
                <!--            名称-->
                <div class="gds_title">
                    {{product.title}}
                </div>
                <!--            数量-->
                <div class="gds_num">
                    <div class="quantity">
                        <a href="javascript:;" class="decrement" @click="reduceClick(index)">-</a>
                        <input class="iTxt" v-model="product.num"/>
                        <a href="javascript:;" class="increment" @click="addClick(index)">+</a>
                    </div>
                </div>
                <!--            单价-->
                <div class="gds_price">
                    ${{product.price}}
                </div>
                <!--            删除操作-->
                <div class="gds_operate">
                    <div class="gds_delete" @click="deleteClick(index)">
                        <img src="../../../assets/img/shop_cart/delete.png" alt="">
                    </div>
                </div>
            </div>

            <!--            结算区域-->
            <div class="tit_gds_item clearfix">
                <div class="tit_gds_check">
                    <input type="checkbox"
                           :checked="goodsIds.length===goodsList.length"
                           @click="checkedAll">
                </div>
                <div class="to-cart">
                    <span>去结算</span>
                </div>
            </div>
        </div>
    </div>

    <!--    购物车为空的时候-->
    <div v-else><img class="empty"
                     src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2145208668,1958297527&fm=26&gp=0.jpg"
                     alt="">
    </div>
</template>

<script>
    import {mapGetters, mapMutations, mapState} from 'vuex'

    export default {
        name: 'CartList',
        components: {},
        computed: {
            ...mapState([
                'goodsIds'
            ]),
            ...mapGetters([
                'goodsList',
            ]),
        },
        methods: {
            ...mapMutations([
                'reduceClick', 'addClick', 'deleteClick', 'checkedAll', 'checkedOnce'
            ])
        }
    }
</script>

<style scoped>
    .cart-list {
        height: 100vh;
        background-color: #f1f1f1;
    }

    .tit_gds_item {
        position: fixed;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        background-color: #fff;
        bottom: 49px;
        padding-left: 10px;

        line-height: 50px;
    }

    .tit_gds_check {
        width: 50px;
    }

    .to-cart {
        background-color: #d95155;
        width: 30%;
        text-align: center;
        color: #fff;
    }

    .tit_gds_check:after {
        content: '全选';
    }

    .cart-item {
        position: relative;
        display: flex;
        width: 90%;
        height: 100px;
        background-color: #fff;
        margin-bottom: 10px;
        top: 150px;
        margin-left: 50%;
        transform: translate(-50%, -50%);

        border-radius: 10px;
    }

    .gds_check {
        margin-top: 38px;
    }

    .gds_img img {
        width: 40px;
        height: 40px;
        margin-top: 28px;
        margin-left: 15px;
    }

    .gds_title {
        width: 44px;
        margin-top: 34px;
        margin-left: 22px;
    }

    .gds_num input {
        width: 25px;
        text-align: center;
        margin: 20px 2px;
    }

    .quantity {
        margin-left: 12px;
        margin-top: 12px;
    }

    .decrement, .increment {
        display: inline-block;
        width: 26px;
        height: 26px;
        background: rgba(217, 81, 85, .85);
        border-radius: 50%;
        text-align: center;
        line-height: 26px;
    }

    .gds_price {
        width: 30px;
        margin-left: 12px;
        margin-top: 36px;
    }

    .gds_operate {
        margin-left: 25px;
        margin-top: 35px;
    }

    .gds_delete {
        margin-left: 10px;
    }

    .gds_delete img {
        width: 25px;
        height: 25px;
    }

    .empty {
        width: 280px;
        height: 394px;
    }
</style>
