import { __assign, __rest } from "tslib";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { variants, theme, colors } from '../../theme';
import { SideMenuSectionName } from "./SideMenuSectionName";
export var SideMenuItem = function (_a) {
    var style = _a.style, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, itemType = _a.itemType, _c = _a.selected, selected = _c === void 0 ? false : _c, _d = _a.collapsed, collapsed = _d === void 0 ? false : _d, icon = _a.icon, _e = _a.disabled, disabled = _e === void 0 ? false : _e, label = _a.label, onClick = _a.onClick, keepExtended = _a.keepExtended, props = __rest(_a, ["style", "variant", "itemType", "selected", "collapsed", "icon", "disabled", "label", "onClick", "keepExtended"]);
    var _f = useState(false), hover = _f[0], setHover = _f[1];
    var selectedVariant = variant;
    if (itemType === 'section') {
        return (React.createElement(SideMenuSectionName, { label: label, collapsed: collapsed, keepExtended: keepExtended }));
    }
    else {
        return React.createElement("button", __assign({ type: "button", style: __assign({ 
                /**
                 * The proper order is:
                 * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
                 * Otherwise, the states get messed up.
                 */
                backgroundColor: (selected || hover) ? variants[selectedVariant].sideBarMenuItemBgColorHover : variants[selectedVariant].sideBarMenuItemBgColor, color: (selected || hover) ? variants[selectedVariant].sideBarMenuItemTextColor : variants[selectedVariant].sideBarMenuItemTextColor, textTransform: 'capitalize', paddingLeft: '15px', paddingRight: '15px', height: '34px', fontFamily: theme.font.buttonLabel.regular.fontFamily, fontSize: '14px', borderRadius: '4px', cursor: disabled ? 'not-allowed' : 'pointer', border: 'none', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: (collapsed && !keepExtended) ? 'fit-content' : '266px', gap: '15px' }, style), onMouseEnter: function () {
                setHover(true);
            }, onMouseLeave: function () {
                setHover(false);
            }, onClick: onClick }, props),
            React.createElement("div", { style: { textAlign: 'center', width: '24px', alignSelf: 'center' } },
                React.createElement(FontAwesomeIcon, { style: { alignSelf: 'center' }, icon: icon, color: selected ? variants[selectedVariant].sideBarMenuItemIconColorHover : colors.gray[70] })),
            (!collapsed || keepExtended) ?
                React.createElement("div", { style: {
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%'
                    } }, label)
                :
                    null);
    }
};
