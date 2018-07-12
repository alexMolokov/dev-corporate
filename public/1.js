webpackJsonp([1],{

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("33998ff7", content, false, {});
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

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nh3[data-v-1ba10a26] {\n  font-size: 21px;\n  margin-top: 30px;\n}\n#user-order-page .disabled[data-v-1ba10a26] {\n  background-color: #f5f5f5;\n  opacity: 0.5;\n}\n#user-order-page hr[data-v-1ba10a26] {\n  margin: 40px 0;\n}\n#user-order-page > h3[data-v-1ba10a26]:first-child {\n  margin-top: 10px;\n}\n#user-order-page .shop-footer[data-v-1ba10a26] {\n  text-align: right;\n}\n#user-order-page .shop-footer .price[data-v-1ba10a26] {\n    color: #67ab49;\n    font-size: 30px;\n    font-weight: bold;\n    display: inline-block;\n}\n#user-order-page .shop-footer .price sup[data-v-1ba10a26] {\n      font-size: .5em;\n      vertical-align: baseline;\n      position: relative;\n      top: -.6666667em;\n}\n#users .field-number[data-v-1ba10a26] {\n  width: 182px;\n  margin-top: 20px;\n  display: block;\n}\n#users .field-number > *[data-v-1ba10a26] {\n    display: inline;\n    float: left;\n}\n#users .field-number .minus[data-v-1ba10a26] {\n    padding: 0px 9px 1px;\n    border-right: 0;\n    border-radius: 3px 0 0 3px;\n    border: 1px solid #e8e8e8;\n    font-size: 26px;\n    font-weight: 700;\n    color: #00a0c8;\n}\n#users .field-number .minus[data-v-1ba10a26]:after {\n      content: \"\\2014\";\n}\n#users .field-number .add[data-v-1ba10a26] {\n    padding: 0px 12px 1px 11px;\n    border-left: 0;\n    border-radius: 0 3px 3px 0;\n    border: 1px solid #e8e8e8;\n    font-size: 26px;\n    font-weight: 700;\n    color: #00a0c8;\n}\n#users .field-number .add[data-v-1ba10a26]:after {\n      content: \"+\";\n}\n#users .field-number input[data-v-1ba10a26] {\n    width: 100px;\n    height: 40px;\n    color: #000;\n    text-align: center;\n    border: 1px solid #e8e8e8;\n    font-size: 18px;\n    font-weight: 700;\n}\n#users .number .min[data-v-1ba10a26] {\n  clear: both;\n  font-size: 14px;\n  color: #888;\n  padding-top: 7px;\n  margin-bottom: 4px;\n}\n#os > div[data-v-1ba10a26], #servers > div[data-v-1ba10a26], #periods > div[data-v-1ba10a26], #services > div[data-v-1ba10a26] {\n  padding: 4px;\n}\n#os input[type=\"radio\"][data-v-1ba10a26], #servers input[type=\"radio\"][data-v-1ba10a26], #periods input[type=\"radio\"][data-v-1ba10a26], #services input[type=\"radio\"][data-v-1ba10a26] {\n  margin-right: 3px;\n}\n#addons label[data-v-1ba10a26], #os label[data-v-1ba10a26], #servers label[data-v-1ba10a26], #periods label[data-v-1ba10a26], #services label[data-v-1ba10a26] {\n  font-size: 18px;\n  color: #666;\n  font-weight: 400;\n}\n#addons .table[data-v-1ba10a26], #os .table[data-v-1ba10a26], #servers .table[data-v-1ba10a26], #periods .table[data-v-1ba10a26], #services .table[data-v-1ba10a26] {\n  display: table;\n}\n#addons .table > div[data-v-1ba10a26]:not(:first-child), #os .table > div[data-v-1ba10a26]:not(:first-child), #servers .table > div[data-v-1ba10a26]:not(:first-child), #periods .table > div[data-v-1ba10a26]:not(:first-child), #services .table > div[data-v-1ba10a26]:not(:first-child) {\n    border-top: none;\n}\n#addons .table > div[data-v-1ba10a26], #os .table > div[data-v-1ba10a26], #servers .table > div[data-v-1ba10a26], #periods .table > div[data-v-1ba10a26], #services .table > div[data-v-1ba10a26] {\n    /*display: table-row;*/\n    border: 1px solid #ccc;\n    padding: 10px;\n}\n#addons .table > div[data-v-1ba10a26]:hover, #os .table > div[data-v-1ba10a26]:hover, #servers .table > div[data-v-1ba10a26]:hover, #periods .table > div[data-v-1ba10a26]:hover, #services .table > div[data-v-1ba10a26]:hover {\n      background-color: #f5f5f5;\n}\n#addons .table > div input[type=\"checkbox\"][data-v-1ba10a26], #os .table > div input[type=\"checkbox\"][data-v-1ba10a26], #servers .table > div input[type=\"checkbox\"][data-v-1ba10a26], #periods .table > div input[type=\"checkbox\"][data-v-1ba10a26], #services .table > div input[type=\"checkbox\"][data-v-1ba10a26] {\n      margin-right: 3px;\n}\n#addons .table > div > span[data-v-1ba10a26]:first-child, #os .table > div > span[data-v-1ba10a26]:first-child, #servers .table > div > span[data-v-1ba10a26]:first-child, #periods .table > div > span[data-v-1ba10a26]:first-child, #services .table > div > span[data-v-1ba10a26]:first-child {\n      width: 85%;\n      display: inline-block;\n}\n@media (max-width: 767px) {\n#addons .table > div > span[data-v-1ba10a26]:first-child, #os .table > div > span[data-v-1ba10a26]:first-child, #servers .table > div > span[data-v-1ba10a26]:first-child, #periods .table > div > span[data-v-1ba10a26]:first-child, #services .table > div > span[data-v-1ba10a26]:first-child {\n          width: 78%;\n}\n}\n#addons .table > div > span[data-v-1ba10a26]:last-child, #os .table > div > span[data-v-1ba10a26]:last-child, #servers .table > div > span[data-v-1ba10a26]:last-child, #periods .table > div > span[data-v-1ba10a26]:last-child, #services .table > div > span[data-v-1ba10a26]:last-child {\n      width: 13%;\n      display: inline-block;\n      text-align: right;\n      padding-right: 10px;\n}\n@media (max-width: 767px) {\n#addons .table > div > span[data-v-1ba10a26]:last-child, #os .table > div > span[data-v-1ba10a26]:last-child, #servers .table > div > span[data-v-1ba10a26]:last-child, #periods .table > div > span[data-v-1ba10a26]:last-child, #services .table > div > span[data-v-1ba10a26]:last-child {\n          width: 20%;\n}\n}\n#addons .table .price[data-v-1ba10a26], #os .table .price[data-v-1ba10a26], #servers .table .price[data-v-1ba10a26], #periods .table .price[data-v-1ba10a26], #services .table .price[data-v-1ba10a26] {\n    color: #67ab49;\n    font-size: 22px;\n    font-weight: bold;\n    display: inline-block;\n}\n", ""]);

// exports


/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_loadingPage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_loadingPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_loadingPage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_shop_action_newOrder__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_shop_action_newLicense__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_shop_action_renewLicense__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_shop_action_upgradeLicense__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__ = __webpack_require__(16);
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


var userMenu = __webpack_require__(88);
var ajaxform = __webpack_require__(15);


var ORDER_STATES = { "NEW_ORDER": "new", "NEW_LICENSE": "new-license", "RENEW_LICENSE": "renew", "UPGRADE_LICENSE": "upgrade" };






var loadingPage = __webpack_require__(91);

var formPayment = function formPayment() {
    return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 283));
};
var formGetTrial = function formGetTrial() {
    return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, 289));
};

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'order',
    props: {
        makeDeal: { type: String },
        server: { type: String, default: "" },
        license: { type: String, default: "" }
    },
    data: function data() {
        return {
            showFormPayment: false,
            showFormGetTrial: false,
            choice: {
                "period": __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__["d" /* PERIOD */].ANNUAL,
                "os": __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__["c" /* OS */].WINDOWS,
                "price": __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__["e" /* PRICES */].ANNUAL,
                "server": __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__["f" /* PRODUCTS */].STANDALONE,
                "users": __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE,
                "minUsers": __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE,
                "maxUsers": __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__["a" /* COUNT_USERS */].MAX_USERS_STANDALONE
            },
            forbidden: {
                "period": [],
                "os": [],
                "products": []
            },
            basket: new Map(),
            state: null,
            PRICES: __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__["e" /* PRICES */],
            sum: "",
            discount: 0
        };
    },

    components: {
        LoadingPage: __WEBPACK_IMPORTED_MODULE_0__components_loadingPage___default.a,
        "user-menu": userMenu,
        "form-payment": formPayment,
        "form-get-trial": formGetTrial
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapState */])("shop", ["products", "productsMap"]), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapState */])("servers", ["serversMap"]), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])("shop", ["getServers", "getServices", "getAddons", "getOs", "getPeriods", "getRenewDiscount"])),
    created: function created() {
        var _this = this;

        this.state = this.factoryState();

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
                _this.setDiscount(data.renewDiscount);
                _this.state.setDefaultChoice(_this);
                _this.state.setForbidden(_this);
                _this.state.sumOrder(_this);
            });
        } else {
            this.state.setDefaultChoice(this);
            this.state.setForbidden(this);
        }
    },

    mixins: [ajaxform],

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])("shop", ["addProduct", "addPeriod", "addOs", "setCurrency", "setDiscount"]), {
        factoryState: function factoryState() {
            if (this.makeDeal == ORDER_STATES.NEW_ORDER) {
                return new __WEBPACK_IMPORTED_MODULE_2__classes_shop_action_newOrder__["a" /* newOrder */](this.serversMap);
            } else if (this.makeDeal == ORDER_STATES.NEW_LICENSE) {
                return new __WEBPACK_IMPORTED_MODULE_3__classes_shop_action_newLicense__["a" /* newLicense */](this.serversMap.get(this.server));
            } else if (this.makeDeal == ORDER_STATES.RENEW_LICENSE) {
                return new __WEBPACK_IMPORTED_MODULE_4__classes_shop_action_renewLicense__["a" /* renewLicense */](this.serversMap.get(this.server), this.license);
            }
            if (this.makeDeal == ORDER_STATES.UPGRADE_LICENSE) {
                return new __WEBPACK_IMPORTED_MODULE_5__classes_shop_action_upgradeLicense__["a" /* upgradeLicense */](this.serversMap.get(this.server), this.license);
            }
        },
        setServer: function setServer(server) {
            this.choice.server = server;

            var deleteServer = server == __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__["f" /* PRODUCTS */].CLUSTER ? __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__["f" /* PRODUCTS */].STANDALONE : __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__["f" /* PRODUCTS */].CLUSTER;
            this.removeFromBasket(deleteServer);
            this.addToBasket(server);
            this.state.setForLicense(this);
            this.state.sumOrder(this);
        },
        setRadio: function setRadio(choice) {
            this.choice[choice.id] = choice.value;
        },
        addToBasket: function addToBasket(key) {
            this.basket.set(key, this.productsMap.get(key));
            this.state.sumOrder(this);
        },
        removeFromBasket: function removeFromBasket(key) {
            this.basket.delete(key);
            this.state.sumOrder(this);
        },
        inBasket: function inBasket(key) {
            return typeof this.basket.get(key) != "undefined";
        },
        isDisabledProduct: function isDisabledProduct(key) {
            return this.forbidden.products.indexOf(key) != -1;
        },
        isDisabledOs: function isDisabledOs(key) {
            return this.forbidden.os.indexOf(key) != -1;
        },
        isDisabledPeriod: function isDisabledPeriod(key) {
            return this.forbidden.period.indexOf(key) != -1;
        },

        addCheckbox: function addCheckbox(e) {
            if (e.target.checked) {
                this.addToBasket(e.target.value);
            } else {
                this.removeFromBasket(e.target.value);
            }
        },
        addUser: function addUser(count) {
            if (this.choice.users + count >= this.choice.minUsers && this.choice.users + count < this.choice.maxUsers) this.choice.users = this.choice.users + count;
            this.state.sumOrder(this);
        },
        setPeriod: function setPeriod(period) {
            this.choice.period = period;
            this.choice.price = __WEBPACK_IMPORTED_MODULE_6__classes_shop_action_const__["e" /* PRICES */][period.toUpperCase()];
            this.state.setForLicense(this);
            this.state.sumOrder(this);
        },

        checkCountUsers: function checkCountUsers() {
            var users = Math.abs(this.choice.users);
            if (users < this.choice.minUsers || isNaN(users) || this.choice.users < 0) {
                this.choice.users = this.choice.minUsers;
            } else {
                if (users > this.choice.maxUsers) this.choice.users = this.choice.maxUsers;
                this.choice.users = Math.abs(this.choice.users);
            }
            this.state.sumOrder(this);
        }
    }),

    locales: {
        ru: {}
    }

});

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newOrder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(16);


