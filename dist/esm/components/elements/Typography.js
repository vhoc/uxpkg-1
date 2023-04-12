import { __assign } from "tslib";
import React from "react";
import { theme } from "../../theme";
export var Typography = function (_a) {
    var children = _a.children, variant = _a.variant, className = _a.className, style = _a.style, onClick = _a.onClick;
    var stylesTable = {
        'body-regular': __assign(__assign({}, theme.font.body.regular), style),
        'body-semiBold': __assign(__assign({}, theme.font.body.semiBold), style),
        'bodySmall-regular': __assign(__assign({}, theme.font.bodySmall.regular), style),
        'breadcrumbLink': __assign(__assign({}, theme.font.breadcrumb), style),
        'breadcrumbLink-hover': __assign(__assign({}, theme.font.breadcrumb.hover), style),
        'breadcrumbLink-pressed': __assign(__assign({}, theme.font.breadcrumb.pressed), style),
        'buttonLabel-regular': __assign(__assign({}, theme.font.buttonLabel.regular), style),
        'buttonLabel-medium': __assign(__assign({}, theme.font.buttonLabel.medium), style),
        'caption-regular': __assign(__assign({}, theme.font.caption.regular), style),
        'h2': __assign(__assign({}, theme.font.h2.medium), style),
        'h3': __assign(__assign({}, theme.font.h3.regular), style),
        'h4-regular': __assign(__assign({}, theme.font.h4.regular), style),
        'h4-medium': __assign(__assign({}, theme.font.h4.medium), style),
        'inputText-hint': __assign(__assign({}, theme.font.inputText.hint), style),
        'inputText-typed': __assign(__assign({}, theme.font.inputText.typed), style),
        'title-regular': __assign(__assign({}, theme.font.title.regular), style),
        'button-sm': __assign(__assign({}, theme.font.buttonLabel.regular), style)
    };
    var selectedVariant = variant;
    return (React.createElement("div", { className: className, style: __assign({}, stylesTable[selectedVariant]), onClick: onClick }, children));
};
