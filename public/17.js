webpackJsonp([17],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LocalServer;
function LocalServer(data) {
    this.id = data.id;
    this.name = data.name;
    this.release = data.release;
    this.os = data.os;
    this.edition = data.edition;

    this.serverModules = data.serverModules;
    this.added = new Date(data.added);
    this.licenses = [];

    this.hasLicenseRequest = data.hasLicenseRequest || false;
    this.hasCertificateRequest = data.hasCertificateRequest || false;
    this.hasCertificate = data.hasCertificate || false;

    this.addLicense = function (license) {
        this.licenses.push(license);
    };

    this.getLicense = function (licenseID) {
        for (var i = 0; i < this.licenses.length; i++) {
            if (this.licenses[i].id == licenseID) return this.licenses[i];
        }
    };

    this.getAdded = function () {
        return this.added.toISOString().substring(0, 10);
    };
}

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = License;
function License(data) {
    this.id = data.id;
    this.status = data.status;
    this.users = data.users;
    this.validTill;
    this.validFrom = new Date(data.validFrom);
    this.valid = data.valid;
    this.serverModules = data.serverModules;
    this.signed = data.signed;
    this.test = data.test;

    if (data.validTill != "") {
        this.validTill = new Date(data.validTill);
    }

    this.added = new Date(data.added);

    this.getAdded = function () {
        return this.added.toISOString().substring(0, 10);
    };

    this.getValidTill = function () {
        if (typeof this.validTill == "undefined") return "";

        return this.validTill.toISOString().substring(0, 10);
    };
}

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(290)
/* template */
var __vue_template__ = __webpack_require__(291)
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
Component.options.__file = "resources\\assets\\js\\components\\formGetTrial.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54973b1b", Component.options)
  } else {
    hotAPI.reload("data-v-54973b1b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modalWindow_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modalWindow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__modalWindow_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_states__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_LocalServer__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_License__ = __webpack_require__(107);
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



var ajaxform = __webpack_require__(15);
var errorInform = __webpack_require__(76);
var loadingInform = __webpack_require__(84);




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'form-get-trial',
    props: {
        choice: { type: Object },
        basket: { type: Map }
    },
    computed: {
        display: function display() {
            if (this.state == this.states.ERROR) return "none";
            return "block";
        }
    },
    components: {
        "modal-window": __WEBPACK_IMPORTED_MODULE_0__modalWindow_vue___default.a,
        "error-inform": errorInform,
        "loading-inform": loadingInform
    },
    data: function data() {
        return {
            id: "corporateGetTrial",
            url: "servers/get-trial",
            redirect: false,
            visible: "hidden",
            states: __WEBPACK_IMPORTED_MODULE_1__mixins_states__["a" /* STATES */]
        };
    },
    mounted: function mounted() {
        document.getElementById('next_get_trial').click();
    },

    mixins: [ajaxform],
    locales: {
        ru: {
            "What's next?": "Что дальше?",
            "Download the VIPole Enterprise installation files": "Скачайте установочные файлы VIPole Enterprise",
            "and additional components for the selected server platform": " и дополнительные компоненты для выбранной серверной платформы",
            "Review the installation instructions": "Изучите инструкцию по установке",
            "and complete the necessary installation steps": "и выполните необходимые этапы установки",
            "During the installation, generate a license request file and upload it to your profile page to get the license file.": "В ходе установки сгенерируйте файл запроса лицензии и загрузите его в личный кабинет для получения файл лицензии.",
            "Apply the license file and complete the installation process on your server.": "Активируйте файл лицензии и завершите процесс установки на вашем сервере.",
            "If you have any questions while install ing or using VIPole Enterprise or client applications": "Если при установке или использовании VIPole Enterprise у вас возникают вопросы, мы сможем оперативно вам помочь, если вы сообщите нам о проблеме",
            "create a support ticket": "создав обращение в службу поддержки",
            "so we can help you promptly": "",
            "Loading...": "Загрузка..."
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapMutations */])("servers", ["addServer", "cleanServers"]), {
        redirectTo: function redirectTo() {
            this.$router.push({ name: "userpage" });
        },
        validate: function validate() {
            var _this = this;

            var basketProducts = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.basket.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var key = _step.value;

                    basketProducts.push(key);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var data = { os: this.choice.os, server: this.choice.server, basket: basketProducts };

            this.send(this.url, data, function (data) {
                _this.visible = "visible";
                _this.cleanServers();
                for (var serverId in data) {
                    var server = new __WEBPACK_IMPORTED_MODULE_3__classes_LocalServer__["a" /* LocalServer */](data[serverId]);

                    for (var licenseId in data[serverId]["licenses"]) {
                        server.addLicense(new __WEBPACK_IMPORTED_MODULE_4__classes_License__["a" /* License */](data[serverId]["licenses"][licenseId]));
                    }
                    _this.addServer(server);
                }
            });
        }
    })
});

