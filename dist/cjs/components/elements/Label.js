"use strict";
exports.__esModule = true;
exports.Label = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var theme_1 = require("../../theme");
var Label = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'gray' : _b, text = _a.text, icon = _a.icon, height = _a.height, width = _a.width, LabelProps = tslib_1.__rest(_a, ["variant", "text", "icon", "height", "width"]);
    var selectedVariant = variant;
    var componentStyle = function () { return ({
        backgroundColor: theme_1.variants[selectedVariant].labelBgColor,
        color: theme_1.variants[selectedVariant].labelTextColor,
        textTransform: 'capitalize',
        //height: height || 'auto',
        width: 'fit-content',
        fontFamily: theme_1.theme.font.body.regular.fontFamily,
        fontSize: '13px',
        borderRadius: '4px',
        border: 'none',
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingLeft: '8px',
        paddingRight: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }); };
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: componentStyle() }, LabelProps),
        react_1["default"].createElement("span", null, text),
        icon ?
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon })
            :
                null));
};
exports.Label = Label;
