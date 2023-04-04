"use strict";
exports.__esModule = true;
exports.MenuButtonItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var theme_1 = require("../../theme");
var styles_1 = require("@mui/material/styles");
var ButtonUnstyled_1 = tslib_1.__importDefault(require("@mui/base/ButtonUnstyled"));
var MenuButtonItem = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'clear' : _b, _c = _a.size, size = _c === void 0 ? 'sm' : _c, action = _a.action, icon = _a.icon, title = _a.title, _d = _a.disabled, disabled = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(false), hover = _e[0], setHover = _e[1];
    var selectedVariant = variant;
    var selectedSize = size;
    var MyButton = (0, styles_1.styled)(ButtonUnstyled_1["default"])({
        backgroundColor: disabled ? theme_1.variants[selectedVariant].buttonBgColorDisabled : hover ? theme_1.variants[selectedVariant].buttonBgColorHover : theme_1.variants[selectedVariant].buttonBgColor,
        color: disabled ? theme_1.variants[selectedVariant].buttonTextColorDisabled : theme_1.variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        width: 'fit-content',
        minWidth: '150px',
        fontFamily: theme_1.theme.font.buttonLabel.regular.fontFamily,
        fontSize: theme_1.sizes.button[selectedSize].fontSize,
        paddingLeft: theme_1.sizes.popOverMenuItem[selectedSize].paddingLeft,
        paddingRight: theme_1.sizes.popOverMenuItem[selectedSize].paddingRight,
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: (variant === 'clear') ? '0px' : '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        outlineWidth: '0px',
        textAlign: 'left'
    });
    return (react_1["default"].createElement("li", { style: {
            position: 'relative',
            fontSize: '14px',
            width: 'fit-content'
        } },
        react_1["default"].createElement(MyButton, { onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: action },
            react_1["default"].createElement("span", { style: { display: 'flex', gap: '8px' } },
                react_1["default"].createElement("span", null, icon ? react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon }) : ''),
                react_1["default"].createElement("span", null, title)),
            react_1["default"].createElement("span", null))));
};
exports.MenuButtonItem = MenuButtonItem;
