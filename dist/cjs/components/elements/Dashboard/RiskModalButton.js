"use strict";
exports.__esModule = true;
exports.RiskModalButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Typography_1 = require("../Typography");
var RiskIndicator_1 = require("./RiskIndicator");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
var theme_1 = require("../../../theme");
var material_1 = require("@mui/material");
var RiskModalButton = function (_a) {
    var icon = _a.icon, iconContainerStyle = _a.iconContainerStyle, title = _a.title, _b = _a.riskLevel, riskLevel = _b === void 0 ? 'low' : _b, onClick = _a.onClick, style = _a.style;
    var MyButton = (0, material_1.styled)('button')(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        background-color: ", ";\n        :hover {\n            background-color: ", ";\n        }\n        :active {\n            background-color: ", ";\n        }\n    "], ["\n        background-color: ", ";\n        :hover {\n            background-color: ", ";\n        }\n        :active {\n            background-color: ", ";\n        }\n    "])), theme_1.colors.white, theme_1.colors.blue[5], theme_1.colors.blue[10]);
    return (react_1["default"].createElement(MyButton, { style: tslib_1.__assign({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: "1px solid ".concat(theme_1.colors.gray[20]), borderRadius: '4px', paddingTop: '6px', paddingRight: '11px', paddingBottom: '6px', paddingLeft: '11px', minWidth: '403px' }, style), onClick: onClick },
        react_1["default"].createElement("div", { style: { display: 'flex', gap: '11px', alignItems: 'center' } },
            react_1["default"].createElement("div", { style: tslib_1.__assign({ width: '18px', height: '18px', display: 'flex', alignItems: 'center' }, iconContainerStyle) }, icon ? icon : null),
            react_1["default"].createElement(Typography_1.Typography, { variant: 'body-semiBold', style: {
                    lineHeight: '0'
                } }, title)),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
            } },
            react_1["default"].createElement(RiskIndicator_1.RiskIndicator, { variant: riskLevel }),
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_regular_svg_icons_1.faBars }))));
};
exports.RiskModalButton = RiskModalButton;
var templateObject_1;
