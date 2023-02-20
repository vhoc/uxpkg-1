import { __assign, __rest } from "tslib";
import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import '../../assets/styles/dropdown.css';
import { colors, variants, sizes, theme } from '../../theme';
export var DropDown = function (_a) {
    var submenus = _a.submenus, dropdown = _a.dropdown, depthLevel = _a.depthLevel, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, disabled = _a.disabled, _c = _a.size, size = _c === void 0 ? 'md' : _c, height = _a.height, width = _a.width, DropDownProps = __rest(_a, ["submenus", "dropdown", "depthLevel", "variant", "disabled", "size", "height", "width"]);
    depthLevel = depthLevel + 1;
    var dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    var _d = useState(false), hover = _d[0], setHover = _d[1];
    var _e = useState(false), active = _e[0], setActive = _e[1];
    var selectedVariant = variant;
    var selectedSize = size;
    var componentStyle = function (hover, active) { return ({
        backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        color: disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
        //backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        //color: disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        height: height || sizes.button[selectedSize].height,
        width: 'fit-content',
        fontFamily: theme.font.buttonLabel.regular.fontFamily,
        fontSize: theme.font.buttonLabel.regular.fontSize,
        paddingLeft: sizes.button[selectedSize].paddingLeft,
        paddingRight: sizes.button[selectedSize].paddingRight,
        paddingTop: sizes.button[selectedSize].paddingTop,
        paddingBottom: sizes.button[selectedSize].paddingBottom,
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        marginBlockStart: '0',
        marginBlockEnd: '0',
        //outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
        //outlineStyle: 'auto',
        //outlineWidth: focus ? '2px' : '0px',
        outlineWidth: '0px'
    }); };
    return (React.createElement("ul", __assign({ className: "dropdown ".concat(dropdownClass, " ").concat(dropdown ? 'show' : ''), style: {
            backgroundColor: colors.white
        } }, DropDownProps), submenus.map(function (submenu, index) {
        return (React.createElement(MenuItems, { style: componentStyle(hover, active), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, 
            //onFocus={() => setFocus(true)}
            //onBlur={() => setFocus(false)}
            items: submenu, key: index, depthLevel: depthLevel, disabled: disabled || false, variant: variant }));
    })));
};
