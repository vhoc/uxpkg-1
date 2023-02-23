"use strict";
exports.__esModule = true;
exports.SelectDate = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var theme_1 = require("../../theme");
var styles_1 = require("@mui/material/styles");
var SelectDate = function (_a) {
    var value = _a.value, onChange = _a.onChange, defaultValue = _a.defaultValue;
    var _b = (0, react_1.useState)(false), focus = _b[0], setFocus = _b[1];
    var MuInput = (0, styles_1.styled)('input')({
        backgroundColor: theme_1.colors.white,
        fontFamily: 'IBM Plex Sans',
        fontSize: '14px',
        color: theme_1.colors.gray[90],
        borderWidth: '1px',
        borderColor: focus ? theme_1.colors.blue[20] : theme_1.colors.gray[20],
        borderRadius: '4px',
        borderStyle: 'solid',
        width: 'fit-content',
        height: '40px',
        paddingLeft: '12px',
        paddingRight: '6px',
        position: 'relative',
        '&:focus-visible': {
            borderColor: theme_1.colors.blue[20] + ' !important',
            outline: "1px solid ".concat(theme_1.colors.blue[20])
        },
        '&::-webkit-calendar-picker-indicator': {
            cursor: 'pointer',
            textAlign: 'right',
            backgroundImage: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>\')',
            opacity: '1'
        },
        '&::-webkit-datetime-edit-fields-wrapper': {
            borderRadius: '4px'
        },
        '&:hover': {
            backgroundColor: theme_1.colors.blue[5],
            borderColor: theme_1.colors.gray[20]
        },
        '&:disabled': {
            borderColor: theme_1.colors.gray[20],
            color: theme_1.colors.gray[30]
        }
    });
    return (react_1["default"].createElement(MuInput, { type: 'date', defaultValue: defaultValue, value: value, onChange: onChange, onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); } }));
};
exports.SelectDate = SelectDate;
