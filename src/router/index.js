import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('../view/home/Home');
const Category = () => import('../view/category/Category');
const ShopCart = () => import('../view/shopcart/ShopCart');
const Profile = () => import('../view/profile/Profile');

const Slide1 = ()=> import('../view/category/childComps/slide/Slide1')
const Slide2 = ()=> import('../view/category/childComps/slide/Slide2')
const Slide3 = ()=> import('../view/category/childComps/slide/Slide3')
const Slide4 = ()=> import('../view/category/childComps/slide/Slide4')


//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category,
        children:[
            {
                path:'/',
                redirect: 'slide1'
            },
            {
                path:'slide1',
                name:'slide1',
                component:Slide1
            },
            {
                path:'slide2',
                name:'slide2',
                component:Slide2
            },
            {
                path:'slide3',
                name:'slide3',
                component:Slide3
            },
            {
                path:'slide4',
                name:'slide4',
                component:Slide4
            },
        ]
    },
    {
        path: '/shopcart',
        component: ShopCart
    },
    {
        path: '/profile',
        component: Profile
    },
]
const router = new VueRouter({
    routes,
    mode: 'hash'
})

//3.导出router
export default router
