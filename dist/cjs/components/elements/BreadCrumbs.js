"use strict";
exports.__esModule = true;
exports.BreadCrumbs = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var material_1 = require("@mui/material");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var theme_1 = require("../../theme");
var BreadCrumbs = function (_a) {
    var children = _a.children, props = tslib_1.__rest(_a, ["children"]);
    return (react_1["default"].createElement(material_1.Breadcrumbs, tslib_1.__assign({ separator: react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faChevronRight, size: 'xs', color: theme_1.colors.gray[30] }) }, props), children));
};
exports.BreadCrumbs = BreadCrumbs;
