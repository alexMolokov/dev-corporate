webpackJsonp([21],{130:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(60),r=a.n(s),o=a(15),n=a.n(o),i=a(57),l=a.n(i),d=a(65),c=a.n(d),m=a(4),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t};e.default={name:"form-change-company-name",computed:p({},Object(m.d)({companyName:function(t){return t.user.name}})),mounted:function(){this.name=this.companyName},components:{"modal-window":r.a,"error-inform":l.a,"loading-inform":c.a},data:function(){return{id:"change-name",url:"/user/company/change",redirect:!1,password:"",name:"",type_input:"password"}},mixins:[n.a],locales:{ru:{Password:"Пароль",Company:"Компания",Next:"Далее","Company name has been changed.":"Название компании было изменено.","Change company name":"Изменить название компании"}},methods:p({},Object(m.c)(["setCompanyName"]),{togglePassword:function(t){this.type_input="password"==this.type_input_current?"text":"password"},validate:function(){var t=this,e={name:this.name,password:this.password};this.send(this.url,e,function(){t.setCompanyName({name:t.name})})}})}},131:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal-window",{staticClass:"in",staticStyle:{display:"block"},attrs:{id:"change-name",show:!0},on:{close:t.close}},[a("div",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{slot:"title"},slot:"title"},[t._v("Change company name")]),t._v(" "),a("loading-inform",{attrs:{state:t.state},on:{close:t.close}},[a("div",{staticClass:"window-center",attrs:{slot:"ok-message"},slot:"ok-message"},[a("div",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"complete-body"},[t._v("Company name has been changed.")]),t._v(" "),a("div",{staticClass:"button-close-ok"},[a("button",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"btn btn-green",attrs:{type:"button"},on:{click:t.close}},[t._v("Ok")])])]),t._v(" "),a("div",{attrs:{slot:"buttons"},slot:"buttons"})]),t._v(" "),a("form",{attrs:{url:t.url},on:{submit:function(t){t.preventDefault(),t.stopPropagation()}}},[a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group  top-10"},[a("label",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{for:"company"}},[t._v("Company")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("name"),expression:"errors.has('name')"}],staticClass:"help is-danger"},[t._v("*"+t._s(t.errors.first("name")))]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"form-control",class:{error:t.errors.has("name")},attrs:{id:"company",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group  top-10"},[a("label",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("password"),expression:"errors.has('password')"}],staticClass:"help is-danger"},[t._v("*"+t._s(t.errors.first("password")))]),t._v(" "),a("div",{staticClass:"input-group"},["checkbox"===t.type_input?a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{error:t.errors.has("password")},attrs:{name:"password",type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{change:function(e){var a=t.password,s=e.target,r=!!s.checked;if(Array.isArray(a)){var o=t._i(a,null);s.checked?o<0&&(t.password=a.concat([null])):o>-1&&(t.password=a.slice(0,o).concat(a.slice(o+1)))}else t.password=r}}}):"radio"===t.type_input?a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{error:t.errors.has("password")},attrs:{name:"password",type:"radio"},domProps:{checked:t._q(t.password,null)},on:{change:function(e){t.password=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{error:t.errors.has("password")},attrs:{name:"password",type:t.type_input},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("a",{staticClass:"input-group-addon",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.togglePassword("type_input")}}})])])])])]),t._v(" "),a("error-inform",{attrs:{err:t.err,state:t.state}}),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.validate}},[t._v("Next")])])],1)],1)},staticRenderFns:[]}},266:function(t,e,a){var s=a(3)(a(130),a(131),!1,null,null,null);t.exports=s.exports},57:function(t,e,a){var s=a(3)(a(58),a(59),!1,null,null,null);t.exports=s.exports},58:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(14);e.default={name:"error-inform",props:{state:{type:Number,default:s.a.START},err:{type:Object,default:function(){return{validation:[],common:[]}}}},data:function(){return{}},computed:{showError:function(){return(this.err.validation.length>0||this.err.common.length>0)&&this.state==s.a.ERROR}}}},59:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showError?a("div",{staticClass:"error-block"},[a("div",{staticClass:"alert alert-danger fade in"},[t._l(t.err.validation,function(e){return a("div",{staticClass:"top-10"},[t._v("\n             "+t._s(e.name)+" - "+t._s(e.description)+"\n         ")])}),t._v(" "),t._l(t.err.common,function(e){return a("div",{staticClass:"top-10"},[a("div",{staticClass:"top-10"},[t._v(t._s(e))])])})],2)]):t._e()},staticRenderFns:[]}},60:function(t,e,a){var s=a(3)(a(63),a(64),!1,function(t){a(61)},"data-v-790be6b8",null);t.exports=s.exports},61:function(t,e,a){var s=a(62);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(13)("50f81d3c",s,!0,{})},62:function(t,e,a){(t.exports=a(12)(!1)).push([t.i,".modal[data-v-790be6b8]{overflow:auto;overflow-y:scroll}",""])},63:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modal-window",props:{id:{type:String,required:!0},show:{type:Boolean,required:!1},wide:{type:Boolean,default:!1}},watch:{show:function(){this.show?($("body").addClass("dialog-open"),$("body").addClass("modal-open")):($("body").removeClass("dialog-open"),$("body").removeClass("modal-open"))}},methods:{close:function(t){var e=void 0!==t.srcElement?t.srcElement:t.target;"input"==e&&"radio"==e.type||(t.stopPropagation(),this.$emit("close"))},clickInside:function(t){var e=void 0!==t.srcElement?t.srcElement:t.target;"input"==e&&"radio"==e.type||t.stopPropagation()},bclose:function(){$("#"+this.id).trigger("click")}}}},64:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade modal-user",attrs:{tabindex:"-1",role:"dialog",id:t.id},on:{click:t.close}},[a("div",{staticClass:"modal-dialog",class:{"modal-dialog-wide":t.wide},attrs:{role:"document"},on:{click:t.clickInside}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.bclose}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h4",{staticClass:"modal-title"},[t._t("title",[t._v("Modal Title")])],2)]),t._v(" "),a("div",{staticClass:"modal-body"},[t._t("default")],2)])])])},staticRenderFns:[]}},65:function(t,e,a){var s=a(3)(a(66),a(67),!1,null,null,null);t.exports=s.exports},66:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(14);e.default={name:"loading-inform",props:{state:{type:Number,default:s.a.START}},data:function(){return{STATES:s.a}},locales:{ru:{"Loading...":"Отправляем запрос..."}},methods:{close:function(){this.$emit("close")}}}},67:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.state==t.STATES.LOADING?a("div",{staticClass:"loading-info"},[a("div",{staticClass:"window-center"},[a("div",[a("div",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"processing_text"},[t._v("Loading...")])])])]):t._e(),t._v(" "),t.state==t.STATES.ANSWER?a("div",{staticClass:"ok-message"},[a("div",{staticClass:"window-center"},[a("div",{staticClass:"complete-body"},[a("div",{staticClass:"complete-body_text"},[t._t("ok-message")],2)])]),t._v(" "),t._t("buttons",[a("div",{staticClass:"button-close"},[a("button",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"btn btn-green",attrs:{type:"button"},on:{click:t.close}},[t._v("Ok")])])])],2):t._e(),t._v(" "),t.state==t.STATES.REDIRECT?a("div",{staticClass:"ok-message"},[a("div",{staticClass:"window-center"},[a("div",{staticClass:"complete-body"},[a("div",{staticClass:"complete-body_text"},[t._t("ok-message-redirect")],2)])])]):t._e(),t._v(" "),t.state==t.STATES.RELOAD?a("div",{staticClass:"ok-message"},[a("div",{staticClass:"window-center"},[a("div",{staticClass:"complete-body"},[a("div",{staticClass:"complete-body_text"},[t._t("ok-message-reload")],2)])]),t._v(" "),t._t("buttons-reload")],2):t._e()])},staticRenderFns:[]}}});