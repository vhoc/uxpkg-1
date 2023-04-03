import { __assign } from "tslib";
import React, { useState } from 'react';
import { colors } from '../../../theme';
import { CloudIcon } from '../../graphical/CloudIcon';
import { Typography } from '../Typography';
import { RiskIndicator } from './RiskIndicator';
export var AccountRiskItem = function (_a) {
    var accountProvider = _a.accountProvider, icon = _a.icon, title = _a.title, caption = _a.caption, riskLevel = _a.riskLevel, onClick = _a.onClick, style = _a.style;
    var _b = useState(false), hover = _b[0], setHover = _b[1];
    var iconOptions = {
        aws: 'aws',
        gcp: 'gcp',
        azure: 'gcp'
    };
    var selectedType = accountProvider;
    return (React.createElement("div", { style: __assign({ backgroundColor: hover ? '#f6fbff' : colors.white, paddingTop: '8px', paddingRight: '16px', paddingBottom: '8px', paddingLeft: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', cursor: 'pointer' }, style), onClick: onClick, onMouseOver: function () { return setHover(true); }, onMouseOut: function () { return setHover(false); } },
        React.createElement("div", { style: {
                display: 'flex',
                gap: '11px'
            } },
            accountProvider ?
                React.createElement(CloudIcon, { type: selectedType, style: { width: '18px', height: '18px' } })
                :
                    icon ?
                        React.createElement("div", { style: { width: '18px', height: '18px' } }, icon)
                        :
                            null,
            React.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1px'
                } },
                React.createElement(Typography, { variant: 'bodySmall-regular', style: { color: colors.gray[90] } }, title),
                React.createElement(Typography, { variant: 'bodySmall-regular', style: { color: colors.gray[70] } }, caption))),
        React.createElement(RiskIndicator, { level: riskLevel })));
};
