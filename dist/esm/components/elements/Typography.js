import { __assign, __rest } from "tslib";
import React from "react";
import { theme } from "../../theme";
var Typography = function (_a) {
    var children = _a.children, variant = _a.variant, style = _a.style, props = __rest(_a, ["children", "variant", "style"]);
    var stylesTable = {
        'body-regular': theme.font.body.regular,
        'body-semiBold': theme.font.body.semiBold,
        'bodySmall-regular': theme.font.bodySmall.regular,
        'breadcrumbLink': theme.font.breadcrumb,
        'breadcrumbLink-hover': theme.font.breadcrumb.hover,
        'breadcrumbLink-pressed': theme.font.breadcrumb.pressed,
        'buttonLabel-regular': theme.font.buttonLabel.regular,
        'buttonLabel-medium': theme.font.buttonLabel.medium,
        'caption-regular': theme.font.caption.regular,
        'h2': theme.font.h2.medium,
        'h3': theme.font.h3.regular,
        'h4': theme.font.h4.medium,
        'inputText-hint': theme.font.inputText.hint,
        'inputText-typed': theme.font.inputText.typed,
        'title-regular': theme.font.title.regular
    };
    var selectedVariant = variant;
    return (React.createElement("div", __assign({ style: __assign(__assign({}, stylesTable[selectedVariant]), style) }, props), children));
};
export default Typography;
