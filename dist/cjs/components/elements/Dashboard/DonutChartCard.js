"use strict";
exports.__esModule = true;
exports.DonutChartCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../../theme");
var Typography_1 = require("../Typography");
var ChartItem_1 = require("./ChartItem");
var DonutChart_1 = require("./DonutChart");
var DonutChartCard = function (_a) {
    var title = _a.title, items = _a.items, shortTitle = _a.shortTitle, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ minWidth: '666px', width: '666px', paddingTop: '20px', paddingRight: '40px', paddingLeft: '24px', paddingBottom: '31px', display: 'flex', gap: '70px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(216, 221, 228)', borderRadius: '4px', backgroundColor: theme_1.colors.white }, style) },
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '36px'
            } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Typography_1.Typography, { variant: 'h4-regular', style: { color: '#545B71' } }, title)),
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '44px'
                } }, items && items.length >= 1 ?
                items.map(function (item, index) {
                    return (react_1["default"].createElement(ChartItem_1.ChartItem, { key: index, title: item.type, color: item.color, amount: item.value, percent: item.percent, caption: item.caption }));
                })
                :
                    null)),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '220px'
            } },
            react_1["default"].createElement(DonutChart_1.DonutChart, { data: items, width: 220, height: 220, shortTitle: shortTitle }))));
};
exports.DonutChartCard = DonutChartCard;
