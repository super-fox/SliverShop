<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>   <!--默认-->
    <div v-else><slot name="item-icon-active"></slot></div>   <!--活跃-->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>

</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String,
      //动态绝定文字颜色
      activeColor:{
        type:String,
        default:'#FF5777'
      }
    },
      data(){
        return{
            // isActive: true
        }
      },
    computed:{
      //1.判断哪个路由处于活跃
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      //2.判断路由活跃的文字
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path).catch(err => err)
      }
    }
  }


</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 20px;
    height: 20px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
    /*.active{*/
    /*    color: var(--color-high-text);*/
    /*}*/
</style>