function newOrder(serversMap) {
    /**
     *
     * @param page/Shop context
     * @returns {{period: string, os: string, server: number, addons: [null], services: Array, users: number, minUsers: number}}
     */
    this.setDefaultChoice = function (context) {
        context.choice = {
            "period": __WEBPACK_IMPORTED_MODULE_0__const__["d" /* PERIOD */].ANNUAL,
            "os": __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].LINUX,
            "server": __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE,
            "price": __WEBPACK_IMPORTED_MODULE_0__const__["e" /* PRICES */].ANNUAL,
            "users": __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE,
            "minUsers": __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE,
            "maxUsers": __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MAX_USERS_STANDALONE
        };
        context.addToBasket(__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE);
        context.addToBasket(__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].SIP);
        context.discount = 0;
    };

    function hasTestLicense() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = serversMap.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                var licenses = serversMap.get(key).licenses;
                for (var i = 0; i < licenses.length; i++) {
                    if (licenses[i].test) return true;
                }
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

        return false;
    }

    /**
     *
     * @param page/Shop context
     */
    this.setForbidden = function (context) {
        context.forbidden = {
            "period": [],
            "os": [],
            "products": []
        };
        setForbiddenForServer(context);
        if (hasTestLicense()) {

            context.forbidden.period.push(__WEBPACK_IMPORTED_MODULE_0__const__["d" /* PERIOD */].TRIAL);
        }
    };

    var setForbiddenForServer = function setForbiddenForServer(context) {
        if (context.choice.server == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE) {
            var ar = [__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].CLASTER_WORKER, __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].INSTALL_CLASTER, __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].RECOVER_CLASTER];
            for (var i = 0; i < ar.length; i++) {
                context.removeFromBasket(ar[i]);
                context.forbidden.products.push(ar[i]);
            }
        } else {
            var _ar = [__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].INSTALL_STANDALONE, __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].RECOVER_STANDALONE];
            for (var _i = 0; _i < _ar.length; _i++) {
                context.removeFromBasket(_ar[_i]);
                context.forbidden.products.push(_ar[_i]);
            }
        }
    };

    this.setForLicense = function (context) {
        if (context.choice.price == __WEBPACK_IMPORTED_MODULE_0__const__["e" /* PRICES */].TRIAL) {
            for (var key in __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */]) {
                if (key != "STANDALONE" && key != "SIP") {
                    context.forbidden.products.push(__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */][key]);
                    context.removeFromBasket(__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */][key]);
                } else {
                    context.addToBasket(__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */][key]);
                    context.choice.server = __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE;
                }
            }
            context.choice.minUsers = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_TRIAL;
            context.choice.maxUsers = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_TRIAL;
            context.choice.users = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_TRIAL;
        } else {

            context.forbidden.products = [];

            if (context.choice.server == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE) {
                context.choice.minUsers = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE;
                context.choice.maxUsers = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MAX_USERS_STANDALONE;
                if (context.choice.users < __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE) context.choice.users = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE;
            } else {
                context.choice.minUsers = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_CLUSTER;
                context.choice.maxUsers = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MAX_USERS_CLUSTER;
                if (context.choice.users < __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_CLUSTER) context.choice.users = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_CLUSTER;
            }
            setForbiddenForServer(context);
        }
    };

    this.sumOrder = function (context) {
        var sum = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = context.basket.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var product = _step2.value;

                if (product.id == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE || product.id == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].CLUSTER) {
                    var values = product[context.choice.price + product.postfixForLicense];
                    var price = 1;
                    for (var i in values) {
                        if (context.choice.users <= Math.abs(i)) {
                            price = Math.abs(values[i]);
                            break;
                        }
                    }

                    sum += product[context.choice.price] + Math.abs(context.choice.users) * price;
                } else {
                    sum += product[context.choice.price];
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        context.sum = sum;
    };
}

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newLicense;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(16);


