import { __assign } from "tslib";
import React from 'react';
import { Typography } from '../Typography';
export var CounterItem = function (_a) {
    var element = _a.element, count = _a.count, style = _a.style;
    return (React.createElement("div", { style: __assign({ display: 'flex', alignItems: 'center', gap: '9px', width: 'fit-content' }, style) },
        React.createElement("div", null, element),
        React.createElement(Typography, { variant: 'body-semiBold', style: { lineHeight: 'unset' } }, String(count))));
};