/***/ }),

/***/ 291:
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
      attrs: { id: _vm.id, show: true, wide: true },
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
        [_vm._v("Get trial")]
      ),
      _vm._v(" "),
      _vm.state == _vm.states.LOADING
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
      _c("div", { style: { visibility: _vm.visible, display: _vm.display } }, [
        _c(
          "h3",
          { directives: [{ name: "translate", rawName: "v-translate" }] },
          [_vm._v("What's next?")]
        ),
        _vm._v(" "),
        _c("ol", [
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: { name: "download" } } }, [
                _vm._v("Download the VIPole Enterprise installation files")
              ]),
              _vm._v(" "),
              _c("span", [
                _vm._v(
                  "and additional components for the selected server platform"
                )
              ]),
              _vm._v(".\n            ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: { name: "documents" } } }, [
                _vm._v("Review the installation instructions")
              ]),
              _vm._v(" "),
              _c("span", [
                _vm._v("and complete the necessary installation steps")
              ]),
              _vm._v(".\n            ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { directives: [{ name: "translate", rawName: "v-translate" }] },
            [
              _vm._v(
                "During the installation, generate a license request file and upload it to your profile page to get the license file."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            { directives: [{ name: "translate", rawName: "v-translate" }] },
            [
              _vm._v(
                "Apply the license file and complete the installation process on your server."
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "p",
          [
            _c("span", [
              _vm._v(
                "If you have any questions while installing or using VIPole Enterprise or client applications"
              )
            ]),
            _vm._v(",\n            "),
            _c("router-link", { attrs: { to: { name: "tickets" } } }, [
              _vm._v("create a support ticket")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("so we can help you promptly")]),
            _vm._v(".\n        ")
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "modal-footer" }, [
          _c(
            "button",
            { staticClass: "btn btn-primary", on: { click: _vm.redirectTo } },
            [_vm._v("Ok")]
          )
        ])
      ]),
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
          _c("error-inform", { attrs: { err: _vm.err, state: _vm.state } }),
          _vm._v(" "),
          _vm.visible == "hidden"
            ? _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    directives: [{ name: "translate", rawName: "v-translate" }],
                    staticClass: "btn btn-primary",
                    staticStyle: { visibility: "hidden" },
                    attrs: { type: "submit", id: "next_get_trial" },
                    on: { click: _vm.validate }
                  },
                  [_vm._v("Next")]
                )
              ])
            : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-54973b1b", module.exports)
  }
}

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

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(80)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(82)
/* template */
var __vue_template__ = __webpack_require__(83)
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

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("81548b54", content, false, {});
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

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.modal[data-v-12158cf6] {\n    overflow: auto;\n    overflow-y: scroll;\n}\n", ""]);

// exports


/***/ }),

/***/ 82:
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

/***/ 83:
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

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(85)
/* template */
var __vue_template__ = __webpack_require__(86)
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

/***/ 85:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 86:
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