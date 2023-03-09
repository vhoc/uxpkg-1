"use strict";
exports.__esModule = true;
exports.Label = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var theme_1 = require("../../theme");
var Label = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'gray' : _b, text = _a.text, iconButton = _a.iconButton, _c = _a.iconPosition, iconPosition = _c === void 0 ? 'start' : _c, onClick = _a.onClick, style = _a.style, LabelProps = tslib_1.__rest(_a, ["variant", "text", "iconButton", "iconPosition", "onClick", "style"]);
    var selectedVariant = variant;
    var componentStyle = function () { return (tslib_1.__assign({ backgroundColor: theme_1.variants[selectedVariant].labelBgColor, color: theme_1.variants[selectedVariant].labelTextColor, textTransform: 'capitalize', 
        //height: height || 'auto',
        width: text ? 'fit-content' : '32px', maxWidth: '255px', fontFamily: theme_1.theme.font.body.regular.fontFamily, fontSize: '13px', borderRadius: '4px', border: 'none', paddingTop: '6px', paddingBottom: '6px', paddingLeft: '8px', paddingRight: '8px', display: 'flex', justifyContent: text ? 'space-between' : 'center', gap: '6px', alignItems: 'center', height: '32px' }, style)); };
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: componentStyle() }, LabelProps),
        iconButton && iconPosition === 'start' ?
            react_1["default"].createElement("div", { style: {
                    cursor: 'pointer'
                }, onClick: onClick },
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: iconButton }))
            :
                null,
        text ?
            react_1["default"].createElement("div", { style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    textAlign: 'left'
                } }, text)
            :
                null,
        iconButton && iconPosition === 'end' ?
            react_1["default"].createElement("div", { style: {
                    cursor: 'pointer'
                }, onClick: onClick },
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: iconButton }))
            :
                null));
};
exports.Label = Label;
