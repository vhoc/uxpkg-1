import { __assign } from "tslib";
import React from 'react';
import { colors } from '../../../theme';
import { Typography } from '../Typography';
import { ChartPercentBar } from './ChartPercentBar';
import { ChartItem } from './ChartItem';
export var PercentBarCard = function (_a) {
    var title = _a.title, topRightCaption = _a.topRightCaption, items = _a.items, style = _a.style;
    return (React.createElement("div", { style: __assign({ minWidth: '666px', width: '666px', 
            //height: '284px',
            paddingTop: '20px', paddingRight: '24px', paddingLeft: '24px', paddingBottom: '18px', display: 'flex', flexDirection: 'column', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(216, 221, 228)', borderRadius: '4px', backgroundColor: colors.white }, style) },
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            } },
            React.createElement(Typography, { variant: 'h4-regular' }, title),
            React.createElement(Typography, { variant: 'h4-medium', style: {
                    color: colors.gray[90],
                    fontSize: '16px'
                } }, topRightCaption)),
        React.createElement("div", { style: {
                marginBottom: '57px',
                height: '79px'
            } },
            React.createElement(ChartPercentBar, { maxBarWidth: 79, height: 109, criteria: 'Excessive Permissions', data: items, legend: false })),
        React.createElement("div", { style: {
                display: 'flex',
                flexFlow: 'row wrap',
                position: 'relative',
                height: '50%',
                gap: '15px 58px'
            } }, items && items.length >= 1 ?
            items.map(function (item, index) {
                return (React.createElement(ChartItem, { key: index, type: 'inline', title: item.risk, color: item.color, amount: item.value, showPercent: false, style: { width: '266px' } }));
            })
            :
                null)));
};
