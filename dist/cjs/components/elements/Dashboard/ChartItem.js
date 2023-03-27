"use strict";
exports.__esModule = true;
exports.ChartItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Typography_1 = require("../Typography");
var theme_1 = require("../../../theme");
var ChartItem = function (_a) {
    var title = _a.title, color = _a.color, amount = _a.amount, percent = _a.percent, caption = _a.caption;
    return (react_1["default"].createElement("div", { style: {
            display: 'flex',
            gap: '10px'
        } },
        react_1["default"].createElement("div", { style: {
                width: '16px',
                height: '16px',
                backgroundColor: color,
                borderRadius: '4px'
            } }),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column'
            } },
            react_1["default"].createElement(Typography_1.Typography, { variant: 'body-semiBold', color: theme_1.colors.gray[90], style: { lineHeight: 'unset' } }, title),
            react_1["default"].createElement(Typography_1.Typography, { variant: 'h4-medium' },
                String(amount),
                " (",
                String(percent),
                "%)"),
            react_1["default"].createElement(Typography_1.Typography, { variant: 'caption-regular' }, caption))));
};
exports.ChartItem = ChartItem;
