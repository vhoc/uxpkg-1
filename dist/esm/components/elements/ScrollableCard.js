import { __assign } from "tslib";
import React from 'react';
import { colors, theme } from '../../theme';
import { Typography } from './Typography';
import { styled } from '@mui/material/styles';
export var ScrollableCard = function (_a) {
    var title = _a.title, description = _a.description, content = _a.content, style = _a.style;
    var MyDiv = styled('div')({
        overflowY: 'auto',
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
            width: '4px'
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: colors.gray[10],
            borderRadius: '3px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: colors.gray[50],
            borderRadius: '3px'
        }
    });
    return (React.createElement("div", { style: __assign({ minHeight: '150px', backgroundColor: colors.white, borderWidth: '1px', borderColor: colors.gray[20] || '#D8DDE4 !important', borderRadius: '8px', borderStyle: 'solid', paddingTop: '14px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '16px', display: 'flex', flexDirection: 'column', fontFamily: theme.font.body.regular.fontFamily, fontSize: theme.font.body.regular.fontSize, fontWeight: theme.font.body.regular.fontWeight, color: theme.font.body.regular.color }, style) },
        React.createElement(Typography, { variant: 'body-semiBold', style: {
                color: colors.gray[90],
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%',
                minHeight: '24px'
            } }, title),
        React.createElement(Typography, { variant: 'caption-regular' }, description),
        React.createElement(MyDiv, { style: __assign(__assign({}, theme.font.caption.regular), { width: '100%', textAlign: 'left' }) }, content)));
};
