webpackJsonp([34],{

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(279);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("3c6cd043", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-235b7443\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Ticket.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-235b7443\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Ticket.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n.header-ticket-info[data-v-235b7443] {\n  padding: 10px;\n  border: 1px solid #eee;\n  border-radius: 5px;\n  background-color: #f5f5f5;\n  text-align: center;\n}\n.header-ticket-info > div[data-v-235b7443] {\n    padding: 0 10px;\n}\n.header-ticket-info > div > div[data-v-235b7443]:first-child {\n    font-size: 18px;\n    padding: 10px 0;\n}\n.header-ticket-info > div > div[data-v-235b7443]:last-child {\n    background-color: #fff;\n    border-radius: 5px;\n    border: 1px solid #eee;\n    font-size: 14px;\n    padding: 6px 0;\n}\n.header-ticket-buttons[data-v-235b7443] {\n  padding: 10px 0;\n}\n.header-ticket-buttons a[data-v-235b7443] {\n    min-width: 120px;\n    margin-right: 10px;\n}\n.warning[data-v-235b7443] {\n  background-color: #f0ad4e;\n}\n.articles pre[data-v-235b7443] {\n  background-color: #fff;\n  border: none;\n  padding-left: 0px;\n}\n.articles > div > div[data-v-235b7443]:first-child {\n  background-color: #f5f5f5;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  border-top: 1px solid #eee;\n  font-size: 15px;\n  padding: 6px;\n  text-align: right;\n}\n.articles .attacments a[data-v-235b7443] {\n  display: inline-block;\n  padding: 0 10px 10px 0;\n}\n.articles > div > div[data-v-235b7443]:last-child {\n  background-color: #fff;\n  border: 1px solid #eee;\n  font-size: 15px;\n  padding: 15px;\n  text-align: left;\n}\n", ""]);

// exports


/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue__ = __webpack_require__(15);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var userMenu = __webpack_require__(91);

var formAddArticle = function formAddArticle() {
    return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 281));
};

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ticket',
    props: {
        ticketNumber: { type: String }
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_ajax_form_vue___default.a],
    created: function created() {
        var _this = this;

        this.uploadInfo("/ticket/get/" + this.ticketNumber, {}, function (data) {
            _this.ticket = data;
            _this.loading = false;
            _this.currentArticle = _this.ticket.articles[0].id;
        });
    },

    components: {
        "user-menu": userMenu,
        "form-add-article": formAddArticle
    },
    data: function data() {
        return {
            showFormAddArticle: false,
            loading: true,
            currentArticle: "",
            ticket: {}
        };
    },

    methods: {
        changeArticle: function changeArticle(id) {
            this.currentArticle = id;
        }
    },

    locales: {
        ru: {
            "Ticket": "Тикет",
            "Loading info...": "Загрузка информации",
            "Back": "Назад",
            "Reply": "Ответить"
        }
    }

});

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "ticket-page" } },
    [
      _c("div", [
        _c("h2", [
          _c(
            "span",
            { directives: [{ name: "translate", rawName: "v-translate" }] },
            [_vm._v("Ticket")]
          ),
          _vm._v("# " + _vm._s(_vm.ticketNumber))
        ]),
        _vm._v(" "),
        _vm.loading
          ? _c(
              "div",
              {
                directives: [{ name: "translate", rawName: "v-translate" }],
                staticClass: "alert alert-warning fade in"
              },
              [_vm._v("Loading info...")]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.loading
          ? _c(
              "div",
              [
                _c("section", { attrs: { id: "header-ticket" } }, [
                  _c("div", [
                    _c("div", { staticClass: "mbb-20" }, [
                      _c("h3", [_vm._v(_vm._s(_vm.ticket.theme))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-row header-ticket-info" }, [
                      _c("div", [
                        _c(
                          "div",
                          {
                            directives: [
                              { name: "translate", rawName: "v-translate" }
                            ]
                          },
                          [_vm._v("Date")]
                        ),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(_vm.ticket.date))])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "div",
                          {
                            directives: [
                              { name: "translate", rawName: "v-translate" }
                            ]
                          },
                          [_vm._v("Department")]
                        ),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(_vm.ticket.department))])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "div",
                          {
                            directives: [
                              { name: "translate", rawName: "v-translate" }
                            ]
                          },
                          [_vm._v("Priority")]
                        ),
                        _vm._v(" "),
                        _c("div", [_vm._v("Normal")])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "div",
                          {
                            directives: [
                              { name: "translate", rawName: "v-translate" }
                            ]
                          },
                          [_vm._v("Status")]
                        ),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(_vm.ticket.status))])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "header-ticket-buttons top-20 mbb-10" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-blue",
                        attrs: { to: { name: "tickets" } }
                      },
                      [
                        _c(
                          "span",
                          {
                            directives: [
                              { name: "translate", rawName: "v-translate" }
                            ]
                          },
                          [_vm._v("Back")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ],
                        staticClass: "btn btn-blue btn-primary",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            $event.stopPropagation()
                            _vm.showFormAddArticle = true
                          }
                        }
                      },
                      [_vm._v("Reply")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._l(_vm.ticket.articles, function(article) {
                  return _c("div", { staticClass: "articles" }, [
                    _c("div", { staticClass: "article" }, [
                      _c(
                        "div",
                        {
                          staticStyle: { cursor: "pointer" },
                          on: {
                            click: function($event) {
                              _vm.changeArticle(article.id)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(article.date) +
                              "  "
                          ),
                          _vm.currentArticle != article.id
                            ? _c("span", { staticClass: "caret" })
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.currentArticle == article.id,
                              expression: "currentArticle == article.id"
                            }
                          ]
                        },
                        [
                          _vm._l(article.attachments, function(attachment) {
                            return article.attachments.length > 0
                              ? _c("div", { staticClass: "attachments" }, [
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href:
                                          "/ticket/attachment/" +
                                          _vm.ticketNumber +
                                          "/" +
                                          article.id +
                                          "/" +
                                          attachment.filename,
                                        target: "_blank"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(attachment.filename) +
                                          " (" +
                                          _vm._s(attachment.size) +
                                          ")"
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "body" }, [
                            _c("pre", [_vm._v(_vm._s(article.body) + " ")])
                          ])
                        ],
                        2
                      )
                    ])
                  ])
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "header-ticket-buttons top-10" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-blue",
                        attrs: { to: { name: "tickets" } }
                      },
                      [
                        _c(
                          "span",
                          {
                            directives: [
                              { name: "translate", rawName: "v-translate" }
                            ]
                          },
                          [_vm._v("Back")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ],
                        staticClass: "btn btn-blue btn-primary",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            $event.stopPropagation()
                            _vm.showFormAddArticle = true
                          }
                        }
                      },
                      [_vm._v("Reply")]
                    )
                  ],
                  1
                )
              ],
              2
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.showFormAddArticle
        ? _c("form-add-article", {
            attrs: { ticketNumber: _vm.ticketNumber },
            on: {
              close: function($event) {
                _vm.showFormAddArticle = false
              }
            }
          })
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-235b7443", module.exports)
  }
}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(278)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(280)
/* template */
var __vue_template__ = __webpack_require__(286)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-235b7443"
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
Component.options.__file = "resources\\assets\\js\\pages\\Ticket.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-235b7443", Component.options)
  } else {
    hotAPI.reload("data-v-235b7443", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 91:
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'userMenu',
    props: {},
    data: function data() {
        return {
            checked: false
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])("servers", ["countServers"]), {
        'currentRoute': function currentRoute() {
            return this.$route.name;
        }
    }),
    methods: {},
    locales: {
        ru: {
            'My Account': 'Мой аккаунт',
            'Tickets': 'Тикеты',
            'Documents': 'Документы',
            'Order': 'Заказ'
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
  return _c("section", { staticClass: "partner-menu" }, [
    _c("input", {
      attrs: { id: "partner-menu__checkbox", type: "checkbox" },
      domProps: { checked: _vm.checked }
    }),
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
            class: { active: _vm.currentRoute == "shop" }
          },
          [
            _c(
              "router-link",
              {
                directives: [{ name: "translate", rawName: "v-translate" }],
                attrs: { to: { name: "shop", params: { makeDeal: "new" } } }
              },
              [_vm._v("Order")]
            )
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
        _vm.countServers > 0
          ? _c(
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
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.countServers > 0
          ? _c(
              "div",
              {
                staticClass: "partner-menu__item",
                class: {
                  active:
                    _vm.currentRoute == "documents" ||
                    _vm.currentRoute == "supportHtml" ||
                    _vm.currentRoute == "support_body"
                }
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
          : _vm._e()
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