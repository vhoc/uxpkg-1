"use strict";
exports.__esModule = true;
exports.PaginationBar = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var PaginationBar = function (_a) {
    var caption = _a.caption, children = _a.children, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ backgroundColor: theme_1.colors.white, paddingTop: '13px', paddingRight: '8px', paddingLeft: '1px', paddingBottom: '0px', borderTop: "1px solid ".concat(theme_1.colors.gray[20], " "), display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, style) },
        react_1["default"].createElement(Typography_1.Typography, { variant: 'body-regular' }, caption),
        children));
};
exports.PaginationBar = PaginationBar;
