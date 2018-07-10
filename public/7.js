webpackJsonp([7],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("2c96f3c9", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2259f451\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Documents.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2259f451\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Documents.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n.soon[data-v-2259f451] {\n  font-size: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_shop_action_const__ = __webpack_require__(16);
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
//
//
//
//
//
//



var ajaxform = __webpack_require__(15);
var loadingPage = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'documents',
    components: {
        "loading-page": loadingPage
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])("servers", ["serverTypes"]), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])(["lang"]), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])("support", ["getConfig"]), {
        hasCluster: function hasCluster() {
            return this.serverTypes[__WEBPACK_IMPORTED_MODULE_1__classes_shop_action_const__["b" /* EDITIONS */].CLUSTER];
        },
        hasStandalone: function hasStandalone() {
            return this.serverTypes[__WEBPACK_IMPORTED_MODULE_1__classes_shop_action_const__["b" /* EDITIONS */].STANDALONE];
        }

    }),
    mixins: [ajaxform],
    created: function created() {
        var _this = this;

        if (this.getConfig == null) {
            this.uploadInfo("/support/config", {}, function (data) {
                _this.setConfig(data);
                _this.isLoaded = true;
            });
        } else {
            this.isLoaded = true;
        }
    },
    data: function data() {
        return {

            standalone: __WEBPACK_IMPORTED_MODULE_1__classes_shop_action_const__["b" /* EDITIONS */].STANDALONE,
            cluster: __WEBPACK_IMPORTED_MODULE_1__classes_shop_action_const__["b" /* EDITIONS */].CLUSTER,
            windows: __WEBPACK_IMPORTED_MODULE_1__classes_shop_action_const__["c" /* OS */].WINDOWS,
            linux: __WEBPACK_IMPORTED_MODULE_1__classes_shop_action_const__["c" /* OS */].LINUX,
            isLoaded: false,
            edition: "",
            os: ""
        };
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapMutations */])("support", ["setConfig"]), {
        getType: function getType(edition, os) {
            return this.getConfig[edition][os][this.lang]["type"];
        },
        loadSupport: function loadSupport(edition, os) {

            this.edition = edition;
            this.os = os;

            var type = this.getType(edition, os);
            if (type == 'soon') {
                alert(this.t('Coming soon!'));
                return;
            } else if (type == 'file') {
                var form = document.getElementById("downloadSupport");
                form.action = '/support/' + this.lang + '/' + edition + '/' + os + '/file';
                form.submit();
                return;
            } else if (type == 'html') {
                var obj = { name: 'supportHtml', params: { edition: this.edition, os: this.os } };
                this.$router.push(obj);
                return;

                //
            }
        },
        isSoon: function isSoon(edition, os) {
            var type = this.getType(edition, os);
            return type == 'soon' || type == "";
        }
    }),

    locales: {
        ru: {

            'Coming soon!': 'Скоро'
        }
    }

});

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "user-documents-page" } }, [
    !_vm.isLoaded ? _c("div", [_c("loading-page")], 1) : _vm._e(),
    _vm._v(" "),
    _vm.isLoaded
      ? _c("div", [
          _vm.hasStandalone
            ? _c("div", [
                _c("h2", [_vm._v("Windows")]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          _vm.loadSupport(_vm.standalone, _vm.windows)
                        }
                      }
                    },
                    [_vm._v("VIPole Enterprise, Standalone edition")]
                  ),
                  _vm._v(" "),
                  _vm.isSoon(_vm.standalone, _vm.windows)
                    ? _c(
                        "span",
                        {
                          directives: [
                            { name: "translate", rawName: "v-translate" }
                          ],
                          staticClass: "soon"
                        },
                        [_vm._v("Coming soon!")]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("h2", [_vm._v("Linux")]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          _vm.loadSupport(_vm.standalone, _vm.linux)
                        }
                      }
                    },
                    [_vm._v("VIPole Enterprise, Standalone edition")]
                  ),
                  _vm._v(" "),
                  _vm.isSoon(_vm.standalone, _vm.linux)
                    ? _c(
                        "span",
                        {
                          directives: [
                            { name: "translate", rawName: "v-translate" }
                          ],
                          staticClass: "soon"
                        },
                        [_vm._v("Coming soon!")]
                      )
                    : _vm._e()
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.hasCluster
            ? _c("div", [
                _c("h2", [_vm._v("Windows")]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          _vm.loadSupport(_vm.cluster, _vm.windows)
                        }
                      }
                    },
                    [_vm._v("VIPole Enterprise, Cluster edition")]
                  ),
                  _vm._v(" "),
                  _vm.isSoon(_vm.cluster, _vm.windows)
                    ? _c(
                        "span",
                        {
                          directives: [
                            { name: "translate", rawName: "v-translate" }
                          ],
                          staticClass: "soon"
                        },
                        [_vm._v("Coming soon!")]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("h2", [_vm._v("Linux")]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          _vm.loadSupport(_vm.cluster, _vm.linux)
                        }
                      }
                    },
                    [_vm._v("VIPole Enterprise, Cluster edition")]
                  ),
                  _vm._v(" "),
                  _vm.isSoon(_vm.cluster, _vm.linux)
                    ? _c(
                        "span",
                        {
                          directives: [
                            { name: "translate", rawName: "v-translate" }
                          ],
                          staticClass: "soon"
                        },
                        [_vm._v("Coming soon!")]
                      )
                    : _vm._e()
                ])
              ])
            : _vm._e()
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("form", {
      attrs: { method: "post", id: "downloadSupport", action: "/support" }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2259f451", module.exports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(178)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(180)
/* template */
var __vue_template__ = __webpack_require__(181)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2259f451"
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
Component.options.__file = "resources\\assets\\js\\pages\\Documents.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2259f451", Component.options)
  } else {
    hotAPI.reload("data-v-2259f451", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 90:
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
    {
      directives: [{ name: "translate", rawName: "v-translate" }],
      staticClass: "alert alert-warning fade in"
    },
    [_vm._v("Loading info...")]
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