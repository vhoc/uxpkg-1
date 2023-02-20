import { __assign, __rest } from "tslib";
import React, { useState } from "react";
import { colors, theme } from "../../theme";
import { RoundedToggleButton } from "./RoundedToggleButton";
import { faCaretUp, faCaretDown, faCirclePlus, faCircleMinus } from "@fortawesome/sharp-solid-svg-icons";
import { IconButton } from "./IconButton";
import { Button } from "./Button";
import { styled } from '@mui/material/styles';
var MyDiv = styled('div')({
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        width: '4px'
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: colors.gray[10],
        borderRadius: '3px'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: colors.gray[50],
        borderRadius: '3px'
    }
});
export var IamRolesCard = function (_a) {
    var _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.assigned, assigned = _c === void 0 ? false : _c, title = _a.title, description = _a.description, onClickButtonTopRight = _a.onClickButtonTopRight, onClickButtonBottomLeft = _a.onClickButtonBottomLeft, style = _a.style, children = _a.children, props = __rest(_a, ["selected", "assigned", "title", "description", "onClickButtonTopRight", "onClickButtonBottomLeft", "style", "children"]);
    var _d = useState(false), expanded = _d[0], setExpanded = _d[1];
    return (React.createElement("div", __assign({ style: __assign({ width: '605px', maxWidth: '605px', minHeight: '72px', height: expanded ? '444px' : '72px', backgroundColor: selected ? colors.gray[5] : colors.white, borderWidth: '1px', borderColor: colors.gray[20], borderRadius: '8px', paddingTop: '14px', paddingBottom: expanded ? '16px' : '12px', paddingLeft: '24px', paddingRight: '16px', display: 'flex', justifyContent: 'space-between', fontFamily: theme.font.body.regular.fontFamily, fontSize: theme.font.body.regular.fontSize, fontWeight: theme.font.body.regular.fontWeight, color: theme.font.body.regular.color }, style) }, props), /** EXPANDED RENDER */ expanded ?
        React.createElement("div", { style: { display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%'
            } },
            React.createElement("div", null,
                React.createElement("div", { style: {
                        display: 'flex',
                        justifyContent: 'space-between'
                    } },
                    React.createElement("div", { style: __assign(__assign({}, theme.font.body.semiBold), { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '400px', textAlign: 'left' }) }, title),
                    React.createElement(IconButton, { style: { alignSelf: 'start' }, icon: assigned ? faCircleMinus : faCirclePlus, variant: assigned ? 'gray' : 'grayBlue', size: 'sm', onClick: onClickButtonTopRight })),
                React.createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '573px'
                    } },
                    React.createElement("div", { style: __assign(__assign({}, theme.font.caption.regular), { width: '509px', maxWidth: '509px', textAlign: 'left' }) }, description),
                    React.createElement(MyDiv, { style: __assign(__assign({}, theme.font.caption.regular), { width: '100%', height: '280px', paddingRight: '100px', textAlign: 'left' }) }, children))),
            React.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    justifySelf: 'flex-end',
                    width: '509px'
                } },
                React.createElement(Button, { variant: "grayBlue", size: "sm", onClick: onClickButtonBottomLeft }, "Open in new tab"),
                React.createElement(RoundedToggleButton, { icon: expanded ? faCaretUp : faCaretDown, label: expanded ? 'Less' : 'More', onClick: function () { return setExpanded(function (prevState) { return !prevState; }); } })))
        :
            React.createElement("div", { style: {
                    width: '605px',
                    display: 'flex',
                    justifyContent: 'space-between'
                } },
                React.createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'column'
                    } },
                    React.createElement("div", { style: __assign(__assign({}, theme.font.body.semiBold), { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '400px', textAlign: 'left' }) }, title),
                    React.createElement("div", { style: __assign(__assign({}, theme.font.caption.regular), { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '400px', textAlign: 'left' }) }, description)),
                React.createElement("div", { style: { display: 'flex', gap: '16px', alignItems: 'flex-end' } },
                    React.createElement(RoundedToggleButton, { icon: expanded ? faCaretUp : faCaretDown, label: expanded ? 'Less' : 'More', onClick: function () { return setExpanded(function (prevState) { return !prevState; }); } }),
                    React.createElement(IconButton, { style: { alignSelf: 'start' }, icon: assigned ? faCircleMinus : faCirclePlus, variant: assigned ? 'gray' : 'grayBlue', size: 'sm', onClick: onClickButtonTopRight })))));
};
