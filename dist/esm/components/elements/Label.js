import { __assign, __rest } from "tslib";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme, variants } from '../../theme';
export var Label = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'gray' : _b, text = _a.text, iconButton = _a.iconButton, onClick = _a.onClick, style = _a.style, LabelProps = __rest(_a, ["variant", "text", "iconButton", "onClick", "style"]);
    var selectedVariant = variant;
    var componentStyle = function () { return (__assign({ backgroundColor: variants[selectedVariant].labelBgColor, color: variants[selectedVariant].labelTextColor, textTransform: 'capitalize', 
        //height: height || 'auto',
        width: 'fit-content', maxWidth: '255px', fontFamily: theme.font.body.regular.fontFamily, fontSize: '13px', borderRadius: '4px', border: 'none', paddingTop: '6px', paddingBottom: '6px', paddingLeft: '8px', paddingRight: '8px', display: 'flex', justifyContent: 'space-between', gap: '6px', alignItems: 'center', height: '32px' }, style)); };
    return (React.createElement("div", __assign({ style: componentStyle() }, LabelProps),
        React.createElement("div", { style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%',
                textAlign: 'left'
            } }, text),
        iconButton ?
            React.createElement("div", { style: {
                    cursor: 'pointer'
                }, onClick: onClick },
                React.createElement(FontAwesomeIcon, { icon: iconButton }))
            :
                null));
};
