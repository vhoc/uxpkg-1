"use strict";
exports.__esModule = true;
exports.Typography = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography = function (_a) {
    var children = _a.children, variant = _a.variant, style = _a.style, props = tslib_1.__rest(_a, ["children", "variant", "style"]);
    var stylesTable = {
        'body-regular': theme_1.theme.font.body.regular,
        'body-semiBold': theme_1.theme.font.body.semiBold,
        'bodySmall-regular': theme_1.theme.font.bodySmall.regular,
        'breadcrumbLink': theme_1.theme.font.breadcrumb,
        'breadcrumbLink-hover': theme_1.theme.font.breadcrumb.hover,
        'breadcrumbLink-pressed': theme_1.theme.font.breadcrumb.pressed,
        'buttonLabel-regular': theme_1.theme.font.buttonLabel.regular,
        'buttonLabel-medium': theme_1.theme.font.buttonLabel.medium,
        'caption-regular': theme_1.theme.font.caption.regular,
        'h2': theme_1.theme.font.h2.medium,
        'h3': theme_1.theme.font.h3.regular,
        'h4-regular': theme_1.theme.font.h4.regular,
        'h4-medium': theme_1.theme.font.h4.medium,
        'inputText-hint': theme_1.theme.font.inputText.hint,
        'inputText-typed': theme_1.theme.font.inputText.typed,
        'title-regular': theme_1.theme.font.title.regular
    };
    var selectedVariant = variant;
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: tslib_1.__assign(tslib_1.__assign({}, stylesTable[selectedVariant]), style) }, props), children));
};
exports.Typography = Typography;
