"use strict";
exports.__esModule = true;
exports.PolicyCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Typography_1 = require("./Typography");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var theme_1 = require("../../theme");
var Button_1 = require("./Button");
var ImageDropDownButton_1 = require("./ImageDropDownButton");
var PolicyCard = function (_a) {
    var width = _a.width, policyName = _a.policyName, accountName = _a.accountName, accountNumber = _a.accountNumber, expirationTime = _a.expirationTime, onClickResources = _a.onClickResources, onClickIdentities = _a.onClickIdentities, _b = _a.resourcesAmount, resourcesAmount = _b === void 0 ? 0 : _b, _c = _a.identitiesAmount, identitiesAmount = _c === void 0 ? 0 : _c, menuItems = _a.menuItems, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '16px', display: 'flex', flexDirection: 'column', borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: theme_1.colors.gray[20], width: width || '240px', minWidth: '280px', maxWidth: width }, style) },
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column'
            } },
            react_1["default"].createElement(Typography_1.Typography, { variant: 'title-regular' }, policyName),
            react_1["default"].createElement(Typography_1.Typography, { variant: 'caption-regular' },
                accountName,
                " / ",
                accountNumber),
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    marginTop: '24px',
                    marginBottom: '16px',
                    gap: '10px',
                    alignItems: 'center'
                } },
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faClock, color: theme_1.colors.gray[70] }),
                react_1["default"].createElement(Typography_1.Typography, { variant: 'body-regular' }, expirationTime))),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                justifyContent: 'space-between'
            } },
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    gap: '4px'
                } },
                react_1["default"].createElement(Button_1.Button, { icon: pro_solid_svg_icons_1.faBrowser, iconColor: "#A6ABB6", iconPosition: "start", size: "sm", variant: "grayBlue", onClick: onClickResources }, resourcesAmount.toString()),
                react_1["default"].createElement(Button_1.Button, { icon: pro_solid_svg_icons_1.faUsers, iconColor: "#A6ABB6", iconPosition: "start", size: "sm", variant: "grayBlue", onClick: onClickIdentities }, identitiesAmount.toString())),
            react_1["default"].createElement(ImageDropDownButton_1.ImageDropDownButton, { menuItems: menuItems, mode: "icon", size: "sm", variant: "gray", hasDownArrow: false }))));
};
exports.PolicyCard = PolicyCard;
