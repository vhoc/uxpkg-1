"use strict";
exports.__esModule = true;
exports.SideMenu = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var theme_1 = require("../../theme");
var SideMenuItem_1 = require("./SideMenuItem");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var SideMenu = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, menuItems = _a.menuItems, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, style = _a.style, _c = _a.collapsed, collapsed = _c === void 0 ? true : _c;
    var _d = (0, react_1.useState)(false), keepExtended = _d[0], setKeepExtended = _d[1];
    var selectedVariant = variant;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ width: (collapsed && !keepExtended) ? 'fit-content' : '289px', minHeight: '100%', height: '100%', backgroundColor: theme_1.variants[selectedVariant].sideBarBgColor, paddingTop: '16px', paddingBottom: '16px', paddingLeft: '8px', paddingRight: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }, style), onMouseEnter: function () {
            if (collapsed)
                onMouseEnter;
        }, onMouseLeave: function () {
            if (!collapsed)
                onMouseLeave;
        } },
        react_1["default"].createElement("div", null, menuItems && menuItems.length >= 1 ?
            menuItems.map(function (item, index) {
                return (react_1["default"].createElement(SideMenuItem_1.SideMenuItem, { key: index, itemType: item.itemType, icon: item.icon, variant: item.variant, disabled: item.disabled, collapsed: collapsed, selected: item.selected, label: item.label, onClick: item.onClick, keepExtended: keepExtended }));
            })
            :
                null),
        react_1["default"].createElement("button", { style: {
                backgroundColor: theme_1.colors.white,
                border: 'none',
                borderTopColor: '#E3E3E3',
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                color: keepExtended ? theme_1.colors.gray[70] : theme_1.colors.gray[30],
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingTop: '13px',
                paddingLeft: '15px',
                paddingRight: '15px',
                width: (collapsed && !keepExtended) ? '46px' : '266px'
            }, onClick: function () { return setKeepExtended(function (prevState) { return (!prevState); }); } },
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: sharp_solid_svg_icons_1.faSignOutAlt, className: keepExtended ? 'fa-flip-horizontal' : undefined }))));
};
exports.SideMenu = SideMenu;
