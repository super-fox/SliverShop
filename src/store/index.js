import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
    goods: [
        {
            id: 1,
            title: '手镯',
            price: 135.00,
            num: 1,
            img: require('../assets/img/act/img1.jpg'),
            disabled:true
        },
        {
            id: 2,
            title: '项链',
            price: 234.00,
            num: 1,
            img: require('../assets/img/act/img2.jpg'),
            disabled:true
        },
        {
            id: 3,
            title: '胸针',
            price: 150.00,
            num: 1,
            img: require('../assets/img/act/img3.jpg'),
            disabled:true
        },
    ],
    goodsIds:[ ],//所有商品的id
    isCheckedAll:false//默认不选中
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
})

export default store