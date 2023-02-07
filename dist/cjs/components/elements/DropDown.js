"use strict";
exports.__esModule = true;
exports.DropDown = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var MenuItems_1 = require("./MenuItems");
require("../../assets/styles/dropdown.css");
var theme_1 = require("../../theme");
var DropDown = function (_a) {
    var submenus = _a.submenus, dropdown = _a.dropdown, depthLevel = _a.depthLevel, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, disabled = _a.disabled, _c = _a.size, size = _c === void 0 ? 'md' : _c, height = _a.height, width = _a.width, DropDownProps = tslib_1.__rest(_a, ["submenus", "dropdown", "depthLevel", "variant", "disabled", "size", "height", "width"]);
    depthLevel = depthLevel + 1;
    var dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    var _d = (0, react_1.useState)(false), hover = _d[0], setHover = _d[1];
    var _e = (0, react_1.useState)(false), active = _e[0], setActive = _e[1];
    var _f = (0, react_1.useState)(false), focus = _f[0], setFocus = _f[1];
    var selectedVariant = variant;
    var selectedSize = size;
    var componentStyle = function (hover, active) { return ({
        backgroundColor: disabled ? theme_1.variants[selectedVariant].buttonBgColorDisabled : active ? theme_1.variants[selectedVariant].buttonBgColorActive : hover ? theme_1.variants[selectedVariant].buttonBgColorHover : theme_1.variants[selectedVariant].buttonBgColor,
        color: disabled ? theme_1.variants[selectedVariant].buttonTextColorDisabled : active ? theme_1.variants[selectedVariant].buttonTextColorActive : hover ? theme_1.variants[selectedVariant].buttonTextColorHover : theme_1.variants[selectedVariant].buttonTextColor,
        //backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? variants[selectedVariant].buttonBgColorActive : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        //color: disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        height: height || theme_1.sizes.button[selectedSize].height,
        width: 'fit-content',
        fontFamily: theme_1.theme.font.buttonLabel.regular.fontFamily,
        fontSize: theme_1.theme.font.buttonLabel.regular.fontSize,
        paddingLeft: theme_1.sizes.button[selectedSize].paddingLeft,
        paddingRight: theme_1.sizes.button[selectedSize].paddingRight,
        paddingTop: theme_1.sizes.button[selectedSize].paddingTop,
        paddingBottom: theme_1.sizes.button[selectedSize].paddingBottom,
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        marginBlockStart: '0',
        marginBlockEnd: '0',
        outlineColor: focus ? theme_1.variants[selectedVariant].buttonBgColor : 'transparent',
        outlineStyle: 'auto',
        outlineWidth: focus ? '2px' : '0px'
    }); };
    return (react_1["default"].createElement("ul", tslib_1.__assign({ className: "dropdown ".concat(dropdownClass, " ").concat(dropdown ? 'show' : ''), style: {
            backgroundColor: theme_1.colors.white
        } }, DropDownProps), submenus.map(function (submenu, index) {
        return (react_1["default"].createElement(MenuItems_1.MenuItems, { style: componentStyle(hover, active), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); }, items: submenu, key: index, depthLevel: depthLevel, disabled: disabled || false, variant: variant }));
    })));
};
exports.DropDown = DropDown;
