import { __assign } from "tslib";
import React from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { colors } from '../../../theme';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { styled } from '@mui/material/styles';
import { AccountRiskItem } from './AccountRiskItem';
export var AccountRiskModal = function (_a) {
    var items = _a.items, style = _a.style, onCloseButtonClick = _a.onCloseButtonClick;
    var MyDiv = styled('div')({
        overflowY: 'auto',
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
    return (React.createElement("div", { style: __assign({ width: '626px', height: 'fit-content', maxHeight: '550px', display: 'flex', flexDirection: 'column', paddingTop: '29px', paddingRight: '32px', paddingBottom: '16px', paddingLeft: '32px', backgroundColor: colors.white, border: "1px solid ".concat(colors.gray[20]), borderRadius: '8px', gap: '12px' }, style) },
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'space-between'
            } },
            React.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column'
                } },
                React.createElement(Typography, { variant: 'h4-regular' }, "Select Account"),
                React.createElement(Typography, { variant: 'caption-regular' }, "".concat(String(items.length), " Accounts found"))),
            React.createElement(Button, { variant: 'gray', icon: faTimes, onClick: onCloseButtonClick }, "Close")),
        React.createElement(MyDiv, { style: {
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '400px'
            } }, items && items.length >= 1 ?
            items.map(function (item, index) {
                return (React.createElement(AccountRiskItem, { key: index, accountProvider: item.accountProvider, icon: item.icon, title: item.title, caption: item.caption, riskLevel: item.riskLevel, onClick: item.onClick, style: item.style }));
            })
            :
                null)));
};
