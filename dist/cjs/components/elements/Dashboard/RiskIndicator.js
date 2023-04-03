"use strict";
exports.__esModule = true;
exports.RiskIndicator = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../../theme");
var SignalBars_1 = require("./SignalBars");
var Typography_1 = require("../Typography");
var RiskIndicator = function (_a) {
    var level = _a.level, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ width: '84px', backgroundColor: theme_1.colors.gray[5], paddingTop: '5px', paddingRight: '8px', paddingBottom: '3px', paddingLeft: '8px', display: 'flex', gap: '8px', alignItems: 'baseline', borderRadius: '4px' }, style) },
        react_1["default"].createElement(SignalBars_1.SignalBars, { level: level }),
        react_1["default"].createElement(Typography_1.Typography, { variant: 'body-regular', style: { textTransform: 'capitalize' } }, level)));
};
exports.RiskIndicator = RiskIndicator;
