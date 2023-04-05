"use strict";
exports.__esModule = true;
exports.SignalBars = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var risk_low_svg_1 = tslib_1.__importDefault(require("../../../assets/icons/risk-low.svg"));
var risk_low_svg_2 = tslib_1.__importDefault(require("../../../assets/icons/risk-low.svg"));
var risk_med_svg_1 = tslib_1.__importDefault(require("../../../assets/icons/risk-med.svg"));
var risk_high_svg_1 = tslib_1.__importDefault(require("../../../assets/icons/risk-high.svg"));
var risk_critical_png_1 = tslib_1.__importDefault(require("../../../assets/icons/risk-critical.png"));
var SignalBars = function (_a) {
    var variant = _a.variant, style = _a.style;
    var variantsTable = {
        none: risk_low_svg_1["default"],
        low: risk_low_svg_2["default"],
        medium: risk_med_svg_1["default"],
        high: risk_high_svg_1["default"],
        critical: risk_critical_png_1["default"]
    };
    var selectedVariant = variant;
    return (react_1["default"].createElement("img", { src: variantsTable[selectedVariant], style: tslib_1.__assign({ display: 'flex', width: '15px', height: '14px' }, style), alt: "".concat(selectedVariant, " risk") }));
};
exports.SignalBars = SignalBars;
