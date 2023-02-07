"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Badge = function (_a) {
    var label = _a.label, props = tslib_1.__rest(_a, ["label"]);
    return (react_1["default"].createElement("span", tslib_1.__assign({ style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '16px',
            height: '16px',
            backgroundColor: '#3267D6',
            color: theme_1.colors.white,
            fontSize: '12px',
            borderRadius: '100%',
            position: 'absolute',
            top: '0px',
            right: '0px',
            zIndex: '501'
        } }, props), label));
};
exports["default"] = Badge;
