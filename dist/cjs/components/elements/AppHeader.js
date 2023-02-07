"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var AppHeaderUserInfo_1 = tslib_1.__importDefault(require("./AppHeaderUserInfo"));
var ImageDropDownButton_1 = tslib_1.__importDefault(require("./ImageDropDownButton"));
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var IconButton_1 = tslib_1.__importDefault(require("./IconButton"));
var AppHeader = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, imgUrl = _a.imgUrl, userName = _a.userName, userRole = _a.userRole, dropDownMenuItems = _a.dropDownMenuItems, onClickNotificationButton = _a.onClickNotificationButton, props = tslib_1.__rest(_a, ["variant", "imgUrl", "userName", "userRole", "dropDownMenuItems", "onClickNotificationButton"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: {
            width: '100%',
            backgroundColor: theme_1.colors.white,
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingLeft: '24px',
            paddingRight: '22px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        } }, props),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("img", { src: imgUrl })),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
            } },
            react_1["default"].createElement(AppHeaderUserInfo_1["default"], { userName: userName || '', userRole: userRole || '' }),
            react_1["default"].createElement(ImageDropDownButton_1["default"], { menuItems: dropDownMenuItems }),
            react_1["default"].createElement(IconButton_1["default"], { variant: 'clear', icon: sharp_solid_svg_icons_1.faBell, badge: '2', onClick: onClickNotificationButton }))));
};
exports["default"] = AppHeader;
