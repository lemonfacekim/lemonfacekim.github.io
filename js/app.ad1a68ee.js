(function(){var t={7773:function(t,e,i){"use strict";var a=i(7195),n=i(408),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],r={name:"App",components:{}},l=r,c=i(3736),d=(0,c.Z)(l,o,s,!1,null,null,null),u=d.exports,g=i(2241),h=function(){var t=this,e=t._self._c;return e("div",[e("Header"),e("Intro"),e("HashList",{staticStyle:{"padding-bottom":"2%"}}),e("IntroDetail"),e("Content",{staticStyle:{height:"250vh"}})],1)},m=[],v=function(){var t=this,e=t._self._c;return e("div",[t.modal?e("MyModal",{on:{close:t.closeModal}},[e("div",{staticStyle:{color:"black"}},[t._v(" Vue.js Modal Window! Vue.js Modal Window! Vue.js Modal Window! Vue.js Modal Window! Vue.js Modal Window! Vue.js Modal Window! Vue.js Modal Window! Vue.js Modal Window! Vue.js Modal Window! Vue.js Modal Window! ")])]):t._e(),e("b-container",{staticClass:"bv-example-row",staticStyle:{"margin-bottom":"1%"}},[t.isMobile()?t._e():e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{attrs:{id:"col",cols:"1"}}),e("b-col",{staticClass:"intro",attrs:{id:"col",cols:"10"}},[e("div",[e("a",{staticStyle:{"text-decoration":"underline",cursor:"pointer"},attrs:{href:"#section-2"},on:{click:t.showIntroDetail}},[t._v("Yoo Ra")]),t._v(" is always ready to")]),e("div",[t._v("challenge new projects which")]),e("div",[t._v("will impact our society.")]),e("div",[t._v("Find talents you are looking")]),e("div",[t._v("for in "),e("a",{staticStyle:{"text-decoration":"underline",cursor:"pointer"},attrs:{href:"#section-2"}},[t._v("my work")]),t._v(" and "),e("a",{attrs:{href:"https://www.yoomademyday.com/_files/ugd/5d2978_e03d5724ff0d4102aebf70b1fb621a06.pdf",target:"_blank"}},[t._v("resume.")])]),e("div",[t._v("Contact me :-)")])]),e("b-col",{attrs:{id:"col",cols:"1"}})],1),t.isMobile()?e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{staticClass:"intro",attrs:{id:"col",cols:"12"}},[e("div",[e("a",{staticStyle:{"text-decoration":"underline",cursor:"pointer"},attrs:{href:"#section-2"},on:{click:t.showIntroDetail}},[t._v("Yoo Ra")]),t._v(" is always ready to challenge new projects which will impact our society. Find talents you are looking for in "),e("a",{staticStyle:{"text-decoration":"underline",cursor:"pointer"},attrs:{href:"#section-2"}},[t._v("my work")]),t._v(" and "),e("a",{attrs:{href:"https://www.yoomademyday.com/_files/ugd/5d2978_e03d5724ff0d4102aebf70b1fb621a06.pdf",target:"_blank"}},[t._v("resume.")])]),e("div",[t._v("Contact me :-)")])])],1):t._e(),e("b-row",{staticStyle:{"margin-top":"3%","padding-bottom":"3%"},attrs:{"align-h":"center"}},[e("b-col",{attrs:{id:"col"}},[e("hr")])],1)],1)],1)},p=[],w=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"modal",appear:""}},[e("div",{staticClass:"modal modal-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[e("div",{staticClass:"modal-window",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[e("div",{staticClass:"modal-content",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[t._t("default")],2)])])])},f=[],b={},y=(0,c.Z)(b,w,f,!1,null,"13d8f54c",null),_=y.exports,S={name:"Content-vue",components:{MyModal:_},data(){return{modalShow:!1,deviceSize:window.innerWidth,window:{width:0,height:0},modal:!1,message:""}},created(){window.addEventListener("resize",this.handleResize),this.handleResize()},watch:{deviceSize:function(){console.log(window.innerHeight)}},methods:{showIntroDetail(){this.$store.commit("setShowIntroDetail",!0)},handleResize(){this.window.width=window.innerWidth,this.window.height=window.innerHeight},isMobile(){return this.window.width<=900},openModal(){this.modal=!0},closeModal(){this.modal=!1},doSend(){this.message.length>0?(alert(this.message),this.message="",this.closeModal()):alert("메시지를 입력해주세요.")}},destroyed(){window.removeEventListener("resize",this.handleResize)}},x=S,k=(0,c.Z)(x,v,p,!1,null,"a7e8f94c",null),T=k.exports,I=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.getShowIntroDetail,expression:"getShowIntroDetail"}]},[e("div",{staticStyle:{"padding-bottom":"2em"}}),e("b-container",{staticClass:"bv-example-row",staticStyle:{"margin-bottom":"5%"}},[t.isMobile()?t._e():e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{attrs:{id:"col"}}),e("b-col",{staticStyle:{height:"auto","text-align":"left"},attrs:{id:"col",cols:"10"}},[e("div",{staticStyle:{"margin-bottom":"1em"}},[t._v(" This is Yoo Ra Kim, who has been challenging, been trying to overcome my limits with reminding ‘grow and comfort doesn’t co-exist’. If I describe myself I would say inventive, adventurous, self motivated, having a eagerness, positive attitude at work. ")]),e("div",{staticStyle:{"margin-bottom":"1em"}},[t._v(" All my life, I have dreamed of commercializing visual products that bring convenience to the world. practical creativity, product branding abilities, self-motivated and never giving-up spirit enabled me to overcome numerous challenges in the United States market. I have demonstrated meaningful results and am realizing my dream as a visual designer during working 6years. for example, I worked in the expertise area of brand design for many skincare and makeup brands and has been distributed to Walmart, Target, Sephora, CVS and so on in the US, Canada, Mexico, South Asian countries. And I got also involved in planning brand strategies of the marketing part. Currently I’ve been overseeing Seventeen of Hearst as digital designer who is overseeing all visuals in digital platforms such as instagram, YouTube, website. Moreover, I launched a brand as my first start-up which is a press-on type fabricated nail products that are 100% biodegradable using natural ingredients. ")]),e("div",[t._v(" If you get shared more my career and experiences, click here to see "),e("a",{attrs:{href:"https://www.yoomademyday.com/_files/ugd/5d2978_e03d5724ff0d4102aebf70b1fb621a06.pdf",target:"_blank"}},[t._v("my resume.")])]),e("div",[e("a",{attrs:{href:"mailto:hello.yoora.kim@gmail.com"}},[t._v("hello.yoora.kim@gmail.com")])]),e("div",[t._v("+1 917 669 4820")])]),e("b-col",{attrs:{id:"col"}})],1),t.isMobile()?e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{staticStyle:{height:"auto padding:0 3em"},attrs:{id:"col"}},[e("div",{staticStyle:{"text-align":"left"}},[e("div",{staticStyle:{"margin-bottom":"1em"}},[t._v(" This is Yoo Ra Kim, who has been challenging, been trying to overcome my limits with reminding ‘grow and comfort doesn’t co-exist’. If I describe myself I would say inventive, adventurous, self motivated, having a eagerness, positive attitude at work. ")]),e("div",{staticStyle:{"margin-bottom":"1em"}},[t._v(" All my life, I have dreamed of commercializing visual products that bring convenience to the world. practical creativity, product branding abilities, self-motivated and never giving-up spirit enabled me to overcome numerous challenges in the United States market. I have demonstrated meaningful results and am realizing my dream as a visual designer during working 6years. for example, I worked in the expertise area of brand design for many skincare and makeup brands and has been distributed to Walmart, Target, Sephora, CVS and so on in the US, Canada, Mexico, South Asian countries. And I got also involved in planning brand strategies of the marketing part. Currently I’ve been overseeing Seventeen of Hearst as digital designer who is overseeing all visuals in digital platforms such as instagram, YouTube, website. Moreover, I launched a brand as my first start-up which is a press-on type fabricated nail products that are 100% biodegradable using natural ingredients. ")]),e("div",[t._v(" If you get shared more my career and experiences, click here to see "),e("a",{attrs:{href:"https://www.yoomademyday.com/_files/ugd/5d2978_e03d5724ff0d4102aebf70b1fb621a06.pdf",target:"_blank"}},[t._v("my resume.")])]),e("div",[e("a",{attrs:{href:"mailto:hello.yoora.kim@gmail.com"}},[t._v("hello.yoora.kim@gmail.com")])]),e("div",[t._v("+1 917 669 4820")])])])],1):t._e()],1)],1)},H=[],C={name:"Header-vue",components:{},data(){return{window:{width:0,height:0}}},created(){window.addEventListener("resize",this.handleResize),this.handleResize()},mounted(){window.scrollTo(0,0),document.addEventListener("scroll",this.scrollEvents)},computed:{getPackageHashTag:function(){return this.$store.getters.getHashTag},getShowIntroDetail:function(){return this.$store.getters.getShowIntroDetail}},methods:{handleResize(){this.window.width=window.innerWidth,this.window.height=window.innerHeight},isMobile(){return console.log("window.innerHeight is ",window.innerWidth),this.window.width<=900},scrollEvents(){const t=this.currentScrollValue,e=document.documentElement.scrollTop;console.log("beforeScrollTop"),console.log(t),console.log("afterScrollValue"),console.log(e),e>700&&this.$store.commit("setShowIntroDetail",!1)}},unmounted(){document.removeEventListener("scroll",this.scrollEvents)}},M=C,z=(0,c.Z)(M,I,H,!1,null,"69e7bdd2",null),P=z.exports,j=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{height:"1em"},attrs:{id:"section-2"}}),e("b-container",{staticClass:"bv-example-row",staticStyle:{"line-height":"3em"}},[e("b-row",{staticStyle:{"margin-top":"0.5em"},attrs:{"align-h":"center"}},[e("b-col",{attrs:{id:"col"}},[e("button",{staticClass:"button",attrs:{name:"all"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("SEE ALL WORKS")])])],1),t.isMobile()?t._e():e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{attrs:{id:"col",cols:"1"}}),e("b-col",{attrs:{id:"col",cols:"10"}},[e("div",{staticClass:"hashButtons"},[e("button",{staticClass:"button",attrs:{name:"branding"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Branding")]),e("button",{staticClass:"button",attrs:{name:"digitalContent"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Digital Content")]),e("button",{staticClass:"button",attrs:{name:"packaging"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Packaging")])]),e("div",{staticClass:"hashButtons"},[e("button",{staticClass:"button",attrs:{name:"illustration"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Illustration")]),e("button",{staticClass:"button",attrs:{name:"artDirection"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Art Direction")]),e("button",{staticClass:"button",attrs:{name:"brandStrategy"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Brand Strategy")])]),e("div",{staticClass:"hashButtons"},[e("button",{staticClass:"button",attrs:{name:"photography"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Photography")]),e("button",{staticClass:"button",attrs:{name:"startup"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Startup")])])]),e("b-col",{attrs:{id:"col",cols:"1"}})],1),t.isMobile()?e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{staticStyle:{padding:"0px"},attrs:{id:"col",cols:"10"}},[e("button",{staticClass:"button",attrs:{name:"branding"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Branding")]),e("button",{staticClass:"button",attrs:{name:"digitalContent"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Digital Content")]),e("button",{staticClass:"button",attrs:{name:"packaging"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Packaging")]),e("button",{staticClass:"button",attrs:{name:"illustration"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Illustration")]),e("button",{staticClass:"button",attrs:{name:"artDirection"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Art Direction")]),e("button",{staticClass:"button",attrs:{name:"brandStrategy"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Brand Strategy")]),e("button",{staticClass:"button",attrs:{name:"photography"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Photography")]),e("button",{staticClass:"button",attrs:{name:"startup"},on:{click:function(e){return t.setHashTag(e.currentTarget.name)}}},[t._v("#Startup")])])],1):t._e()],1)],1)},D=[],W={name:"HashList",components:{},data(){return{window:{width:0,height:0}}},created(){window.addEventListener("resize",this.handleResize),this.handleResize()},computed:{},methods:{setHashTag(t){this.$store.commit("setHashTag",t)},handleResize(){this.window.width=window.innerWidth,this.window.height=window.innerHeight},isMobile(){return console.log("window.innerHeight is ",window.innerWidth),this.window.width<=900}}},O=W,R=(0,c.Z)(O,j,D,!1,null,"62c731d6",null),V=R.exports,E=function(){var t=this;t._self._c;return t._m(0)},L=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{"padding-bottom":"2em"}})])}],Z={name:"Header-vue",components:{},data(){return{}},created(){}},A=Z,$=(0,c.Z)(A,E,L,!1,null,null,null),B=$.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"block",width:"100%",height:"auto"}},[e("ContentDetail",{attrs:{propModalShow:t.modalShow}}),e("b-container",{staticStyle:{"margin-top":"1em"}},[e("b-row",{directives:[{name:"show",rawName:"v-show",value:"digitalContent"===t.getPackageHashTag||"all"===t.getPackageHashTag,expression:"getPackageHashTag === 'digitalContent' || getPackageHashTag === 'all'"}],attrs:{id:"row","align-h":"around"}},[e("b-col",{attrs:{cols:"12",md:"12","align-self":"center"}},[e("img",{attrs:{src:i(1263),alt:""}}),e("div",{staticStyle:{"text-align":"start"}},[t._v("#best #123")])])],1),e("b-row",{directives:[{name:"show",rawName:"v-show",value:"packaging"===t.getPackageHashTag||"all"===t.getPackageHashTag,expression:"getPackageHashTag === 'packaging' || getPackageHashTag === 'all'"}],attrs:{id:"row","align-h":"around"}},[e("b-col",{attrs:{id:"col",cols:"4","align-self":"start"}},[e("video",{attrs:{"webkit-playsinline":"",playsinline:"",loop:"",autoplay:"",muted:"",preload:"auto"},domProps:{muted:!0}},[e("source",{attrs:{src:i(57),type:"video/mp4"}})]),e("div",{staticStyle:{"text-align":"start"}},[t._v("#best #123")])]),e("b-col",{attrs:{cols:"4","align-self":"center"}},[e("img",{attrs:{src:t.getCosmeticImgSrc}}),e("div",{staticStyle:{"text-align":"start"}},[t._v("#best #123")])]),e("b-col",{attrs:{cols:"4","align-self":"center"}},[e("img",{attrs:{src:i(6329),alt:""}}),e("div",{staticStyle:{"text-align":"start"}},[t._v("#best #123")])])],1),e("b-row",{directives:[{name:"show",rawName:"v-show",value:"xpoiled"===t.getPackageHashTag||"all"===t.getPackageHashTag,expression:"getPackageHashTag === 'xpoiled' || getPackageHashTag === 'all'"}],attrs:{id:"row","align-h":"around"}},[e("b-col",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"my-modal",expression:"'my-modal'"}],attrs:{cols:"4","align-self":"start"},on:{click:function(e){t.modalShow=!t.modalShow}}},[e("img",{attrs:{src:i(5105),alt:""}}),e("div",{staticStyle:{"text-align":"start"}},[t._v("#best #123")])]),e("b-col",{attrs:{cols:"5","align-self":"center"}},[e("img",{attrs:{id:"logo",src:t.getXpoiledImgSrc}})])],1)],1),t._e(),e("div",{attrs:{id:"footer"}},[t._v(" Version : 1.0.6v"),e("br"),t._v(" Width: "+t._s(t.window.width)+" px"),e("br"),t._v(" Height: "+t._s(t.window.height)+" px ")])],1)},N=[],U=function(){var t=this,e=t._self._c;return e("div",[e("b-modal",{staticStyle:{"background-color":"black"},attrs:{"content-class":"modal-dialog3","hide-footer":"","hide-header":""},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[t._v(" Hello From My Modal! ")]),e("b-modal",{attrs:{"modal-class":"my-second-class"},scopedSlots:t._u([{key:"modal-header",fn:function(){return[t._v("Header")]},proxy:!0}])},[t._v(" Hello ")])],1)},F=[],K={name:"ContentDetail",components:{},props:{propModalShow:{type:Boolean,default:!1}},data(){return{}},created(){},computed:{modalShow(){return console.log("modalshow"),this.propModalShow}}},X=K,G=(0,c.Z)(X,U,F,!1,null,"dbdf4b2a",null),q=G.exports,J={name:"dummy-vue",components:{ContentDetail:q},data(){return{modalShow:!1,hashTag:this.$store.getters.getHashTag,deviceSize:window.innerWidth,window:{width:0,height:0},xpoiledImages:[{id:"1",image:"xpoiled/xpoiled.png"},{id:"2",image:"xpoiled/xpoiled_detail.png"}],cosmeticImages:[{id:"1",image:"cosmetic/cosmetic.jpg"},{id:"2",image:"cosmetic/cosmetic_detail.png"}],xpoiledImg:{index:0,xpoiledImgSrc:"xpoiled/xpoiled.png"},cosmeticImg:{index:0,cosmeticImgSrc:"cosmetic/cosmetic.jpg"}}},created(){window.addEventListener("resize",this.handleResize),this.handleResize(),setInterval((()=>{this.xpoiledImg.index===this.xpoiledImages.length&&(this.xpoiledImg.index=0),this.xpoiledImg.index++,this.cosmeticImg.index===this.cosmeticImages.length&&(this.cosmeticImg.index=0),this.cosmeticImg.index++,this.xpoiledImg.xpoiledImgSrc=this.xpoiledImages[this.xpoiledImg.index-1].image,this.cosmeticImg.cosmeticImgSrc=this.cosmeticImages[this.cosmeticImg.index-1].image}),1e3)},computed:{getPackageHashTag:function(){return this.$store.getters.getHashTag},getXpoiledImgSrc:function(){return i(5459)("./"+this.xpoiledImg.xpoiledImgSrc)},getCosmeticImgSrc:function(){return i(5459)("./"+this.cosmeticImg.cosmeticImgSrc)}},watch:{deviceSize:function(){console.log(window.innerHeight)}},methods:{handleResize(){this.window.width=window.innerWidth,this.window.height=window.innerHeight},isMobile(){return console.log("window.innerHeight is ",window.innerHeight),this.window.width<=900},logo_info(){for(let t=1;t<=this.images.length;t++)this.img_src="../assets/img/xpoiled.png"}},destroyed(){window.removeEventListener("resize",this.handleResize)}},Q=J,tt=(0,c.Z)(Q,Y,N,!1,null,null,null),et=tt.exports,it={name:"mainView",components:{Intro:T,IntroDetail:P,HashList:V,Header:B,Content:et},data(){return{}},created(){}},at=it,nt=(0,c.Z)(at,h,m,!1,null,null,null),ot=nt.exports;a["default"].use(g.ZP);const st=new g.ZP({mode:"history",scrollBehavior(){return{x:0,y:0}},routes:[{path:"/",component:ot}]});a["default"].use(n.ZP);const rt=new n.ZP.Store({state:{packageHashTag:"package",cosmeticHashTag:"cosmetic",hashTag:"",showIntroDetail:!1},getters:{getHashTag:function(t){return t.hashTag},getShowIntroDetail:function(t){return t.showIntroDetail}},mutations:{setShowIntroDetail:function(t,e){t.showIntroDetail=e},setHashTag:function(t,e){t.hashTag=e,console.log("state is ",t),console.log("payload is ",e)}},actions:{}});var lt=i(4359),ct=i(7244);i(7024);a["default"].use(lt.XG7),a["default"].use(ct.A7),a["default"].config.productionTip=!1,a["default"].use(n.ZP),new a["default"]({render:t=>t(u),router:st,store:rt}).$mount("#app")},5459:function(t,e,i){var a={"./2022voty-vertical-main-cover.mp4":57,"./cosmetic/cosmetic.jpg":9365,"./cosmetic/cosmetic_detail.png":6329,"./digitalContent/seventeenVoiceOftheYear2022.jpeg":1263,"./grain_background.png":2197,"./xpoiled/xpoiled.png":5105,"./xpoiled/xpoiled_detail.png":13};function n(t){var e=o(t);return i(e)}function o(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id=5459},57:function(t,e,i){"use strict";t.exports=i.p+"media/2022voty-vertical-main-cover.00c70569.mp4"},9365:function(t,e,i){"use strict";t.exports=i.p+"img/cosmetic.e922f605.jpg"},6329:function(t,e,i){"use strict";t.exports=i.p+"img/cosmetic_detail.57237232.png"},1263:function(t,e,i){"use strict";t.exports=i.p+"img/seventeenVoiceOftheYear2022.b872ca08.jpeg"},2197:function(t,e,i){"use strict";t.exports=i.p+"img/grain_background.545e83dc.png"},5105:function(t,e,i){"use strict";t.exports=i.p+"img/xpoiled.c8a841fb.png"},13:function(t,e,i){"use strict";t.exports=i.p+"img/xpoiled_detail.63ed399b.png"}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,o){if(!a){var s=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],o=t[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(i.O).every((function(t){return i.O[t](a[l])}))?a.splice(l--,1):(r=!1,o<s&&(s=o));if(r){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,n,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p=""}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,s=a[0],r=a[1],l=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(l)var d=l(i)}for(e&&e(a);c<s.length;c++)o=s[c],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(d)},a=self["webpackChunkyoora_portfolio"]=self["webpackChunkyoora_portfolio"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(7773)}));a=i.O(a)})();
//# sourceMappingURL=app.ad1a68ee.js.map