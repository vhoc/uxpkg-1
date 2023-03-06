import { __assign } from "tslib";
import React from 'react';
import { Typography } from './Typography';
import { colors } from '../../theme';
export var ResourceDropDownItem = function (_a) {
    var resourceName = _a.resourceName, resourceType = _a.resourceType, icon = _a.icon, onClick = _a.onClick, style = _a.style;
    return (React.createElement("div", { style: __assign({ minWidth: '217px', width: '217px', backgroundColor: colors.white, paddingTop: '8px', paddingBottom: '8px', paddingLeft: '12px', paddingRight: '12px', display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box', cursor: 'pointer' }, style), onClick: onClick },
        React.createElement("div", { style: {
                width: '20px',
                minWidth: '20px',
                maxWidth: '20px'
            } }, icon ? icon : null),
        React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%'
            } },
            React.createElement(Typography, { variant: 'breadcrumbLink', color: colors.gray[90], style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '95%'
                } }, resourceName),
            React.createElement(Typography, { variant: 'breadcrumbLink', color: colors.gray[70], style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '95%'
                } }, resourceType))));
};
