import { __assign } from "tslib";
import React, { useState, useEffect } from "react";
import { colors, variants } from "../../theme";
import { SideMenuItem } from "./SideMenuItem";
import { faSignOutAlt } from "@fortawesome/sharp-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export var SideMenu = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, menuItems = _a.menuItems, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, style = _a.style, _c = _a.collapsed, collapsed = _c === void 0 ? true : _c, onClickKeepOpen = _a.onClickKeepOpen, _d = _a.keepOpen, keepOpen = _d === void 0 ? false : _d;
    //const [keepExtended, setKeepExtended] = useState<boolean>(false)
    var _e = useState(collapsed), isCollapsed = _e[0], setIsCollapsed = _e[1];
    var selectedVariant = variant;
    useEffect(function () {
        setIsCollapsed(collapsed);
    }, [collapsed]);
    return (React.createElement("div", { style: __assign({ width: (isCollapsed && !keepOpen) ? 'fit-content' : '289px', minHeight: '100%', height: '100%', backgroundColor: variants[selectedVariant].sideBarBgColor, paddingTop: '16px', paddingBottom: '16px', paddingLeft: '8px', paddingRight: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }, style), onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        React.createElement("div", null, menuItems && menuItems.length >= 1 ?
            menuItems.map(function (item, index) {
                return (React.createElement(SideMenuItem, { key: index, itemType: item.itemType, icon: item.icon, variant: item.variant, disabled: item.disabled, collapsed: isCollapsed, selected: item.selected, label: item.label, onClick: item.onClick, keepExtended: keepOpen }));
            })
            :
                null),
        React.createElement("button", { style: {
                backgroundColor: colors.white,
                border: 'none',
                borderTopColor: '#E3E3E3',
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                color: keepOpen ? colors.gray[70] : colors.gray[30],
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingTop: '13px',
                paddingLeft: '15px',
                paddingRight: '15px',
                width: (isCollapsed && !keepOpen) ? '46px' : '266px'
            }, onClick: onClickKeepOpen },
            React.createElement(FontAwesomeIcon, { icon: faSignOutAlt, className: keepOpen ? 'fa-flip-horizontal' : undefined }))));
};
