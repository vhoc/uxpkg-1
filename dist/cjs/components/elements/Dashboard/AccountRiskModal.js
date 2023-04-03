"use strict";
exports.__esModule = true;
exports.AccountRiskModal = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Typography_1 = require("../Typography");
var Button_1 = require("../Button");
var theme_1 = require("../../../theme");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
var styles_1 = require("@mui/material/styles");
var AccountRiskItem_1 = require("./AccountRiskItem");
var AccountRiskModal = function (_a) {
    var items = _a.items, style = _a.style, onCloseButtonClick = _a.onCloseButtonClick;
    var MyDiv = (0, styles_1.styled)('div')({
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '4px'
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: theme_1.colors.gray[10],
            borderRadius: '3px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme_1.colors.gray[50],
            borderRadius: '3px'
        }
    });
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ width: '626px', height: 'fit-content', maxHeight: '550px', display: 'flex', flexDirection: 'column', paddingTop: '29px', paddingRight: '32px', paddingBottom: '16px', paddingLeft: '32px', backgroundColor: theme_1.colors.white, border: "1px solid ".concat(theme_1.colors.gray[20]), borderRadius: '8px', gap: '12px' }, style) },
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                justifyContent: 'space-between'
            } },
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column'
                } },
                react_1["default"].createElement(Typography_1.Typography, { variant: 'h4-regular' }, "Select Account"),
                react_1["default"].createElement(Typography_1.Typography, { variant: 'caption-regular' }, "".concat(String(items.length), " Accounts found"))),
            react_1["default"].createElement(Button_1.Button, { variant: 'gray', icon: pro_regular_svg_icons_1.faTimes, onClick: onCloseButtonClick }, "Close")),
        react_1["default"].createElement(MyDiv, { style: {
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '400px'
            } }, items && items.length >= 1 ?
            items.map(function (item, index) {
                return (react_1["default"].createElement(AccountRiskItem_1.AccountRiskItem, { key: index, accountProvider: item.accountProvider, icon: item.icon, title: item.title, caption: item.caption, riskLevel: item.riskLevel, onClick: item.onClick, style: item.style }));
            })
            :
                null)));
};
exports.AccountRiskModal = AccountRiskModal;
