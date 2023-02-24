"use strict";
exports.__esModule = true;
exports.UserGroupBar = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Typography_1 = require("./Typography");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var IconButton_1 = require("./IconButton");
var UserGroupBar = function (_a) {
    var type = _a.type, name = _a.name, leftIcon = _a.leftIcon, caption = _a.caption, _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.assigned, assigned = _c === void 0 ? false : _c, addButtonOnClick = _a.addButtonOnClick, removeButtonOnClick = _a.removeButtonOnClick, style = _a.style, props = tslib_1.__rest(_a, ["type", "name", "leftIcon", "caption", "selected", "assigned", "addButtonOnClick", "removeButtonOnClick", "style"]);
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ backgroundColor: selected ? theme_1.colors.blue[5] : theme_1.colors.white, minWidth: '265px', minHeight: '63px', paddingTop: '12px', paddingBottom: '12px', paddingRight: '12px', paddingLeft: '16px', display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box' }, style) },
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                gap: '8px'
            } },
            react_1["default"].createElement("div", { style: {
                    display: 'flex'
                } }, type === 'group' ?
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: leftIcon || pro_solid_svg_icons_1.faUserGroup, color: theme_1.colors.gray[40] })
                :
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: leftIcon || pro_solid_svg_icons_1.faUser, color: theme_1.colors.gray[40] })),
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    alignItems: 'flex-stat'
                } },
                react_1["default"].createElement(Typography_1.Typography, { variant: 'inputText-typed' },
                    name,
                    "."),
                react_1["default"].createElement(Typography_1.Typography, { variant: 'breadcrumbLink' }, caption))),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(IconButton_1.IconButton
            //style={{alignSelf: 'start' }}
            , { 
                //style={{alignSelf: 'start' }}
                icon: assigned ? pro_solid_svg_icons_1.faCircleMinus : pro_solid_svg_icons_1.faCirclePlus, variant: assigned ? 'gray' : 'grayBlue', size: 'sm', onClick: assigned ? removeButtonOnClick : addButtonOnClick }))));
};
exports.UserGroupBar = UserGroupBar;
