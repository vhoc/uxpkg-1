import React from 'react';
import { Typography } from '../Typography';
import { colors } from '../../../theme';
export var ChartItem = function (_a) {
    var title = _a.title, color = _a.color, amount = _a.amount, percent = _a.percent, caption = _a.caption;
    return (React.createElement("div", { style: {
            display: 'flex',
            gap: '10px'
        } },
        React.createElement("div", { style: {
                width: '16px',
                height: '16px',
                backgroundColor: color,
                borderRadius: '4px'
            } }),
        React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column'
            } },
            React.createElement(Typography, { variant: 'body-semiBold', color: colors.gray[90], style: { lineHeight: 'unset' } }, title),
            React.createElement(Typography, { variant: 'h4-medium' },
                String(amount),
                " (",
                String(percent),
                "%)"),
            React.createElement(Typography, { variant: 'caption-regular' }, caption))));
};
