"use strict";
exports.__esModule = true;
exports.ImageDropDownButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var MenuItems_1 = require("./MenuItems");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var theme_1 = require("../../theme");
/** A Navigation bar with a multilevel dynamic dropdown menu. */
var ImageDropDownButton = function (_a) {
    var _b = _a.menuItems, menuItems = _b === void 0 ? [{ icon: sharp_solid_svg_icons_1.faTimes, title: "No menus found" }] : _b, _c = _a.variant, variant = _c === void 0 ? 'clear' : _c, _d = _a.size, size = _d === void 0 ? 'sm' : _d, height = _a.height, disabled = _a.disabled, _e = _a.hasDownArrow, hasDownArrow = _e === void 0 ? true : _e, _f = _a.mode, mode = _f === void 0 ? 'image' : _f;
    //console.warn(menuItems)
    var depthLevel = 0;
    var _g = (0, react_1.useState)(false), hover = _g[0], setHover = _g[1];
    var _h = (0, react_1.useState)(false), active = _h[0], setActive = _h[1];
    var _j = (0, react_1.useState)(false), focus = _j[0], setFocus = _j[1];
    var selectedVariant = variant;
    var selectedSize = size;
    var componentStyle = function (hover, active) { return ({
        backgroundColor: disabled ? theme_1.variants[selectedVariant].buttonBgColorDisabled : active ? theme_1.variants[selectedVariant].buttonBgColorActive : hover ? theme_1.variants[selectedVariant].buttonBgColorHover : theme_1.variants[selectedVariant].buttonBgColor,
        color: disabled ? theme_1.variants[selectedVariant].buttonTextColorDisabled : active ? theme_1.variants[selectedVariant].buttonTextColorActive : hover ? theme_1.variants[selectedVariant].buttonTextColorHover : theme_1.variants[selectedVariant].buttonTextColor,
        //backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        //color: disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        width: 'fit-content',
        height: height,
        fontFamily: theme_1.theme.font.buttonLabel.regular.fontFamily,
        fontSize: theme_1.theme.font.buttonLabel.regular.fontSize,
        paddingLeft: theme_1.sizes.button[selectedSize].paddingLeft,
        paddingRight: theme_1.sizes.button[selectedSize].paddingRight,
        paddingTop: theme_1.sizes.button[selectedSize].paddingTop,
        paddingBottom: theme_1.sizes.button[selectedSize].paddingBottom,
        borderRadius: '0px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        marginBlockStart: '0',
        marginBlockEnd: '0',
        outlineColor: focus ? theme_1.variants[selectedVariant].buttonBgColor : 'transparent',
        outlineStyle: 'auto',
        outlineWidth: focus ? '2px' : '0px'
    }); };
    return (react_1["default"].createElement("ul", { style: {
            listStyle: 'none',
            marginBlockStart: '0px !important',
            marginBlockEnd: '0px !important',
            paddingInlineStart: '0px',
            margin: '0px',
            width: 'fit-content',
            height: height,
            paddingLeft: '12px'
        } }, menuItems.map(function (menu, index) {
        return (react_1["default"].createElement(MenuItems_1.MenuItems, { style: componentStyle(hover, active), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); }, items: menu, key: index, depthLevel: depthLevel, disabled: disabled || false, variant: variant, hasDownArrow: hasDownArrow, mode: mode, isImageDropDown: true, height: '32px' }));
    })));
};
exports.ImageDropDownButton = ImageDropDownButton;
