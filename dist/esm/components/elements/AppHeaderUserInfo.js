import { __assign, __rest } from "tslib";
import React from "react";
import { colors } from "../../theme";
export var AppHeaderUserInfo = function (_a) {
    var userName = _a.userName, userRole = _a.userRole, props = __rest(_a, ["userName", "userRole"]);
    return (React.createElement("div", __assign({ style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            backgroundColor: colors.white,
            paddingLeft: '12px',
            paddingRight: '12px',
            maxWidth: '250px',
            width: 'fit-content'
        } }, props),
        React.createElement("span", { style: {
                fontSize: '14px',
                textAlign: 'right',
                color: '#222945',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%'
            } }, userName),
        React.createElement("span", { style: {
                fontSize: '12px',
                textAlign: 'right',
                color: '#615E71',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%'
            } }, userRole)));
};
