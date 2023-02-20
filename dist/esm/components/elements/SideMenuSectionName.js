import { __assign, __rest } from "tslib";
import React from "react";
import { variants, theme, colors } from '../../theme';
export var SideMenuSectionName = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, keepExtended = _a.keepExtended, collapsed = _a.collapsed, label = _a.label, props = __rest(_a, ["variant", "keepExtended", "collapsed", "label"]);
    var selectedVariant = variant;
    return React.createElement("button", __assign({ type: "button", style: {
            /**
             * The proper order is:
             * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
             * Otherwise, the states get messed up.
             */
            backgroundColor: variants[selectedVariant].sideBarMenuItemBgColor,
            color: colors.gray[30],
            textTransform: 'uppercase',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '15px',
            paddingRight: '15px',
            height: '34px',
            fontFamily: theme.font.buttonLabel.regular.fontFamily,
            fontSize: '13px',
            borderRadius: '4px',
            border: 'none',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            width: (collapsed && !keepExtended) ? '50px' : '266px'
        } }, props),
        React.createElement("div", { style: {
                width: (collapsed && !keepExtended) ? '50px' : '266px',
                textAlign: 'left'
            } }, (collapsed && !keepExtended) ? '' : label));
};
