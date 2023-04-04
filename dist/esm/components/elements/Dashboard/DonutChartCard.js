import { __assign } from "tslib";
import React from 'react';
import { colors } from '../../../theme';
import { Typography } from '../Typography';
import { ChartItem } from './ChartItem';
import { DonutChart } from './DonutChart';
export var DonutChartCard = function (_a) {
    var title = _a.title, items = _a.items, shortTitle = _a.shortTitle, style = _a.style;
    return (React.createElement("div", { style: __assign({ minWidth: '666px', width: '666px', paddingTop: '20px', paddingRight: '40px', paddingLeft: '24px', paddingBottom: '31px', display: 'flex', gap: '70px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(216, 221, 228)', borderRadius: '4px', backgroundColor: colors.white }, style) },
        React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '36px'
            } },
            React.createElement("div", null,
                React.createElement(Typography, { variant: 'h4-regular', style: { color: '#545B71' } }, title)),
            React.createElement("div", { style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '44px'
                } }, items && items.length >= 1 ?
                items.map(function (item, index) {
                    return (React.createElement(ChartItem, { key: index, title: item.type, color: item.color, amount: item.value, percent: item.percent, caption: item.caption }));
                })
                :
                    null)),
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '220px'
            } },
            React.createElement(DonutChart, { data: items, width: 220, height: 220, shortTitle: shortTitle }))));
};
