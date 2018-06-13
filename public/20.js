webpackJsonp([20],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(141)
/* template */
var __vue_template__ = __webpack_require__(142)
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
Component.options.__file = "resources\\assets\\js\\components\\formChangePassword.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cbc33734", Component.options)
  } else {
    hotAPI.reload("data-v-cbc33734", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vee_validate__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modalWindow_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modalWindow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__modalWindow_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var ajaxform = __webpack_require__(14);
var errorInform = __webpack_require__(69);
var loadingInform = __webpack_require__(80);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'form-change-password',
    components: {
        "modal-window": __WEBPACK_IMPORTED_MODULE_1__modalWindow_vue___default.a,
        "error-inform": errorInform,
        "loading-inform": loadingInform
    },
    data: function data() {
        return {
            id: "change-password",
            url: "/user/password/change",
            redirect: false,

            // current password
            password: '',
            // new password
            new_password: '',
            // repeated password
            check_password: '',

            // password status checked or no
            type_input_current: "password",
            type_input_new: "password",
            type_input_repeat: "password"

        };
    },

    mixins: [ajaxform],
    locales: {
        ru: {
            'Change password': 'Смена пароля',
            'Your password has been changed.': 'Ваш пароль был изменен',
            'Current password': 'Текущий пароль',
            'New Password': 'Новый Пароль',
            'Repeat new password': 'Повторить новый пароль',
            'Password not valid': 'Неверный пароль',
            'Next': 'Далее'
        }
    },
    methods: {
        togglePassword: function togglePassword(type) {
            if (type == 'type_input_current') {
                this.type_input_current = this.type_input_current == 'password' ? 'text' : 'password';
            } else if (type == 'type_input_new') {
                this.type_input_new = this.type_input_new == 'password' ? 'text' : 'password';
            } else if (type == 'type_input_repeat') {
                this.type_input_repeat = this.type_input_repeat == 'password' ? 'text' : 'password';
            }
        },
        reload: function reload() {
            document.location.reload(true);
        },
        validate: function validate() {
            var data = { "new_password": this.new_password, "password": this.password, "check_password": this.check_password };
            this.send(this.url, data);
        }

    }
});

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "modal-window",
    {
      staticClass: "in",
      staticStyle: { display: "block" },
      attrs: { id: "change-password", show: true },
      on: { close: _vm.close }
    },
    [
      _c(
        "div",
        {
          directives: [{ name: "translate", rawName: "v-translate" }],
          attrs: { slot: "title" },
          slot: "title"
        },
        [_vm._v("Change password")]
      ),
      _vm._v(" "),
      _c(
        "loading-inform",
        { attrs: { state: _vm.state }, on: { close: _vm.close } },
        [
          _c(
            "div",
            {
              staticClass: "window-center",
              attrs: { slot: "ok-message" },
              slot: "ok-message"
            },
            [
              _c(
                "div",
                {
                  directives: [{ name: "translate", rawName: "v-translate" }],
                  staticClass: "complete-body"
                },
                [_vm._v("Your password has been changed.")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "button-close-ok" }, [
                _c(
                  "button",
                  {
                    directives: [{ name: "translate", rawName: "v-translate" }],
                    staticClass: "btn btn-green",
                    attrs: { type: "button" },
                    on: { click: _vm.close }
                  },
                  [_vm._v("Ok")]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { attrs: { slot: "buttons" }, slot: "buttons" })
        ]
      ),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { url: _vm.url },
          on: {
            submit: function($event) {
              $event.preventDefault()
              $event.stopPropagation()
            }
          }
        },
        [
          _c("div", [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "form-group top-10" }, [
                  _c(
                    "label",
                    {
                      directives: [
                        { name: "translate", rawName: "v-translate" }
                      ],
                      attrs: { for: "old_password" }
                    },
                    [_vm._v("Current password")]
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
                    _vm.type_input_current === "checkbox"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.password,
                              expression: "password"
                            }
                          ],
                          staticClass: "form-control",
                          class: { error: _vm.errors.has("password") },
                          attrs: { name: "password", type: "checkbox" },
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
                      : _vm.type_input_current === "radio"
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.password,
                                expression: "password"
                              }
                            ],
                            staticClass: "form-control",
                            class: { error: _vm.errors.has("password") },
                            attrs: { name: "password", type: "radio" },
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
                              }
                            ],
                            staticClass: "form-control",
                            class: { error: _vm.errors.has("password") },
                            attrs: {
                              name: "password",
                              type: _vm.type_input_current
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
                    _c("a", {
                      staticClass: "input-group-addon",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          _vm.togglePassword("type_input_current")
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group  top-10" }, [
                  _c(
                    "label",
                    {
                      directives: [
                        { name: "translate", rawName: "v-translate" }
                      ],
                      attrs: { for: "password" }
                    },
                    [_vm._v("New Password")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("new_password"),
                          expression: "errors.has('new_password')"
                        }
                      ],
                      staticClass: "help is-danger"
                    },
                    [_vm._v("*" + _vm._s(_vm.errors.first("new_password")))]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _vm.type_input_new === "checkbox"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.new_password,
                              expression: "new_password"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: { rules: { required: true, min: 6 } },
                              expression: "{ rules: { required:true,min:6}}"
                            }
                          ],
                          staticClass: "form-control",
                          class: { error: _vm.errors.has("new_password") },
                          attrs: { name: "new_password", type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(_vm.new_password)
                              ? _vm._i(_vm.new_password, null) > -1
                              : _vm.new_password
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.new_password,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.new_password = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.new_password = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.new_password = $$c
                              }
                            }
                          }
                        })
                      : _vm.type_input_new === "radio"
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.new_password,
                                expression: "new_password"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: { rules: { required: true, min: 6 } },
                                expression: "{ rules: { required:true,min:6}}"
                              }
                            ],
                            staticClass: "form-control",
                            class: { error: _vm.errors.has("new_password") },
                            attrs: { name: "new_password", type: "radio" },
                            domProps: {
                              checked: _vm._q(_vm.new_password, null)
                            },
                            on: {
                              change: function($event) {
                                _vm.new_password = null
                              }
                            }
                          })
                        : _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.new_password,
                                expression: "new_password"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: { rules: { required: true, min: 6 } },
                                expression: "{ rules: { required:true,min:6}}"
                              }
                            ],
                            staticClass: "form-control",
                            class: { error: _vm.errors.has("new_password") },
                            attrs: {
                              name: "new_password",
                              type: _vm.type_input_new
                            },
                            domProps: { value: _vm.new_password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.new_password = $event.target.value
                              }
                            }
                          }),
                    _vm._v(" "),
                    _c("a", {
                      staticClass: "input-group-addon",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          _vm.togglePassword("type_input_new")
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group top-10" }, [
                  _c(
                    "label",
                    {
                      directives: [
                        { name: "translate", rawName: "v-translate" }
                      ],
                      attrs: { for: "check_password" }
                    },
                    [_vm._v("Repeat new password")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("check_password"),
                          expression: "errors.has('check_password')"
                        }
                      ],
                      staticClass: "help is-danger"
                    },
                    [_vm._v("*" + _vm._s(_vm.errors.first("check_password")))]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _vm.type_input_repeat === "checkbox"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.check_password,
                              expression: "check_password"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: {
                                rules: {
                                  required: true,
                                  min: 6,
                                  is: _vm.new_password
                                }
                              },
                              expression:
                                "{ rules: {required:true,min:6, is: new_password }}"
                            }
                          ],
                          staticClass: "form-control",
                          class: { error: _vm.errors.has("check_password") },
                          attrs: { name: "check_password", type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(_vm.check_password)
                              ? _vm._i(_vm.check_password, null) > -1
                              : _vm.check_password
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.check_password,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.check_password = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.check_password = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.check_password = $$c
                              }
                            }
                          }
                        })
                      : _vm.type_input_repeat === "radio"
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.check_password,
                                expression: "check_password"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: {
                                  rules: {
                                    required: true,
                                    min: 6,
                                    is: _vm.new_password
                                  }
                                },
                                expression:
                                  "{ rules: {required:true,min:6, is: new_password }}"
                              }
                            ],
                            staticClass: "form-control",
                            class: { error: _vm.errors.has("check_password") },
                            attrs: { name: "check_password", type: "radio" },
                            domProps: {
                              checked: _vm._q(_vm.check_password, null)
                            },
                            on: {
                              change: function($event) {
                                _vm.check_password = null
                              }
                            }
                          })
                        : _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.check_password,
                                expression: "check_password"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: {
                                  rules: {
                                    required: true,
                                    min: 6,
                                    is: _vm.new_password
                                  }
                                },
                                expression:
                                  "{ rules: {required:true,min:6, is: new_password }}"
                              }
                            ],
                            staticClass: "form-control",
                            class: { error: _vm.errors.has("check_password") },
                            attrs: {
                              name: "check_password",
                              type: _vm.type_input_repeat
                            },
                            domProps: { value: _vm.check_password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.check_password = $event.target.value
                              }
                            }
                          }),
                    _vm._v(" "),
                    _c("a", {
                      staticClass: "input-group-addon",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          _vm.togglePassword("type_input_repeat")
                        }
                      }
                    })
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("error-inform", { attrs: { err: _vm.err, state: _vm.state } }),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                directives: [{ name: "translate", rawName: "v-translate" }],
                staticClass: "btn btn-primary",
                attrs: { type: "submit" },
                on: { click: _vm.validate }
              },
              [_vm._v("Next")]
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cbc33734", module.exports)
  }
}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(70)
/* template */
var __vue_template__ = __webpack_require__(71)
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

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states__ = __webpack_require__(13);
//
//
//
//
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

