"use strict";
exports.__esModule = true;
exports.SideMenuSectionName = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var SideMenuSectionName = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, keepExtended = _a.keepExtended, collapsed = _a.collapsed, label = _a.label, props = tslib_1.__rest(_a, ["variant", "keepExtended", "collapsed", "label"]);
    var selectedVariant = variant;
    return react_1["default"].createElement("button", tslib_1.__assign({ type: "button", style: {
            /**
             * The proper order is:
             * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
             * Otherwise, the states get messed up.
             */
            backgroundColor: theme_1.variants[selectedVariant].sideBarMenuItemBgColor,
            color: theme_1.colors.gray[30],
            textTransform: 'uppercase',
            marginTop: '5px',
            marginBottom: '5px',
            paddingLeft: '15px',
            paddingRight: '15px',
            height: '34px',
            fontFamily: theme_1.theme.font.buttonLabel.regular.fontFamily,
            fontSize: '13px',
            borderRadius: '4px',
            border: 'none',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            width: (collapsed && !keepExtended) ? 'fit-content' : '266px'
        } }, props),
        react_1["default"].createElement("div", null, (collapsed && !keepExtended) ? '' : label));
};
exports.SideMenuSectionName = SideMenuSectionName;
exports["default"] = exports.SideMenuSectionName;
