"use strict";
exports.__esModule = true;
exports.ScrollableCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var styles_1 = require("@mui/material/styles");
var ScrollableCard = function (_a) {
    var title = _a.title, description = _a.description, content = _a.content, style = _a.style;
    var MyDiv = (0, styles_1.styled)('div')({
        overflowY: 'auto',
        overflowX: 'auto',
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
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ minHeight: '150px', backgroundColor: theme_1.colors.white, borderWidth: '1px', borderColor: theme_1.colors.gray[20] || '#D8DDE4 !important', borderRadius: '8px', borderStyle: 'solid', paddingTop: '14px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '16px', display: 'flex', flexDirection: 'column', fontFamily: theme_1.theme.font.body.regular.fontFamily, fontSize: theme_1.theme.font.body.regular.fontSize, fontWeight: theme_1.theme.font.body.regular.fontWeight, color: theme_1.theme.font.body.regular.color }, style) },
        react_1["default"].createElement(Typography_1.Typography, { variant: 'body-semiBold', style: {
                color: theme_1.colors.gray[90],
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%',
                minHeight: '24px'
            } }, title),
        react_1["default"].createElement(Typography_1.Typography, { variant: 'caption-regular' }, description),
        react_1["default"].createElement(MyDiv, { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.caption.regular), { width: '100%', textAlign: 'left' }) }, content)));
};
exports.ScrollableCard = ScrollableCard;
