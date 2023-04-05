"use strict";
exports.__esModule = true;
exports.AccountRiskItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var theme_1 = require("../../../theme");
var CloudIcon_1 = require("../../graphical/CloudIcon");
var Typography_1 = require("../Typography");
var RiskIndicator_1 = require("./RiskIndicator");
var AccountRiskItem = function (_a) {
    var accountProvider = _a.accountProvider, icon = _a.icon, title = _a.title, caption = _a.caption, riskLevel = _a.riskLevel, onClick = _a.onClick, style = _a.style;
    var _b = (0, react_1.useState)(false), hover = _b[0], setHover = _b[1];
    var iconOptions = {
        aws: 'aws',
        gcp: 'gcp',
        azure: 'gcp'
    };
    var selectedType = accountProvider;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ backgroundColor: hover ? '#f6fbff' : theme_1.colors.white, paddingTop: '8px', paddingRight: '16px', paddingBottom: '8px', paddingLeft: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', cursor: 'pointer' }, style), onClick: onClick, onMouseOver: function () { return setHover(true); }, onMouseOut: function () { return setHover(false); } },
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                gap: '11px'
            } },
            accountProvider ?
                react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: selectedType, style: { width: '18px', height: '18px' } })
                :
                    icon ?
                        react_1["default"].createElement("div", { style: { width: '18px', height: '18px' } }, icon)
                        :
                            null,
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1px'
                } },
                react_1["default"].createElement(Typography_1.Typography, { variant: 'bodySmall-regular', style: { color: theme_1.colors.gray[90] } }, title),
                react_1["default"].createElement(Typography_1.Typography, { variant: 'bodySmall-regular', style: { color: theme_1.colors.gray[70] } }, caption))),
        react_1["default"].createElement(RiskIndicator_1.RiskIndicator, { variant: riskLevel })));
};
exports.AccountRiskItem = AccountRiskItem;
