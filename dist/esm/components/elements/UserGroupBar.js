import { __assign } from "tslib";
import React from "react";
import { colors } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "./Typography";
import { faCircleMinus, faCirclePlus, faUsers, faUser } from "@fortawesome/pro-solid-svg-icons";
import { IconButton } from "./IconButton";
export var UserGroupBar = function (_a) {
    var type = _a.type, name = _a.name, leftIcon = _a.leftIcon, caption = _a.caption, _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.assigned, assigned = _c === void 0 ? false : _c, onClickAddButton = _a.onClickAddButton, onClickRemoveButton = _a.onClickRemoveButton, style = _a.style, _d = _a.endButton, endButton = _d === void 0 ? true : _d, onClick = _a.onClick;
    return (React.createElement("div", { style: __assign({ backgroundColor: selected ? colors.blue[5] : colors.white, minWidth: '265px', minHeight: '63px', paddingTop: '12px', paddingBottom: '12px', paddingRight: '12px', paddingLeft: '16px', display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box' }, style) },
        React.createElement("div", { onClick: onClick, style: {
                display: 'flex',
                gap: '8px',
                cursor: 'pointer'
            } },
            React.createElement("div", { style: {
                    display: 'flex'
                } }, type === 'group' ?
                React.createElement(FontAwesomeIcon, { icon: leftIcon || faUsers, color: colors.gray[40] })
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
        React.createElement("div", null, endButton ?
            React.createElement(IconButton, { icon: assigned ? faCircleMinus : faCirclePlus, variant: assigned ? 'gray' : 'grayBlue', size: 'sm', onClick: assigned ? onClickRemoveButton : onClickAddButton })
            :
                null)));
};
