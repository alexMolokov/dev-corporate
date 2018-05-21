webpackJsonp([7],{

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(88)
/* template */
var __vue_template__ = __webpack_require__(89)
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
Component.options.__file = "resources\\assets\\js\\pages\\ForgotPassword.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32f9f015", Component.options)
  } else {
    hotAPI.reload("data-v-32f9f015", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(63)
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources\\assets\\js\\mixins\\ajax-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a6e2e06", Component.options)
  } else {
    hotAPI.reload("data-v-5a6e2e06", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ajaxform',
    props: {
        show: { type: Boolean, default: false },
        lang: { type: String, default: 'en' }
    },
    data: function data() {
        return {
            id: '',
            args: {},
            err: { validation: [], common: [] },
            redirect: false
        };
    },

    locales: {
        ru: {
            'Internal Server Error': 'Ошибка сервера. Попробуйте позднее.'
        }
    },
    methods: {
        validate: function validate() {
            var $result = this.$validator.validateAll();

            console.log($result);
            this.$validator.validateAll().then(function (result) {
                if (result) {
                    console.log("ok");
                }
            }).catch(function () {
                console.log("error");
            });
        }

    }

});

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'login',
    data: function data() {
        return {
            url: "/login",
            search: null
        };
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue___default.a],
    methods: {}

});

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-page" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "clearfix", attrs: { id: "sign_in" } }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { autocomplete: "off", url: _vm.url },
            on: {
              submit: function($event) {
                $event.preventDefault()
                $event.stopPropagation()
              }
            }
          },
          [
            _c("div", { staticClass: "reg-body" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "login" } }, [
                  _vm._v("Login or Email")
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("search"),
                        expression: "errors.has('search')"
                      }
                    ],
                    staticClass: "help is-danger"
                  },
                  [_vm._v("*" + _vm._s(_vm.errors.first("search")))]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search,
                      expression: "search"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|min_value:5",
                      expression: "'required|min_value:5'"
                    }
                  ],
                  staticClass: "form-control input-alg readonly",
                  class: { error: _vm.errors.has("search") },
                  attrs: {
                    type: "text",
                    id: "login",
                    name: "search",
                    placeholder: ""
                  },
                  domProps: { value: _vm.search },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.search = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "reg-left" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-lg",
                  attrs: { type: "submit" },
                  on: { click: _vm.validate }
                },
                [_vm._v("Next")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "reg-right" }, [
              _c(
                "p",
                { staticClass: "reg-choice" },
                [
                  _c("router-link", { attrs: { to: { name: "login" } } }, [
                    _vm._v("Return to Login")
                  ])
                ],
                1
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "reg-header" }, [
      _c("h2", { staticClass: "text-primary" }, [
        _vm._v("Reset your password")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "lead" }, [
        _vm._v(
          "If you don’t remember your password, reset it following the instructions."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "reg-body" }, [
      _c("div", { staticClass: "captcha-wrapper" }),
      _vm._v(" "),
      _c("div", { staticClass: "alert-wrapper" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-32f9f015", module.exports)
  }
}

/***/ })

});