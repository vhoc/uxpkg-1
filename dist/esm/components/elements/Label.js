import { __assign, __rest } from "tslib";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme, variants } from '../../theme';
export var Label = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'gray' : _b, text = _a.text, iconButton = _a.iconButton, _c = _a.iconPosition, iconPosition = _c === void 0 ? 'start' : _c, onClick = _a.onClick, style = _a.style, LabelProps = __rest(_a, ["variant", "text", "iconButton", "iconPosition", "onClick", "style"]);
    var selectedVariant = variant;
    var componentStyle = function () { return (__assign({ backgroundColor: variants[selectedVariant].labelBgColor, color: variants[selectedVariant].labelTextColor, textTransform: 'capitalize', width: text ? 'fit-content' : '32px', fontFamily: theme.font.body.regular.fontFamily, fontSize: '13px', borderRadius: '4px', border: 'none', paddingTop: '6px', paddingBottom: '6px', paddingLeft: '8px', paddingRight: '8px', display: 'flex', justifyContent: text ? 'space-between' : 'center', gap: '6px', alignItems: 'center', height: '32px' }, style)); };
    return (React.createElement("div", __assign({ style: componentStyle() }, LabelProps),
        iconButton && iconPosition === 'start' ?
            React.createElement("div", { style: {
                    cursor: 'pointer'
                }, onClick: onClick },
                React.createElement(FontAwesomeIcon, { icon: iconButton }))
            :
                null,
        text ?
            React.createElement("div", { style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    textAlign: 'left'
                } }, text)
            :
                null,
        iconButton && iconPosition === 'end' ?
            React.createElement("div", { style: {
                    cursor: 'pointer'
                }, onClick: onClick },
                React.createElement(FontAwesomeIcon, { icon: iconButton }))
            :
                null));
};
