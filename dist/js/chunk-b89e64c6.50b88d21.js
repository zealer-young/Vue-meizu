(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b89e64c6"],{"2eae":function(t,s,i){},"3c7c":function(t,s,i){},"4a2b":function(t,s,i){t.exports=i.p+"img/phone-3.747342e0.jpg"},"4b8e":function(t,s,i){"use strict";var a=i("3c7c"),e=i.n(a);e.a},"87e6":function(t,s,i){t.exports=i.p+"img/item-price.665c8317.jpeg"},"93ea":function(t,s,i){t.exports=i.p+"img/phone-1.31ea1dcf.jpg"},"9f26":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"nav-bar",class:{is_fixed:t.isFixed}},[i("div",{staticClass:"container"},[i("div",{staticClass:"pro-title"},[t._v(" "+t._s(t.title)+" ")]),i("div",{staticClass:"pro-param"},[i("a",{attrs:{href:"javascript:;"}},[t._v("概述")]),i("span",[t._v("|")]),i("a",{attrs:{href:"javascript:;"}},[t._v("参数")]),i("span",[t._v("|")]),i("a",{attrs:{href:"javascript:;"}},[t._v("用户评价")]),t._t("buy")],2)])])},e=[],c={name:"nav-bar",props:{title:String},data:function(){return{isFixed:!1}},mounted:function(){window.addEventListener("scroll",this.initHeight)},methods:{initHeight:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isFixed=t>152}},destroyed:function(){window.removeEventListener("scroll",this.initHeight,!1)}},n=c,r=(i("4b8e"),i("2877")),o=Object(r["a"])(n,a,e,!1,null,null,null);s["a"]=o.exports},afa2:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"detail"},[a("product-param",{attrs:{title:t.product.name}}),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container clearfix"},[a("div",{staticClass:"swiper"},[a("swiper",{attrs:{options:t.swiperOption}},[a("swiper-slide",[a("img",{attrs:{src:i("93ea"),alt:""}})]),a("swiper-slide",[a("img",{attrs:{src:i("b05c"),alt:""}})]),a("swiper-slide",[a("img",{attrs:{src:i("4a2b"),alt:""}})]),a("swiper-slide",[a("img",{attrs:{src:i("d68a"),alt:""}})]),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),a("div",{staticClass:"content"},[a("h2",{staticClass:"item-title"},[t._v(t._s(t.product.name))]),t._m(0),a("div",{staticClass:"delivery"},[t._v("小米自营")]),a("div",{staticClass:"item-price"},[t._v(t._s(t.product.price)+"元"),a("span",{staticClass:"del"},[t._v("1999元")])]),a("div",{staticClass:"line"}),t._m(1),a("div",{staticClass:"item-version clearfix"},[a("h2",[t._v("选择版本")]),a("div",{staticClass:"phone fl",class:{checked:1==t.version},on:{click:function(s){t.version=1}}},[t._v("6GB+64GB 全网通")]),a("div",{staticClass:"phone fr",class:{checked:2==t.version},on:{click:function(s){t.version=2}}},[t._v("4GB+64GB 移动4G")])]),t._m(2),a("div",{staticClass:"item-total"},[a("div",{staticClass:"phone-info clearfix"},[a("div",{staticClass:"fl"},[t._v(t._s(t.product.name)+" "+t._s(1==t.version?"6GB+64GB 全网通":"4GB+64GB 移动4G")+" 深灰色")]),a("div",{staticClass:"fr"},[t._v(t._s(t.product.price)+"元")])]),a("div",{staticClass:"phone-total"},[t._v("总计："+t._s(t.product.price)+"元")])]),a("div",{staticClass:"btn-group"},[a("a",{staticClass:"btn btn-huge fl",attrs:{href:"javascript:;"},on:{click:t.addCart}},[t._v("加入购物车")])])])])]),t._m(3),a("service-bar")],1)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("p",{staticClass:"item-info"},[t._v("相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红"),i("br"),t._v("外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏")])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"item-addr"},[i("i",{staticClass:"icon-loc"}),i("div",{staticClass:"addr"},[t._v("北京 北京市 朝阳区 安定门街道")]),i("div",{staticClass:"stock"},[t._v("有现货")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"item-color"},[i("h2",[t._v("选择颜色")]),i("div",{staticClass:"phone checked"},[i("span",{staticClass:"color"}),t._v(" 深空灰 ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"price-info"},[a("div",{staticClass:"container"},[a("h2",[t._v("价格说明")]),a("div",{staticClass:"desc"},[a("img",{attrs:{src:i("87e6"),alt:""}})])])])}],c=i("7212"),n=i("9f26"),r=i("984c"),o={name:"detail",data:function(){return{id:this.$route.params.id,version:1,product:{},swiperOption:{autoplay:!0,pagination:{el:".swiper-pagination",clickable:!0}}}},components:{swiper:c["swiper"],swiperSlide:c["swiperSlide"],ProductParam:n["a"],ServiceBar:r["a"]},mounted:function(){this.getProductInfo()},methods:{getProductInfo:function(){var t=this,s=this.$route.params.id;this.axios.get("/products/".concat(s)).then((function(s){t.product=s}))},addCart:function(){var t=this;this.axios.post("/carts",{productId:this.$route.params.id,selected:!0}).then((function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartProductVoList:0};t.$store.dispatch("saveCartCount",s.cartTotalQuantity),t.$router.push("/cart")}))}}},l=o,d=(i("f8df"),i("2877")),p=Object(d["a"])(l,a,e,!1,null,null,null);s["default"]=p.exports},b05c:function(t,s,i){t.exports=i.p+"img/phone-2.205ffcc5.jpg"},d68a:function(t,s,i){t.exports=i.p+"img/phone-4.a2589e9b.jpg"},f8df:function(t,s,i){"use strict";var a=i("2eae"),e=i.n(a);e.a}}]);