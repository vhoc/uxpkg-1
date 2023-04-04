"use strict";
exports.__esModule = true;
exports.PercentBarCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../../theme");
var Typography_1 = require("../Typography");
var ChartPercentBar_1 = require("./ChartPercentBar");
var ChartItem_1 = require("./ChartItem");
var PercentBarCard = function (_a) {
    var title = _a.title, topRightCaption = _a.topRightCaption, items = _a.items, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ minWidth: '666px', width: '666px', paddingTop: '20px', paddingRight: '24px', paddingLeft: '24px', paddingBottom: '18px', display: 'flex', flexDirection: 'column', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(216, 221, 228)', borderRadius: '4px', backgroundColor: theme_1.colors.white }, style) },
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            } },
            react_1["default"].createElement(Typography_1.Typography, { variant: 'h4-regular' }, title),
            react_1["default"].createElement(Typography_1.Typography, { variant: 'h4-medium', style: {
                    color: theme_1.colors.gray[90],
                    fontSize: '16px'
                } }, topRightCaption)),
        react_1["default"].createElement("div", { style: {
                marginBottom: '57px',
                height: '79px'
            } },
            react_1["default"].createElement(ChartPercentBar_1.ChartPercentBar, { maxBarWidth: 79, height: 109, criteria: 'Excessive Permissions', data: items, legend: false })),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                flexFlow: 'row wrap',
                position: 'relative',
                height: '50%',
                gap: '15px 58px'
            } }, items && items.length >= 1 ?
            items.map(function (item, index) {
                return (react_1["default"].createElement(ChartItem_1.ChartItem, { key: index, type: 'inline', title: item.risk, color: item.color, amount: item.value, showPercent: false, style: { width: '266px' } }));
            })
            :
                null)));
};
exports.PercentBarCard = PercentBarCard;
