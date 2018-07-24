webpackJsonp([1],{164:function(o,t,e){var n=e(165);"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);e(14)("697ac573",n,!0,{})},165:function(o,t,e){(o.exports=e(13)(!1)).push([o.i,'.container.v-page{position:relative}#support-page{margin-top:-35px}@media (max-width:767px){#support-page .side-navigation-open-button{height:30px;width:30px;border-radius:3px;position:absolute;left:10px;top:30px;opacity:1;cursor:pointer;background:#f4f5f7 url("/images/icons/sidebar-open.svg") no-repeat 50%}#support-page .side-navigation-open-button:hover{background-color:#d2d5da}#support-page #support-menu-catalog{display:block;position:fixed;z-index:8;top:75px;left:-300px;transition:left .2s;background-color:#fff}#support-page #support-menu-catalog .close-support-menu{display:none;font-size:30px;font-weight:300;color:#ddd;text-align:right;padding:0 5px}#support-page #support-menu-catalog.opened{left:0;right:10px;bottom:0;min-width:300px;box-shadow:0 0 20px 0 hsla(0,0%,9%,.1);overflow:auto}#support-page #support-menu-catalog.opened .close-support-menu{display:block;cursor:pointer;margin-top:-15px}#support-page #support-menu-catalog.opened #accordeon{margin-top:-15px}#support-page #support-menu-catalog.opened ul li{line-height:30px}#support-page #document-support-body{padding-left:50px;position:relative}}@media (min-width:768px){#support-page .side-navigation-open-button{display:none}}#support-page .auto-cursor-target{display:none}#support-page h4{font-weight:600}#support-page table th{background-color:#f0f0f0}#support-page table pre{white-space:pre;border:none;background-color:#fff;font-size:12px}#support-page pre{font-size:16px;padding:10px}#support-page .alert-note{background:#fefbd7;border-color:#ffeaae}#support-page .alert-note pre{border:none;background-color:#fefbd7;white-space:pre-wrap}#support-page.flex-row>div{flex-grow:1;flex-basis:1px;padding:20px 20px 0}#support-page.flex-row>div:first-child{flex-grow:0;min-width:360px;border-right:2px solid #f5f5f5;padding:20px 20px 0 0;height:100%}#support-menu-catalog{width:300px;position:absolute;top:60px;left:0;bottom:0;padding:10px;border-right:2px solid #f5f5f5;z-index:6}#support-menu-catalog .close-support-menu{display:none}#support-menu-catalog a{padding:3px}#support-menu-catalog ul li{list-style-type:none;margin-left:10px;line-height:25px}#support-menu-catalog .fa{display:inline-block;font:normal normal normal 11px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#support-menu-catalog .fa-chevron-down:before{content:"\\F078"}#document-support-body{padding-left:330px;padding-top:10px}#document-support-body .support.article .alert-warning{color:#a94442;background-color:#f2dede;border-color:#ebccd1}#document-support-body p{margin:0 0 20px;text-align:left}#document-support-body div.panel.pdl{border:1px solid #ccc;border-radius:3px}#document-support-body div.panel.pdl.code{overflow:auto}#document-support-body div.panel.pdl pre{line-height:25px;background-color:#fff;border:none;border-radius:0}#document-support-body div.panel.pdl .codeContent .line{white-space:pre;padding:5px}#document-support-body div.panel.pdl .codeContent .line:first-child{padding-top:10px}#document-support-body div.panel.pdl .codeContent .line:last-child{padding-bottom:10px}#document-support-body div.panel.pdl .codeContent .line.comment{color:#008200!important}#document-support-body div.panel.pdl .panelHeader.pdl{border-bottom:1px solid #ccc;text-align:left;padding:5px 15px;background:#f5f5f5;overflow:hidden;position:relative;font-weight:700}#document-support-body ul.square li:before{content:"\\25A0";color:#00a0c8;font-size:15px;font-weight:700;display:block;line-height:30px}#document-support-body ul.square li{list-style:none;margin-left:20px;display:flex}#document-support-body ul.square li>span{display:block;margin:0 0 0 15px;line-height:30px}',""])},166:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(4),i=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},a=e(167),p=e(72),r=e(15);t.default={name:"supportHtml",created:function(){var o=this;if(this.edition=this.$route.params.edition,this.os=this.$route.params.os,this.getCatalog.has(this.getCatalogKey())){this.isCatalogLoad=!0;var t=this.getCatalog.get(this.getCatalogKey());return this.menu=t.catalog,this.body=t.body,void(this.doc_id=t.id)}var e="/support/"+this.lang+"/"+this.edition+"/"+this.os+"/catalog";this.uploadInfo(e,{},function(t){o.isCatalogLoad=!0,o.menu=t.catalog,o.body=t.body,o.doc_id=t.id,o.saveCatalog({key:o.getCatalogKey(),data:t}),o.saveDoc({key:o.getDocKey(o.doc_id),data:o.body})})},data:function(){return{isCatalogLoad:!1,menu:"",body:"",doc_id:"",edition:"",os:"",opened:!1}},computed:i({},Object(n.d)(["lang"]),Object(n.b)("support",["getCatalog","getDoc"])),mixins:[r],components:{"tree-menu":a,"loading-page":p},methods:i({},Object(n.c)("support",["saveCatalog","saveDoc"]),{getCatalogKey:function(){return this.lang+"."+this.edition+"."+this.os},getDocKey:function(o){return this.lang+"."+this.edition+"."+this.os+"."+o},clickMenu:function(o){var t=this;if(this.getDoc.has(this.getDocKey(o))){var e=this.getDoc.get(this.getDocKey(o));return this.doc_id=o,void(this.body=e)}this.body="";var n="/support/"+this.lang+"/"+this.edition+"/"+this.os+"/body/"+o;this.uploadInfo(n,{},function(e){t.body=e,t.doc_id=o,t.saveDoc({key:t.getDocKey(o),data:e})})}})}},167:function(o,t,e){var n=e(3)(e(170),e(171),!1,function(o){e(168)},"data-v-5130d9c9",null);o.exports=n.exports},168:function(o,t,e){var n=e(169);"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);e(14)("4c7bc87e",n,!0,{})},169:function(o,t,e){(o.exports=e(13)(!1)).push([o.i,".selected[data-v-5130d9c9]{font-weight:800}.glyphicon-chevron-down[data-v-5130d9c9]{font-size:10px;font-weight:400;color:#888;transform:rotate(270deg)}.open .glyphicon-chevron-down[data-v-5130d9c9]{transform:rotate(0deg)}",""])},170:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"tree-menu",props:{model:Object,doc_id:Number},data:function(){return{open:!1}},computed:{isFolder:function(){return this.model.children&&this.model.children.length}},methods:{clickMenu:function(o){this.$emit("clickmenu",o)},toggle:function(o){this.$parent.$emit("clickmenu",o),this.isFolder&&(this.open=!this.open)}}}},171:function(o,t){o.exports={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("span",[o.model.root?o._e():e("li",{class:{open:o.open},staticStyle:{cursor:"pointer"},on:{click:function(t){o.toggle(o.model.id)}}},[o.isFolder?e("span",[e("span",{staticClass:"glyphicon glyphicon-chevron-down"})]):o._e(),o._v(" "),e("a",{class:{selected:o.doc_id==o.model.id},attrs:{href:"#"},on:{click:function(t){t.preventDefault(),t.stopPropagation(),o.toggle(o.model.id)}}},[o._v(o._s(o.model.name))]),o._v(" "),o.isFolder?e("ul",{directives:[{name:"show",rawName:"v-show",value:o.open,expression:"open"}]},o._l(o.model.children,function(t,n){return e("tree-menu",{key:n,staticClass:"item",attrs:{doc_id:o.doc_id,model:t},on:{clickmenu:o.clickMenu}})})):o._e()]),o._v(" "),o.model.root?e("span",o._l(o.model.children,function(t,n){return e("tree-menu",{key:n,staticClass:"item",attrs:{doc_id:o.doc_id,model:t},on:{clickmenu:o.clickMenu}})})):o._e()])},staticRenderFns:[]}},172:function(o,t){o.exports={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{attrs:{id:"support-page"}},[o.isCatalogLoad?e("div",[""!=o.menu?e("div",{class:{opened:o.opened},attrs:{id:"support-menu-catalog"}},[e("div",{staticClass:"close-support-menu",on:{click:function(t){o.opened=!1}}},[o._v("×")]),o._v(" "),e("ul",{attrs:{id:"accordeon"}},[e("tree-menu",{staticClass:"item",attrs:{model:o.menu,doc_id:o.doc_id},on:{clickmenu:o.clickMenu}})],1)]):o._e(),o._v(" "),e("div",{attrs:{id:"document-support-body"}},[e("div",{staticClass:"side-navigation-open-button",on:{click:function(t){o.opened=!o.opened}}}),o._v(" "),""==o.body?e("div",{staticClass:"top-30"},[e("loading-page")],1):e("div",{domProps:{innerHTML:o._s(o.body)}})])]):e("div",{staticClass:"top-60"},[e("loading-page")],1)])},staticRenderFns:[]}},281:function(o,t,e){var n=e(3)(e(166),e(172),!1,function(o){e(164)},null,null);o.exports=n.exports},72:function(o,t,e){var n=e(3)(e(73),e(74),!1,null,null,null);o.exports=n.exports},73:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"loadingPage",props:{},data:function(){return{}},methods:{},locales:{ru:{"Loading info...":"Загрузка информации"}}}},74:function(o,t){o.exports={render:function(){var o=this.$createElement;return(this._self._c||o)("div",{staticClass:"alert alert-warning fade in"},[this._t("loading",[this._v("Loading info...")])],2)},staticRenderFns:[]}}});