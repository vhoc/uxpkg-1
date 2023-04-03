import { __assign } from "tslib";
import React from 'react';
import { CloudIcon } from '../../graphical/CloudIcon';
import { Typography } from '../Typography';
import { ChartPercentBar } from './ChartPercentBar';
import { colors } from '../../../theme';
export var ResourceAccountRiskMeter = function (_a) {
    var icon = _a.icon, accountProvider = _a.accountProvider, title = _a.title, compliantUserPercentage = _a.compliantUserPercentage, lowRiskUserPercentage = _a.lowRiskUserPercentage, mediumRiskUserPercentage = _a.mediumRiskUserPercentage, highRiskUserPercentage = _a.highRiskUserPercentage, criticalRiskUserPercentage = _a.criticalRiskUserPercentage, style = _a.style;
    var iconOptions = {
        aws: 'aws',
        gcp: 'gcp',
        azure: 'gcp'
    };
    var selectedType = accountProvider;
    return (React.createElement("div", { style: __assign({ width: '290px', minWidth: '290px', display: 'flex', gap: '12px' }, style) },
        accountProvider ?
            React.createElement("div", { style: {
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: "1px solid ".concat(colors.gray[20]),
                    borderRadius: '2px'
                } },
                React.createElement(CloudIcon, { type: selectedType, style: { width: '18px', height: '18px' } }))
            :
                icon ?
                    React.createElement("div", { style: { width: '32px', height: '32px' } }, icon)
                    :
                        null,
        React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                width: '80%'
            } },
            React.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline'
                } },
                React.createElement(Typography, { variant: 'body-regular', style: {
                        marginTop: '4px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%'
                    } }, title),
                React.createElement(Typography, { variant: 'body-semiBold' }, "".concat(String(compliantUserPercentage || 0), "%"))),
            React.createElement("div", null,
                React.createElement(ChartPercentBar, { legend: false, 
                    //maxBarWidth={79}
                    //height={109}
                    criteria: 'Users', marginTop: '-36px', data: [
                        {
                            risk: 'Compliant',
                            'Users': 'Users',
                            value: compliantUserPercentage,
                            color: 'rgb(201, 206, 215)'
                        },
                        {
                            risk: 'Low Risk',
                            'Users': 'Users',
                            value: lowRiskUserPercentage,
                            color: '#a8d08d'
                        },
                        {
                            risk: 'Medium Risk',
                            'Users': 'Users',
                            value: mediumRiskUserPercentage,
                            color: '#ffe5b0'
                        },
                        {
                            risk: 'High Risk',
                            'Users': 'Users',
                            value: highRiskUserPercentage,
                            color: '#ff9c4a'
                        },
                        {
                            risk: 'Critial Risk',
                            'Users': 'Users',
                            value: criticalRiskUserPercentage,
                            color: '#db573f'
                        },
                    ] })))));
};
