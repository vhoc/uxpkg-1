"use strict";
exports.__esModule = true;
exports.Detault = void 0;
var Paginator_1 = require("../../components/elements/Paginator");
exports["default"] = {
    title: 'elements/Paginator',
    component: Paginator_1.Paginator
};
exports.Detault = {
    args: {
        count: 10,
        page: 4,
        onChange: function () { return alert("Changed the page."); },
        boundaryCount: 1
    }
};
