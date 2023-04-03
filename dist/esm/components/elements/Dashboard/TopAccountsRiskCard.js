import { __assign } from "tslib";
import React from 'react';
import { colors } from '../../../theme';
import { Typography } from '../Typography';
import { ResourceAccountRiskMeter } from './ResourceAccountRiskMeter';
export var TopAccountsRiskCard = function (_a) {
    var items = _a.items, style = _a.style;
    return (React.createElement("div", { style: __assign({ display: 'flex', flexDirection: 'column', backgroundColor: colors.white, paddingTop: '20px', paddingRight: '24px', paddingBottom: '33px', paddingLeft: '24px', gap: '32px', width: '666px', border: "solid 1px ".concat(colors.gray[20]), borderRadius: '4px' }, style) },
        React.createElement(Typography, { variant: 'h4-regular' }, "Top Accounts At Risk"),
        React.createElement("div", { style: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                gap: '16px 30px'
            } }, items && items.length >= 1 ?
            items.map(function (item, index) {
                return (React.createElement(ResourceAccountRiskMeter, { key: index, title: item.title, accountProvider: item.accountProvider, icon: item.icon, compliantUserPercentage: item.compliantUserPercentage, lowRiskUserPercentage: item.lowRiskUserPercentage, mediumRiskUserPercentage: item.mediumRiskUserPercentage, highRiskUserPercentage: item.highRiskUserPercentage, criticalRiskUserPercentage: item.criticalRiskUserPercentage }));
            })
            :
                null)));
};
