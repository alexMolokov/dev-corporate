webpackJsonp([1],{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(56)
/* template */
var __vue_template__ = __webpack_require__(57)
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
Component.options.__file = "resources\\assets\\js\\pages\\Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d4a7902", Component.options)
  } else {
    hotAPI.reload("data-v-6d4a7902", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(55)
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

/***/ 55:
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue__ = __webpack_require__(54);
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
            login: null,
            password: null,
            type_password: "password"
        };
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue___default.a],
    methods: {
        togglePassword: function togglePassword() {
            this.type_password = this.type_password == 'password' ? 'text' : 'password';
        }
    },
    locales: {
        ru: {
            'Login to your account': 'МЕНЮ',
            'Your password has been changed.': 'Ваш пароль был изменен',
            'Current password': 'Текущий пароль',
            'New Password': 'Новый Пароль',
            'Repeat new password': 'Повторить новый пароль',
            'Password not valid': 'Неверный пароль',
            'Next': 'Далее'
        }
    }
});

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-page" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "clearfix", attrs: { id: "sign_in" } }, [
        _c("div", { staticClass: "reg-header" }, [
          _c(
            "h2",
            {
              directives: [{ name: "translate", rawName: "v-translate" }],
              staticClass: "text-primary"
            },
            [_vm._v("Login to your account")]
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
                _c("label", { attrs: { for: "login" } }, [_vm._v("Login")]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("login"),
                        expression: "errors.has('login')"
                      }
                    ],
                    staticClass: "help is-danger"
                  },
                  [_vm._v("*" + _vm._s(_vm.errors.first("login")))]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.login,
                      expression: "login"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|min_value:5",
                      expression: "'required|min_value:5'"
                    }
                  ],
                  staticClass: "form-control input-alg readonly",
                  class: { error: _vm.errors.has("login") },
                  attrs: {
                    type: "text",
                    id: "login",
                    name: "login",
                    placeholder: ""
                  },
                  domProps: { value: _vm.login },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.login = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "password" } }, [
                  _vm._v("Password")
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("password"),
                        expression: "errors.has('password')"
                      }
                    ],
                    staticClass: "help is-danger"
                  },
                  [_vm._v("*" + _vm._s(_vm.errors.first("password")))]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _vm.type_password === "checkbox"
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.password,
                            expression: "password"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min_value:5",
                            expression: "'required|min_value:5'"
                          }
                        ],
                        staticClass: "form-control input-alg",
                        class: { error: _vm.errors.has("password") },
                        attrs: {
                          id: "password",
                          name: "password",
                          type: "checkbox"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.password)
                            ? _vm._i(_vm.password, null) > -1
                            : _vm.password
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.password,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (_vm.password = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.password = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.password = $$c
                            }
                          }
                        }
                      })
                    : _vm.type_password === "radio"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.password,
                              expression: "password"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|min_value:5",
                              expression: "'required|min_value:5'"
                            }
                          ],
                          staticClass: "form-control input-alg",
                          class: { error: _vm.errors.has("password") },
                          attrs: {
                            id: "password",
                            name: "password",
                            type: "radio"
                          },
                          domProps: { checked: _vm._q(_vm.password, null) },
                          on: {
                            change: function($event) {
                              _vm.password = null
                            }
                          }
                        })
                      : _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.password,
                              expression: "password"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|min_value:5",
                              expression: "'required|min_value:5'"
                            }
                          ],
                          staticClass: "form-control input-alg",
                          class: { error: _vm.errors.has("password") },
                          attrs: {
                            id: "password",
                            name: "password",
                            type: _vm.type_password
                          },
                          domProps: { value: _vm.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.password = $event.target.value
                            }
                          }
                        }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "input-group-addon",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          return _vm.togglePassword($event)
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "glyphicon",
                        class: {
                          "glyphicon-eye-close":
                            _vm.type_password == "password",
                          "glyphicon-eye-open": _vm.type_password != "password"
                        },
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "reg-left" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-lg",
                  attrs: { type: "submit" },
                  on: { click: _vm.validate }
                },
                [_vm._v("Log In")]
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
                    { attrs: { to: { name: "forgot" }, tabindex: "-1" } },
                    [_vm._v("Forgot password?")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "reg-footer" }, [
              _c(
                "p",
                { staticClass: "h4 text-center" },
                [
                  _vm._v("Don't have an account? "),
                  _c(
                    "router-link",
                    { attrs: { to: { name: "registration" }, tabindex: "-1" } },
                    [_vm._v("Sign In")]
                  )
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
    require("vue-hot-reload-api")      .rerender("data-v-6d4a7902", module.exports)
  }
}

/***/ })

});