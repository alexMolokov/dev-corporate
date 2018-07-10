webpackJsonp([0],{

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(299)
/* template */
var __vue_template__ = __webpack_require__(300)
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
Component.options.__file = "resources\\assets\\js\\pages\\ActivateRegister.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e6a423a6", Component.options)
  } else {
    hotAPI.reload("data-v-e6a423a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_User__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
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

var loadingPage = __webpack_require__(90);
var ErrorInform = __webpack_require__(75);


var ajaxform = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'changeForgotPassword',
    created: function created() {
        var _this = this;

        this.code = this.$route.params.code;
        var path = '/registration/activate/' + this.code;
        this.uploadInfo(path, {}, function (data) {
            _this.checked = true;
            _this.error = false;
            _this.login = data.login;
        }, {}, function (data) {
            _this.checked = true;
            _this.error = true;
        });
    },
    data: function data() {
        return {
            code: "",
            checked: false,
            error: false,
            login: ""
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapState */])(["lang"])),
    mixins: [ajaxform],

    components: {
        "loading-page": loadingPage,
        "error-inform": ErrorInform
    },
    methods: {
        togglePassword: function togglePassword(type) {
            if (type == 'type_input_new') {
                this.type_input_new = this.type_input_new == 'password' ? 'text' : 'password';
            } else if (type == 'type_input_repeat') {
                this.type_input_repeat = this.type_input_repeat == 'password' ? 'text' : 'password';
            }
        },
        validate: function validate() {
            var _this2 = this;

            var url = "/registration/change/password/" + this.code;
            var data = { "new_password": this.new_password, "check_password": this.check_password };

            this.send(url, data, function (data) {
                _this2.changed = true;
            });
        }

    },
    locales: {
        ru: {
            'Set a new password': 'Задайте новый пароль',
            'New Password': 'Пароль',
            'Repeat new password': 'Повторить пароль',
            'Next': 'Далее',
            'Error! Operation can not be completed now.': 'Ошибка! Операция не может быть сейчас выполнена.',
            "Please": 'Пожалуйста',
            'try again': 'попробуйте',
            'later or contact VIPole support team': 'позже или свяжитесь со службой поддерки VIPole'
        }
    }

});

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "login-page", attrs: { id: "register-activate-page" } },
    [
      _c("div", { staticClass: "container" }, [
        _vm.checked && _vm.error
          ? _c("div", { staticClass: "clearfix" }, [
              _c("div", { staticClass: "reg-header" }, [
                _c(
                  "h2",
                  {
                    directives: [{ name: "translate", rawName: "v-translate" }],
                    staticClass: "text-danger"
                  },
                  [_vm._v("Error! Operation can not be completed now.")]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "lead" },
                  [
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("Please")]
                    ),
                    _vm._v(", "),
                    _c(
                      "router-link",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ],
                        attrs: { to: { name: "register" } }
                      },
                      [_vm._v("try again")]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("later or contact VIPole support team")]
                    ),
                    _vm._v(".")
                  ],
                  1
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.checked && !_vm.error
          ? _c("div", [
              _c("div", { staticClass: "clearfix", attrs: { id: "sign_in" } }, [
                _c("h1", { staticClass: "header" }, [
                  _vm._v(
                    "Your Corporate VIPole account is successfully activated!"
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "complete-body" }, [
                  _c("div", { attrs: { id: "login-outer" } }, [
                    _vm._v("Your login (VIPole ID) - "),
                    _c("span", [_vm._v(_vm._s(_vm.$login))])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { attrs: { id: "manage" } },
                    [
                      _vm._v(
                        "To manage you account and connected services go to your "
                      ),
                      _c("router-link", { attrs: { to: { name: "login" } } }, [
                        _vm._v("Profile page")
                      ]),
                      _vm._v(".")
                    ],
                    1
                  )
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.checked ? _c("div", [_c("loading-page")], 1) : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e6a423a6", module.exports)
  }
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(76)
/* template */
var __vue_template__ = __webpack_require__(77)
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states__ = __webpack_require__(14);
//
//
//
//
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

/***/ 77:
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