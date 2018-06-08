webpackJsonp([4],{

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(244);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("33998ff7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ba10a26\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Shop.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ba10a26\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Shop.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nh3[data-v-1ba10a26] {\n  font-size: 21px;\n  margin-top: 30px;\n}\n#user-order-page hr[data-v-1ba10a26] {\n  margin: 40px 0;\n}\n#user-order-page > h3[data-v-1ba10a26]:first-child {\n  margin-top: 10px;\n}\n#user-order-page .shop-footer[data-v-1ba10a26] {\n  text-align: right;\n}\n#user-order-page .shop-footer .price[data-v-1ba10a26] {\n    color: #67ab49;\n    font-size: 30px;\n    font-weight: bold;\n    display: inline-block;\n}\n#user-order-page .shop-footer .price sup[data-v-1ba10a26] {\n      font-size: .5em;\n      vertical-align: baseline;\n      position: relative;\n      top: -.6666667em;\n}\n#users .field-number[data-v-1ba10a26] {\n  width: 182px;\n  margin-top: 20px;\n  display: block;\n}\n#users .field-number > *[data-v-1ba10a26] {\n    display: inline;\n    float: left;\n}\n#users .field-number .minus[data-v-1ba10a26] {\n    padding: 0px 9px 1px;\n    border-right: 0;\n    border-radius: 3px 0 0 3px;\n    border: 1px solid #e8e8e8;\n    font-size: 26px;\n    font-weight: 700;\n    color: #00a0c8;\n}\n#users .field-number .minus[data-v-1ba10a26]:after {\n      content: \"\\2014\";\n}\n#users .field-number .add[data-v-1ba10a26] {\n    padding: 0px 12px 1px 11px;\n    border-left: 0;\n    border-radius: 0 3px 3px 0;\n    border: 1px solid #e8e8e8;\n    font-size: 26px;\n    font-weight: 700;\n    color: #00a0c8;\n}\n#users .field-number .add[data-v-1ba10a26]:after {\n      content: \"+\";\n}\n#users .field-number input[data-v-1ba10a26] {\n    width: 100px;\n    height: 40px;\n    color: #000;\n    text-align: center;\n    border: 1px solid #e8e8e8;\n    font-size: 18px;\n    font-weight: 700;\n}\n#users .number .min[data-v-1ba10a26] {\n  clear: both;\n  font-size: 14px;\n  color: #888;\n  padding-top: 7px;\n  margin-bottom: 4px;\n}\n#os > div[data-v-1ba10a26], #servers > div[data-v-1ba10a26], #periods > div[data-v-1ba10a26], #services > div[data-v-1ba10a26] {\n  padding: 4px;\n}\n#os input[type=\"radio\"][data-v-1ba10a26], #servers input[type=\"radio\"][data-v-1ba10a26], #periods input[type=\"radio\"][data-v-1ba10a26], #services input[type=\"radio\"][data-v-1ba10a26] {\n  margin-right: 3px;\n}\n#addons label[data-v-1ba10a26], #os label[data-v-1ba10a26], #servers label[data-v-1ba10a26], #periods label[data-v-1ba10a26], #services label[data-v-1ba10a26] {\n  font-size: 18px;\n  color: #666;\n  font-weight: 400;\n}\n#addons .table[data-v-1ba10a26], #os .table[data-v-1ba10a26], #servers .table[data-v-1ba10a26], #periods .table[data-v-1ba10a26], #services .table[data-v-1ba10a26] {\n  display: table;\n}\n#addons .table > div[data-v-1ba10a26]:not(:first-child), #os .table > div[data-v-1ba10a26]:not(:first-child), #servers .table > div[data-v-1ba10a26]:not(:first-child), #periods .table > div[data-v-1ba10a26]:not(:first-child), #services .table > div[data-v-1ba10a26]:not(:first-child) {\n    border-top: none;\n}\n#addons .table > div[data-v-1ba10a26], #os .table > div[data-v-1ba10a26], #servers .table > div[data-v-1ba10a26], #periods .table > div[data-v-1ba10a26], #services .table > div[data-v-1ba10a26] {\n    /*display: table-row;*/\n    border: 1px solid #ccc;\n    padding: 10px;\n}\n#addons .table > div[data-v-1ba10a26]:hover, #os .table > div[data-v-1ba10a26]:hover, #servers .table > div[data-v-1ba10a26]:hover, #periods .table > div[data-v-1ba10a26]:hover, #services .table > div[data-v-1ba10a26]:hover {\n      background-color: #f5f5f5;\n}\n#addons .table > div input[type=\"checkbox\"][data-v-1ba10a26], #os .table > div input[type=\"checkbox\"][data-v-1ba10a26], #servers .table > div input[type=\"checkbox\"][data-v-1ba10a26], #periods .table > div input[type=\"checkbox\"][data-v-1ba10a26], #services .table > div input[type=\"checkbox\"][data-v-1ba10a26] {\n      margin-right: 3px;\n}\n#addons .table > div span[data-v-1ba10a26]:first-child, #os .table > div span[data-v-1ba10a26]:first-child, #servers .table > div span[data-v-1ba10a26]:first-child, #periods .table > div span[data-v-1ba10a26]:first-child, #services .table > div span[data-v-1ba10a26]:first-child {\n      width: 78%;\n      display: inline-block;\n}\n#addons .table > div span[data-v-1ba10a26]:last-child, #os .table > div span[data-v-1ba10a26]:last-child, #servers .table > div span[data-v-1ba10a26]:last-child, #periods .table > div span[data-v-1ba10a26]:last-child, #services .table > div span[data-v-1ba10a26]:last-child {\n      width: 20%;\n      display: inline-block;\n      text-align: right;\n      padding-right: 10px;\n}\n#addons .table .price[data-v-1ba10a26], #os .table .price[data-v-1ba10a26], #servers .table .price[data-v-1ba10a26], #periods .table .price[data-v-1ba10a26], #services .table .price[data-v-1ba10a26] {\n    color: #67ab49;\n    font-size: 22px;\n    font-weight: bold;\n    display: inline-block;\n}\n", ""]);

// exports


/***/ }),

