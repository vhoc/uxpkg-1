"use strict";
exports.__esModule = true;
exports.PageButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styles_1 = require("@mui/material/styles");
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var PageButton = function (_a) {
    var pageNumber = _a.pageNumber, onClick = _a.onClick, style = _a.style, _b = _a.selected, selected = _b === void 0 ? false : _b;
    var MyButton = (0, styles_1.styled)('button')(tslib_1.__assign({ minWidth: '34px', height: '34px', backgroundColor: selected ? theme_1.colors.blue[5] : theme_1.colors.white, borderStyle: 'solid', borderWidth: '1px', borderColor: selected ? theme_1.colors.blue[40] : theme_1.colors.gray[20], borderRadius: '4px', paddingTop: '6px', paddingBottom: '6px', paddingLeft: '12px', paddingRight: '12px', '&:hover': {
            backgroundColor: theme_1.colors.blue[5],
            borderColor: theme_1.colors.blue[30]
        } }, style));
    return (react_1["default"].createElement(MyButton, { onClick: onClick },
        react_1["default"].createElement(Typography_1.Typography, { variant: 'body-regular', style: { color: selected ? theme_1.colors.blue[60] : theme_1.colors.gray[70] } }, pageNumber.toString())));
};
exports.PageButton = PageButton;
