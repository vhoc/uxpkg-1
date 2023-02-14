import { __assign, __rest } from "tslib";
import React from "react";
import { View } from "../layout/View";
import { IconButton } from "./IconButton";
import { DropDownButton } from "./DropDownButton";
import { Label } from "./Label";
import { Button } from "./Button";
import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";
import { theme, colors } from "../../theme";
export var ResourceCard = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, accessState = _a.accessState, resourceIcon = _a.resourceIcon, bookmarked = _a.bookmarked, resourceName = _a.resourceName, resourceType = _a.resourceType, accountName = _a.accountName, region = _a.region, dropDownItems = _a.dropDownItems, dotMenuItems = _a.dotMenuItems, onBookmarkClick = _a.onBookmarkClick, onMoreInfoClick = _a.onMoreInfoClick, onAccessClick = _a.onAccessClick, width = _a.width, style = _a.style, props = __rest(_a, ["variant", "accessState", "resourceIcon", "bookmarked", "resourceName", "resourceType", "accountName", "region", "dropDownItems", "dotMenuItems", "onBookmarkClick", "onMoreInfoClick", "onAccessClick", "width", "style"]);
    // Exclusive accessState styles for this component:
    var accessStateStyles = {
        access: {
            borderColor: colors.gray[20],
            backgroundColor: colors.white
        },
        requested: {
            borderColor: colors.yellow[50],
            backgroundColor: colors.white
        },
        signIn: {
            borderColor: colors.blue[30],
            backgroundColor: colors.blue[5]
        }
    };
    var selectedAccessState = accessState;
    var componentStyle = function () { return (__assign({ backgroundColor: accessStateStyles[selectedAccessState].backgroundColor, color: colors.gray[90], fontFamily: theme.font.body.regular.fontFamily, fontSize: theme.font.body.regular.fontSize, borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: accessStateStyles[selectedAccessState].borderColor, paddingTop: '16px', paddingBottom: '16px', paddingRight: '16px', paddingLeft: '24px', width: width || 'fit-content', minWidth: 'fit-content', maxWidth: '100%' }, style)); };
    return (React.createElement(View, __assign({ style: componentStyle(), 
        //width={'304px'}
        padding: '16px 16px 16px 24px' }, props),
        accessState !== 'requested' ?
            React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
                React.createElement("div", null, resourceIcon),
                React.createElement(IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: faBookmark }))
            :
                React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
                    React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-start', gap: '8px' } },
                        React.createElement("div", null, resourceIcon),
                        React.createElement(Label, { variant: "warning", text: "Request in progress" })),
                    React.createElement(IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: faBookmark, onClick: onBookmarkClick })),
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '14px', width: '100%' } },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' } },
                React.createElement("div", { style: __assign(__assign({}, theme.font.title.regular), { marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }) }, resourceName),
                React.createElement("div", { style: __assign(__assign({}, theme.font.body.regular), { marginBottom: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }) }, resourceType),
                React.createElement("div", { style: theme.font.caption.regular },
                    accountName,
                    " / ",
                    region))),
        accessState !== 'signIn' ?
            React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                React.createElement(Button, { variant: "gray", onClick: onMoreInfoClick }, "More Info"),
                React.createElement(Button, { variant: "grayBlue", onClick: onAccessClick }, "Access"))
            :
                React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                    React.createElement("div", null,
                        React.createElement(Button, { variant: "gray" }, "More Info")),
                    React.createElement("div", { style: { display: 'flex', gap: '8px' } },
                        React.createElement(DropDownButton, { size: "sm", variant: "grayBlue", menuItems: dropDownItems }),
                        React.createElement(DropDownButton, { size: "sm", variant: "grayBlue", menuItems: dotMenuItems, hasDownArrow: false })))));
};
