import { __assign } from "tslib";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/pro-solid-svg-icons';
import { colors } from '../../theme';
import { Typography } from './Typography';
import { TextInput } from './TextInput';
import { Button } from './Button';
export var RejectionModal = function (_a) {
    var title = _a.title, comments = _a.comments, onChangeComments = _a.onChangeComments, onClickCancel = _a.onClickCancel, onClickReject = _a.onClickReject, style = _a.style;
    return (React.createElement("div", { style: __assign({ width: '584px', height: 'auto', paddingTop: '31px', paddingRight: '31px', paddingBottom: '24px', paddingLeft: '31px', display: 'flex', flexDirection: 'column', gap: '28px', backgroundColor: colors.white, borderRadius: '8px', boxShadow: '0px 2px 4px rgba(34, 41, 69, 0.37)' }, style) },
        React.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
            } },
            React.createElement(FontAwesomeIcon, { icon: faTriangleExclamation, color: colors.yellow[50], style: {
                    backgroundColor: 'rgba(216, 160, 50, 0.1)',
                    borderRadius: '100%',
                    padding: '6px'
                } }),
            React.createElement(Typography, { variant: 'h4-medium', style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%'
                } }, title)),
        React.createElement(TextInput, { label: 'Add comments', multiline: true, rows: 2, onChange: onChangeComments, value: comments }),
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '16px'
            } },
            React.createElement(Button, { size: "sm", variant: "gray", onClick: onClickCancel }, "Cancel"),
            React.createElement(Button, { size: "sm", variant: "grayRed", onClick: onClickReject }, "Reject"))));
};