/***/ 245:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var userMenu = __webpack_require__(72);
var ajaxform = __webpack_require__(14);


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'order',
    props: {
        makeDeal: { type: String },
        server: { type: String, default: "" },
        license: { type: String, default: "" }
    },
    components: {
        "user-menu": userMenu
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])("shop", ["products", "choice"]), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])("shop", ["getServers", "getServices", "getAddons", "getOs", "getPeriods"])),
    created: function created() {
        var _this = this;

        if (this.products.length == 0) {
            this.uploadInfo("/shop/get-product-list", {}, function (data) {
                for (var productId in data.products) {
                    _this.addProduct(_extends({ "id": productId }, data.products[productId]));
                }

                for (var period in data.periods) {
                    _this.addPeriod(_extends({ "id": period }, data.periods[period]));
                }

                for (var os in data.os) {
                    _this.addOs(_extends({ "id": os }, data.os[os]));
                }

                _this.setCurrency(data.currency);
            });
        }
    },

    mixins: [ajaxform],
    data: function data() {
        return {};
    },


    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapMutations */])("shop", ["addProduct", "addPeriod", "addOs", "setCurrency", "setRadio", "setPriceType", "addToBasket", "removeFromBasket"]), {
        addCheckbox: function addCheckbox(e) {
            if (e.target.checked) {
                this.addToBasket(e.target.value);
            } else {
                this.removeFromBasket(e.target.value);
            }
        },
        checkout: function checkout() {
            alert("checkout");
        },
        trial: function trial() {
            alert("trial");
        },
        setMaintenance: function setMaintenance(period) {
            this.setRadio({ 'id': 'period', 'value': period });
            this.setPriceType(period);
        }
    }),

    locales: {
        ru: {}
    }

});

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "user-order-page" } }, [
    _c("h3", [
      _vm._v("1. "),
      _c(
        "span",
        { directives: [{ name: "translate", rawName: "v-translate" }] },
        [_vm._v("Maintenance period")]
      ),
      _vm._v(
        " " +
          _vm._s(_vm.makeDeal) +
          " " +
          _vm._s(_vm.server) +
          " " +
          _vm._s(_vm.license)
      )
    ]),
    _vm._v(" "),
    _c(
      "section",
      { attrs: { id: "periods" } },
      _vm._l(_vm.getPeriods, function(item) {
        return _c("div", [
          _c("input", {
            attrs: { type: "radio", name: "period", id: "period_" + item.id },
            domProps: { value: item.id, checked: _vm.choice.period == item.id },
            on: {
              click: function($event) {
                _vm.setMaintenance(item.id)
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "period_" + item.id } }, [
            _vm._v(_vm._s(item.name))
          ])
        ])
      })
    ),
    _vm._v(" "),
    _c("h3", [
      _vm._v("2. "),
      _c(
        "span",
        { directives: [{ name: "translate", rawName: "v-translate" }] },
        [_vm._v("Choose your deployment")]
      )
    ]),
    _vm._v(" "),
    _c(
      "section",
      { attrs: { id: "servers" } },
      _vm._l(_vm.getServers, function(item) {
        return _c("div", [
          _c("input", {
            attrs: {
              type: "radio",
              name: "deployment",
              id: "deployment_" + item.id
            },
            domProps: { value: item.id, checked: _vm.choice.server == item.id },
            on: {
              click: function($event) {
                _vm.setRadio({ id: "server", value: item.id })
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "deployment_" + item.id } }, [
            _vm._v(_vm._s(item.name))
          ])
        ])
      })
    ),
    _vm._v(" "),
    _c("h3", [
      _vm._v("3. "),
      _c(
        "span",
        { directives: [{ name: "translate", rawName: "v-translate" }] },
        [_vm._v("Choose Operational system")]
      )
    ]),
    _vm._v(" "),
    _c(
      "section",
      { attrs: { id: "os" } },
      _vm._l(_vm.getOs, function(item) {
        return _c("div", [
          _c("input", {
            attrs: { type: "radio", name: "os", id: "os_" + item.id },
            domProps: { value: item.id, checked: _vm.choice.os == item.id },
            on: {
              click: function($event) {
                _vm.setRadio({ id: "os", value: item.id })
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "os_" + item.id } }, [
            _vm._v(_vm._s(item.name))
          ])
        ])
      })
    ),
    _vm._v(" "),
    _c("h3", [
      _vm._v("4. "),
      _c(
        "span",
        { directives: [{ name: "translate", rawName: "v-translate" }] },
        [_vm._v("User tier")]
      )
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("h3", [
      _vm._v("5. "),
      _c(
        "span",
        { directives: [{ name: "translate", rawName: "v-translate" }] },
        [_vm._v("Choose optional addons")]
      )
    ]),
    _vm._v(" "),
    _c("section", { attrs: { id: "addons" } }, [
      _c(
        "div",
        { staticClass: "table" },
        _vm._l(_vm.getAddons, function(item) {
          return _c("div", [
            _c("span", [
              _c("input", {
                attrs: {
                  type: "checkbox",
                  name: "addons",
                  id: "addons_" + item.id
                },
                domProps: { value: item.id },
                on: {
                  click: function($event) {
                    _vm.addCheckbox($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "addons_" + item.id } }, [
                _vm._v(_vm._s(item.name))
              ])
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "price" }, [
              item[_vm.choice.price] > 0
                ? _c("span", [
                    _c("sup", [_vm._v("$")]),
                    _vm._v(_vm._s(item[_vm.choice.price]))
                  ])
                : _vm._e()
            ])
          ])
        })
      )
    ]),
    _vm._v(" "),
    _c("h3", [
      _vm._v("6. "),
      _c(
        "span",
        { directives: [{ name: "translate", rawName: "v-translate" }] },
        [_vm._v("Choose optional services")]
      )
    ]),
    _vm._v(" "),
    _c("section", { attrs: { id: "services" } }, [
      _c(
        "div",
        { staticClass: "table" },
        _vm._l(_vm.getServices, function(item) {
          return _c("div", [
            _c("span", [
              _c("input", {
                attrs: {
                  type: "checkbox",
                  name: "addons",
                  id: "service_" + item.id
                },
                domProps: { value: item.id },
                on: {
                  click: function($event) {
                    _vm.addCheckbox($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "service_" + item.id } }, [
                _vm._v(_vm._s(item.name))
              ])
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "price" }, [
              item[_vm.choice.price] > 0
                ? _c("span", [
                    _c("sup", [_vm._v("$")]),
                    _vm._v(_vm._s(item[_vm.choice.price]))
                  ])
                : _vm._e()
            ])
          ])
        })
      )
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "shop-footer" }, [
      _c(
        "a",
        {
          directives: [{ name: "translate", rawName: "v-translate" }],
          staticClass: "btn btn-middle btn-blue",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              $event.stopPropagation()
              return _vm.checkout($event)
            }
          }
        },
        [_vm._v("Check out")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          directives: [{ name: "translate", rawName: "v-translate" }],
          staticClass: "btn btn-middle btn-blue",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              $event.stopPropagation()
              return _vm.trial($event)
            }
          }
        },
        [_vm._v("Next")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "subtotal" }, [
        _c(
          "h3",
          { directives: [{ name: "translate", rawName: "v-translate" }] },
          [_vm._v("Subtotal (USD)")]
        ),
        _vm._v(" "),
        _vm._m(1)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { attrs: { id: "users" } }, [
      _c("div", { staticClass: "number" }, [
        _c("div", { staticClass: "field-number" }, [
          _c("div", { staticClass: "minus" }),
          _vm._v(" "),
          _c("input", {
            attrs: {
              name: "user_number",
              type: "text",
              value: "5",
              "aria-required": "true",
              "aria-invalid": "false"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "add" })
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "min" }, [
          _c("span", { attrs: { "data-v-53491cc2": "" } }, [_vm._v("minimum")]),
          _vm._v(" 5 "),
          _c("span", [_vm._v("users")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "price" }, [
      _c("sup", [_vm._v("$")]),
      _vm._v("100")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ba10a26", module.exports)
  }
}

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(243)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(245)
/* template */
var __vue_template__ = __webpack_require__(246)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1ba10a26"
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
Component.options.__file = "resources\\assets\\js\\pages\\Shop.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ba10a26", Component.options)
  } else {
    hotAPI.reload("data-v-1ba10a26", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(73)
/* template */
var __vue_template__ = __webpack_require__(74)
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

/***/ 73:
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

/***/ 74:
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