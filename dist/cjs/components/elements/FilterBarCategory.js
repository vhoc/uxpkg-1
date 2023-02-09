"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var FilterBarCategory = function (_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, children = _a.children, props = tslib_1.__rest(_a, ["name", "children"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: {
            width: '279px',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '16px'
        } }, props),
        react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.body.semiBold), { textTransform: 'capitalize' }) }, name),
        children));
};
exports["default"] = FilterBarCategory;
