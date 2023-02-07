"use strict";
exports.__esModule = true;
exports.Button = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var theme_1 = require("../../theme");
var Button = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 'sm' : _b, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.textColor, textColor = _e === void 0 ? theme_1.colors.white : _e, width = _a.width, height = _a.height, ButtonProps = tslib_1.__rest(_a, ["children", "size", "variant", "disabled", "textColor", "width", "height"]);
    var _f = (0, react_1.useState)(false), hover = _f[0], setHover = _f[1];
    var _g = (0, react_1.useState)(false), active = _g[0], setActive = _g[1];
    var _h = (0, react_1.useState)(false), focus = _h[0], setFocus = _h[1];
    var selectedVariant = variant;
    var selectedSize = size;
    var componentStyle = function (hover, active) { return ({
        /**
         * The proper order is:
         * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
         * Otherwise, the states get messed up.
         */
        backgroundColor: disabled ? theme_1.variants[selectedVariant].buttonBgColorDisabled : active ? theme_1.variants[selectedVariant].buttonBgColorActive : hover ? theme_1.variants[selectedVariant].buttonBgColorHover : theme_1.variants[selectedVariant].buttonBgColor,
        color: disabled ? theme_1.variants[selectedVariant].buttonTextColorDisabled : active ? theme_1.variants[selectedVariant].buttonTextColorActive : hover ? theme_1.variants[selectedVariant].buttonTextColorHover : theme_1.variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        height: height || theme_1.sizes.button[selectedSize].height,
        width: width || 'auto',
        fontFamily: theme_1.theme.font.buttonLabel.regular.fontFamily,
        fontSize: theme_1.sizes.button[selectedSize].fontSize,
        paddingLeft: theme_1.sizes.button[selectedSize].paddingLeft,
        paddingRight: theme_1.sizes.button[selectedSize].paddingRight,
        paddingTop: theme_1.sizes.button[selectedSize].paddingTop,
        paddingBottom: theme_1.sizes.button[selectedSize].paddingBottom,
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        outlineColor: focus ? theme_1.variants[selectedVariant].buttonBgColor : 'transparent',
        outlineStyle: 'auto',
        outlineWidth: focus ? '2px' : '0px'
    }); };
    return (react_1["default"].createElement("button", tslib_1.__assign({ style: componentStyle(hover, active), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); } }, ButtonProps), children));
};
exports.Button = Button;
