import React, { useState, useEffect, useRef } from 'react';
import { DropDown } from './DropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/sharp-solid-svg-icons';
import { variants, theme, sizes, colors } from '../../theme';
import '../../assets/styles/dropdown.css';
export var MenuItems = function (_a) {
    var style = _a.style, items = _a.items, depthLevel = _a.depthLevel, _b = _a.disabled, disabled = _b === void 0 ? false : _b, variant = _a.variant, _c = _a.size, size = _c === void 0 ? 'sm' : _c, height = _a.height, width = _a.width, _d = _a.isImageDropDown, isImageDropDown = _d === void 0 ? false : _d, hasDownArrow = _a.hasDownArrow, _e = _a.mode, mode = _e === void 0 ? 'image' : _e;
    var selectedVariant = variant;
    var selectedSize = size;
    //console.log(items)
    var ref = useRef(null);
    var _f = useState(false), dropdown = _f[0], setDropdown = _f[1];
    var _g = useState(false), hover = _g[0], setHover = _g[1];
    var _h = useState(false), active = _h[0], setActive = _h[1];
    //const [focus, setFocus] = useState<boolean>(false)
    /**
     * The proper order is:
     * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
     * Otherwise, the states get messed up.
     */
    var componentStyle = function (hover, active) { return ({
        backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? !items.submenu ? colors.blue[5] : variants[selectedVariant].buttonBgColorActive : hover ? !items.submenu ? colors.blue[5] : variants[selectedVariant].buttonBgColorHover : !items.submenu ? colors.white : variants[selectedVariant].buttonBgColor,
        color: !items.submenu ? colors.gray[90] : disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        width: 'fit-content',
        height: height,
        minWidth: items.submenu ? '0px' : '150px',
        fontFamily: theme.font.buttonLabel.regular.fontFamily,
        fontSize: sizes.button[selectedSize].fontSize,
        paddingLeft: (isImageDropDown && mode === 'image') ? '0px' : sizes.popOverMenuItem[selectedSize].paddingLeft,
        paddingRight: sizes.popOverMenuItem[selectedSize].paddingRight,
        paddingTop: isImageDropDown ? '0px' : items.submenu ? sizes.popOverMenuItem[selectedSize].paddingTop : '5px',
        paddingBottom: isImageDropDown ? '0px' : items.submenu ? sizes.popOverMenuItem[selectedSize].paddingBottom : '5px',
        borderRadius: ((isImageDropDown && mode === 'image') || variant === 'clear') ? '0px' : '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        //outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
        //outlineStyle: isImageDropDown ? 'none' : 'auto',
        //outlineWidth: focus ? '2px' : '0px',
        outlineWidth: '0px',
        textAlign: 'left'
    }); };
    useEffect(function () {
        var handler = function (event) {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return function () {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);
    return (React.createElement("li", { className: 'menu-items', 
        //{...MenuItemProps}
        ref: ref, style: {
            position: 'relative',
            fontSize: '14px',
            width: 'fit-content'
        } }, items.submenu ? (React.createElement(React.Fragment, null,
        React.createElement("button", { type: 'button', "aria-haspopup": "menu", "aria-expanded": dropdown ? 'true' : 'false', style: componentStyle(hover, active), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, 
            //onFocus={() => setFocus(true)}
            //onBlur={() => setFocus(false)}
            onClick: function () {
                if (!disabled) {
                    setDropdown(function (prev) { return !prev; });
                }
                else {
                    return;
                }
            } },
            React.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: hasDownArrow ? 'space-between' : 'center'
                } },
                React.createElement("div", null,
                    React.createElement("div", { style: {
                            display: 'flex',
                            gap: hasDownArrow ? '8px' : '0',
                            padding: hasDownArrow ? '0px 0px 0px 0px' : '0px 4px 0px 4px'
                        } },
                        items.icon ?
                            React.createElement("div", null, items.icon ? React.createElement(FontAwesomeIcon, { icon: items.icon }) : '')
                            :
                                null,
                        React.createElement("div", null,
                            items.title,
                            " "))),
                React.createElement("div", { style: {
                        display: 'flex',
                        alignItems: 'center'
                    } }, depthLevel > 0 ?
                    React.createElement("span", null,
                        React.createElement(FontAwesomeIcon, { icon: faCaretRight, style: { marginLeft: '10px' } }))
                    :
                        hasDownArrow ?
                            React.createElement("span", null,
                                React.createElement(FontAwesomeIcon, { icon: faCaretDown, style: { marginLeft: '10px' } }))
                            :
                                null))),
        React.createElement(DropDown, { submenus: items.submenu, dropdown: dropdown, depthLevel: depthLevel, variant: variant, disabled: disabled }))) : (React.createElement("button", { className: "singleMenuItem", style: componentStyle(hover, active), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, onClick: items.action },
        React.createElement("span", { style: { display: 'flex', gap: '8px' } },
            React.createElement("span", null, items.icon ? React.createElement(FontAwesomeIcon, { icon: items.icon }) : ''),
            React.createElement("span", null, items.title)),
        React.createElement("span", null)))));
};
