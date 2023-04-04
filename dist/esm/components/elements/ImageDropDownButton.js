import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { faTimes } from "@fortawesome/sharp-solid-svg-icons";
import { variants, sizes, theme } from '../../theme';
/** A Navigation bar with a multilevel dynamic dropdown menu. */
export var ImageDropDownButton = function (_a) {
    var _b = _a.menuItems, menuItems = _b === void 0 ? [{ icon: faTimes, title: "No menus found" }] : _b, _c = _a.variant, variant = _c === void 0 ? 'clear' : _c, _d = _a.size, size = _d === void 0 ? 'sm' : _d, height = _a.height, disabled = _a.disabled, _e = _a.hasDownArrow, hasDownArrow = _e === void 0 ? true : _e, _f = _a.mode, mode = _f === void 0 ? 'image' : _f;
    //console.warn(menuItems)
    var depthLevel = 0;
    var _g = useState(false), hover = _g[0], setHover = _g[1];
    var _h = useState(false), active = _h[0], setActive = _h[1];
    var _j = useState(false), focus = _j[0], setFocus = _j[1];
    var selectedVariant = variant;
    var selectedSize = size;
    var componentStyle = function (hover, active) { return ({
        backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        color: disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        width: 'fit-content',
        height: height,
        fontFamily: theme.font.buttonLabel.regular.fontFamily,
        fontSize: theme.font.buttonLabel.regular.fontSize,
        paddingLeft: sizes.button[selectedSize].paddingLeft,
        paddingRight: sizes.button[selectedSize].paddingRight,
        paddingTop: sizes.button[selectedSize].paddingTop,
        paddingBottom: sizes.button[selectedSize].paddingBottom,
        borderRadius: '0px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        marginBlockStart: '0',
        marginBlockEnd: '0',
        outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
        outlineStyle: 'auto',
        outlineWidth: focus ? '2px' : '0px'
    }); };
    return (React.createElement("ul", { style: {
            listStyle: 'none',
            marginBlockStart: '0px !important',
            marginBlockEnd: '0px !important',
            paddingInlineStart: '0px',
            margin: '0px',
            width: 'fit-content',
            height: height,
            paddingLeft: '12px'
        } }, menuItems.map(function (menu, index) {
        return (React.createElement(MenuItems, { style: componentStyle(hover, active), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); }, items: menu, key: index, depthLevel: depthLevel, disabled: disabled || false, variant: variant, hasDownArrow: hasDownArrow, mode: mode, isImageDropDown: true, height: '32px' }));
    })));
};
