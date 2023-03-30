import { __assign } from "tslib";
import React from 'react';
import { Typography } from '../Typography';
import { colors } from '../../../theme';
export var ChartItem = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'block' : _b, title = _a.title, color = _a.color, amount = _a.amount, percent = _a.percent, _c = _a.showPercent, showPercent = _c === void 0 ? true : _c, caption = _a.caption, style = _a.style;
    return (React.createElement("div", { style: __assign({ display: 'flex', justifyContent: type === 'inline' ? 'space-between' : 'default', gap: '10px', alignItems: type === 'block' ? 'unset' : 'center' }, style) },
        React.createElement("div", { style: {
                display: type === 'inline' ? 'flex' : 'unset',
                gap: type === 'inline' ? '10px' : 'unset',
                alignItems: 'center'
            } },
            React.createElement("div", { style: {
                    width: '16px',
                    height: '16px',
                    backgroundColor: color,
                    borderRadius: '4px',
                    alignItems: type === 'inline' ? 'center' : 'flex-start'
                } }),
            type === 'inline' ?
                React.createElement(Typography, { variant: type === 'inline' ? 'body-regular' : 'body-semiBold', color: colors.gray[90], style: {
                        lineHeight: '2px'
                    } }, title)
                :
                    null),
        React.createElement("div", { style: {
                display: 'flex',
                flexDirection: type === 'block' ? 'column' : 'row',
                alignItems: type === 'block' ? 'unset' : 'center'
            } },
            type === 'block' ?
                React.createElement(Typography, { variant: 'body-semiBold', color: colors.gray[90], style: {
                        lineHeight: 'unset',
                        verticalAlign: 'center'
                    } }, title)
                :
                    null,
            React.createElement(Typography, { variant: type === 'inline' ? 'body-semiBold' : 'h4-medium', style: {
                    alignItems: 'center',
                    lineHeight: 'unset'
                } },
                String(amount),
                showPercent && percent ?
                    '(' + String(percent) + ')%'
                    :
                        null),
            type === 'block' ?
                React.createElement(Typography, { variant: 'caption-regular' }, caption)
                :
                    null)));
};