/***/ 71:
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

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(76)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(78)
/* template */
var __vue_template__ = __webpack_require__(79)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-12158cf6"
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
Component.options.__file = "resources\\assets\\js\\components\\modalWindow.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12158cf6", Component.options)
  } else {
    hotAPI.reload("data-v-12158cf6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("81548b54", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-12158cf6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modalWindow.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-12158cf6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modalWindow.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "\n.modal[data-v-12158cf6] {\n    overflow: auto;\n    overflow-y: scroll;\n}\n", ""]);

// exports


/***/ }),

/***/ 78:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'modal-window',
    props: {
        id: { type: String, required: true },
        show: { type: Boolean, required: false },
        wide: { type: Boolean, default: false }
    },
    watch: {
        show: function show() {
            if (this.show) {
                $('body').addClass('dialog-open');
                $('body').addClass('modal-open');
            } else {
                $('body').removeClass('dialog-open');
                $('body').removeClass('modal-open');
            }
        }
    },
    methods: {
        close: function close(e) {
            var el = typeof e.srcElement != "undefined" ? e.srcElement : e.target;
            if (el == "input" && el.type == "radio") return;
            e.stopPropagation();

            this.$emit('close');
        },
        clickInside: function clickInside(e) {

            var el = typeof e.srcElement != "undefined" ? e.srcElement : e.target;
            if (el != "input" || el.type != "radio") e.stopPropagation();
        },

        bclose: function bclose() {
            $("#" + this.id).trigger('click');
        }

    }
});

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade modal-user",
      attrs: { tabindex: "-1", role: "dialog", id: _vm.id },
      on: { click: _vm.close }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal-dialog",
          class: { "modal-dialog-wide": _vm.wide },
          attrs: { role: "document" },
          on: { click: _vm.clickInside }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    "aria-label": "Close"
                  },
                  on: { click: _vm.bclose }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "h4",
                { staticClass: "modal-title" },
                [_vm._t("title", [_vm._v("Modal Title")])],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [_vm._t("default")], 2)
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-12158cf6", module.exports)
  }
}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(81)
/* template */
var __vue_template__ = __webpack_require__(82)
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
Component.options.__file = "resources\\assets\\js\\mixins\\loading-inform.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29930135", Component.options)
  } else {
    hotAPI.reload("data-v-29930135", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states__ = __webpack_require__(13);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'loading-inform',
    props: {
        state: { type: Number, default: __WEBPACK_IMPORTED_MODULE_0__states__["a" /* STATES */].START }
    },
    data: function data() {
        return {
            STATES: __WEBPACK_IMPORTED_MODULE_0__states__["a" /* STATES */]
        };
    },

    locales: {
        ru: {
            'Loading...': 'Отправляем запрос...'
        }
    },
    methods: {
        close: function close() {
            this.$emit('close');
        }
    }
});

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.state == _vm.STATES.LOADING
      ? _c("div", { staticClass: "loading-info" }, [
          _c("div", { staticClass: "window-center" }, [
            _c("div", [
              _c(
                "div",
                {
                  directives: [{ name: "translate", rawName: "v-translate" }],
                  staticClass: "processing_text"
                },
                [_vm._v("Loading...")]
              )
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.state == _vm.STATES.ANSWER
      ? _c(
          "div",
          { staticClass: "ok-message" },
          [
            _c("div", { staticClass: "window-center" }, [
              _c("div", { staticClass: "complete-body" }, [
                _c(
                  "div",
                  { staticClass: "complete-body_text" },
                  [_vm._t("ok-message")],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _vm._t("buttons", [
              _c("div", { staticClass: "button-close" }, [
                _c(
                  "button",
                  {
                    directives: [{ name: "translate", rawName: "v-translate" }],
                    staticClass: "btn btn-green",
                    attrs: { type: "button" },
                    on: { click: _vm.close }
                  },
                  [_vm._v("Ok")]
                )
              ])
            ])
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.state == _vm.STATES.REDIRECT
      ? _c("div", { staticClass: "ok-message" }, [
          _c("div", { staticClass: "window-center" }, [
            _c("div", { staticClass: "complete-body" }, [
              _c(
                "div",
                { staticClass: "complete-body_text" },
                [_vm._t("ok-message-redirect")],
                2
              )
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.state == _vm.STATES.RELOAD
      ? _c(
          "div",
          { staticClass: "ok-message" },
          [
            _c("div", { staticClass: "window-center" }, [
              _c("div", { staticClass: "complete-body" }, [
                _c(
                  "div",
                  { staticClass: "complete-body_text" },
                  [_vm._t("ok-message-reload")],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _vm._t("buttons-reload")
          ],
          2
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
    require("vue-hot-reload-api")      .rerender("data-v-29930135", module.exports)
  }
}

/***/ })

});