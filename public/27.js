webpackJsonp([27],{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("06a5d00a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7264ebb0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Support.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7264ebb0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Support.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.container.v-page {\n  position: relative;\n}\n#support-page {\n  margin-top: -35px;\n}\n#support-page #search-section {\n    margin: 0 auto;\n    /*max-width: 660px;*/\n}\n#support-page #search-section #query {\n      border: 0;\n      border-radius: 2px;\n      display: block;\n      font-size: 12px;\n      line-height: 15px;\n      padding: 13px 55px 12px 15px;\n      margin: 45px 0;\n      width: 100%;\n      background-color: #f5f5f5;\n}\n#support-page #search-section .search {\n      position: relative;\n}\n#support-page #search-section .search input[type=image] {\n        position: absolute;\n        right: 20px;\n        top: 15px;\n        width: 14px;\n        height: 14px;\n}\n@media (max-width: 767px) {\n#support-page .side-navigation-open-button {\n      height: 30px;\n      width: 30px;\n      border-radius: 3px;\n      position: absolute;\n      left: 10px;\n      top: 30px;\n      opacity: 1;\n      cursor: pointer;\n      background: #F4F5F7 url(\"/images/icons/sidebar-open.svg\") no-repeat center;\n}\n#support-page .side-navigation-open-button:hover {\n        background-color: #D2D5DA;\n}\n#support-page #support-menu-catalog {\n      display: block;\n      position: fixed;\n      z-index: 8;\n      top: 75px;\n      left: -300px;\n      transition: left .2s;\n      background-color: #fff;\n}\n#support-page #support-menu-catalog .close-support-menu {\n        display: none;\n        font-size: 30px;\n        font-weight: 300;\n        color: #ddd;\n        text-align: right;\n        padding: 0 5px;\n}\n#support-page #support-menu-catalog.opened {\n        left: 0;\n        right: 10px;\n        bottom: 0;\n        min-width: 300px;\n        box-shadow: 0 0 20px 0 rgba(22, 22, 22, 0.1);\n        overflow: auto;\n}\n#support-page #support-menu-catalog.opened .close-support-menu {\n          display: block;\n          cursor: pointer;\n          margin-top: -15px;\n}\n#support-page #support-menu-catalog.opened #accordeon {\n          margin-top: -15px;\n}\n#support-page #support-menu-catalog.opened ul li {\n          line-height: 30px;\n}\n#support-page #document-support-body {\n      padding-left: 50px;\n      position: relative;\n}\n}\n@media (min-width: 768px) {\n#support-page .side-navigation-open-button {\n      display: none;\n}\n}\n#support-page .auto-cursor-target {\n    display: none;\n}\n#support-page h4 {\n    font-weight: 600;\n}\n#support-page table th {\n    background-color: #f0f0f0;\n}\n#support-page table pre {\n    white-space: pre;\n    border: none;\n    background-color: #fff;\n    font-size: 12px;\n}\n#support-page pre {\n    font-size: 16px;\n    padding: 10px;\n}\n#support-page .alert-note {\n    background: #FEFBD7;\n    border-color: #ffeaae;\n}\n#support-page .alert-note pre {\n      border: none;\n      background-color: #FEFBD7;\n      white-space: pre-wrap;\n}\n#support-page.flex-row > div {\n    flex-grow: 1;\n    flex-basis: 1px;\n    padding: 20px 20px 0 20px;\n}\n#support-page.flex-row > div:first-child {\n      flex-grow: 0;\n      min-width: 360px;\n      border-right: 2px solid #f5f5f5;\n      padding: 20px 20px 0 0;\n      height: 100%;\n}\n#support-menu-catalog {\n  width: 300px;\n  position: absolute;\n  top: 60px;\n  left: 0;\n  bottom: 0;\n  padding: 10px;\n  border-right: 2px solid #f5f5f5;\n  z-index: 6;\n}\n#support-menu-catalog .close-support-menu {\n    display: none;\n}\n#support-menu-catalog a {\n    padding: 3px;\n}\n#support-menu-catalog ul li {\n    list-style-type: none;\n    margin-left: 10px;\n    line-height: 25px;\n}\n#support-menu-catalog .fa {\n    display: inline-block;\n    font: normal normal normal 11px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n#support-menu-catalog .fa-chevron-down:before {\n    content: \"\\F078\";\n}\n#document-support-body {\n  padding-left: 330px;\n  padding-top: 10px;\n}\n#document-support-body .support.article .alert-warning {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1;\n}\n#document-support-body p {\n    margin: 0 0 20px;\n    text-align: left;\n}\n#document-support-body div.panel.pdl {\n    border: 1px solid #ccc;\n    border-radius: 3px;\n}\n#document-support-body div.panel.pdl.code {\n      overflow: auto;\n}\n#document-support-body div.panel.pdl pre {\n      line-height: 25px;\n      background-color: #fff;\n      border: none;\n      border-radius: 0px;\n}\n#document-support-body div.panel.pdl .codeContent .line {\n      white-space: pre;\n      padding: 5px;\n}\n#document-support-body div.panel.pdl .codeContent .line:first-child {\n        padding-top: 10px;\n}\n#document-support-body div.panel.pdl .codeContent .line:last-child {\n        padding-bottom: 10px;\n}\n#document-support-body div.panel.pdl .codeContent .line.comment {\n        color: #008200 !important;\n}\n#document-support-body div.panel.pdl .panelHeader.pdl {\n      border-bottom: 1px solid #ccc;\n      text-align: left;\n      padding: 5px 15px;\n      background: #f5f5f5;\n      overflow: hidden;\n      position: relative;\n      font-weight: bold;\n}\n#document-support-body ul.square li:before {\n    content: \"\\25A0\";\n    color: #00a0c8;\n    font-size: 15px;\n    font-weight: 700;\n    display: block;\n    line-height: 30px;\n}\n#document-support-body ul.square li {\n    list-style: none;\n    margin-left: 20px;\n    display: flex;\n}\n#document-support-body ul.square li > span {\n      display: block;\n      margin: 0 0 0 15px;\n      line-height: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//const userMenu = require('../components/userMenu.vue');

var treeMenu = __webpack_require__(186);
var loadingPage = __webpack_require__(91);

var ajaxform = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'supportHtml',
    created: function created() {
        var _this = this;

        this.edition = this.$route.params.edition;
        this.os = this.$route.params.os;

        if (this.getCatalog.has(this.getCatalogKey())) {
            this.isCatalogLoad = true;
            var data = this.getCatalog.get(this.getCatalogKey());
            this.menu = data["catalog"];
            this.body = data["body"];
            this.doc_id = data["id"];
            return;
        }

        var path = '/support/' + this.lang + '/' + this.edition + '/' + this.os + '/catalog';
        this.uploadInfo(path, {}, function (data) {
            _this.isCatalogLoad = true;
            _this.menu = data["catalog"];
            _this.body = data["body"];
            _this.doc_id = data["id"];
            _this.saveCatalog({ "key": _this.getCatalogKey(), "data": data });
            _this.saveDoc({ "key": _this.getDocKey(_this.doc_id), "data": _this.body });
        });
    },
    data: function data() {
        return {
            isCatalogLoad: false,
            menu: "",
            body: "",
            doc_id: "",
            edition: "",
            os: "",
            opened: false,

            query: "",
            search: {
                allowed: true,
                showResult: false,
                result: {}
            }

        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])(["lang"]), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])("support", ["getCatalog", "getDoc"])),
    mixins: [ajaxform],

    components: {
        'tree-menu': treeMenu,
        "loading-page": loadingPage

    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapMutations */])("support", ["saveCatalog", "saveDoc"]), {
        getCatalogKey: function getCatalogKey() {
            return this.lang + '.' + this.edition + '.' + this.os;
        },
        getDocKey: function getDocKey(id) {
            return this.lang + '.' + this.edition + '.' + this.os + "." + id;
        },
        clickMenu: function clickMenu(id) {
            var _this2 = this;

            if (this.getDoc.has(this.getDocKey(id))) {
                var data = this.getDoc.get(this.getDocKey(id));
                this.doc_id = id;
                this.body = data;
                return;
            }

            this.body = "";
            var path = '/support/' + this.lang + '/' + this.edition + '/' + this.os + '/body/' + id;
            this.uploadInfo(path, {}, function (data) {
                _this2.body = data;
                _this2.doc_id = id;
                _this2.saveDoc({ "key": _this2.getDocKey(id), "data": data });
            });
        },

        searchQuery: function searchQuery() {
            if (query.trim() == "") {
                alert(this.t("Please enter query"));
                return;
            }
        }

    }),
    locales: {
        ru: {
            "Please enter query": "Пожалуйста введите запрос"
        }
    }
});

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(187)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(189)
/* template */
var __vue_template__ = __webpack_require__(190)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-750a79f4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\treeMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-750a79f4", Component.options)
  } else {
    hotAPI.reload("data-v-750a79f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("54534f8c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-750a79f4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./treeMenu.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-750a79f4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./treeMenu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.selected[data-v-750a79f4] {\n  font-weight: 800;\n}\n.glyphicon-chevron-down[data-v-750a79f4] {\n  font-size: 10px;\n  font-weight: 400;\n  color: #888;\n  transform: rotate(270deg);\n}\n.open .glyphicon-chevron-down[data-v-750a79f4] {\n  transform: rotate(0deg);\n}\n", ""]);

// exports


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//const userMenu = require('../components/userMenu.vue');

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'tree-menu',
    props: {
        model: Object,
        doc_id: Number
    },
    data: function data() {
        return {
            open: false

        };
    },
    computed: {
        isFolder: function isFolder() {
            return this.model.children && this.model.children.length;
        }
    },
    methods: {
        clickMenu: function clickMenu(id) {
            this.$emit('clickmenu', id);
        },
        toggle: function toggle(id) {
            this.$parent.$emit('clickmenu', id);
            if (this.isFolder) {
                this.open = !this.open;
            }
        }

    }
});

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    !_vm.model.root
      ? _c(
          "li",
          {
            class: { open: _vm.open },
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                _vm.toggle(_vm.model.id)
              }
            }
          },
          [
            _vm.isFolder
              ? _c("span", [
                  _c("span", {
                    staticClass: "glyphicon glyphicon-chevron-down"
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "a",
              {
                class: { selected: _vm.doc_id == _vm.model.id },
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    $event.stopPropagation()
                    _vm.toggle(_vm.model.id)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.model.name))]
            ),
            _vm._v(" "),
            _vm.isFolder
              ? _c(
                  "ul",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.open,
                        expression: "open"
                      }
                    ]
                  },
                  _vm._l(_vm.model.children, function(model, index) {
                    return _c("tree-menu", {
                      key: index,
                      staticClass: "item",
                      attrs: { doc_id: _vm.doc_id, model: model },
                      on: { clickmenu: _vm.clickMenu }
                    })
                  })
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.model.root
      ? _c(
          "span",
          _vm._l(_vm.model.children, function(model, index) {
            return _c("tree-menu", {
              key: index,
              staticClass: "item",
              attrs: { doc_id: _vm.doc_id, model: model },
              on: { clickmenu: _vm.clickMenu }
            })
          })
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-750a79f4", module.exports)
  }
}

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.search.showResult,
            expression: "!search.showResult"
          }
        ],
        attrs: { id: "support-page" }
      },
      [
        _vm.isCatalogLoad
          ? _c("div", [
              _vm.menu != ""
                ? _c(
                    "div",
                    {
                      class: { opened: _vm.opened },
                      attrs: { id: "support-menu-catalog" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "close-support-menu",
                          on: {
                            click: function($event) {
                              _vm.opened = false
                            }
                          }
                        },
                        [_vm._v("×")]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { attrs: { id: "accordeon" } },
                        [
                          _c("tree-menu", {
                            staticClass: "item",
                            attrs: { model: _vm.menu, doc_id: _vm.doc_id },
                            on: { clickmenu: _vm.clickMenu }
                          })
                        ],
                        1
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { attrs: { id: "document-support-body" } }, [
                _c("div", {
                  staticClass: "side-navigation-open-button",
                  on: {
                    click: function($event) {
                      _vm.opened = !_vm.opened
                    }
                  }
                }),
                _vm._v(" "),
                _vm.body == ""
                  ? _c(
                      "div",
                      { staticClass: "top-30" },
                      [_c("loading-page")],
                      1
                    )
                  : _c("div", [
                      _c("div", { domProps: { innerHTML: _vm._s(_vm.body) } }),
                      _vm._v(" "),
                      _vm.search.allowed
                        ? _c("div", [
                            _c("section", { attrs: { id: "search-section" } }, [
                              _c(
                                "form",
                                {
                                  staticClass: "search",
                                  attrs: { role: "search" },
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      $event.stopPropagation()
                                      return _vm.searchQuery($event)
                                    }
                                  }
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.query,
                                        expression: "query"
                                      }
                                    ],
                                    staticClass: "ui-autocomplete-input",
                                    attrs: {
                                      id: "query",
                                      name: "query",
                                      placeholder: "SEARCH",
                                      autocomplete: "off",
                                      value: "",
                                      type: "search"
                                    },
                                    domProps: { value: _vm.query },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.query = $event.target.value
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("input", {
                                    attrs: {
                                      src:
                                        "/static/common/img/icons/icon-search.png",
                                      width: "14",
                                      height: "14",
                                      type: "image"
                                    }
                                  })
                                ]
                              )
                            ])
                          ])
                        : _vm._e()
                    ])
              ])
            ])
          : _c("div", { staticClass: "top-60" }, [_c("loading-page")], 1)
      ]
    ),
    _vm._v(" "),
    _c("div", {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.search.showResult,
          expression: "search.showResult"
        }
      ],
      attrs: { id: "support-search" }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7264ebb0", module.exports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(183)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(185)
/* template */
var __vue_template__ = __webpack_require__(191)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\Support.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7264ebb0", Component.options)
  } else {
    hotAPI.reload("data-v-7264ebb0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(92)
/* template */
var __vue_template__ = __webpack_require__(93)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\loadingPage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-356dd2e4", Component.options)
  } else {
    hotAPI.reload("data-v-356dd2e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'loadingPage',
    props: {},
    data: function data() {
        return {};
    },


    methods: {},
    locales: {
        ru: {
            "Loading info...": "Загрузка информации"
        }
    }
});

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "alert alert-warning fade in" },
    [_vm._t("loading", [_vm._v("Loading info...")])],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-356dd2e4", module.exports)
  }
}

/***/ })

});