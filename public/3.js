webpackJsonp([3],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("42531d60", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-123bcd7c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-123bcd7c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n.group-attr .info-value span[data-v-123bcd7c]:last-child {\n  margin-left: 10px;\n}\n.group-attr .info-value span[data-v-123bcd7c]:first-child {\n  color: #666;\n}\n.info-head .glyphicon-pencil[data-v-123bcd7c] {\n  font-size: 12px;\n  display: inline-block;\n  margin-left: 10px;\n}\n.v-user-cabinet-ver1 .partner-menu .partner-menu__item[data-v-123bcd7c] {\n  flex-grow: 1;\n}\n.v-user-cabinet-ver1 .partner-menu .partner-menu__item[data-v-123bcd7c]:last-child {\n  flex-grow: 5;\n}\n.flex-row .user-card[data-v-123bcd7c]:last-child {\n  flex-grow: 1.5;\n}\n.server-info[data-v-123bcd7c] {\n  padding: 10px 20px 10px 40px;\n}\n@media (max-width: 767px) {\n.server-info[data-v-123bcd7c] {\n      display: block;\n}\n}\n.server-info > div[data-v-123bcd7c] {\n    margin-bottom: 0px;\n}\n.server-info > div > div[data-v-123bcd7c] {\n    padding: 2px 10px;\n    color: #999;\n}\n.server-info > div > div span[data-v-123bcd7c] {\n      display: inline-block;\n      margin-right: 5px;\n}\n.server-info > div > div span[data-v-123bcd7c]:first-child:after {\n      content: \":\";\n      margin-right: 5px;\n}\n.server-info .server-info-name[data-v-123bcd7c] {\n    color: #000;\n    font-size: 18px;\n    padding: 2px 0px;\n}\n.server-info .server-info-add-license[data-v-123bcd7c] {\n    text-align: right;\n}\n@media (max-width: 767px) {\n.server-info .server-info-add-license[data-v-123bcd7c] {\n        text-align: left;\n        margin-left: 10px;\n        padding: 2px 0px;\n}\n}\n.server-license-info .head.flex-row a[data-v-123bcd7c] {\n  margin: -3px 0 0 20px;\n}\n.server-license-info .head.flex-row > *[data-v-123bcd7c] {\n  margin-bottom: 0px;\n}\n@media (max-width: 600px) {\n.server-license-info .head.flex-row a.btn[data-v-123bcd7c] {\n    min-width: 100px;\n}\n}\n@media (max-width: 400px) {\n.server-license-info .head.flex-row[data-v-123bcd7c] {\n    height: auto;\n}\n.server-license-info .head.flex-row span[data-v-123bcd7c], .server-license-info .head.flex-row a[data-v-123bcd7c] {\n      display: block;\n}\n.server-license-info .head.flex-row span[data-v-123bcd7c] {\n      margin-bottom: 10px;\n}\n.server-license-info .head.flex-row a[data-v-123bcd7c] {\n      width: 150px;\n      margin-left: 0px;\n}\n}\n.server-license-info .product-license[data-v-123bcd7c] {\n  width: 100%;\n  font-size: 18px;\n  border-bottom: 1px solid #eee;\n  color: #000;\n}\n.server-license-info .product-license > div[data-v-123bcd7c] {\n    padding: 10px 20px 10px 40px;\n}\n.server-license-info .table th[data-v-123bcd7c] {\n  font-size: 18px;\n  font-weight: normal;\n  color: #000;\n  text-align: center;\n}\n.server-license-info .table th[data-v-123bcd7c]:first-child {\n    text-align: left;\n}\n.server-license-info .table th.blue[data-v-123bcd7c] {\n    color: #00a0c8;\n}\n.server-license-info .table tbody tr > td[data-v-123bcd7c] {\n  text-align: center;\n}\n.server-license-info .table tbody tr > td[data-v-123bcd7c]:first-child {\n    text-align: left;\n}\n.server-license-info .table tbody .license-key span[data-v-123bcd7c] {\n  color: #000;\n  font-weight: 700;\n  font-size: 14px;\n  padding-bottom: 5px;\n}\n.server-license-info .table tbody .license-key a[data-v-123bcd7c] {\n  font-size: 14px;\n}\n.server-license-info .table tbody .license-number[data-v-123bcd7c], .server-license-info .table tbody .license-date[data-v-123bcd7c] {\n  color: #999;\n  font-weight: 500;\n  font-size: 14px;\n  padding: 2px 15px;\n}\n.server-license-info .table-responsive[data-v-123bcd7c] {\n  padding: 20px 0px 10px 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_LocalServer__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_License__ = __webpack_require__(146);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var userMenu = __webpack_require__(86);
var formChangePassword = function formChangePassword() {
    return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, 147));
};
var formChangeCompanyName = function formChangeCompanyName() {
    return __webpack_require__.e/* import() */(21).then(__webpack_require__.bind(null, 150));
};
var formChangeCompanyDetails = function formChangeCompanyDetails() {
    return __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, 153));
};
var formChangeTechContact = function formChangeTechContact() {
    return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, 156));
};
var formChangeMainContact = function formChangeMainContact() {
    return __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, 159));
};
var formLicenseRequest = function formLicenseRequest() {
    return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 162));
};
var formCertificateRequest = function formCertificateRequest() {
    return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 167));
};

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'login',
    data: function data() {
        return {
            currentServer: "",
            showFormChangePassword: false,
            showFormChangeCompanyName: false,
            showFormChangeContact: false,
            showFormChangeDetails: false,
            showFormChangeTechContact: false,
            showFormChangeMainContact: false,
            showFormLicenseRequest: false,
            showFormCertificateRequest: false

        };
    },

    components: {
        "user-menu": userMenu,
        "form-change-password": formChangePassword,
        "form-change-company-name": formChangeCompanyName,
        "form-change-details": formChangeCompanyDetails,
        "form-change-tech-contact": formChangeTechContact,
        "form-change-main-contact": formChangeMainContact,
        "form-license-request": formLicenseRequest,
        "form-certificate-request": formCertificateRequest
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])({ user: function user(state) {
            return state.user;
        } }), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])("servers", ["getServers", "isLoaded"])),
    mixins: [ajaxform],
    created: function created() {
        var _this = this;

        if (!this.isLoaded) {
            this.uploadInfo("/servers/get-servers", {}, function (data) {
                for (var serverId in data) {
                    var server = new __WEBPACK_IMPORTED_MODULE_1__classes_LocalServer__["a" /* LocalServer */](data[serverId]);

                    for (var licenseId in data[serverId]["licenses"]) {
                        server.addLicense(new __WEBPACK_IMPORTED_MODULE_2__classes_License__["a" /* License */](data[serverId]["licenses"][licenseId]));
                    }
                    _this.addServer(server);
                }

                _this.setLoaded();
            });
        }
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapMutations */])("servers", ["setLoaded", "addServer"])),
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

