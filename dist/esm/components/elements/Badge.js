import { __assign, __rest } from "tslib";
import React from "react";
import { colors } from "../../theme";
var Badge = function (_a) {
    var label = _a.label, props = __rest(_a, ["label"]);
    return (React.createElement("span", __assign({ style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '16px',
            height: '16px',
            backgroundColor: '#3267D6',
            color: colors.white,
            fontSize: '12px',
            borderRadius: '100%',
            position: 'absolute',
            top: '0px',
            right: '0px',
            zIndex: '501'
        } }, props), label));
};
export default Badge;
