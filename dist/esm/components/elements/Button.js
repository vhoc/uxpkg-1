import { __assign, __rest } from "tslib";
import React, { useState } from "react";
import { theme, colors, variants, sizes } from '../../theme';
export var Button = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 'sm' : _b, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.textColor, textColor = _e === void 0 ? colors.white : _e, width = _a.width, height = _a.height, ButtonProps = __rest(_a, ["children", "size", "variant", "disabled", "textColor", "width", "height"]);
    var _f = useState(false), hover = _f[0], setHover = _f[1];
    var _g = useState(false), active = _g[0], setActive = _g[1];
    var selectedVariant = variant;
    var selectedSize = size;
    var componentStyle = function (hover, active) { return ({
        /**
         * The proper order is:
         * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
         * Otherwise, the states get messed up.
         */
        backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        color: disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        height: height || sizes.button[selectedSize].height,
        width: width || 'auto',
        fontFamily: theme.font.buttonLabel.regular.fontFamily,
        fontSize: sizes.button[selectedSize].fontSize,
        paddingLeft: sizes.button[selectedSize].paddingLeft,
        paddingRight: sizes.button[selectedSize].paddingRight,
        paddingTop: sizes.button[selectedSize].paddingTop,
        paddingBottom: sizes.button[selectedSize].paddingBottom,
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        //outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
        //outlineStyle: 'auto',
        //outlineWidth: focus ? '2px' : '0px'
        outlineWidth: '0px'
    }); };
    return (React.createElement("button", __assign({ style: componentStyle(hover, active), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); } }, ButtonProps), children));
};
