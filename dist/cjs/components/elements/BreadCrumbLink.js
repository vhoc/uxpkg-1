"use strict";
exports.__esModule = true;
exports.BreadCrumbLink = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var material_1 = require("@mui/material");
var Typography_1 = require("./Typography");
var BreadCrumbLink = function (_a) {
    var label = _a.label, href = _a.href;
    var _b = (0, react_1.useState)(false), hover = _b[0], setHover = _b[1];
    var _c = (0, react_1.useState)(false), active = _c[0], setActive = _c[1];
    return (react_1["default"].createElement(material_1.Link, { onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, underline: 'none', href: href },
        react_1["default"].createElement(Typography_1.Typography, { variant: active ? 'breadcrumbLink-pressed' : hover ? 'breadcrumbLink-hover' : 'breadcrumbLink' }, label)));
};
exports.BreadCrumbLink = BreadCrumbLink;
