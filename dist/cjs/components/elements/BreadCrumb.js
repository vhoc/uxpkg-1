"use strict";
exports.__esModule = true;
exports.BreadCrumb = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Typography_1 = require("./Typography");
var Pressable_1 = require("./Pressable");
var theme_1 = require("../../theme");
var BreadCrumb = function (_a) {
    var style = _a.style, items = _a.items, props = tslib_1.__rest(_a, ["style", "items"]);
    var _b = (0, react_1.useState)(false), hover = _b[0], setHover = _b[1];
    var _c = (0, react_1.useState)(false), active = _c[0], setActive = _c[1];
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: tslib_1.__assign({ display: 'flex' }, style) }, props), items && items.length >= 1 ?
        items.map(function (item, index) {
            return (react_1["default"].createElement("div", { key: item.label, style: { display: 'flex' } },
                react_1["default"].createElement(Pressable_1.Pressable, { onClick: item.onClick, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, style: {
                        cursor: !item.onClick ? 'default' : 'pointer'
                    } },
                    react_1["default"].createElement(Typography_1.Typography, { variant: active ? 'breadcrumbLink-pressed' : hover ? 'breadcrumbLink-hover' : 'breadcrumbLink' }, item.label)),
                index === (items.length - 1) ?
                    null
                    :
                        react_1["default"].createElement(Typography_1.Typography, { variant: 'breadcrumbLink' },
                            react_1["default"].createElement("span", { style: {
                                    marginLeft: '6px',
                                    marginRight: '6px',
                                    color: theme_1.colors.gray[30]
                                } }, '>'))));
        })
        :
            null));
};
exports.BreadCrumb = BreadCrumb;
