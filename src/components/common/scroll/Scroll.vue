<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'


    export default {
        name: "Scroll",
        components: {
            BScroll,
        },
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: null,
                // click: true
            }
        },
        mounted() {
            //1.创建BScroll对象
            this.bscroll = new BScroll(this.$refs.wrapper, {
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            });
            //2.监听滚动位置
            if (this.probeType === 2 || this.probeType === 3) {
                this.bscroll.on('scroll', (position) => {
                    // console.log(position);
                    this.$emit('scroll', position)
                })
            }
            //3.监听上拉加载更多
            // if (this.pullUpLoad) {
            //     this.bscroll.on('pullingUp', () => {
            //         // console.log('上拉加载更多');
            //         this.$emit('pullingLoad')
            //         //发送网络请求，请求更多数据
            //         //请求结束之后，将新的数据展示出来
            //         // setTimeout(() => {
            //         //   this.bscroll.finishPullUp()
            //         // }, 2000)
            //     })
            // }
        },
        methods: {
            scrollTo(x, y, time) {
                // this.bscroll.scrollTo(x, y, time)
                this.bscroll && this.bscroll.scrollTo(x, y, time)
            },
            finishPullUp() {
                this.bscroll && this.scroll.finishPullUp()
            },
            refresh() {
                this.bscroll && this.scroll.refresh()
            }
        }
    }
</script>

<style scoped>

</style>
