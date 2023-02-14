import { __assign, __rest } from "tslib";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme, variants } from '../../theme';
export var Label = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'gray' : _b, text = _a.text, iconButton = _a.iconButton, height = _a.height, width = _a.width, onClick = _a.onClick, LabelProps = __rest(_a, ["variant", "text", "iconButton", "height", "width", "onClick"]);
    var selectedVariant = variant;
    var componentStyle = function () { return ({
        backgroundColor: variants[selectedVariant].labelBgColor,
        color: variants[selectedVariant].labelTextColor,
        textTransform: 'capitalize',
        //height: height || 'auto',
        width: 'fit-content',
        fontFamily: theme.font.body.regular.fontFamily,
        fontSize: '13px',
        borderRadius: '4px',
        border: 'none',
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingLeft: '8px',
        paddingRight: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '6px',
        alignItems: 'center'
    }); };
    return (React.createElement("div", __assign({ style: componentStyle() }, LabelProps),
        React.createElement("span", null, text),
        iconButton ?
            React.createElement("div", { style: {
                    cursor: 'pointer'
                }, onClick: onClick },
                React.createElement(FontAwesomeIcon, { icon: iconButton }))
            :
                null));
};
