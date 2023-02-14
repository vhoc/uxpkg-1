"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var theme_1 = require("../../theme");
var RoundedToggleButton = function (_a) {
    var _b = _a.active, active = _b === void 0 ? false : _b, iconOn = _a.iconOn, iconOff = _a.iconOff, onClick = _a.onClick, labelOn = _a.labelOn, labelOff = _a.labelOff, props = tslib_1.__rest(_a, ["active", "iconOn", "iconOff", "onClick", "labelOn", "labelOff"]);
    return (react_1["default"].createElement("button", tslib_1.__assign({ style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '8px',
            paddingRight: '6px',
            width: '60px',
            height: '22px',
            color: theme_1.colors.gray[40],
            fontFamily: 'IBM Plex Sans',
            fontSize: '12px',
            textTransform: 'capitalize',
            backgroundColor: theme_1.colors.gray[10],
            borderRadius: '11px'
        }, onClick: onClick }, props),
        react_1["default"].createElement("span", { style: { fontFamily: 'IBM Plex Sans' } }, active ? labelOn : labelOff),
        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: active ? iconOn : iconOff })));
};
exports["default"] = RoundedToggleButton;
