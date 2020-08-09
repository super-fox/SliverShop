<template>
    <div v-if="goodsList.length">
        <div class="cart-list">
            <div class="tit_gds_item clearfix">
                <div class="tit_gds_check">
                    <input type="checkbox"
                           :checked="goodsIds.length===goodsList.length"
                           @click="checkedAll">
                </div>
                <div class="tit_gds_txt">商品</div>
                <div class="tit_gds_num">数量</div>
                <div class="tit_gds_price">价格</div>
                <div class="tit_gds_operate">操作</div>
            </div>
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
                    <div class="gds_delete" @click="deleteClick(index)">删除</div>
                </div>
            </div>
        </div>
    </div>
    <div v-else><img class="empty"
                     src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2145208668,1958297527&fm=26&gp=0.jpg"
                     alt=""></div>
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
        background-color: #fff;
    }

    .tit_gds_item {
        display: flex;
        background-color: #ccc;
    }

    .tit_gds_item div {
        flex: 1;
        text-align: center;
    }

    .tit_gds_check:after {
        content: '全选';
    }

    .cart-item {
        display: flex;
        width: 100%;
        height: 100px;
        background-color: #e0e0e0;
        margin-bottom: 10px;

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
        background-color: #fff;
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
.gds_delete{
    margin-left: 22px;
}
    .empty {
        width: 280px;
        height: 394px;
    }
</style>