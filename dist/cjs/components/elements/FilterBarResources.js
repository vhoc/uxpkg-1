"use strict";
exports.__esModule = true;
exports.FilterBarResources = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var FilterBarResources = function (_a) {
    var children = _a.children, props = tslib_1.__rest(_a, ["children"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: {
            width: '336px',
            height: '100%',
            paddingTop: '28px',
            paddingBottom: '28px',
            paddingLeft: '32px',
            paddingRight: '25px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme_1.colors.gray[5]
        } }, props),
        react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.h2.medium), { marginBottom: '24px', color: '#222945' }) }, "Resource Catalog"),
        react_1["default"].createElement("div", { style: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '18px',
                fontWeight: '400',
                color: '#545B71',
                marginBottom: '3px'
            } }, "Filters"),
        children));
};
exports.FilterBarResources = FilterBarResources;
