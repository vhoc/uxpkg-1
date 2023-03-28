import { __assign } from "tslib";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/pro-solid-svg-icons';
import { colors } from '../../theme';
import { Typography } from './Typography';
import { FilterBarItem } from './FilterBarItem';
import { SelectDropDown } from './SelectDropDown';
import { TextInput } from './TextInput';
import { Button } from './Button';
export var ApprovalModal = function (_a) {
    var title = _a.title, _b = _a.autoApprove, autoApprove = _b === void 0 ? false : _b, comments = _a.comments, endDateValue = _a.endDateValue, endDateOptions = _a.endDateOptions, timeValue = _a.timeValue, timeOptions = _a.timeOptions, onClickCancel = _a.onClickCancel, onClickApprove = _a.onClickApprove, style = _a.style;
    var _c = useState(autoApprove), auto = _c[0], setAuto = _c[1];
    var _d = useState(endDateValue), endDateState = _d[0], setEndDateState = _d[1];
    var _e = useState(timeValue), timeState = _e[0], setTimeState = _e[1];
    var _f = useState(comments), commentsState = _f[0], setCommentsState = _f[1];
    var handleEndDateChange = function (event) {
        setEndDateState(event.target.value);
    };
    var handleTimeChange = function (event) {
        setTimeState(event.target.value);
    };
    var handleCommentsChange = function (event) {
        setCommentsState(event.target.value);
    };
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
        React.createElement(FilterBarItem, { checked: auto, onClick: function () {
                setAuto(function (prevState) { return !prevState; });
            }, name: 'Auto approve future requests with the same configuration' }),
        auto ?
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
                    React.createElement(SelectDropDown, { label: "End Date", menuItems: endDateOptions, value: endDateState, style: { width: '198px' }, onChange: handleEndDateChange }),
                    React.createElement(SelectDropDown, { label: "Time", menuItems: timeOptions, value: timeState, style: { width: '146px' }, onChange: handleTimeChange })))
            :
                null,
        React.createElement(TextInput, { label: 'Add comments', multiline: true, rows: 2, onChange: handleCommentsChange, value: commentsState }),
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '16px'
            } },
            React.createElement(Button, { size: "sm", variant: "gray", onClick: onClickCancel }, "Cancel"),
            React.createElement(Button, { size: "sm", variant: "grayBlue", onClick: onClickApprove }, "Approve"))));
};
