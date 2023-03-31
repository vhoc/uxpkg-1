"use strict";
exports.__esModule = true;
exports.Typography = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography = function (_a) {
    var children = _a.children, variant = _a.variant, className = _a.className, style = _a.style;
    var stylesTable = {
        'body-regular': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.body.regular), style),
        'body-semiBold': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.body.semiBold), style),
        'bodySmall-regular': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.bodySmall.regular), style),
        'breadcrumbLink': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.breadcrumb), style),
        'breadcrumbLink-hover': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.breadcrumb.hover), style),
        'breadcrumbLink-pressed': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.breadcrumb.pressed), style),
        'buttonLabel-regular': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.buttonLabel.regular), style),
        'buttonLabel-medium': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.buttonLabel.medium), style),
        'caption-regular': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.caption.regular), style),
        'h2': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.h2.medium), style),
        'h3': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.h3.regular), style),
        'h4-regular': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.h4.regular), style),
        'h4-medium': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.h4.medium), style),
        'inputText-hint': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.inputText.hint), style),
        'inputText-typed': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.inputText.typed), style),
        'title-regular': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.title.regular), style),
        'button-sm': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.buttonLabel.regular), style)
    };
    var selectedVariant = variant;
    return (react_1["default"].createElement("div", { className: className, style: tslib_1.__assign({}, stylesTable[selectedVariant]) }, children));
};
exports.Typography = Typography;
