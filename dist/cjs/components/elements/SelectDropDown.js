"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var material_1 = require("@mui/material");
var react_1 = tslib_1.__importDefault(require("react"));
//import { styled } from '@mui/system';
var styles_1 = require("@mui/material/styles");
var theme_1 = require("../../theme");
var MySelect = (0, styles_1.styled)(material_1.Select)({
    backgroundColor: theme_1.colors.white,
    fontFamily: 'IBM Plex Sans',
    fontSize: '14px',
    color: theme_1.colors.gray[90],
    borderColor: theme_1.colors.gray[20],
    height: '40px',
    '&:hover': {
        backgroundColor: theme_1.colors.blue[5],
        borderColor: theme_1.colors.gray[20],
        borderWidth: '0px',
        border: 'none'
    },
    '&:disabled': {
        borderColor: theme_1.colors.gray[20],
        color: theme_1.colors.gray[30]
    },
    '&.Mui-focused fieldset': {
        borderColor: theme_1.colors.blue[40] + ' !important',
        borderWidth: '1px !important',
        //border: 'inherited',
        boxShadow: 'none'
    }
});
var MyMenuItem = (0, styles_1.styled)(material_1.MenuItem)({
    fontFamily: 'IBM Plex Sans',
    fontSize: '14px'
});
var SelectDropDown = function (_a) {
    var menuItems = _a.menuItems, value = _a.value, onChange = _a.onChange, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = tslib_1.__rest(_a, ["menuItems", "value", "onChange", "disabled"]);
    return (react_1["default"].createElement(material_1.FormControl, { sx: {
            fontFamily: 'IBM Plex Sans',
            p: 0,
            height: '40px',
            '&:hover fieldset': {
                borderColor: theme_1.colors.gray[20] + ' !important',
                borderWidth: '1px',
                //border: 'inherited',
                boxShadow: 'none'
            }
        }, size: 'small', disabled: disabled },
        react_1["default"].createElement(MySelect, tslib_1.__assign({ value: value, onChange: onChange, displayEmpty: true, inputProps: { 'aria-label': 'Without label' } }, props),
            react_1["default"].createElement(MyMenuItem, { value: "" },
                react_1["default"].createElement("em", null, "Select an option...")),
            menuItems && menuItems.length >= 1 ?
                menuItems.map(function (item, index) {
                    return (react_1["default"].createElement(MyMenuItem, { key: index, value: item.value, selected: item.selected || false, disabled: item.disabled || false }, item.label));
                })
                :
                    react_1["default"].createElement(MyMenuItem, { value: "", disabled: true }, "No hay elementos"))));
};
exports["default"] = SelectDropDown;