function newLicense(localServer) {
    var addSumServer = true;
    for (var i = 0; i < localServer.licenses.length; i++) {
        var license = localServer.licenses[i];
        var date = new Date(license.validTill);
        var dateFrom = new Date(license.validFrom);

        var days = Math.ceil((date.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24));

        if (days > 364) addSumServer = false;
    }

    this.setDefaultChoice = function (context) {
        var product = localServer.edition == __WEBPACK_IMPORTED_MODULE_0__const__["b" /* EDITIONS */].STANDALONE ? __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE : __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].CLUSTER;
        context.choice = {
            "period": __WEBPACK_IMPORTED_MODULE_0__const__["d" /* PERIOD */].ANNUAL,
            "os": localServer.os == __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].WINDOWS ? __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].WINDOWS : __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].LINUX,
            "server": product,
            "price": __WEBPACK_IMPORTED_MODULE_0__const__["e" /* PRICES */].ANNUAL,
            "users": product == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE ? __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE : __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_CLUSTER,
            "minUsers": product == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE ? __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE : __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_CLUSTER,
            "maxUsers": product == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE ? __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MAX_USERS_STANDALONE : __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MAX_USERS_CLUSTER
        };
        context.addToBasket(product);
        context.discount = 0;
    };

    /**
     *
     * @param page/Shop context
     */
    this.setForbidden = function (context) {
        var data = {
            "period": [__WEBPACK_IMPORTED_MODULE_0__const__["d" /* PERIOD */].TRIAL],
            "os": [localServer.os == __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].WINDOWS ? __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].LINUX : __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].WINDOWS],
            "products": []
        };
        if (localServer.edition == __WEBPACK_IMPORTED_MODULE_0__const__["b" /* EDITIONS */].STANDALONE) {
            var ar = [__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].CLASTER_WORKER, __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].INSTALL_CLASTER, __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].RECOVER_CLASTER];
            for (var _i = 0; _i < ar.length; _i++) {
                data.products.push(ar[_i]);
                context.removeFromBasket(ar[_i]);
            }
        } else if (localServer.edition == __WEBPACK_IMPORTED_MODULE_0__const__["b" /* EDITIONS */].CLUSTER) {
            var _ar = [__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].INSTALL_STANDALONE, __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].RECOVER_STANDALONE];
            for (var _i2 = 0; _i2 < _ar.length; _i2++) {
                data.products.push(_ar[_i2]);
                context.removeFromBasket(_ar[_i2]);
            }
        }
        context.forbidden = data;
    };

    this.setForLicense = function (context) {
        if (context.choice.server == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE) {
            context.choice.minUsers = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE;
            context.choice.maxUsers = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MAX_USERS_STANDALONE;
            if (context.choice.users < __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE) context.choice.users = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE;
        } else {
            context.choice.minUsers = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_CLUSTER;
            context.choice.maxUsers = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MAX_USERS_CLUSTER;
            if (context.choice.users < __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_CLUSTER) context.choice.users = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_CLUSTER;
        }
    };

    this.sumOrder = function (context) {
        var sum = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = context.basket.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var product = _step.value;

                if (product.id == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE || product.id == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].CLUSTER && addSumServer) {
                    var values = product[context.choice.price + product.postfixForLicense];
                    var price = 1;
                    for (var _i3 in values) {
                        if (context.choice.users <= Math.abs(_i3)) {
                            price = Math.abs(values[_i3]);
                            break;
                        }
                    }
                    sum += Math.abs(context.choice.users) * price;
                } else {
                    sum += product[context.choice.price];
                }
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

        context.sum = sum;
    };
}

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renewLicense;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(16);