/***/ 145:
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

/***/ 146:
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

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
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
                    directives: [{ name: "translate", rawName: "v-translate" }]
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
                    directives: [{ name: "translate", rawName: "v-translate" }]
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
                    directives: [{ name: "translate", rawName: "v-translate" }]
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
    _vm.isLoaded
      ? _c(
          "div",
          { staticClass: "flex-row flex_user_card server-license-info" },
          [
            _c(
              "div",
              { staticClass: "user-card" },
              [
                _c("div", { staticClass: "head flex-row" }, [
                  _c("div", [
                    _c(
                      "div",
                      { staticClass: "user-card_profile" },
                      [
                        _c(
                          "span",
                          {
                            directives: [
                              { name: "translate", rawName: "v-translate" }
                            ]
                          },
                          [_vm._v("Software and services")]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-blue btn-middle",
                            attrs: {
                              to: { name: "shop", params: { makeDeal: "new" } }
                            }
                          },
                          [_vm._v("New Order")]
                        )
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product-license" }, [
                  _c(
                    "div",
                    {
                      directives: [
                        { name: "translate", rawName: "v-translate" }
                      ]
                    },
                    [_vm._v("Product/License")]
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.getServers, function(server) {
                  return _c("div", [
                    _c("div", { staticClass: "flex-row server-info" }, [
                      _c("div", [
                        _c("div", { staticClass: "server-info-name" }, [
                          _vm._v(_vm._s(server.name))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "server-info-id" }, [
                          _c(
                            "span",
                            {
                              directives: [
                                { name: "translate", rawName: "v-translate" }
                              ]
                            },
                            [_vm._v("Server ID")]
                          ),
                          _c("span", [_vm._v(_vm._s(server.id))])
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "span",
                            {
                              directives: [
                                { name: "translate", rawName: "v-translate" }
                              ]
                            },
                            [_vm._v("Certificate")]
                          ),
                          _vm._v(" "),
                          !server.hasCertificateRequest
                            ? _c("span", [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        $event.stopPropagation()
                                        _vm.showFormCertificateRequest = true
                                        _vm.currentServer = server.id
                                      }
                                    }
                                  },
                                  [_vm._v("Upload request")]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          server.hasCertificate
                            ? _c("span", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "/user/certificate/download",
                                      target: "_blank"
                                    }
                                  },
                                  [_vm._v("Download")]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        !server.hasLicenseRequest
                          ? _c("div", [
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "translate",
                                      rawName: "v-translate"
                                    }
                                  ]
                                },
                                [_vm._v("License")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      $event.stopPropagation()
                                      _vm.showFormLicenseRequest = true
                                      _vm.currentServer = server.id
                                    }
                                  }
                                },
                                [_vm._v("Upload request")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "span",
                            {
                              directives: [
                                { name: "translate", rawName: "v-translate" }
                              ]
                            },
                            [_vm._v("Release")]
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(server.release))])
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "span",
                            {
                              directives: [
                                { name: "translate", rawName: "v-translate" }
                              ]
                            },
                            [_vm._v("OS")]
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(server.os))])
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "span",
                            {
                              directives: [
                                { name: "translate", rawName: "v-translate" }
                              ]
                            },
                            [_vm._v("Server modules")]
                          ),
                          _vm._v(" "),
                          server.serverModules.length == 0
                            ? _c("span", [_vm._v("no")])
                            : _c("span", [
                                _vm._v(_vm._s(server.serverModules.join(",")))
                              ])
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "span",
                            {
                              directives: [
                                { name: "translate", rawName: "v-translate" }
                              ]
                            },
                            [_vm._v("Added")]
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(server.getAdded()))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "server-info-add-license" },
                        [
                          _c(
                            "router-link",
                            {
                              directives: [
                                { name: "translate", rawName: "v-translate" }
                              ],
                              attrs: {
                                to: {
                                  name: "shop",
                                  params: {
                                    makeDeal: "new-license",
                                    server: server.id
                                  }
                                }
                              }
                            },
                            [_vm._v("Add new licence")]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive" }, [
                      _c("table", { staticClass: "table" }, [
                        _vm._m(0, true),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(server.licenses, function(license, i) {
                            return _c("tr", [
                              _c("td", [
                                _c("div", { staticClass: "license-key" }, [
                                  _c("span", [
                                    _vm._v(_vm._s(i + 1) + " License key:")
                                  ]),
                                  _vm._v(" "),
                                  server.hasLicenseRequest
                                    ? _c(
                                        "a",
                                        {
                                          attrs: {
                                            target: "_blank",
                                            href:
                                              "/servers/license/download/" +
                                              license.id
                                          }
                                        },
                                        [_vm._v("download")]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "license-number" }, [
                                  _c("span", [_vm._v("ID:")]),
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(license.id))])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "license-date" }, [
                                  _c("span", [_vm._v("Added:")]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(_vm._s(license.getAdded()))
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(license.users))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(license.getValidTill()))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                license.valid
                                  ? _c("span", [_vm._v("active")])
                                  : _c("span", [_vm._v("payment required")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      directives: [
                                        {
                                          name: "translate",
                                          rawName: "v-translate"
                                        }
                                      ],
                                      attrs: {
                                        to: {
                                          name: "shop",
                                          params: {
                                            makeDeal: "renew",
                                            server: server.id,
                                            license: license.id
                                          }
                                        }
                                      }
                                    },
                                    [_vm._v("Renew license")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      directives: [
                                        {
                                          name: "translate",
                                          rawName: "v-translate"
                                        }
                                      ],
                                      attrs: {
                                        to: {
                                          name: "shop",
                                          params: {
                                            makeDeal: "upgrade",
                                            server: server.id,
                                            license: license.id
                                          }
                                        }
                                      }
                                    },
                                    [_vm._v("Upgrade")]
                                  )
                                ],
                                1
                              )
                            ])
                          })
                        )
                      ])
                    ])
                  ])
                })
              ],
              2
            )
          ]
        )
      : _vm._e(),
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
          : _vm._e(),
        _vm._v(" "),
        _vm.showFormLicenseRequest
          ? _c("form-license-request", {
              attrs: { server: _vm.currentServer },
              on: {
                close: function($event) {
                  _vm.showFormLicenseRequest = false
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.showFormCertificateRequest
          ? _c("form-certificate-request", {
              attrs: { server: _vm.currentServer },
              on: {
                close: function($event) {
                  _vm.showFormCertificateRequest = false
                }
              }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", { staticClass: "blue" }, [_vm._v("User Licenses")]),
      _vm._v(" "),
      _c("th", [_vm._v("Users")]),
      _vm._v(" "),
      _c("th", [_vm._v("Valid till")]),
      _vm._v(" "),
      _c("th", [_vm._v("Status")]),
      _vm._v(" "),
      _c("th", [_vm._v(" ")])
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

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(142)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(144)
/* template */
var __vue_template__ = __webpack_require__(172)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-123bcd7c"
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

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(87)
/* template */
var __vue_template__ = __webpack_require__(88)
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

/***/ 87:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'userMenu',
    props: {},
    data: function data() {
        return {
            checked: false
        };
    },

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

/***/ 88:
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
            class: {
              active:
                _vm.currentRoute == "documents" ||
                _vm.currentRoute == "support_default" ||
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