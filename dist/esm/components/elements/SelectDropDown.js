import { __assign, __rest } from "tslib";
import { Select, MenuItem, FormControl } from "@mui/material";
import { mtheme, colors } from "../../theme";
import React from "react";
//import { styled } from '@mui/system';
import { styled, ThemeProvider } from '@mui/material/styles';
var MySelect = styled(Select)({
    backgroundColor: colors.white,
    fontFamily: 'IBM Plex Sans',
    fontSize: '14px',
    color: colors.gray[90],
    borderColor: colors.gray[20],
    height: '40px',
    '&:hover': {
        backgroundColor: colors.blue[5],
        borderColor: colors.gray[20],
        borderWidth: '0px',
        border: 'none'
    },
    '&:disabled': {
        borderColor: colors.gray[20],
        color: colors.gray[30]
    },
    '&.Mui-focused fieldset': {
        borderColor: colors.blue[40] + ' !important',
        borderWidth: '1px !important',
        //border: 'inherited',
        boxShadow: 'none'
    }
});
var MyMenuItem = styled(MenuItem)({
    fontFamily: 'IBM Plex Sans',
    fontSize: '14px'
});
export var SelectDropDown = function (_a) {
    var menuItems = _a.menuItems, value = _a.value, onChange = _a.onChange, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = __rest(_a, ["menuItems", "value", "onChange", "disabled"]);
    return (React.createElement(FormControl, { sx: {
            fontFamily: 'IBM Plex Sans',
            p: 0,
            height: '40px',
            '&:hover fieldset': {
                borderColor: colors.gray[20] + ' !important',
                borderWidth: '1px',
                //border: 'inherited',
                boxShadow: 'none'
            }
        }, size: 'small', disabled: disabled },
        React.createElement(ThemeProvider, { theme: mtheme },
            React.createElement(MySelect, __assign({ value: value, onChange: onChange, displayEmpty: true, inputProps: { 'aria-label': 'Without label' } }, props),
                React.createElement(MyMenuItem, { value: "" },
                    React.createElement("em", null, "Select an option...")),
                menuItems && menuItems.length >= 1 ?
                    menuItems.map(function (item, index) {
                        return (React.createElement(MyMenuItem, { key: index, value: item.value, selected: item.selected || false, disabled: item.disabled || false }, item.label));
                    })
                    :
                        React.createElement(MyMenuItem, { value: "", disabled: true }, "No elements")))));
};
