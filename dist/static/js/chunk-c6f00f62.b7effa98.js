(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6f00f62"],{"01f5":function(t,e,i){t.exports=i.p+"static/img/img4.e0ca65e1.jpg"},"066f":function(t,e,i){"use strict";var s=i("87da"),n=i.n(s);n.a},"08fa":function(t,e,i){"use strict";var s=i("d4ba"),n=i.n(s);n.a},"11f1":function(t,e,i){},1480:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home"}},[i("nav-bar",{staticClass:"home-nav"},[i("div",{staticClass:"slot-font",attrs:{slot:"center"},slot:"center"},[t._v("苗域银创商城")])]),i("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControl",staticClass:"tab-control",attrs:{titles:t.titles}}),i("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[i("home-swiper",{on:{swiperImgLoad:t.swiperImageLoad}}),i("tab-control",{ref:"tabControl",attrs:{titles:t.titles}}),i("culture")],1),i("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowTop,expression:"isShowTop"}],nativeOn:{click:function(e){return t.topClick(e)}}})],1)},n=[],r=i("a7ac"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"culture"},[i("h1",{staticClass:"culture-text",class:{is_fixed:t.isFixed}},[t._v("苗域文化")]),i("div",{staticClass:"culture-img"},[i("ul",{staticClass:"culture-img-left"},t._l(t.cultureImgLeft,(function(t,e){return i("li",[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],attrs:{alt:""}})])})),0),i("ul",{staticClass:"culture-img-right"},t._l(t.cultureImgRight,(function(t,e){return i("li",[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],attrs:{alt:""}})])})),0)]),i("h1",{staticClass:"culture-text"},[t._v("制作工艺")]),i("div",{staticClass:"culture-img"},[i("ul",{staticClass:"culture-img-left"},t._l(t.actImg,(function(t,e){return i("li",[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],attrs:{alt:""}})])})),0)])])},o=[],c={name:"Feature",data:function(){return{isFixed:!1,offsetTop:0,cultureImgLeft:[i("370a"),i("590d"),i("bcd9"),i("01f5")],cultureImgRight:[i("d913"),i("4939"),i("cee8"),i("c779")],actImg:[i("6e01"),i("9f44"),i("8e7a"),i("5bee")]}}},l=c,u=(i("c336"),i("2877")),f=Object(u["a"])(l,a,o,!1,null,"0641b0c6",null),d=f.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,s){return i("div",{staticClass:"tab-control-item",class:{active:s===t.currentIndex},on:{click:function(e){return t.itemClick(s)}}},[i("span",[t._v(t._s(e))])])})),0)},h=[],v={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t}}},p=v,A=(i("3bd7"),Object(u["a"])(p,m,h,!1,null,"5092d1f8",null)),g=A.exports,b=i("5d17"),x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("swiper",t._l(t.banners,(function(e){return i("swiper-item",{staticClass:"swiper-item"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgUrl,expression:"item.imgUrl"}],attrs:{alt:""},on:{load:t.swiperLoad}})])})),1)},C=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"hy-swiper"}},[i("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),i("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,s){return i("div",{key:s,staticClass:"indi-item",class:{active:s===t.currentIndex-1}})}))):t._e()],2)],2)},T=[],D=(i("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),1e3)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var i=e[0].cloneNode(!0),s=e[this.slideCount-1].cloneNode(!0);t.insertBefore(s,e[0]),t.appendChild(i),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,i=this.distance+e;this.setTransform(i)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),I=D,z=(i("066f"),Object(u["a"])(I,w,T,!1,null,"8e8fd188",null)),P=z.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide"},[t._t("default")],2)},j=[],H={name:"Slide"},W=H,k=(i("33a6"),Object(u["a"])(W,y,j,!1,null,"5a05f5c3",null)),E=k.exports,S={name:"HomeSwiper",components:{Swiper:P,SwiperItem:E},data:function(){return{isLoad:!1,banners:[{imgUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715841876,1335458262&fm=26&gp=0.jpg"},{imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=821368947,1457856022&fm=26&gp=0.jpg"}]}},methods:{swiperLoad:function(){this.isLoad||(this.$emit("swiperImgLoad"),this.isLoad=!0)}}},q=S,F=(i("8c5f"),Object(u["a"])(q,x,C,!1,null,"9d9d791e",null)),L=F.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"back-top"},[s("img",{attrs:{src:i("ad52")}})])}],X={name:"BackTop"},U=X,B=(i("4250"),Object(u["a"])(U,N,O,!1,null,"01123044",null)),R=B.exports,G={name:"Home",components:{NavBar:r["a"],Culture:d,TabControl:g,Scroll:b["a"],HomeSwiper:L,BackTop:R},data:function(){return{titles:["苗域文化","制作工艺"],isShowTop:!1,tabOffsetTop:0,isTabFixed:!1}},methods:{topClick:function(){this.$refs.scroll.scrollTo(0,0,300)},contentScroll:function(t){this.isShowTop=-t.y>300,this.isTabFixed=-t.y>this.tabOffsetTop},swiperImageLoad:function(){this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop}}},M=G,V=(i("08fa"),Object(u["a"])(M,s,n,!1,null,"69a9f988",null));e["default"]=V.exports},"2f52":function(t,e,i){},"33a6":function(t,e,i){"use strict";var s=i("11f1"),n=i.n(s);n.a},"370a":function(t,e,i){t.exports=i.p+"static/img/img1.342ecbc6.jpg"},"3bd7":function(t,e,i){"use strict";var s=i("2f52"),n=i.n(s);n.a},4250:function(t,e,i){"use strict";var s=i("fb4e"),n=i.n(s);n.a},4939:function(t,e,i){t.exports=i.p+"static/img/img6.18155640.jpg"},"590d":function(t,e,i){t.exports=i.p+"static/img/img2.6bca10e4.jpg"},"5bee":function(t,e,i){t.exports=i.p+"static/img/img4.9a57b148.jpg"},"7c83":function(t,e,i){},"87da":function(t,e,i){},"8c5f":function(t,e,i){"use strict";var s=i("7c83"),n=i.n(s);n.a},ad52:function(t,e){t.exports="data:image/png;base64,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"},bcd9:function(t,e,i){t.exports=i.p+"static/img/img3.d4553c64.jpg"},c336:function(t,e,i){"use strict";var s=i("fae3"),n=i.n(s);n.a},c779:function(t,e,i){t.exports=i.p+"static/img/img8.7f4f6c05.jpg"},cee8:function(t,e,i){t.exports=i.p+"static/img/img7.38303ad2.jpg"},d4ba:function(t,e,i){},d913:function(t,e,i){t.exports=i.p+"static/img/img5.568c0038.jpg"},fae3:function(t,e,i){},fb4e:function(t,e,i){}}]);
//# sourceMappingURL=chunk-c6f00f62.b7effa98.js.map