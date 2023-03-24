"use strict";
exports.__esModule = true;
exports.ResourceDropDownItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Typography_1 = require("./Typography");
var theme_1 = require("../../theme");
var ResourceDropDownItem = function (_a) {
    var resourceName = _a.resourceName, resourceType = _a.resourceType, icon = _a.icon, onClick = _a.onClick, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ minWidth: '217px', width: '217px', backgroundColor: theme_1.colors.white, paddingTop: '8px', paddingBottom: '8px', paddingLeft: '12px', paddingRight: '12px', display: 'flex', justifyContent: 'flex-start', boxSizing: 'border-box', cursor: 'pointer', gap: '10px' }, style), onClick: onClick },
        react_1["default"].createElement("div", { style: {
                width: '20px',
                minWidth: '20px',
                maxWidth: '20px',
                borderRadius: '4px'
            } }, icon ? icon : null),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                width: '100%'
            } },
            react_1["default"].createElement(Typography_1.Typography, { variant: 'breadcrumbLink', color: theme_1.colors.gray[90], style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '95%'
                } }, resourceName),
            react_1["default"].createElement(Typography_1.Typography, { variant: 'breadcrumbLink', color: theme_1.colors.gray[70], style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '95%'
                } }, resourceType))));
};
exports.ResourceDropDownItem = ResourceDropDownItem;
