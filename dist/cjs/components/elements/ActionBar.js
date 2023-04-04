"use strict";
exports.__esModule = true;
exports.ActionBar = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var IconButton_1 = require("./IconButton");
var ActionBar = function (_a) {
    var name = _a.name, leftIcon = _a.leftIcon, _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.assigned, assigned = _c === void 0 ? false : _c, onClickAddButton = _a.onClickAddButton, onClickRemoveButton = _a.onClickRemoveButton, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ backgroundColor: selected ? theme_1.colors.blue[5] : theme_1.colors.white, minWidth: '265px', minHeight: '42px', height: '42px', paddingTop: '4px', paddingBottom: '4px', paddingRight: '12px', paddingLeft: '16px', display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box' }, style) },
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                height: '100%'
            } },
            leftIcon,
            react_1["default"].createElement(Typography_1.Typography, { variant: 'inputText-typed' }, name)),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(IconButton_1.IconButton
            //style={{alignSelf: 'start' }}
            , { 
                //style={{alignSelf: 'start' }}
                icon: assigned ? pro_solid_svg_icons_1.faCircleMinus : pro_solid_svg_icons_1.faCirclePlus, variant: assigned ? 'gray' : 'grayBlue', size: 'sm', onClick: assigned ? onClickRemoveButton : onClickAddButton }))));
};
exports.ActionBar = ActionBar;
