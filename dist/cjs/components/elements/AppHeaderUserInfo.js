"use strict";
exports.__esModule = true;
exports.AppHeaderUserInfo = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var AppHeaderUserInfo = function (_a) {
    var userName = _a.userName, userRole = _a.userRole, props = tslib_1.__rest(_a, ["userName", "userRole"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            backgroundColor: theme_1.colors.white,
            paddingLeft: '12px',
            paddingRight: '12px',
            maxWidth: '250px',
            width: 'fit-content'
        } }, props),
        react_1["default"].createElement("span", { style: {
                fontSize: '14px',
                textAlign: 'right',
                color: '#222945',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%'
            } }, userName),
        react_1["default"].createElement("span", { style: {
                fontSize: '12px',
                textAlign: 'right',
                color: '#615E71',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%'
            } }, userRole)));
};
exports.AppHeaderUserInfo = AppHeaderUserInfo;
