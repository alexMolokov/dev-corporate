webpackJsonp([3],{

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(84)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(86)
/* template */
var __vue_template__ = __webpack_require__(87)
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
Component.options.__file = "resources\\assets\\js\\pages\\Download.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98a3f002", Component.options)
  } else {
    hotAPI.reload("data-v-98a3f002", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(60)
/* template */
var __vue_template__ = __webpack_require__(61)
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

/***/ 60:
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

/***/ 61:
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

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("34141ec4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-98a3f002\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Download.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-98a3f002\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Download.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 86:
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

var userMenu = __webpack_require__(59);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'download',
    components: {
        "user-menu": userMenu
    },
    data: function data() {
        return {};
    },


    locales: {
        ru: {}
    }

});

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "user-download-page" } }, [
      _c("div", { attrs: { id: "modal-list" } })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-98a3f002", module.exports)
  }
}

/***/ })

});