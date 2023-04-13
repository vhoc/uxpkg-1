import { __assign, __makeTemplateObject } from "tslib";
import React from 'react';
import { Typography } from '../Typography';
import { RiskIndicator } from './RiskIndicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/pro-regular-svg-icons';
import { colors } from '../../../theme';
import { styled } from '@mui/material';
export var RiskModalButton = function (_a) {
    var icon = _a.icon, iconContainerStyle = _a.iconContainerStyle, title = _a.title, _b = _a.riskLevel, riskLevel = _b === void 0 ? 'low' : _b, onClick = _a.onClick, style = _a.style;
    var MyButton = styled('button')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background-color: ", ";\n        :hover {\n            background-color: ", ";\n        }\n        :active {\n            background-color: ", ";\n        }\n    "], ["\n        background-color: ", ";\n        :hover {\n            background-color: ", ";\n        }\n        :active {\n            background-color: ", ";\n        }\n    "])), colors.white, colors.blue[5], colors.blue[10]);
    return (React.createElement(MyButton, { style: __assign({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: "1px solid ".concat(colors.gray[20]), borderRadius: '4px', paddingTop: '6px', paddingRight: '11px', paddingBottom: '6px', paddingLeft: '11px', minWidth: '403px' }, style), onClick: onClick },
        React.createElement("div", { style: { display: 'flex', gap: '11px', alignItems: 'center' } },
            React.createElement("div", { style: __assign({ width: '18px', height: '18px', display: 'flex', alignItems: 'center' }, iconContainerStyle) }, icon ? icon : null),
            React.createElement(Typography, { variant: 'body-semiBold', style: {
                    lineHeight: '0'
                } }, title)),
        React.createElement("div", { style: {
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
            } },
            React.createElement(RiskIndicator, { variant: riskLevel }),
            React.createElement(FontAwesomeIcon, { icon: faBars }))));
};
var templateObject_1;
