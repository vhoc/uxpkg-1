import { __assign } from "tslib";
import React from 'react';
import { styled } from '@mui/material/styles';
import { theme } from '../../theme';
export var SimpleDropDown = function (_a) {
    var value = _a.value, menuItems = _a.menuItems, disabled = _a.disabled, onChange = _a.onChange, style = _a.style;
    var MySelect = styled('select')(__assign(__assign(__assign({}, theme.font.body.regular), { backgroundColor: 'transparent', paddingRight: '8px', '&:focus-visible': {
            outline: 'none'
        } }), style));
    return (React.createElement(MySelect, { value: value, disabled: disabled, onChange: onChange }, menuItems && menuItems.length >= 1 ?
        menuItems.map(function (item) {
            return (React.createElement("option", { key: item.value, value: item.value }, item.label));
        })
        :
            null));
};
