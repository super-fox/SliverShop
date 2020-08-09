import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import toast from 'components/common/toast/index'

import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false

//安装toast插件
Vue.use(toast)

//懒加载
Vue.use(VueLazyload,{
    loading:require('./assets/img/act/img1.jpg')
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')

