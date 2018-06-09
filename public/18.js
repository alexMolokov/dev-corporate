webpackJsonp([18],{

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["newOrder"] = newOrder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(247);


function newOrder() {
    /**
     *
     * @param page/Shop context
     * @returns {{period: string, os: string, server: number, addons: [null], services: Array, users: number, minUsers: number}}
     */
    this.setDefaultChoice = function (context) {
        console.log(context.choice);
        context.choice = {
            "period": __WEBPACK_IMPORTED_MODULE_0__const__["c" /* PERIOD */].ANNUAL,
            "os": __WEBPACK_IMPORTED_MODULE_0__const__["b" /* OS */].LINUX,
            "server": __WEBPACK_IMPORTED_MODULE_0__const__["d" /* PRODUCTS */].STANDALONE,
            "addons": [__WEBPACK_IMPORTED_MODULE_0__const__["d" /* PRODUCTS */].SIP],
            "services": [],
            "users": 10,
            "minUsers": 10
        };
    };

    /**
     *
     * @param page/Shop context
     */
    this.setForbidden = function (context) {
        context.forbidden = {
            "period": [],
            "os": [],
            "server": [],
            "addons": [],
            "services": []
        };
    };

    this.sumOrder = function (context) {
        console.log("Расчет суммы");
    };
}

/***/ })

});