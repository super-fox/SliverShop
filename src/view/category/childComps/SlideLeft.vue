<template>
    <div class="slide-left">
            <router-link :to="item.src"
                         v-for="(item,index) in slideTitles"
                         :key="index">
                <span @click="itemClick(index)"
                      :class="{active:currentIndex===index}">{{item.name}}</span>
            </router-link>
    </div>
</template>

<script>
    export default {
        name: "SlideLeft",
        data() {
            return {
                currentIndex: 0,
                slideTitles: [
                    {
                        name: '项链',
                        src: 'slide1'
                    },
                    {
                        name: '手镯',
                        src: 'slide2'
                    },
                    {
                        name: '胸针',
                        src: 'slide3'
                    },
                    {
                        name: '其他',
                        src: 'slide4'
                    },
                ]
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex = index
            }
        }
    }
</script>

<style scoped>
    .slide-left{
        width: 80px;
        height: 575px;
        background-color: #F7F6F6;
        text-align: center;
    }
    .slide-left a {
        text-decoration: none;
        display: block;
        padding-top: 20px;
    }
    .active {
        color: red;
    }
</style>