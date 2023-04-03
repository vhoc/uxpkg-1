import { __assign } from "tslib";
import React from 'react';
import RiskLevelNone from '../../../assets/icons/risk-low.svg';
import RiskLevelLow from '../../../assets/icons/risk-low.svg';
import RiskLevelMedium from '../../../assets/icons/risk-med.svg';
import RiskLevelHigh from '../../../assets/icons/risk-high.svg';
import RiskLevelCritical from '../../../assets/icons/risk-critical.png';
export var SignalBars = function (_a) {
    var level = _a.level, style = _a.style;
    var levelsTable = {
        none: RiskLevelNone,
        low: RiskLevelLow,
        medium: RiskLevelMedium,
        high: RiskLevelHigh,
        critical: RiskLevelCritical
    };
    var selectedLevel = level;
    return (React.createElement("img", { src: levelsTable[selectedLevel], style: __assign({ display: 'flex', width: '15px', height: '14px' }, style), alt: "".concat(selectedLevel, " risk") }));
};
