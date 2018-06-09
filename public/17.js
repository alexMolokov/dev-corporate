webpackJsonp([17],{

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["newOrder"] = newOrder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(247);


function newOrder() {
    this.getDefaultChoice = function () {
        return {
            "period": __WEBPACK_IMPORTED_MODULE_0__const__["b" /* PERIOD */].ANNUAL,
            "os": __WEBPACK_IMPORTED_MODULE_0__const__["a" /* OS */].LINUX,
            "server": __WEBPACK_IMPORTED_MODULE_0__const__["c" /* PRODUCTS */].STANDALONE,
            "addons": [__WEBPACK_IMPORTED_MODULE_0__const__["c" /* PRODUCTS */].SIP],
            "services": [],
            "users": 10,
            "minUsers": 10
        };
    };

    this.getForbidden = function () {
        return {
            "period": [],
            "os": [],
            "server": [],
            "addons": [],
            "services": []
        };
    };
}

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PERIOD; });
/* unused harmony export EDITIONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PRODUCTS; });
var OS = {
    "WINDOWS": "windows",
    "LINUX": "linux"
};
var PERIOD = {
    "TRIAL": "trial",
    "ANNUAL": "annual",
    "LIFETIME": "lifetime"
};
var EDITIONS = {
    "STANDALONE": "standalone",
    "CLUSTER": "cluster"
};
var PRODUCTS = {
    "STANDALONE": 1,
    "CLUSTER": 2,
    "SIP": 3,
    "HTTP": 4,
    "MEDIA_WORKER": 5,
    "CLASTER_WORKER": 6,
    "INSTALL_STANDALONE": 7,
    "INSTALL_CLASTER": 8,
    "SOFTWARE_UPDATES": 9,
    "RECOVER_STANDALONE": 10,
    "RECOVER_CLASTER": 11,
    "INSTALL_ADDONS": 12
};

/***/ })

});