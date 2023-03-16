import { __assign } from "tslib";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/pro-solid-svg-icons';
import { colors } from '../../theme';
import { Typography } from './Typography';
import { FilterBarItem } from './FilterBarItem';
import { SelectDropDown } from './SelectDropDown';
import { TextInput } from './TextInput';
import { Button } from './Button';
export var ApprovalModal = function (_a) {
    var title = _a.title, _b = _a.autoApprove, autoApprove = _b === void 0 ? false : _b, comments = _a.comments, endDateValue = _a.endDateValue, endDateOptions = _a.endDateOptions, timeValue = _a.timeValue, timeOptions = _a.timeOptions, onCommentsChange = _a.onCommentsChange, onClickCancel = _a.onClickCancel, onClickApprove = _a.onClickApprove, style = _a.style;
    return (React.createElement("div", { style: __assign({ width: '584px', height: 'auto', paddingTop: '31px', paddingRight: '31px', paddingBottom: '24px', paddingLeft: '31px', display: 'flex', flexDirection: 'column', gap: '28px', backgroundColor: colors.white, borderRadius: '8px', boxShadow: '0px 2px 4px rgba(34, 41, 69, 0.37)' }, style) },
        React.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
            } },
            React.createElement(FontAwesomeIcon, { icon: faTriangleExclamation, 
                //size={'md'}
                color: colors.yellow[50], style: {
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
        React.createElement(FilterBarItem, { checked: autoApprove, name: 'Auto approve future requests with the same configuration  ' }),
        autoApprove ?
            React.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                } },
                React.createElement(Typography, { variant: 'h4-regular' }, "Auto approve until"),
                React.createElement("div", { style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '31px'
                    } },
                    React.createElement(SelectDropDown, { label: "End Date", menuItems: endDateOptions, value: endDateValue, style: { width: '198px' } }),
                    React.createElement(SelectDropDown, { label: "Time", menuItems: timeOptions, value: timeValue, style: { width: '146px' } })))
            :
                null,
        React.createElement(TextInput, { label: 'Add comments', multiline: true, rows: 2, onChange: onCommentsChange, value: comments }),
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '16px'
            } },
            React.createElement(Button, { size: "sm", variant: "gray", onClick: onClickCancel }, "Cancel"),
            React.createElement(Button, { size: "sm", variant: "grayBlue", onClick: onClickApprove }, "Approve"))));
};