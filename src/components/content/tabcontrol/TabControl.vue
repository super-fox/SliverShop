<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles"
             class="tab-control-item"
             :class="{active:index === currentIndex}"
             @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
            titles: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex: 0
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
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;

        height: 40px;
        line-height: 40px;
        background-color: #f0f0f5;

    }

    .tab-control-item {
        flex: 1;
    }
    .active{
        color: rgb(210, 65, 40);
    }
</style>