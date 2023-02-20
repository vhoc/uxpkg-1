"use strict";
exports.__esModule = true;
exports.MenuItems = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var DropDown_1 = require("./DropDown");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var theme_1 = require("../../theme");
require("../../assets/styles/dropdown.css");
var MenuItems = function (_a) {
    var style = _a.style, items = _a.items, depthLevel = _a.depthLevel, _b = _a.disabled, disabled = _b === void 0 ? false : _b, variant = _a.variant, _c = _a.size, size = _c === void 0 ? 'sm' : _c, height = _a.height, width = _a.width, _d = _a.isImageDropDown, isImageDropDown = _d === void 0 ? false : _d, hasDownArrow = _a.hasDownArrow, MenuItemProps = tslib_1.__rest(_a, ["style", "items", "depthLevel", "disabled", "variant", "size", "height", "width", "isImageDropDown", "hasDownArrow"]);
    var selectedVariant = variant;
    var selectedSize = size;
    //console.log(items)
    var ref = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(false), dropdown = _e[0], setDropdown = _e[1];
    var _f = (0, react_1.useState)(false), hover = _f[0], setHover = _f[1];
    var _g = (0, react_1.useState)(false), active = _g[0], setActive = _g[1];
    //const [focus, setFocus] = useState<boolean>(false)
    /**
     * The proper order is:
     * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
     * Otherwise, the states get messed up.
     */
    var componentStyle = function (hover, active) { return ({
        backgroundColor: disabled ? theme_1.variants[selectedVariant].buttonBgColorDisabled : active ? !items.submenu ? theme_1.colors.blue[5] : theme_1.variants[selectedVariant].buttonBgColorActive : hover ? !items.submenu ? theme_1.colors.blue[5] : theme_1.variants[selectedVariant].buttonBgColorHover : !items.submenu ? theme_1.colors.white : theme_1.variants[selectedVariant].buttonBgColor,
        color: !items.submenu ? theme_1.colors.gray[90] : disabled ? theme_1.variants[selectedVariant].buttonTextColorDisabled : active ? theme_1.variants[selectedVariant].buttonTextColorActive : hover ? theme_1.variants[selectedVariant].buttonTextColorHover : theme_1.variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        width: 'fit-content',
        height: height,
        minWidth: items.submenu ? '0px' : '150px',
        fontFamily: theme_1.theme.font.buttonLabel.regular.fontFamily,
        fontSize: theme_1.sizes.button[selectedSize].fontSize,
        paddingLeft: isImageDropDown ? '0px' : theme_1.sizes.popOverMenuItem[selectedSize].paddingLeft,
        paddingRight: theme_1.sizes.popOverMenuItem[selectedSize].paddingRight,
        paddingTop: isImageDropDown ? '0px' : items.submenu ? theme_1.sizes.popOverMenuItem[selectedSize].paddingTop : '5px',
        paddingBottom: isImageDropDown ? '0px' : items.submenu ? theme_1.sizes.popOverMenuItem[selectedSize].paddingBottom : '5px',
        borderRadius: (isImageDropDown || variant === 'clear') ? '0px' : '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        //outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
        //outlineStyle: isImageDropDown ? 'none' : 'auto',
        //outlineWidth: focus ? '2px' : '0px',
        outlineWidth: '0px',
        textAlign: 'left'
    }); };
    (0, react_1.useEffect)(function () {
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
    return (react_1["default"].createElement("li", tslib_1.__assign({ className: 'menu-items' }, MenuItemProps, { ref: ref, style: {
            position: 'relative',
            fontSize: '14px',
            width: 'fit-content'
        } }), items.submenu ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("button", { type: 'button', "aria-haspopup": "menu", "aria-expanded": dropdown ? 'true' : 'false', style: componentStyle(hover, active), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, 
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
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    justifyContent: hasDownArrow ? 'space-between' : 'center'
                } },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { style: {
                            display: 'flex',
                            gap: hasDownArrow ? '8px' : '0',
                            padding: hasDownArrow ? '0px 0px 0px 0px' : '0px 4px 0px 4px'
                        } },
                        items.icon ?
                            react_1["default"].createElement("div", null, items.icon ? react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: items.icon }) : '')
                            :
                                null,
                        react_1["default"].createElement("div", null,
                            items.title,
                            " "))),
                react_1["default"].createElement("div", { style: {
                        display: 'flex',
                        alignItems: 'center'
                    } }, depthLevel > 0 ?
                    react_1["default"].createElement("span", null,
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: sharp_solid_svg_icons_1.faCaretRight, style: { marginLeft: '10px' } }))
                    :
                        hasDownArrow ?
                            react_1["default"].createElement("span", null,
                                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: sharp_solid_svg_icons_1.faCaretDown, style: { marginLeft: '10px' } }))
                            :
                                null))),
        react_1["default"].createElement(DropDown_1.DropDown, { submenus: items.submenu, dropdown: dropdown, depthLevel: depthLevel, variant: variant, disabled: disabled }))) : (react_1["default"].createElement("button", { className: "singleMenuItem", style: componentStyle(hover, active), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, onClick: items.action },
        react_1["default"].createElement("span", { style: { display: 'flex', gap: '8px' } },
            react_1["default"].createElement("span", null, items.icon ? react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: items.icon }) : ''),
            react_1["default"].createElement("span", null, items.title)),
        react_1["default"].createElement("span", null)))));
};
exports.MenuItems = MenuItems;
