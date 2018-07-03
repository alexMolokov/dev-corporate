webpackJsonp([5],{235:function(t,e,a){var r=a(236);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(13)("61802b22",r,!0,{})},236:function(t,e,a){(t.exports=a(12)(!1)).push([t.i,".header-ticket-info[data-v-f696c610]{padding:10px;border:1px solid #eee;border-radius:5px;background-color:#f5f5f5;text-align:center}.header-ticket-info>div[data-v-f696c610]{padding:0 10px}.header-ticket-info>div>div[data-v-f696c610]:first-child{font-size:18px;padding:10px 0}.header-ticket-info>div>div[data-v-f696c610]:last-child{background-color:#fff;border-radius:5px;border:1px solid #eee;font-size:14px;padding:6px 0}.header-ticket-buttons[data-v-f696c610]{padding:10px 0}.header-ticket-buttons a[data-v-f696c610]{min-width:120px;margin-right:10px}.warning[data-v-f696c610]{background-color:#f0ad4e}.articles pre[data-v-f696c610]{background-color:#fff;border:none;padding-left:0}.articles>div>div[data-v-f696c610]:first-child{background-color:#f5f5f5;border-left:1px solid #eee;border-right:1px solid #eee;border-top:1px solid #eee;font-size:15px;padding:6px;text-align:right}.articles .attacments a[data-v-f696c610]{display:inline-block;padding:0 10px 10px 0}.articles>div>div[data-v-f696c610]:last-child{background-color:#fff;border:1px solid #eee;font-size:15px;padding:15px;text-align:left}",""])},237:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(15),i=a.n(r),n=a(69);e.default={name:"ticket",props:{ticketNumber:{type:String}},mixins:[i.a],created:function(){var t=this;this.uploadInfo("/ticket/get/"+this.ticketNumber,{},function(e){t.ticket=e,t.loading=!1,t.currentArticle=t.ticket.articles[0].id})},components:{"user-menu":n,"form-add-article":function(){return a.e(13).then(a.bind(null,238))}},data:function(){return{showFormAddArticle:!1,loading:!0,currentArticle:"",ticket:{}}},methods:{changeArticle:function(t){this.currentArticle=t}},locales:{ru:{Ticket:"Тикет","Loading info...":"Загрузка информации",Back:"Назад",Reply:"Ответить"}}}},243:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ticket-page"}},[a("div",[a("h2",[a("span",{directives:[{name:"translate",rawName:"v-translate"}]},[t._v("Ticket")]),t._v("# "+t._s(t.ticketNumber))]),t._v(" "),t.loading?a("div",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"alert alert-warning fade in"},[t._v("Loading info...")]):t._e(),t._v(" "),t.loading?t._e():a("div",[a("section",{attrs:{id:"header-ticket"}},[a("div",[a("div",{staticClass:"mbb-20"},[a("h3",[t._v(t._s(t.ticket.theme))])]),t._v(" "),a("div",{staticClass:"flex-row header-ticket-info"},[a("div",[a("div",{directives:[{name:"translate",rawName:"v-translate"}]},[t._v("Date")]),t._v(" "),a("div",[t._v(t._s(t.ticket.date))])]),t._v(" "),a("div",[a("div",{directives:[{name:"translate",rawName:"v-translate"}]},[t._v("Department")]),t._v(" "),a("div",[t._v(t._s(t.ticket.department))])]),t._v(" "),a("div",[a("div",{directives:[{name:"translate",rawName:"v-translate"}]},[t._v("Priority")]),t._v(" "),a("div",[t._v("Normal")])]),t._v(" "),a("div",[a("div",{directives:[{name:"translate",rawName:"v-translate"}]},[t._v("Status")]),t._v(" "),a("div",[t._v(t._s(t.ticket.status))])])])])]),t._v(" "),a("div",{staticClass:"header-ticket-buttons top-20 mbb-10"},[a("router-link",{staticClass:"btn btn-blue",attrs:{to:{name:"tickets"}}},[a("span",{directives:[{name:"translate",rawName:"v-translate"}]},[t._v("Back")])]),t._v(" "),a("a",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"btn btn-blue btn-primary",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.showFormAddArticle=!0}}},[t._v("Reply")])],1),t._v(" "),t._l(t.ticket.articles,function(e){return a("div",{staticClass:"articles"},[a("div",{staticClass:"article"},[a("div",{staticStyle:{cursor:"pointer"},on:{click:function(a){t.changeArticle(e.id)}}},[t._v("\n                            "+t._s(e.date)+"  "),t.currentArticle!=e.id?a("span",{staticClass:"caret"}):t._e()]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentArticle==e.id,expression:"currentArticle == article.id"}]},[t._l(e.attachments,function(r){return e.attachments.length>0?a("div",{staticClass:"attachments"},[a("a",{attrs:{href:"/ticket/attachment/"+t.ticketNumber+"/"+e.id+"/"+r.filename,target:"_blank"}},[t._v(t._s(r.filename)+" ("+t._s(r.size)+")")])]):t._e()}),t._v(" "),a("div",{staticClass:"body"},[a("pre",[t._v(t._s(e.body)+" ")])])],2)])])}),t._v(" "),a("div",{staticClass:"header-ticket-buttons top-10"},[a("router-link",{staticClass:"btn btn-blue",attrs:{to:{name:"tickets"}}},[a("span",{directives:[{name:"translate",rawName:"v-translate"}]},[t._v("Back")])]),t._v(" "),a("a",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"btn btn-blue btn-primary",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.showFormAddArticle=!0}}},[t._v("Reply")])],1)],2)]),t._v(" "),t.showFormAddArticle?a("form-add-article",{attrs:{ticketNumber:t.ticketNumber},on:{close:function(e){t.showFormAddArticle=!1}}}):t._e()],1)},staticRenderFns:[]}},275:function(t,e,a){var r=a(3)(a(237),a(243),!1,function(t){a(235)},"data-v-f696c610",null);t.exports=r.exports},69:function(t,e,a){var r=a(3)(a(70),a(71),!1,null,null,null);t.exports=r.exports},70:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"userMenu",props:{},data:function(){return{checked:!1}},computed:{currentRoute:function(){return this.$route.name}},methods:{},locales:{ru:{"My Account":"Мой аккаунт",Tickets:"Тикеты",Documents:"Документы"}}}},71:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"partner-menu"},[a("input",{attrs:{id:"partner-menu__checkbox",type:"checkbox"},domProps:{checked:t.checked}}),t._v(" "),a("div",[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"partner-menu__item",class:{active:"userpage"==t.currentRoute}},[a("router-link",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{to:{name:"userpage"}}},[t._v("My Account")])],1),t._v(" "),a("div",{staticClass:"partner-menu__item",class:{active:"shop"==t.currentRoute}},[a("router-link",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{to:{name:"shop",params:{makeDeal:"new"}}}},[t._v("Order")])],1),t._v(" "),a("div",{staticClass:"partner-menu__item",class:{active:"download"==t.currentRoute}},[a("router-link",{attrs:{to:{name:"download"}}},[t._v("Download")])],1),t._v(" "),a("div",{staticClass:"partner-menu__item",class:{active:"tickets"==t.currentRoute}},[a("router-link",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{to:{name:"tickets"}}},[t._v("Tickets")])],1),t._v(" "),a("div",{staticClass:"partner-menu__item",class:{active:"documents"==t.currentRoute||"support_default"==t.currentRoute||"support_body"==t.currentRoute}},[a("router-link",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{to:{name:"documents"}}},[t._v("Documents")])],1)]),t._v(" "),a("label",{attrs:{for:"partner-menu__checkbox"}})])])},staticRenderFns:[]}}});