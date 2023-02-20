import { __assign, __rest } from "tslib";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../theme";
var RoundedToggleButton = function (_a) {
    var icon = _a.icon, onClick = _a.onClick, label = _a.label, props = __rest(_a, ["icon", "onClick", "label"]);
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
            borderRadius: '11px',
            outlineWidth: '0px',
            border: 'none',
            borderWidth: '0px'
        }, onClick: onClick }, props),
        React.createElement("span", { style: { fontFamily: 'IBM Plex Sans' } }, label),
        React.createElement(FontAwesomeIcon, { icon: icon })));
};
export default RoundedToggleButton;
