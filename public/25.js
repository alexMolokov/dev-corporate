webpackJsonp([25],{

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(323)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(325)
/* template */
var __vue_template__ = __webpack_require__(326)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c0720570"
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
Component.options.__file = "resources\\assets\\js\\components\\formConfirmInvoice.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c0720570", Component.options)
  } else {
    hotAPI.reload("data-v-c0720570", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(324);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("4bc92da8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c0720570\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./formConfirmInvoice.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c0720570\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./formConfirmInvoice.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n.inputfile[data-v-c0720570] {\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: 2;\n    border: 1px solid black;\n}\n.inputfile + label[data-v-c0720570] {\n    font-size: 11px;\n    text-transform: uppercase;\n    font-weight: 500;\n    color: white;\n\n    display: inline-block;\n    padding: 7px 20px;\n    border-radius: 3px;\n    cursor: pointer;\n    background-color: #00a0c8;\n}\n.inputfile + label > img[data-v-c0720570] {\n    display: inline-block;\n    margin: 0 5px 5px 5px;\n    width: 20px;\n    height: 20px;\n    color: #fff;\n}\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modalWindow_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modalWindow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__modalWindow_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_ajax_form_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_ajax_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_ajax_form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_error_inform_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_error_inform_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mixins_error_inform_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_loading_inform_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_loading_inform_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mixins_loading_inform_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'form-confirm-invoice',
    components: {
        "modal-window": __WEBPACK_IMPORTED_MODULE_0__modalWindow_vue___default.a,
        "error-inform": __WEBPACK_IMPORTED_MODULE_2__mixins_error_inform_vue___default.a,
        "loading-inform": __WEBPACK_IMPORTED_MODULE_3__mixins_loading_inform_vue___default.a
    },
    computed: {
        labelForFiles: function labelForFiles() {
            if (this.files.length > 1) {
                return this.files.length + " " + this.$translate.text("files selected");
            } else if (this.files.length == 0) {
                return this.$translate.text("Select file");
            } else {
                return this.files[0].name;
            }
        }
    },
    props: {
        invoice_id: { "type": String }
    },
    data: function data() {
        return {
            id: "confirm-invoice",
            url: "/shop/invoice/confirm",
            redirect: false,

            files: []
        };
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_ajax_form_vue___default.a],
    locales: {
        ru: {
            'Confirming file has been uploaded.': 'Файл для подтверждения платежа успешно загружен.',
            'Confirm Payment': 'Подтвердить платеж',
            "Send": "Отправить",
            "Select file": "Выберите файл",
            "Accepted  formats": "Допустимые форматы",
            "If you want to confirm the payment, you have to upload the confirming file.": "Для подтвержения платежа загрузите подтверждающий файл."
        }
    },
    methods: {
        validate: function validate() {
            var _this = this;

            var formData = new FormData();
            var data = { "id": this.invoice_id };

            for (var key in data) {
                formData.append(key, data[key]);
            }var headers = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };

            if (this.files.length > 0) {
                for (var i = 0; i < this.files.length; i++) {
                    var file = this.files[i];

                    formData.append('files[' + i + ']', file);
                }
            }

            this.send(this.url, formData, function (data) {
                _this.$emit("confirm-invoice");
            }, headers);
        },
        handleFileUploads: function handleFileUploads() {
            if (typeof this.$refs.files != "undefined") {
                this.files = this.$refs.files.files;
            }
        }
    }
});

/***/ }),

/***/ 326:
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
      attrs: { id: _vm.id, show: true },
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
        [_vm._v("Confirm Payment")]
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
                [_vm._v("Confirming file has been uploaded.")]
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
              _c("div", { staticClass: "col-md-12 top-20" }, [
                _c(
                  "div",
                  {
                    directives: [{ name: "translate", rawName: "v-translate" }]
                  },
                  [
                    _vm._v(
                      "If you want to confirm the payment, you have to upload the confirming file."
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "span",
                    {
                      directives: [
                        { name: "translate", rawName: "v-translate" }
                      ]
                    },
                    [_vm._v("Accepted  formats")]
                  ),
                  _vm._v(" - .jpg, .pdf")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "top-40",
                    staticStyle: { position: "relative" },
                    attrs: { align: "center" }
                  },
                  [
                    _c("input", {
                      ref: "files",
                      staticClass: "inputfile",
                      attrs: { type: "file", id: "files", accept: ".pdf,.jpg" },
                      on: {
                        change: function($event) {
                          _vm.handleFileUploads()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "files" } }, [
                      _c("img", {
                        attrs: { src: "/images/icons/icon-download.svg" }
                      }),
                      _c(
                        "span",
                        {
                          directives: [
                            { name: "translate", rawName: "v-translate" }
                          ]
                        },
                        [_vm._v(_vm._s(_vm.labelForFiles))]
                      )
                    ])
                  ]
                )
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
              [_vm._v("Send")]
            )
          ]),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "invoice_id" },
            domProps: { value: _vm.invoice_id }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-c0720570", module.exports)
  }
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(84)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(86)
/* template */
var __vue_template__ = __webpack_require__(87)
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

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("81548b54", content, false, {});
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

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n.modal[data-v-12158cf6] {\n    overflow: auto;\n    overflow-y: scroll;\n}\n", ""]);

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

/***/ 87:
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

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(89)
/* template */
var __vue_template__ = __webpack_require__(90)
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

/***/ 89:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 90:
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