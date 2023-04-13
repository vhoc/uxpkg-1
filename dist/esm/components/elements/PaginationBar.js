import { __assign } from "tslib";
import React from 'react';
import { colors } from '../../theme';
import { Typography } from './Typography';
export var PaginationBar = function (_a) {
    var caption = _a.caption, children = _a.children, style = _a.style;
    return (React.createElement("div", { style: __assign({ backgroundColor: colors.white, paddingTop: '13px', paddingRight: '8px', paddingLeft: '1px', paddingBottom: '0px', borderTop: "1px solid ".concat(colors.gray[20], " "), display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, style) },
        React.createElement(Typography, { variant: 'body-regular' }, caption),
        children));
};
