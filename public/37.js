webpackJsonp([37],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_error_inform_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_error_inform_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_error_inform_vue__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
    components: { ErrorInform: __WEBPACK_IMPORTED_MODULE_1__mixins_error_inform_vue___default.a },
    name: 'forget-password',
    data: function data() {
        return {
            url: "/registration/forget",
            search: null,
            emailChecked: false,
            email: "example@mail.com",
            submitting: false
        };
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue___default.a],

    methods: {
        validate: function validate() {
            var _this = this;

            var data = { "search": this.search };
            this.submitting = true;
            this.send(this.url, data, function (data) {
                _this.email = data.email;
                _this.emailChecked = true;
                _this.submitting = false;
            }, function (data) {
                _this.submitting = false;
            });
        }
    },
    locales: {
        ru: {
            'Reset your password': 'Сброс вашего пароля',
            'If you don’t remember your password, reset it following the instructions.': 'Если вы не помните ваш пароль, сбросьте его, следуя нашим инструкциям.',
            'Login or Email': 'Логин или email',
            'Next': 'Далее',
            'Return to Login': 'Войти',
            "Check your email": 'Проверьте ваш email',
            'We’ve sent an email with password reset link to': 'Мы направили письмо со ссылкой для сброса пароля на',
            'Click on the link to confirm your password reset.': 'Перейдите по ссылке, чтобы подтвердить сброс пароля.',
            'Verification link is valid for a single use and will expire in 24 hours.': 'Ссылка для подтверждения действительна для одноразового использования и истекает через 24 часа.'
        }
    }

});

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-page" }, [
    _c("div", { staticClass: "container" }, [
      !_vm.emailChecked
        ? _c("div", { staticClass: "clearfix", attrs: { id: "sign_in" } }, [
            _c("div", { staticClass: "reg-header" }, [
              _c(
                "h2",
                {
                  directives: [{ name: "translate", rawName: "v-translate" }],
                  staticClass: "text-primary"
                },
                [_vm._v("Reset your password")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  directives: [{ name: "translate", rawName: "v-translate" }],
                  staticClass: "lead"
                },
                [
                  _vm._v(
                    "If you don’t remember your password, reset it following the instructions."
                  )
                ]
              )
            ]),
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
                    _c(
                      "label",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ],
                        attrs: { for: "login" }
                      },
                      [_vm._v("Login or Email")]
                    ),
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
                          value: "required|min:5",
                          expression: "'required|min:5'"
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
                _c(
                  "div",
                  { staticClass: "reg-body" },
                  [
                    _c("div", { staticClass: "captcha-wrapper" }),
                    _vm._v(" "),
                    _c("error-inform", {
                      attrs: { err: _vm.err, state: _vm.state }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "reg-left" }, [
                  _c(
                    "button",
                    {
                      directives: [
                        { name: "translate", rawName: "v-translate" }
                      ],
                      staticClass: "btn btn-primary btn-lg",
                      class: { submitting: _vm.submitting },
                      attrs: { type: "submit", disabled: _vm.submitting },
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
                      _c(
                        "router-link",
                        {
                          directives: [
                            { name: "translate", rawName: "v-translate" }
                          ],
                          attrs: { to: { name: "login" } }
                        },
                        [_vm._v("Return to Login")]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.emailChecked
        ? _c("div", { staticClass: "clearfix" }, [
            _c("div", { staticClass: "reg-header" }, [
              _c(
                "h2",
                {
                  directives: [{ name: "translate", rawName: "v-translate" }],
                  staticClass: "text-primary"
                },
                [_vm._v("Check your email")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "lead top-20" }, [
                _c(
                  "span",
                  {
                    directives: [{ name: "translate", rawName: "v-translate" }]
                  },
                  [_vm._v("We’ve sent an email with password reset link to")]
                ),
                _vm._v(" "),
                _c("strong", [_vm._v(_vm._s(_vm.email))]),
                _vm._v(". "),
                _c(
                  "span",
                  {
                    directives: [{ name: "translate", rawName: "v-translate" }]
                  },
                  [_vm._v("Click on the link to confirm your password reset.")]
                )
              ]),
              _vm._v(" "),
              _c(
                "p",
                {
                  directives: [{ name: "translate", rawName: "v-translate" }],
                  staticClass: "lead"
                },
                [
                  _vm._v(
                    "Verification link is valid for a single use and will expire in 24 hours."
                  )
                ]
              )
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-32f9f015", module.exports)
  }
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(297)
/* template */
var __vue_template__ = __webpack_require__(298)
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

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(77)
/* template */
var __vue_template__ = __webpack_require__(78)
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
Component.options.__file = "resources\\assets\\js\\mixins\\error-inform.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41c6c4ae", Component.options)
  } else {
    hotAPI.reload("data-v-41c6c4ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states__ = __webpack_require__(12);
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
  name: 'error-inform',
  props: {
    state: { type: Number, default: __WEBPACK_IMPORTED_MODULE_0__states__["a" /* STATES */].START },
    err: { type: Object, default: function _default() {
        return { validation: [], common: [] };
      } }
  },
  data: function data() {
    return {};
  },

  computed: {
    showError: function showError() {
      return (this.err.validation.length > 0 || this.err.common.length > 0) && this.state == __WEBPACK_IMPORTED_MODULE_0__states__["a" /* STATES */].ERROR;
    }
  }
});

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showError
    ? _c("div", { staticClass: "error-block" }, [
        _c(
          "div",
          { staticClass: "alert alert-danger fade in" },
          [
            _vm._l(_vm.err.validation, function(er) {
              return _c("div", { staticClass: "top-10" }, [
                _vm._v(
                  "\n             " +
                    _vm._s(er.name) +
                    " - " +
                    _vm._s(er.description) +
                    "\n         "
                )
              ])
            }),
            _vm._v(" "),
            _vm._l(_vm.err.common, function(er) {
              return _c("div", { staticClass: "top-10" }, [
                _c("div", { staticClass: "top-10" }, [_vm._v(_vm._s(er))])
              ])
            })
          ],
          2
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-41c6c4ae", module.exports)
  }
}

/***/ })

});