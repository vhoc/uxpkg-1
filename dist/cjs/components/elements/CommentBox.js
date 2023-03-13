"use strict";
exports.__esModule = true;
exports.CommentBox = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var CommentBox = function (_a) {
    var title = _a.title, timestamp = _a.timestamp, comment = _a.comment, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ backgroundColor: theme_1.colors.blue[5], borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', borderColor: theme_1.colors.blue[20], display: 'flex', flexDirection: 'column', paddingTop: '16px', paddingBottom: '24px', paddingLeft: '24px', paddingRight: '24px', width: '100%', minWidth: '583px', gap: '14px' }, style) },
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: '24px'
            } },
            react_1["default"].createElement(Typography_1.Typography, { variant: 'h4-medium', style: {
                    width: '70%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                } }, title),
            react_1["default"].createElement(Typography_1.Typography, { variant: 'breadcrumbLink', style: {
                    color: theme_1.colors.gray[40],
                    width: 'fit-content'
                } }, timestamp)),
        react_1["default"].createElement(Typography_1.Typography, { variant: 'inputText-typed' }, comment)));
};
exports.CommentBox = CommentBox;
