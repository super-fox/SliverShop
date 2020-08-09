const mutations = {
    //点击减少商品
    reduceClick(state, index) {
        if (state.goods[index].num <= 1) {
            return false
        } else {
            state.goods[index].num--
        }
    },
    //点击增加商品
    addClick(state, index) {
        state.goods[index].num++
    },
    //点击删除商品
    deleteClick(state, index) {
        state.goods.splice('goods[index]', 1)
    },
    //点击单选
    checkedOnce(state, index) {
        let indexId = state.goodsIds.indexOf(index)
        if (indexId >= 0) {
            state.goodsIds.splice(indexId, 1)
        } else {
            state.goodsIds.push(index)
        }
    },
    //点击全选
    checkedAll(state,index) {
        this.isCheckedAll = !this.isCheckedAll;
        if (this.isCheckedAll) {
            state.goodsIds = [];
            state.goods.forEach(item => {
                state.goodsIds.push(item.index)
            }, this)
        } else {
            state.goodsIds = []
        }
    }
}

export default mutations