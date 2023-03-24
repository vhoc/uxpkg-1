"use strict";
exports.__esModule = true;
exports.CounterItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Typography_1 = require("../Typography");
var CounterItem = function (_a) {
    var element = _a.element, count = _a.count, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ display: 'flex', alignItems: 'center', gap: '9px', width: 'fit-content' }, style) },
        react_1["default"].createElement("div", null, element),
        react_1["default"].createElement(Typography_1.Typography, { variant: 'body-semiBold', style: { lineHeight: 'unset' } }, String(count))));
};
exports.CounterItem = CounterItem;
