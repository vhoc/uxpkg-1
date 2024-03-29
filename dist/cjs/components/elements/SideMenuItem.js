"use strict";
exports.__esModule = true;
exports.SideMenuItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_2 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var theme_1 = require("../../theme");
var SideMenuSectionName_1 = require("./SideMenuSectionName");
var SideMenuItem = function (_a) {
    var style = _a.style, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, itemType = _a.itemType, _c = _a.selected, selected = _c === void 0 ? false : _c, _d = _a.collapsed, collapsed = _d === void 0 ? false : _d, icon = _a.icon, _e = _a.disabled, disabled = _e === void 0 ? false : _e, label = _a.label, onClick = _a.onClick, keepExtended = _a.keepExtended, props = tslib_1.__rest(_a, ["style", "variant", "itemType", "selected", "collapsed", "icon", "disabled", "label", "onClick", "keepExtended"]);
    var _f = (0, react_2.useState)(false), hover = _f[0], setHover = _f[1];
    var selectedVariant = variant;
    if (itemType === 'section') {
        return (react_1["default"].createElement(SideMenuSectionName_1.SideMenuSectionName, { label: label, collapsed: collapsed, keepExtended: keepExtended }));
    }
    else {
        return react_1["default"].createElement("button", tslib_1.__assign({ type: "button", style: tslib_1.__assign({ 
                /**
                 * The proper order is:
                 * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
                 * Otherwise, the states get messed up.
                 */
                backgroundColor: (selected || hover) ? theme_1.variants[selectedVariant].sideBarMenuItemBgColorHover : theme_1.variants[selectedVariant].sideBarMenuItemBgColor, color: (selected || hover) ? theme_1.variants[selectedVariant].sideBarMenuItemTextColor : theme_1.variants[selectedVariant].sideBarMenuItemTextColor, textTransform: 'capitalize', paddingLeft: '15px', paddingRight: '15px', height: '34px', fontFamily: theme_1.theme.font.buttonLabel.regular.fontFamily, fontSize: '14px', borderRadius: '4px', cursor: disabled ? 'not-allowed' : 'pointer', border: 'none', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: (collapsed && !keepExtended) ? 'fit-content' : '266px', gap: '15px' }, style), onMouseEnter: function () {
                setHover(true);
            }, onMouseLeave: function () {
                setHover(false);
            }, onClick: onClick }, props),
            react_1["default"].createElement("div", { style: { textAlign: 'center', width: '24px', alignSelf: 'center' } },
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { style: { alignSelf: 'center' }, icon: icon, color: selected ? theme_1.variants[selectedVariant].sideBarMenuItemIconColorHover : theme_1.colors.gray[70] })),
            (!collapsed || keepExtended) ?
                react_1["default"].createElement("div", { style: {
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
exports.SideMenuItem = SideMenuItem;
