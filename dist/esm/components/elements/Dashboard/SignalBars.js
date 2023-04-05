import { __assign } from "tslib";
import React from 'react';
import RiskLevelNone from '../../../assets/icons/risk-low.svg';
import RiskLevelLow from '../../../assets/icons/risk-low.svg';
import RiskLevelMedium from '../../../assets/icons/risk-med.svg';
import RiskLevelHigh from '../../../assets/icons/risk-high.svg';
import RiskLevelCritical from '../../../assets/icons/risk-critical.png';
export var SignalBars = function (_a) {
    var variant = _a.variant, style = _a.style;
    var variantsTable = {
        none: RiskLevelNone,
        low: RiskLevelLow,
        medium: RiskLevelMedium,
        high: RiskLevelHigh,
        critical: RiskLevelCritical
    };
    var selectedVariant = variant;
    return (React.createElement("img", { src: variantsTable[selectedVariant], style: __assign({ display: 'flex', width: '15px', height: '14px' }, style), alt: "".concat(selectedVariant, " risk") }));
};
