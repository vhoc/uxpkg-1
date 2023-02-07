import { __assign, __rest } from "tslib";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme, variants } from '../../theme';
export var Label = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'gray' : _b, text = _a.text, icon = _a.icon, height = _a.height, width = _a.width, LabelProps = __rest(_a, ["variant", "text", "icon", "height", "width"]);
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
        alignItems: 'center'
    }); };
    return (React.createElement("div", __assign({ style: componentStyle() }, LabelProps),
        React.createElement("span", null, text),
        icon ?
            React.createElement(FontAwesomeIcon, { icon: icon })
            :
                null));
};
