import { __assign } from "tslib";
import React from 'react';
import { colors } from '../../theme';
import { Typography } from './Typography';
export var CommentBox = function (_a) {
    var title = _a.title, timestamp = _a.timestamp, comment = _a.comment, style = _a.style;
    return (React.createElement("div", { style: __assign({ backgroundColor: colors.blue[5], borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', borderColor: colors.blue[20], display: 'flex', flexDirection: 'column', paddingTop: '16px', paddingBottom: '24px', paddingLeft: '24px', paddingRight: '24px', width: '100%', minWidth: '583px', gap: '14px' }, style) },
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: '24px'
            } },
            React.createElement(Typography, { variant: 'h4-medium', style: {
                    width: '70%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                } }, title),
            React.createElement(Typography, { variant: 'breadcrumbLink', style: {
                    color: colors.gray[40],
                    width: 'fit-content'
                } }, timestamp)),
        React.createElement(Typography, { variant: 'inputText-typed' }, comment)));
};
