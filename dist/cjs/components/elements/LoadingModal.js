"use strict";
exports.__esModule = true;
exports.LoadingModal = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Spinner_1 = require("../graphical/Spinner");
var Typography_1 = require("./Typography");
var LoadingModal = function (_a) {
    var message = _a.message, caption = _a.caption, props = tslib_1.__rest(_a, ["message", "caption"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: {
            minWidth: '344px',
            width: 'fit-content',
            maxWidth: '700px',
            backgroundColor: theme_1.colors.white,
            boxShadow: '0px 2px 4px RGBA(34, 41, 69, 0.37)',
            borderRadius: '8px',
            paddingLeft: '32px',
            paddingRight: '32px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'wait'
        } }, props),
        react_1["default"].createElement(Spinner_1.Spinner, null),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '85%'
            } },
            react_1["default"].createElement(Typography_1.Typography, { variant: 'body-semiBold', style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    textAlign: 'left'
                } }, message),
            react_1["default"].createElement(Typography_1.Typography, { variant: 'body-regular', style: {
                    whiteSpace: 'normal',
                    overflow: 'hidden',
                    //textOverflow: 'ellipsis',
                    width: '100%',
                    textAlign: 'left'
                } }, caption))));
};
exports.LoadingModal = LoadingModal;
