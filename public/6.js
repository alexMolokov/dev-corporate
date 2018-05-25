webpackJsonp([6],{

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(80)
/* template */
var __vue_template__ = __webpack_require__(81)
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
Component.options.__file = "resources\\assets\\js\\pages\\Registration.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a0fbfa0", Component.options)
  } else {
    hotAPI.reload("data-v-1a0fbfa0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue__ = __webpack_require__(14);
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
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'login',
    data: function data() {
        return {
            url: "/registration",
            email: null,
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
    }

});

/***/ }),

/***/ 81:
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
                _c("label", { attrs: { for: "login" } }, [_vm._v("Email")]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("email"),
                        expression: "errors.has('email')"
                      }
                    ],
                    staticClass: "help is-danger"
                  },
                  [_vm._v("*" + _vm._s(_vm.errors.first("email")))]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.email,
                      expression: "email"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|email",
                      expression: "'required|email'"
                    }
                  ],
                  staticClass: "form-control input-alg readonly",
                  class: { error: _vm.errors.has("email") },
                  attrs: {
                    type: "text",
                    id: "email",
                    name: "email",
                    placeholder: ""
                  },
                  domProps: { value: _vm.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.email = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
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
                [_vm._v("Create account")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "reg-right" }),
            _vm._v(" "),
            _vm._m(2)
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
      _c("h2", { staticClass: "text-primary" }, [_vm._v("Registration")])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "reg-footer" }, [
      _c("p", { staticClass: "reg-agree" }, [
        _vm._v("By clicking "),
        _c("strong", [_vm._v(" Create account")]),
        _vm._v(" you agree to the "),
        _c(
          "a",
          {
            staticClass: "text-nowrap",
            attrs: { href: "/legal", target: "blank" }
          },
          [_vm._v("User Agreement")]
        ),
        _vm._v(", "),
        _c(
          "a",
          {
            staticClass: "text-nowrap",
            attrs: { href: "/terms_of_use", target: "legal" }
          },
          [_vm._v("Terms of use")]
        ),
        _vm._v(" and "),
        _c(
          "a",
          {
            staticClass: "text-nowrap",
            attrs: { href: "/confidentiality", target: "legal" }
          },
          [_vm._v("Privacy policy")]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a0fbfa0", module.exports)
  }
}

/***/ })

});