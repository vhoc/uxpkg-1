import { __assign } from "tslib";
import React from "react";
import { colors } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "./Typography";
import { faCircleMinus, faCirclePlus, faUserGroup, faUser } from "@fortawesome/pro-solid-svg-icons";
import { IconButton } from "./IconButton";
export var UserGroupBar = function (_a) {
    var type = _a.type, name = _a.name, leftIcon = _a.leftIcon, caption = _a.caption, _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.assigned, assigned = _c === void 0 ? false : _c, addButtonOnClick = _a.addButtonOnClick, removeButtonOnClick = _a.removeButtonOnClick, style = _a.style;
    return (React.createElement("div", { style: __assign({ backgroundColor: selected ? colors.blue[5] : colors.white, minWidth: '265px', minHeight: '63px', paddingTop: '12px', paddingBottom: '12px', paddingRight: '12px', paddingLeft: '16px', display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box' }, style) },
        React.createElement("div", { style: {
                display: 'flex',
                gap: '8px'
            } },
            React.createElement("div", { style: {
                    display: 'flex'
                } }, type === 'group' ?
                React.createElement(FontAwesomeIcon, { icon: leftIcon || faUserGroup, color: colors.gray[40] })
                :
                    React.createElement(FontAwesomeIcon, { icon: leftIcon || faUser, color: colors.gray[40] })),
            React.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    alignItems: 'flex-stat'
                } },
                React.createElement(Typography, { variant: 'inputText-typed' }, name),
                React.createElement(Typography, { variant: 'breadcrumbLink' }, caption))),
        React.createElement("div", null,
            React.createElement(IconButton
            //style={{alignSelf: 'start' }}
            , { 
                //style={{alignSelf: 'start' }}
                icon: assigned ? faCircleMinus : faCirclePlus, variant: assigned ? 'gray' : 'grayBlue', size: 'sm', onClick: assigned ? removeButtonOnClick : addButtonOnClick }))));
};
