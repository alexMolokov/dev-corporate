webpackJsonp([7],{147:function(t,e,n){var o=n(148);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(13)("27c3b49a",o,!0,{})},148:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,".soon[data-v-2d10d767]{font-size:12px}",""])},149:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),s=n(16),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=n(15),r=n(74);e.default={name:"documents",components:{"loading-page":r},computed:a({},Object(o.d)("servers",["serverTypes"]),Object(o.d)(["lang"]),Object(o.b)("support",["getConfig"]),{hasCluster:function(){return this.serverTypes[s.b.CLUSTER]},hasStandalone:function(){return this.serverTypes[s.b.STANDALONE]}}),mixins:[i],created:function(){var t=this;null==this.getConfig?this.uploadInfo("/support/config",{},function(e){t.setConfig(e),t.isLoaded=!0}):this.isLoaded=!0},data:function(){return{standalone:s.b.STANDALONE,cluster:s.b.CLUSTER,windows:s.c.WINDOWS,linux:s.c.LINUX,isLoaded:!1,edition:"",os:""}},methods:a({},Object(o.c)("support",["setConfig"]),{getType:function(t,e){return this.getConfig[t][e][this.lang].type},loadSupport:function(t,e){this.edition=t,this.os=e;var n=this.getType(t,e);if("soon"!=n){if("file"==n){var o=document.getElementById("downloadSupport");return o.action="/support/"+this.lang+"/"+t+"/"+e+"/file",void o.submit()}if("html"!=n);else{var s={name:"supportHtml",params:{edition:this.edition,os:this.os}};this.$router.push(s)}}else alert(this.t("Coming soon!"))},isSoon:function(t,e){var n=this.getType(t,e);return"soon"==n||""==n}}),locales:{ru:{"Coming soon!":"Скоро"}}}},150:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-documents-page"}},[t.isLoaded?t._e():n("div",[n("loading-page")],1),t._v(" "),t.isLoaded?n("div",[t.hasStandalone?n("div",[n("h2",[t._v("Windows")]),t._v(" "),n("div",[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.loadSupport(t.standalone,t.windows)}}},[t._v("VIPole Enterprise, Standalone edition")]),t._v(" "),t.isSoon(t.standalone,t.windows)?n("span",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"soon"},[t._v("Coming soon!")]):t._e()]),t._v(" "),n("h2",[t._v("Linux")]),t._v(" "),n("div",[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.loadSupport(t.standalone,t.linux)}}},[t._v("VIPole Enterprise, Standalone edition")]),t._v(" "),t.isSoon(t.standalone,t.linux)?n("span",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"soon"},[t._v("Coming soon!")]):t._e()])]):t._e(),t._v(" "),t.hasCluster?n("div",[n("h2",[t._v("Windows")]),t._v(" "),n("div",[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.loadSupport(t.cluster,t.windows)}}},[t._v("VIPole Enterprise, Cluster edition")]),t._v(" "),t.isSoon(t.cluster,t.windows)?n("span",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"soon"},[t._v("Coming soon!")]):t._e()]),t._v(" "),n("h2",[t._v("Linux")]),t._v(" "),n("div",[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.loadSupport(t.cluster,t.linux)}}},[t._v("VIPole Enterprise, Cluster edition")]),t._v(" "),t.isSoon(t.cluster,t.linux)?n("span",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"soon"},[t._v("Coming soon!")]):t._e()])]):t._e()]):t._e(),t._v(" "),n("form",{attrs:{method:"post",id:"downloadSupport",action:"/support"}})])},staticRenderFns:[]}},272:function(t,e,n){var o=n(3)(n(149),n(150),!1,function(t){n(147)},"data-v-2d10d767",null);t.exports=o.exports},74:function(t,e,n){var o=n(3)(n(80),n(81),!1,null,null,null);t.exports=o.exports},80:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loadingPage",props:{},data:function(){return{}},methods:{},locales:{ru:{"Loading info...":"Загрузка информации"}}}},81:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"alert alert-warning fade in"},[this._v("Loading info...")])},staticRenderFns:[]}}});