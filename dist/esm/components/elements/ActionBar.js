import { __assign } from "tslib";
import React from "react";
import { colors } from "../../theme";
import { Typography } from "./Typography";
import { faCircleMinus, faCirclePlus, } from "@fortawesome/pro-solid-svg-icons";
import { IconButton } from "./IconButton";
export var ActionBar = function (_a) {
    var name = _a.name, leftIcon = _a.leftIcon, _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.assigned, assigned = _c === void 0 ? false : _c, addButtonOnClick = _a.addButtonOnClick, removeButtonOnClick = _a.removeButtonOnClick, style = _a.style;
    return (React.createElement("div", { style: __assign({ backgroundColor: selected ? colors.blue[5] : colors.white, minWidth: '265px', minHeight: '42px', height: '42px', paddingTop: '4px', paddingBottom: '4px', paddingRight: '12px', paddingLeft: '16px', display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box' }, style) },
        React.createElement("div", { style: {
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                height: '100%'
            } },
            leftIcon,
            React.createElement(Typography, { variant: 'inputText-typed' }, name)),
        React.createElement("div", null,
            React.createElement(IconButton
            //style={{alignSelf: 'start' }}
            , { 
                //style={{alignSelf: 'start' }}
                icon: assigned ? faCircleMinus : faCirclePlus, variant: assigned ? 'gray' : 'grayBlue', size: 'sm', onClick: assigned ? removeButtonOnClick : addButtonOnClick }))));
};
