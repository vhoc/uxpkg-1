import { __assign } from "tslib";
import React from 'react';
import { colors } from '../../../theme';
import { SignalBars } from './SignalBars';
import { Typography } from '../Typography';
export var RiskIndicator = function (_a) {
    var level = _a.level, style = _a.style;
    return (React.createElement("div", { style: __assign({ width: '84px', backgroundColor: colors.gray[5], paddingTop: '5px', paddingRight: '8px', paddingBottom: '3px', paddingLeft: '8px', display: 'flex', gap: '8px', alignItems: 'baseline', borderRadius: '4px' }, style) },
        React.createElement(SignalBars, { level: level }),
        React.createElement(Typography, { variant: 'body-regular', style: { textTransform: 'capitalize' } }, level)));
};