function renewLicense(localServer, licenseID) {
    var license = localServer.getLicense(licenseID);

    this.setDefaultChoice = function (context) {
        var product = localServer.edition == __WEBPACK_IMPORTED_MODULE_0__const__["b" /* EDITIONS */].STANDALONE ? __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE : __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].CLUSTER;
        var minUsers = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE < license.users ? __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE : license.users;
        if (product == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].CLUSTER) {
            minUsers = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_CLUSTER < license.users ? __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MIN_USERS_STANDALONE : license.users;
        }

        context.choice = {
            "period": __WEBPACK_IMPORTED_MODULE_0__const__["d" /* PERIOD */].ANNUAL,
            "os": localServer.os == __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].WINDOWS ? __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].WINDOWS : __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].LINUX,
            "server": product,
            "price": __WEBPACK_IMPORTED_MODULE_0__const__["e" /* PRICES */].ANNUAL,
            "users": license.users,
            "minUsers": minUsers,
            "maxUsers": product == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE ? __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MAX_USERS_STANDALONE : __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MAX_USERS_CLUSTER
        };
        context.addToBasket(product);

        for (var i = 0; i < license.serverModules.length; i++) {
            context.addToBasket(__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */][license.serverModules[i]]);
        }

        if (license.valid) context.discount = context.getRenewDiscount;
    };

    this.setForbidden = function (context) {
        var data = {
            "period": [__WEBPACK_IMPORTED_MODULE_0__const__["d" /* PERIOD */].TRIAL],
            "os": [localServer.os == __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].WINDOWS ? __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].LINUX : __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].WINDOWS],
            "products": []
        };
        if (localServer.edition == __WEBPACK_IMPORTED_MODULE_0__const__["b" /* EDITIONS */].STANDALONE) {
            var ar = [__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].CLASTER_WORKER, __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].INSTALL_CLASTER, __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].RECOVER_CLASTER];
            for (var i = 0; i < ar.length; i++) {
                data.products.push(ar[i]);
                context.removeFromBasket(ar[i]);
            }
        } else if (localServer.edition == __WEBPACK_IMPORTED_MODULE_0__const__["b" /* EDITIONS */].CLUSTER) {
            var _ar = [__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].INSTALL_STANDALONE, __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].RECOVER_STANDALONE];
            for (var _i = 0; _i < _ar.length; _i++) {
                data.products.push(_ar[_i]);
                context.removeFromBasket(_ar[_i]);
            }
        }
        context.forbidden = data;
    };

    this.setForLicense = function (context) {};

    this.sumOrder = function (context) {
        var sum = 0;
        console.log(context);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = context.basket.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var product = _step.value;

                if (product.id == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE || product.id == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].CLUSTER) {
                    var values = product[context.choice.price + product.postfixForLicense];
                    var price = 1;
                    for (var i in values) {
                        if (context.choice.users <= Math.abs(i)) {
                            price = Math.abs(values[i]);
                            break;
                        }
                    }

                    sum += Math.abs(context.choice.users) * price;
                } else {
                    sum += product[context.choice.price];
                }
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

        context.sum = sum * (1 - context.discount);
    };
}

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = upgradeLicense;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(16);


