"use strict";
exports.__esModule = true;
exports.TopAccountsRiskCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../../theme");
var Typography_1 = require("../Typography");
var ResourceAccountRiskMeter_1 = require("./ResourceAccountRiskMeter");
var TopAccountsRiskCard = function (_a) {
    var items = _a.items, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ display: 'flex', flexDirection: 'column', backgroundColor: theme_1.colors.white, paddingTop: '20px', paddingRight: '24px', paddingBottom: '33px', paddingLeft: '24px', gap: '32px', width: '666px', border: "solid 1px ".concat(theme_1.colors.gray[20]), borderRadius: '4px' }, style) },
        react_1["default"].createElement(Typography_1.Typography, { variant: 'h4-regular' }, "Top Accounts At Risk"),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                gap: '16px 30px'
            } }, items && items.length >= 1 ?
            items.map(function (item, index) {
                return (react_1["default"].createElement(ResourceAccountRiskMeter_1.ResourceAccountRiskMeter, { key: index, title: item.title, accountProvider: item.accountProvider, icon: item.icon, compliantUserPercentage: item.compliantUserPercentage, lowRiskUserPercentage: item.lowRiskUserPercentage, mediumRiskUserPercentage: item.mediumRiskUserPercentage, highRiskUserPercentage: item.highRiskUserPercentage, criticalRiskUserPercentage: item.criticalRiskUserPercentage }));
            })
            :
                null)));
};
exports.TopAccountsRiskCard = TopAccountsRiskCard;
