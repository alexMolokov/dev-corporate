webpackJsonp([32],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("58947d41", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7264ebb0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Support.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7264ebb0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Support.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 180:
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

//const userMenu = require('../components/userMenu.vue');

var treeMenu = __webpack_require__(293);
var ajaxform = __webpack_require__(15);


var _data = {
    name: 'My Tree',
    root: true,
    children: [{ name: 'hello', id: "8716705" }, { name: 'wat', id: "8716703" }, {
        name: 'child folder',
        children: [{
            name: 'child folder',
            children: [{ name: 'hello' }, { name: 'wat' }]
        }, { name: 'hello' }, { name: 'wat' }, {
            name: 'child folder',
            children: [{ name: 'hello' }, { name: 'wat' }]
        }]
    }]
};

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'supportHtml',
    created: function created() {
        this.edition = this.$route.params.edition;
        this.os = this.$route.params.os;
    },
    data: function data() {
        return {
            menu: _data,
            body: "",
            edition: "",
            os: ""

        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])(["lang"])),
    mixins: [ajaxform],

    components: {
        'tree-menu': treeMenu

    },
    methods: {
        clickMenu: function clickMenu(id) {
            var path = '/support/' + this.lang + '/' + this.edition + '/' + this.os + '/body/' + id;
            this.uploadInfo(path, {}, function (data) {});
        }
    }

});

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "v-user-cabinet-ver1", attrs: { id: "support-page" } },
    [
      _c(
        "ul",
        { attrs: { id: "demo" } },
        [
          _c("tree-menu", {
            staticClass: "item",
            attrs: { model: _vm.menu },
            on: { clickmenu: _vm.clickMenu }
          })
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-7264ebb0", module.exports)
  }
}

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(294)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(296)
/* template */
var __vue_template__ = __webpack_require__(297)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-750a79f4"
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
Component.options.__file = "resources\\assets\\js\\components\\treeMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-750a79f4", Component.options)
  } else {
    hotAPI.reload("data-v-750a79f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("54534f8c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-750a79f4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./treeMenu.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-750a79f4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./treeMenu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 296:
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
//
//
//
//
//
//
//
//
//
//
//
//
//

//const userMenu = require('../components/userMenu.vue');

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'tree-menu',
    props: {
        model: Object
    },
    data: function data() {
        return {
            open: false
        };
    },
    computed: {
        isFolder: function isFolder() {
            return this.model.children && this.model.children.length;
        }
    },
    methods: {
        toggle: function toggle(id) {
            this.$parent.$emit('clickmenu', id);
            if (this.isFolder) {
                this.open = !this.open;
            }
        }

    }
});

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    !_vm.model.root
      ? _c("li", [
          _c(
            "div",
            {
              class: { bold: _vm.isFolder },
              on: {
                click: function($event) {
                  _vm.toggle(_vm.model.id)
                }
              }
            },
            [
              _vm._v("\n       " + _vm._s(_vm.model.name) + "\n       "),
              _vm.isFolder
                ? _c("span", [_vm._v("[" + _vm._s(_vm.open ? "-" : "+") + "]")])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _vm.isFolder
            ? _c(
                "ul",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.open,
                      expression: "open"
                    }
                  ]
                },
                _vm._l(_vm.model.children, function(model, index) {
                  return _c("tree-menu", {
                    key: index,
                    staticClass: "item",
                    attrs: { model: model }
                  })
                })
              )
            : _vm._e()
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.model.root
      ? _c(
          "span",
          _vm._l(_vm.model.children, function(model, index) {
            return _c("tree-menu", {
              key: index,
              staticClass: "item",
              attrs: { model: model }
            })
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-750a79f4", module.exports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(178)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(180)
/* template */
var __vue_template__ = __webpack_require__(181)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7264ebb0"
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
Component.options.__file = "resources\\assets\\js\\pages\\Support.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7264ebb0", Component.options)
  } else {
    hotAPI.reload("data-v-7264ebb0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});