import { __assign, __rest } from "tslib";
import React from "react";
import { colors } from "../../theme";
import { AppHeaderUserInfo } from "./AppHeaderUserInfo";
import { ImageDropDownButton } from "./ImageDropDownButton";
import { faBell } from "@fortawesome/sharp-solid-svg-icons";
import { IconButton } from "./IconButton";
export var AppHeader = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, imgUrl = _a.imgUrl, imgStyle = _a.imgStyle, userName = _a.userName, userRole = _a.userRole, dropDownMenuItems = _a.dropDownMenuItems, onClickNotificationButton = _a.onClickNotificationButton, props = __rest(_a, ["variant", "imgUrl", "imgStyle", "userName", "userRole", "dropDownMenuItems", "onClickNotificationButton"]);
    return (React.createElement("div", __assign({ style: {
            width: '100%',
            backgroundColor: colors.white,
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingLeft: '24px',
            paddingRight: '22px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        } }, props),
        React.createElement("div", null,
            React.createElement("img", { src: imgUrl, style: imgStyle })),
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
            } },
            React.createElement(AppHeaderUserInfo, { userName: userName || '', userRole: userRole || '' }),
            React.createElement(ImageDropDownButton, { menuItems: dropDownMenuItems }),
            React.createElement(IconButton, { variant: 'clear', icon: faBell, badge: '2', onClick: onClickNotificationButton }))));
};
