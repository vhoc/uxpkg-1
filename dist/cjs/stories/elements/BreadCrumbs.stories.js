"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var BreadCrumbs_1 = require("../../components/elements/BreadCrumbs");
var BreadCrumbLink_1 = require("../../components/elements/BreadCrumbLink");
var react_1 = tslib_1.__importDefault(require("react"));
exports["default"] = {
    title: 'elements/Labels/BreadCrumbs',
    component: BreadCrumbs_1.BreadCrumbs
};
exports.Default = {
    args: {
        maxItems: 2,
        children: [
            react_1["default"].createElement(BreadCrumbLink_1.BreadCrumbLink, { key: 1, label: "Link 1", href: '/' }),
            react_1["default"].createElement(BreadCrumbLink_1.BreadCrumbLink, { key: 2, label: "Link 2", href: '/' }),
            react_1["default"].createElement(BreadCrumbLink_1.BreadCrumbLink, { key: 3, label: "Link 3", href: '/' }),
        ]
    }
};
