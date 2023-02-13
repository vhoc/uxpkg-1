"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var theme_1 = require("../../theme");
var SideMenuItem_1 = tslib_1.__importDefault(require("./SideMenuItem"));
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var SideMenu = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, menuItems = _a.menuItems, props = tslib_1.__rest(_a, ["variant", "menuItems"]);
    var _c = (0, react_1.useState)(true), collapsed = _c[0], setCollapsed = _c[1];
    var _d = (0, react_1.useState)(false), keepExtended = _d[0], setKeepExtended = _d[1];
    var selectedVariant = variant;
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: {
            width: (collapsed && !keepExtended) ? 'fit-content' : '289px',
            minHeight: '100%',
            height: '100%',
            backgroundColor: theme_1.variants[selectedVariant].sideBarBgColor,
            paddingTop: '16px',
            paddingBottom: '16px',
            paddingLeft: '8px',
            paddingRight: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        } }, props),
        menuItems && menuItems.length >= 1 ?
            menuItems.map(function (item, index) {
                return (react_1["default"].createElement(SideMenuItem_1["default"], { key: index, itemType: item.itemType, icon: item.icon, variant: item.variant, disabled: item.disabled, collapsed: collapsed, setCollapsed: setCollapsed, selected: item.selected, label: item.label, onClick: item.onClick, keepExtended: keepExtended }));
            })
            :
                null,
        react_1["default"].createElement("button", { style: {
                backgroundColor: theme_1.colors.white,
                border: 'none',
                borderTopColor: '#E3E3E3',
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                color: keepExtended ? theme_1.colors.gray[70] : theme_1.colors.gray[30],
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '13px',
                paddingLeft: '15px',
                paddingRight: '15px',
                width: (collapsed && !keepExtended) ? '46px' : '266px'
            }, onMouseEnter: function () {
                setCollapsed(false);
            }, onMouseLeave: function () {
                setCollapsed(true);
            }, onClick: function () { return setKeepExtended(function (prevState) { return (!prevState); }); } },
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: sharp_solid_svg_icons_1.faSignOutAlt }),
            (!collapsed || keepExtended) ?
                react_1["default"].createElement("span", { style: {
                        fontSize: '15px',
                        color: keepExtended ? theme_1.colors.gray[70] : theme_1.colors.gray[50],
                        marginLeft: '12px'
                    } }, "Keep Menu Open")
                :
                    null)));
};
exports["default"] = SideMenu;