function upgradeLicense(localServer, licenseID) {
    var license = localServer.getLicense(licenseID);

    var period = __WEBPACK_IMPORTED_MODULE_0__const__["d" /* PERIOD */].ANNUAL;
    var price = __WEBPACK_IMPORTED_MODULE_0__const__["e" /* PRICES */].ANNUAL;
    var days = 1;

    if (typeof license.validTill == 'undefined') {
        period = __WEBPACK_IMPORTED_MODULE_0__const__["d" /* PERIOD */].LIFETIME;
        price = __WEBPACK_IMPORTED_MODULE_0__const__["e" /* PRICES */].LIFETIME;
    } else {
        var date = new Date(license.validTill);
        var dateNow = new Date();
        days = Math.ceil((date.getTime() - dateNow.getTime()) / (1000 * 3600 * 24));
        if (days < 0) days = 1;
    }

    this.setDefaultChoice = function (context) {
        var product = localServer.edition == __WEBPACK_IMPORTED_MODULE_0__const__["b" /* EDITIONS */].STANDALONE ? __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE : __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].CLUSTER;

        context.choice = {
            "period": period,
            "os": localServer.os == __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].WINDOWS ? __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].WINDOWS : __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].LINUX,
            "server": product,
            "price": price,
            "users": license.users,
            "minUsers": license.users,
            "maxUsers": product == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE ? __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MAX_USERS_STANDALONE : __WEBPACK_IMPORTED_MODULE_0__const__["a" /* COUNT_USERS */].MAX_USERS_CLUSTER
        };

        context.addToBasket(product);
        context.discount = 0;
    };

    this.setForbidden = function (context) {
        var forbidden = {
            "period": [__WEBPACK_IMPORTED_MODULE_0__const__["d" /* PERIOD */].TRIAL, period == __WEBPACK_IMPORTED_MODULE_0__const__["d" /* PERIOD */].LIFETIME ? __WEBPACK_IMPORTED_MODULE_0__const__["d" /* PERIOD */].ANNUAL : __WEBPACK_IMPORTED_MODULE_0__const__["d" /* PERIOD */].LIFETIME],
            "os": [localServer.os == __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].WINDOWS ? __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].LINUX : __WEBPACK_IMPORTED_MODULE_0__const__["c" /* OS */].WINDOWS],
            "products": []
        };

        for (var i = 0; i < license.serverModules.length; i++) {
            forbidden.products.push(__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */][license.serverModules[i]]);
        }

        if (localServer.edition == __WEBPACK_IMPORTED_MODULE_0__const__["b" /* EDITIONS */].STANDALONE) {
            var ar = [__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].CLASTER_WORKER, __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].INSTALL_CLASTER, __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].RECOVER_CLASTER];
            for (var _i = 0; _i < ar.length; _i++) {
                forbidden.products.push(ar[_i]);
                context.removeFromBasket(ar[_i]);
            }
        } else if (localServer.edition == __WEBPACK_IMPORTED_MODULE_0__const__["b" /* EDITIONS */].CLUSTER) {
            var _ar = [__WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].INSTALL_STANDALONE, __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].RECOVER_STANDALONE];
            for (var _i2 = 0; _i2 < _ar.length; _i2++) {
                forbidden.products.push(_ar[_i2]);
                context.removeFromBasket(_ar[_i2]);
            }
        }

        context.forbidden = forbidden;
    };

    this.setForLicense = function (context) {};

    this.sumOrder = function (context) {
        var sum = 0;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = context.basket.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var product = _step.value;

                if (product.id == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].STANDALONE || product.id == __WEBPACK_IMPORTED_MODULE_0__const__["f" /* PRODUCTS */].CLUSTER) {
                    var values = product[context.choice.price + product.postfixForLicense];
                    var _price = 1;
                    for (var i in values) {
                        if (context.choice.users <= Math.abs(i)) {
                            _price = Math.abs(values[i]);
                            break;
                        }
                    }

                    sum += Math.round(Math.abs(context.choice.users - license.users) * _price / days, 0);
                } else {
                    sum += product[context.choice.price];
                }
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

        context.sum = sum;
    };
}

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "user-order-page" } }, [
    _vm.products.length > 0
      ? _c(
          "div",
          [
            _c("h3", [
              _vm._v("1. "),
              _c(
                "span",
                { directives: [{ name: "translate", rawName: "v-translate" }] },
                [_vm._v("Maintenance period")]
              )
            ]),
            _vm._v(" "),
            _c(
              "section",
              { attrs: { id: "periods" } },
              _vm._l(_vm.getPeriods, function(item) {
                return _c(
                  "div",
                  { class: { disabled: _vm.isDisabledPeriod(item.id) } },
                  [
                    _c("input", {
                      attrs: {
                        type: "radio",
                        name: "period",
                        disabled: _vm.isDisabledPeriod(item.id),
                        id: "period_" + item.id
                      },
                      domProps: {
                        value: item.id,
                        checked: _vm.choice.period == item.id
                      },
                      on: {
                        click: function($event) {
                          _vm.setPeriod(item.id)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "period_" + item.id } }, [
                      _vm._v(_vm._s(item.name))
                    ])
                  ]
                )
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
                return _c(
                  "div",
                  { class: { disabled: _vm.isDisabledProduct(item.id) } },
                  [
                    _c("input", {
                      attrs: {
                        type: "radio",
                        name: "deployment",
                        disabled: _vm.isDisabledProduct(item.id),
                        id: "deployment_" + item.id
                      },
                      domProps: {
                        value: item.id,
                        checked: _vm.choice.server == item.id
                      },
                      on: {
                        click: function($event) {
                          _vm.setServer(item.id)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "deployment_" + item.id } }, [
                      _vm._v(_vm._s(item.name))
                    ])
                  ]
                )
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
                return _c(
                  "div",
                  { class: { disabled: _vm.isDisabledOs(item.id) } },
                  [
                    _c("input", {
                      attrs: {
                        type: "radio",
                        name: "os",
                        id: "os_" + item.id,
                        disabled: _vm.isDisabledOs(item.id)
                      },
                      domProps: {
                        value: item.id,
                        checked: _vm.choice.os == item.id
                      },
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
                  ]
                )
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
            _c("section", { attrs: { id: "users" } }, [
              _c("div", { staticClass: "number" }, [
                _c("div", { staticClass: "field-number" }, [
                  _c("div", {
                    staticClass: "minus",
                    class: {
                      disabled: this.choice.users == this.choice.minUsers
                    },
                    on: {
                      click: function($event) {
                        _vm.addUser(-1)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.choice.users,
                        expression: "choice.users"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'"
                      }
                    ],
                    class: { error: _vm.errors.has("users") },
                    attrs: { name: "users", type: "text" },
                    domProps: { value: _vm.choice.users },
                    on: {
                      keyup: _vm.checkCountUsers,
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.choice, "users", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "add",
                    class: {
                      disabled: this.choice.users == this.choice.maxUsers
                    },
                    on: {
                      click: function($event) {
                        _vm.addUser(1)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "min" }, [
                  _c("span", [_vm._v("minimum")]),
                  _vm._v(" " + _vm._s(_vm.choice.minUsers) + " "),
                  _c("span", [_vm._v("users")])
                ])
              ])
            ]),
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
                  return _c(
                    "div",
                    { class: { disabled: _vm.isDisabledProduct(item.id) } },
                    [
                      _c("span", [
                        _c("input", {
                          attrs: {
                            type: "checkbox",
                            disabled: _vm.isDisabledProduct(item.id),
                            name: "addons",
                            id: "addons_" + item.id
                          },
                          domProps: {
                            value: item.id,
                            checked: _vm.inBasket(item.id)
                          },
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
                    ]
                  )
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
                  return _c(
                    "div",
                    { class: { disabled: _vm.isDisabledProduct(item.id) } },
                    [
                      _c("span", [
                        _c("input", {
                          attrs: {
                            type: "checkbox",
                            disabled: _vm.isDisabledProduct(item.id),
                            name: "addons",
                            id: "service_" + item.id
                          },
                          domProps: {
                            value: item.id,
                            checked: _vm.inBasket(item.id)
                          },
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
                    ]
                  )
                })
              )
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "shop-footer" }, [
              _vm.choice.price == _vm.PRICES.TRIAL
                ? _c("div", [
                    _c(
                      "a",
                      {
                        directives: [
                          { name: "translate", rawName: "v-translate" }
                        ],
                        staticClass: "btn btn-middle btn-blue",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            $event.stopPropagation()
                            _vm.showFormGetTrial = true
                          }
                        }
                      },
                      [_vm._v("Next")]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.choice.price != _vm.PRICES.TRIAL
                ? _c("div", [
                    _vm.sum > 0
                      ? _c(
                          "a",
                          {
                            directives: [
                              { name: "translate", rawName: "v-translate" }
                            ],
                            staticClass: "btn btn-middle btn-blue",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                $event.stopPropagation()
                                _vm.showFormPayment = true
                              }
                            }
                          },
                          [_vm._v("Check out")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "subtotal" }, [
                      _c(
                        "h3",
                        {
                          directives: [
                            { name: "translate", rawName: "v-translate" }
                          ]
                        },
                        [_vm._v("Subtotal (USD)")]
                      ),
                      _vm._v(" "),
                      _vm.discount > 0
                        ? _c("h3", [
                            _c(
                              "span",
                              {
                                directives: [
                                  { name: "translate", rawName: "v-translate" }
                                ]
                              },
                              [
                                _vm._v(
                                  "Discount: " +
                                    _vm._s(_vm.discount * 100) +
                                    "%"
                                )
                              ]
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "price" }, [
                        _c("sup", [_vm._v("$")]),
                        _vm._v(_vm._s(_vm.sum))
                      ])
                    ])
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm.showFormPayment
              ? _c("form-payment", {
                  on: {
                    close: function($event) {
                      _vm.showFormPayment = false
                    }
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.showFormGetTrial
              ? _c("form-get-trial", {
                  attrs: { choice: _vm.choice, basket: _vm.basket },
                  on: {
                    close: function($event) {
                      _vm.showFormGetTrial = false
                    }
                  }
                })
              : _vm._e()
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.products.length == 0 ? _c("div", [_c("loading-page")], 1) : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ba10a26", module.exports)
  }
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(276)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(278)
/* template */
var __vue_template__ = __webpack_require__(292)
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

/***/ 89:
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
            'Documents': 'Документы'
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
    { staticClass: "alert alert-warning fade in" },
    [_vm._t("loading", [_vm._v("Loading info...")])],
    2
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