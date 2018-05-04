webpackJsonp([0],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(67)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(69)
/* template */
var __vue_template__ = __webpack_require__(70)
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
Component.options.__file = "resources\\assets\\js\\pages\\User.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-123bcd7c", Component.options)
  } else {
    hotAPI.reload("data-v-123bcd7c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(59)
/* template */
var __vue_template__ = __webpack_require__(60)
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
Component.options.__file = "resources\\assets\\js\\components\\userMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cdcb15be", Component.options)
  } else {
    hotAPI.reload("data-v-cdcb15be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 59:
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
    name: 'userMenu',
    props: {},
    computed: {
        'currentRoute': function currentRoute() {
            return this.$route.name;
        }
    },
    methods: {},
    locales: {
        ru: {
            'My Account': 'Мой аккаунт',
            'Tickets': 'Тикеты',
            'Documents': 'Документы'
        }
    }
});

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "partner-menu" }, [
    _c("input", { attrs: { id: "partner-menu__checkbox", type: "checkbox" } }),
    _vm._v(" "),
    _c("div", [
      _c("div", { staticClass: "wrapper" }, [
        _c(
          "div",
          {
            staticClass: "partner-menu__item",
            class: { active: _vm.currentRoute == "user" }
          },
          [
            _c(
              "router-link",
              {
                directives: [{ name: "translate", rawName: "v-translate" }],
                attrs: { to: { name: "user" } }
              },
              [_vm._v("My Account")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "partner-menu__item",
            class: { active: _vm.currentRoute == "download" }
          },
          [
            _c("router-link", { attrs: { to: { name: "download" } } }, [
              _vm._v("Download")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "partner-menu__item",
            class: { active: _vm.currentRoute == "tickets" }
          },
          [
            _c(
              "router-link",
              {
                directives: [{ name: "translate", rawName: "v-translate" }],
                attrs: { to: { name: "tickets" } }
              },
              [_vm._v("Tickets")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "partner-menu__item",
            class: { active: _vm.currentRoute == "documents" }
          },
          [
            _c(
              "router-link",
              {
                directives: [{ name: "translate", rawName: "v-translate" }],
                attrs: { to: { name: "documents" } }
              },
              [_vm._v("Documents")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("label", { attrs: { for: "partner-menu__checkbox" } })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cdcb15be", module.exports)
  }
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("7edf03e4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-123bcd7c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-123bcd7c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "\n.group-attr .info-value span:last-child {\n    margin-left: 10px;\n}\n.group-attr .info-value span:first-child {\n    color: #666;\n}\n.info-head .glyphicon-pencil {\n    font-size: 12px;\n    display: inline-block;\n    margin-left: 10px;\n}\n.v-user-cabinet-ver1 .partner-menu .partner-menu__item {\n    flex-grow: 1;\n}\n.v-user-cabinet-ver1 .partner-menu .partner-menu__item:last-child {\n    flex-grow: 5;\n}\n.flex-row .user-card:last-child {\n    flex-grow: 1.5;\n}\n", ""]);

// exports


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var userMenu = __webpack_require__(58);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'login',
    data: function data() {
        return {};
    },

    components: {
        "user-menu": userMenu
    },
    computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])({
        user: function user(state) {
            return state.user;
        }
    }),
    methods: {},
    locales: {
        ru: {
            'Profile': 'Профиль',
            'Company': 'Компания',
            'Primary contact': 'Основной контакт',
            'Full name:': 'Имя:',
            'Job title:': 'Должность:',
            'Password': 'Пароль:',
            'Customer ID': "ID Клиента",
            'Address:': 'Адрес:',
            'Technical contact': 'Технический контакт',
            'Phone:': 'Телефон:',
            'Contacts': 'Контакты',
            'Billing details': 'Платежная информация',
            'My Account': 'Мой аккаунт',
            'Tickets': 'Тикеты',
            'Documents': 'Документы'

        }
    }

});

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "v-user-cabinet-ver1", attrs: { id: "main-user-page" } },
    [
      _c("user-menu"),
      _vm._v(" "),
      _c("div", { staticClass: "flex-row flex_user_card" }, [
        _c("div", { staticClass: "user-card" }, [
          _c("div", { staticClass: "head flex-row" }, [
            _c("div", [
              _c(
                "div",
                {
                  directives: [{ name: "translate", rawName: "v-translate" }],
                  staticClass: "user-card_icon user-card_profile"
                },
                [_vm._v("Profile")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _c("div", { staticClass: "info_section" }, [
              _c("div", [
                _c(
                  "div",
                  {
                    directives: [{ name: "translate", rawName: "v-translate" }],
                    staticClass: "info-head"
                  },
                  [_vm._v("Customer ID")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "info-value" }, [
                  _vm._v(_vm._s(_vm.user.id))
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  {
                    directives: [{ name: "translate", rawName: "v-translate" }],
                    staticClass: "info-head"
                  },
                  [_vm._v("Company")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "info-value" }, [
                  _c("span", [_vm._v(_vm._s(_vm.user.name))]),
                  _vm._v(" "),
                  _vm._m(0)
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  {
                    directives: [{ name: "translate", rawName: "v-translate" }],
                    staticClass: "info-head"
                  },
                  [_vm._v("Password")]
                ),
                _vm._v(" "),
                _vm._m(1)
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "info_section" }, [
              _c("div", [
                _c("div", { staticClass: "info-head" }, [
                  _c(
                    "span",
                    {
                      directives: [
                        { name: "translate", rawName: "v-translate" }
                      ]
                    },
                    [_vm._v("Primary contact")]
                  ),
                  _vm._v(" "),
                  _vm._m(2)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "group-attr" }, [
                  _c("div", { staticClass: "info-value" }, [
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("Full name:")]
                    ),
                    _vm._v(" "),
                    _c("span", { staticStyle: { "margin-left": "5px" } }, [
                      _vm._v(
                        _vm._s(_vm.user.primary.lastName) +
                          " " +
                          _vm._s(_vm.user.primary.firstName)
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-value top-10" }, [
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("Job title:")]
                    ),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.user.primary.jobTitle))])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-value top-10" }, [
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("Email:")]
                    ),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.user.primary.email))])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "user-card" }, [
          _c("div", { staticClass: "head flex-row" }, [
            _c("div", [
              _c(
                "div",
                {
                  directives: [{ name: "translate", rawName: "v-translate" }],
                  staticClass: "user-card_icon user-card_balance"
                },
                [_vm._v("Contacts")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _c("div", { staticClass: "info_section" }, [
              _c("div", [
                _c("div", { staticClass: "info-head" }, [
                  _c(
                    "span",
                    {
                      directives: [
                        { name: "translate", rawName: "v-translate" }
                      ]
                    },
                    [_vm._v("Billing details")]
                  ),
                  _vm._v(" "),
                  _vm._m(3)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "group-attr" }, [
                  _c("div", { staticClass: "info-value" }, [
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("Address:")]
                    ),
                    _vm._v(" "),
                    _c("span", { staticStyle: { "margin-left": "5px" } }, [
                      _vm._v(_vm._s(_vm.user.billing.address))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-value top-10" }, [
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("Phone:")]
                    ),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.user.billing.phone))])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-value top-10" }, [
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("Full name:")]
                    ),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.user.billing.lastName) +
                          " " +
                          _vm._s(_vm.user.billing.firstName)
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-value top-10" }, [
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("Email:")]
                    ),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.user.billing.email))])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "info_section" }, [
              _c("div", [
                _c("div", { staticClass: "info-head" }, [
                  _c(
                    "span",
                    {
                      directives: [
                        { name: "translate", rawName: "v-translate" }
                      ]
                    },
                    [_vm._v("Technical contact")]
                  ),
                  _vm._v(" "),
                  _vm._m(4)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "group-attr" }, [
                  _c("div", { staticClass: "info-value" }, [
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("Full name:")]
                    ),
                    _vm._v(" "),
                    _c("span", { staticStyle: { "margin-left": "5px" } }, [
                      _vm._v(
                        _vm._s(_vm.user.tech.lastName) +
                          " " +
                          _vm._s(_vm.user.tech.firstName)
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-value top-10" }, [
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("Job title:")]
                    ),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.user.tech.jobTitle))])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-value top-10" }, [
                    _c(
                      "span",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ]
                      },
                      [_vm._v("Email:")]
                    ),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.user.tech.email))])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { attrs: { id: "modal-list" } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("span", {
        staticClass: "glyphicon glyphicon-pencil blue",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info-value" }, [
      _c("span", [_vm._v("**************")]),
      _vm._v(" "),
      _c("a", { attrs: { href: "#" } }, [
        _c("span", {
          staticClass: "glyphicon glyphicon-pencil blue",
          attrs: { "aria-hidden": "true" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "ml-10", attrs: { href: "#" } }, [
      _c("span", {
        staticClass: "glyphicon glyphicon-pencil blue",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "ml-10", attrs: { href: "#" } }, [
      _c("span", {
        staticClass: "glyphicon glyphicon-pencil blue",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "ml-10", attrs: { href: "#" } }, [
      _c("span", {
        staticClass: "glyphicon glyphicon-pencil blue",
        attrs: { "aria-hidden": "true" }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-123bcd7c", module.exports)
  }
}

/***/ })

});