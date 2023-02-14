import { __assign, __rest } from "tslib";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../theme";
var RoundedToggleButton = function (_a) {
    var _b = _a.active, active = _b === void 0 ? false : _b, iconOn = _a.iconOn, iconOff = _a.iconOff, onClick = _a.onClick, labelOn = _a.labelOn, labelOff = _a.labelOff, props = __rest(_a, ["active", "iconOn", "iconOff", "onClick", "labelOn", "labelOff"]);
    return (React.createElement("button", __assign({ style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '8px',
            paddingRight: '6px',
            width: '60px',
            height: '22px',
            color: colors.gray[40],
            fontFamily: 'IBM Plex Sans',
            fontSize: '12px',
            textTransform: 'capitalize',
            backgroundColor: colors.gray[10],
            borderRadius: '11px'
        }, onClick: onClick }, props),
        React.createElement("span", { style: { fontFamily: 'IBM Plex Sans' } }, active ? labelOn : labelOff),
        React.createElement(FontAwesomeIcon, { icon: active ? iconOn : iconOff })));
};
export default RoundedToggleButton;
