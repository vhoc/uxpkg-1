import { __assign } from "tslib";
import React from 'react';
import { Typography } from './Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBrowser, faUsers } from '@fortawesome/pro-solid-svg-icons';
import { colors } from '../../theme';
import { Button } from './Button';
import { ImageDropDownButton } from './ImageDropDownButton';
export var PolicyCard = function (_a) {
    var width = _a.width, policyName = _a.policyName, accountName = _a.accountName, accountNumber = _a.accountNumber, expirationTime = _a.expirationTime, onClickResources = _a.onClickResources, onClickIdentities = _a.onClickIdentities, _b = _a.resourcesAmount, resourcesAmount = _b === void 0 ? 0 : _b, _c = _a.identitiesAmount, identitiesAmount = _c === void 0 ? 0 : _c, menuItems = _a.menuItems, style = _a.style;
    return (React.createElement("div", { style: __assign({ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '16px', display: 'flex', flexDirection: 'column', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: colors.gray[20], width: width || '240px', minWidth: '280px', maxWidth: width }, style) },
        React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column'
            } },
            React.createElement(Typography, { variant: 'title-regular' }, policyName),
            React.createElement(Typography, { variant: 'caption-regular' },
                accountName,
                " / ",
                accountNumber),
            React.createElement("div", { style: {
                    display: 'flex',
                    marginTop: '24px',
                    marginBottom: '16px',
                    gap: '10px',
                    alignItems: 'center'
                } },
                React.createElement(FontAwesomeIcon, { icon: faClock, color: colors.gray[70] }),
                React.createElement(Typography, { variant: 'body-regular' }, expirationTime))),
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'space-between'
            } },
            React.createElement("div", { style: {
                    display: 'flex',
                    gap: '4px'
                } },
                React.createElement(Button, { icon: faBrowser, iconColor: "#A6ABB6", iconPosition: "start", size: "sm", variant: "grayBlue", onClick: onClickResources }, resourcesAmount.toString()),
                React.createElement(Button, { icon: faUsers, iconColor: "#A6ABB6", iconPosition: "start", size: "sm", variant: "grayBlue", onClick: onClickIdentities }, identitiesAmount.toString())),
            React.createElement(ImageDropDownButton, { menuItems: menuItems, mode: "icon", size: "sm", variant: "gray", hasDownArrow: false }))));
};
