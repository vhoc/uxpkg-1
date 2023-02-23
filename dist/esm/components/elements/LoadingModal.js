import { __assign, __rest } from "tslib";
import React from 'react';
import { colors } from '../../theme';
import { Spinner } from '../graphical/Spinner';
import { Typography } from './Typography';
export var LoadingModal = function (_a) {
    var message = _a.message, caption = _a.caption, props = __rest(_a, ["message", "caption"]);
    return (React.createElement("div", __assign({ style: {
            minWidth: '344px',
            width: 'fit-content',
            maxWidth: '700px',
            minHeight: '117px',
            backgroundColor: colors.white,
            boxShadow: '0px 2px 4px RGBA(34, 41, 69, 0.37)',
            borderRadius: '8px',
            padding: '32px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'wait'
        } }, props),
        React.createElement(Spinner, null),
        React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '85%'
            } },
            React.createElement(Typography, { variant: 'body-semiBold', style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%'
                } }, message),
            React.createElement(Typography, { variant: 'body-regular', style: {
                    whiteSpace: 'normal',
                    overflow: 'hidden',
                    //textOverflow: 'ellipsis',
                    width: '100%'
                } }, caption))));
};
