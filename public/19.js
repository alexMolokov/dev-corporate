webpackJsonp([19],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
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

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "\n.group-attr .info-value span:last-child {\n    margin-left: 10px;\n}\n.group-attr .info-value span:first-child {\n    color: #666;\n}\n.info-head .glyphicon-pencil {\n    font-size: 12px;\n    display: inline-block;\n    margin-left: 10px;\n}\n.v-user-cabinet-ver1 .partner-menu .partner-menu__item {\n    flex-grow: 1;\n}\n.v-user-cabinet-ver1 .partner-menu .partner-menu__item:last-child {\n    flex-grow: 5;\n}\n.flex-row .user-card:last-child {\n    flex-grow: 1.5;\n}\n", ""]);

// exports


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var userMenu = __webpack_require__(79);
var formChangePassword = function formChangePassword() {
    return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 135));
};
var formChangeCompanyName = function formChangeCompanyName() {
    return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 138));
};
var formChangeCompanyDetails = function formChangeCompanyDetails() {
    return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 141));
};
var formChangeTechContact = function formChangeTechContact() {
    return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 144));
};
var formChangeMainContact = function formChangeMainContact() {
    return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 147));
};

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'login',
    data: function data() {
        return {
            showFormChangePassword: false,
            showFormChangeCompanyName: false,
            showFormChangeContact: false,
            showFormChangeDetails: false,
            showFormChangeTechContact: false,
            showFormChangeMainContact: false
        };
    },

    components: {
        "user-menu": userMenu,
        "form-change-password": formChangePassword,
        "form-change-company-name": formChangeCompanyName,
        "form-change-details": formChangeCompanyDetails,
        "form-change-tech-contact": formChangeTechContact,
        "form-change-main-contact": formChangeMainContact
    },
    computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({
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

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
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
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          _vm.showFormChangeCompanyName = true
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "glyphicon glyphicon-pencil blue",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
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
                _c("div", { staticClass: "info-value" }, [
                  _c("span", [_vm._v("**************")]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          _vm.showFormChangePassword = true
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "glyphicon glyphicon-pencil blue",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
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
                    [_vm._v("Primary contact")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "ml-10",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          _vm.showFormChangeMainContact = true
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "glyphicon glyphicon-pencil blue",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
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
                  _c(
                    "a",
                    {
                      staticClass: "ml-10",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          _vm.showFormChangeDetails = true
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "glyphicon glyphicon-pencil blue",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
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
                  _c(
                    "a",
                    {
                      staticClass: "ml-10",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          _vm.showFormChangeTechContact = true
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "glyphicon glyphicon-pencil blue",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
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
      _c(
        "div",
        { attrs: { id: "modal-list" } },
        [
          _vm.showFormChangePassword
            ? _c("form-change-password", {
                on: {
                  close: function($event) {
                    _vm.showFormChangePassword = false
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showFormChangeCompanyName
            ? _c("form-change-company-name", {
                on: {
                  close: function($event) {
                    _vm.showFormChangeCompanyName = false
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showFormChangeDetails
            ? _c("form-change-details", {
                on: {
                  close: function($event) {
                    _vm.showFormChangeDetails = false
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showFormChangeMainContact
            ? _c("form-change-main-contact", {
                on: {
                  close: function($event) {
                    _vm.showFormChangeMainContact = false
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showFormChangeTechContact
            ? _c("form-change-tech-contact", {
                on: {
                  close: function($event) {
                    _vm.showFormChangeTechContact = false
                  }
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("router-link", { attrs: { to: { name: "shop" } } }, [_vm._v("Shop")])
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
    require("vue-hot-reload-api")      .rerender("data-v-123bcd7c", module.exports)
  }
}

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(134)
/* template */
var __vue_template__ = __webpack_require__(150)
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

/***/ 79:
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

/***/ 80:
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

/***/ 81:
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
            class: { active: _vm.currentRoute == "userpage" }
          },
          [
            _c(
              "router-link",
              {
                directives: [{ name: "translate", rawName: "v-translate" }],
                attrs: { to: { name: "userpage" } }
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

/***/ })

});