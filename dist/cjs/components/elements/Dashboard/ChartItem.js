"use strict";
exports.__esModule = true;
exports.ChartItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Typography_1 = require("../Typography");
var theme_1 = require("../../../theme");
var ChartItem = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'block' : _b, title = _a.title, color = _a.color, amount = _a.amount, percent = _a.percent, _c = _a.showPercent, showPercent = _c === void 0 ? true : _c, caption = _a.caption, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ display: 'flex', justifyContent: type === 'inline' ? 'space-between' : 'default', gap: '10px', alignItems: type === 'block' ? 'unset' : 'center' }, style) },
        react_1["default"].createElement("div", { style: {
                display: type === 'inline' ? 'flex' : 'unset',
                gap: type === 'inline' ? '10px' : 'unset',
                alignItems: 'center'
            } },
            react_1["default"].createElement("div", { style: {
                    width: '16px',
                    height: '16px',
                    backgroundColor: color,
                    borderRadius: '4px',
                    alignItems: type === 'inline' ? 'center' : 'flex-start'
                } }),
            type === 'inline' ?
                react_1["default"].createElement(Typography_1.Typography, { variant: type === 'inline' ? 'body-regular' : 'body-semiBold', color: theme_1.colors.gray[90], style: {
                        lineHeight: '2px'
                    } }, title)
                :
                    null),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                flexDirection: type === 'block' ? 'column' : 'row',
                alignItems: type === 'block' ? 'unset' : 'center'
            } },
            type === 'block' ?
                react_1["default"].createElement(Typography_1.Typography, { variant: 'body-semiBold', color: theme_1.colors.gray[90], style: {
                        lineHeight: 'unset',
                        verticalAlign: 'center'
                    } }, title)
                :
                    null,
            react_1["default"].createElement(Typography_1.Typography, { variant: type === 'inline' ? 'body-semiBold' : 'h4-medium', style: {
                    alignItems: 'center',
                    lineHeight: 'unset'
                } },
                String(amount),
                showPercent && percent ?
                    '(' + String(percent) + ')%'
                    :
                        null),
            type === 'block' ?
                react_1["default"].createElement(Typography_1.Typography, { variant: 'caption-regular' }, caption)
                :
                    null)));
};
exports.ChartItem = ChartItem;
