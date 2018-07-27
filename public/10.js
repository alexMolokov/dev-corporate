webpackJsonp([10],{

/***/ 140:
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
    name: 'login',
    data: function data() {
        return {
            url: "/registration/register",
            email: null,
            login: null,
            password: null,
            name: "",
            type_password: "password",
            emailExists: false,
            loginExists: false,
            registered: false,
            submitting: false
        };
    },
    created: function created() {
        var _this = this;

        this.$validator.extend('try_login', {
            getMessage: function getMessage(field) {
                return _this.t('Login already exists');
            },
            validate: function validate(value) {
                if (value) {
                    return window.axios.post("/registration/try-login", { login: value }).then(function (_ref) {
                        var data = _ref.data;

                        if (data.status) return true;

                        return false;
                    }).catch(function (error) {
                        console.log('error2');
                        return false;
                    });
                } else {
                    return false;
                }
            }
        });

        this.$validator.extend('try_email', {
            getMessage: function getMessage(field) {
                return _this.t('Email already exists');
            },
            validate: function validate(value) {
                if (value) {
                    return window.axios.post("/registration/try-email", { email: value }).then(function (_ref2) {
                        var data = _ref2.data;

                        if (data.status) return true;

                        return false;
                    }).catch(function (error) {
                        console.log('error1');
                        return false;
                    });
                } else {
                    return false;
                }
            }
        });
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue___default.a],
    methods: {
        blur: function blur(id) {
            document.getElementById(id).classList.add('hidden');
        },
        focus: function focus(id) {
            document.getElementById(id).classList.remove('hidden');
        },

        validate: function validate() {
            var _this2 = this;

            var data = { "login": this.login, "password": this.password, "email": this.email, "name": this.name };
            this.submitting = true;
            this.send(this.url, data, function (data) {
                _this2.registered = true;
                _this2.submitting = false;
            }, function (data) {
                _this2.submitting = false;
            });
        },
        togglePassword: function togglePassword() {
            this.type_password = this.type_password == 'password' ? 'text' : 'password';
        }
    },
    locales: {
        ru: {
            'Company name': 'Название компании',
            'Registration': 'Регистрация',
            'Login': 'Логин',
            'Password': 'Пароль',
            'Create account': 'Создать аккаунт',
            'Login already exists': 'Логин уже существует',
            'Email already exists': 'Email уже существует',
            'By clicking': 'Нажимая',
            'you agree to the': 'вы соглашаетесь с условиями',
            'Just one more step to get started': 'Остался всего один шаг',
            'Check your email and activate VIPole Corporate account by clicking the activation link that we have just sent to': 'Проверьте ваш email и активируйте корпоративный аккаунт VIPole, перейдя по ссылке активации в письме, которое мы отправили на адрес',
            'Once your Corporate account is activated, VIPole services will be enabled for your account': 'Как только вы активируете аккаунт, вы сможете начать пользоваться сервисом VIPole для корпоративных клиентов',
            'Activation link is valid for a single use and will expire in 24 hours': 'Ссылка активации одноразовая и действует в течение 24 часов',
            'Use strong password, at least 6 characters.': "Используйте стойкий пароль, минимум 6 символов.",
            'Choose your login, minimum 6 letters or combine letters and numbers.': '6 и более символов (только буквы и цифры)'
        }
    }

});

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-page" }, [
    _c("div", { staticClass: "container" }, [
      !_vm.registered
        ? _c("div", { staticClass: "clearfix", attrs: { id: "sign_in" } }, [
            _c("div", { staticClass: "reg-header" }, [
              _c(
                "h2",
                {
                  directives: [{ name: "translate", rawName: "v-translate" }],
                  staticClass: "text-primary"
                },
                [_vm._v("Registration")]
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
                        attrs: { for: "name" }
                      },
                      [_vm._v("Company name")]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("name"),
                            expression: "errors.has('name')"
                          }
                        ],
                        staticClass: "help is-danger"
                      },
                      [_vm._v("*" + _vm._s(_vm.errors.first("name")))]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.name,
                          expression: "name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:3",
                          expression: "'required|min:3'"
                        }
                      ],
                      staticClass: "form-control input-alg readonly",
                      class: { error: _vm.errors.has("name") },
                      attrs: {
                        type: "text",
                        id: "name",
                        name: "name",
                        placeholder: ""
                      },
                      domProps: { value: _vm.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.name = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ],
                        attrs: { for: "login" }
                      },
                      [_vm._v("Email")]
                    ),
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
                          value: "required|email|try_email",
                          expression: "'required|email|try_email'"
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
                    _c(
                      "label",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ],
                        attrs: { for: "login" }
                      },
                      [_vm._v("Login")]
                    ),
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
                          value:
                            "required|min:6|regex:^[a-zA-Z_0-9]+$|try_login",
                          expression:
                            "'required|min:6|regex:^[a-zA-Z_0-9]+$|try_login'"
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
                        focus: function($event) {
                          _vm.focus("login-help")
                        },
                        blur: function($event) {
                          _vm.blur("login-help")
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.login = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ],
                        staticClass: "help-block hidden",
                        attrs: { id: "login-help" }
                      },
                      [
                        _vm._v(
                          "Choose your login, minimum 6 letters or combine letters and numbers."
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ],
                        attrs: { for: "password" }
                      },
                      [_vm._v("Password")]
                    ),
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
                                value: "required|min:6",
                                expression: "'required|min:6'"
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
                              focus: function($event) {
                                _vm.focus("password-help")
                              },
                              blur: function($event) {
                                _vm.blur("password-help")
                              },
                              change: function($event) {
                                var $$a = _vm.password,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.password = $$a.concat([$$v]))
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
                                  value: "required|min:6",
                                  expression: "'required|min:6'"
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
                                focus: function($event) {
                                  _vm.focus("password-help")
                                },
                                blur: function($event) {
                                  _vm.blur("password-help")
                                },
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
                                  value: "required|min:6",
                                  expression: "'required|min:6'"
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
                                focus: function($event) {
                                  _vm.focus("password-help")
                                },
                                blur: function($event) {
                                  _vm.blur("password-help")
                                },
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
                              "glyphicon-eye-open":
                                _vm.type_password != "password"
                            },
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ],
                        staticClass: "help-block hidden",
                        attrs: { id: "password-help" }
                      },
                      [_vm._v("Use strong password, at least 6 characters.")]
                    )
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
                      attrs: {
                        type: "submit",
                        disabled:
                          _vm.emailExists || _vm.loginExists || _vm.submitting
                      },
                      on: { click: _vm.validate }
                    },
                    [_vm._v("Create account")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "reg-right" }),
                _vm._v(" "),
                _c("div", { staticClass: "reg-footer" }, [
                  _c("p", { staticClass: "reg-agree" }, [
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("By clicking")]
                    ),
                    _vm._v(" "),
                    _c(
                      "strong",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("Create account")]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("you agree to the")]
                    ),
                    _vm._v(" "),
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
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.registered
        ? _c(
            "div",
            { staticClass: "clearfix", attrs: { id: "verify-email" } },
            [
              _c("div", { staticClass: "reg-header" }, [
                _c(
                  "h2",
                  {
                    directives: [{ name: "translate", rawName: "v-translate" }],
                    staticClass: "text-primary"
                  },
                  [_vm._v("Just one more step to get started")]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "lead" }, [
                  _c(
                    "span",
                    {
                      directives: [
                        { name: "translate", rawName: "v-translate" }
                      ]
                    },
                    [
                      _vm._v(
                        "Check your email and activate VIPole Corporate account by clicking the activation link that we have just sent to"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _c("strong", [_vm._v(_vm._s(_vm.email))])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "lead" }, [
                  _c(
                    "span",
                    {
                      directives: [
                        { name: "translate", rawName: "v-translate" }
                      ]
                    },
                    [
                      _vm._v(
                        "Once your Corporate account is activated, VIPole services will be enabled for your account"
                      )
                    ]
                  ),
                  _vm._v("."),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        { name: "translate", rawName: "v-translate" }
                      ]
                    },
                    [
                      _vm._v(
                        "Activation link is valid for a single use and will expire in 24 hours"
                      )
                    ]
                  ),
                  _vm._v(".\n                ")
                ])
              ])
            ]
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-1a0fbfa0", module.exports)
  }
}

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(140)
/* template */
var __vue_template__ = __webpack_require__(141)
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