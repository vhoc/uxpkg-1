import { __assign } from "tslib";
import React, { useState, useEffect } from "react";
import { View } from "../layout/View";
import { IconButton } from "./IconButton";
import { DropDownButton } from "./DropDownButton";
import { Label } from "./Label";
import { Button } from "./Button";
import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";
import { theme, colors } from "../../theme";
export var ResourceCard = function (_a) {
    var accessState = _a.accessState, resourceIcon = _a.resourceIcon, bookmarked = _a.bookmarked, _b = _a.forPolicy, forPolicy = _b === void 0 ? false : _b, resourceName = _a.resourceName, resourceType = _a.resourceType, accountName = _a.accountName, region = _a.region, dropDownItems = _a.dropDownItems, dotMenuItems = _a.dotMenuItems, onClickBookmark = _a.onClickBookmark, _c = _a.showMoreInfoButton, showMoreInfoButton = _c === void 0 ? true : _c, onClickMoreInfo = _a.onClickMoreInfo, onClickAccess = _a.onClickAccess, onClickPolicy = _a.onClickPolicy, onClickRequest = _a.onClickRequest, _d = _a.onClickSingleSignIn, onClickSingleSignIn = _d === void 0 ? undefined : _d, width = _a.width, style = _a.style;
    var _e = useState(null), ButtonSet = _e[0], setButtonSet = _e[1];
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
        waiting: {
            borderColor: colors.yellow[50],
            backgroundColor: colors.white
        },
        signIn: {
            borderColor: colors.blue[30],
            backgroundColor: colors.blue[5]
        }
    };
    var selectedAccessState = accessState;
    var componentStyle = function () { return (__assign({ backgroundColor: accessStateStyles[selectedAccessState].backgroundColor, color: colors.gray[90], fontFamily: theme.font.body.regular.fontFamily, fontSize: theme.font.body.regular.fontSize, borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: accessStateStyles[selectedAccessState].borderColor, paddingTop: '16px', paddingBottom: '16px', paddingRight: '16px', paddingLeft: '24px', width: width || '240px', minWidth: '280px', maxWidth: width }, style)); };
    useEffect(function () {
        switch (accessState) {
            case 'access':
                setButtonSet(function () {
                    return (React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                        showMoreInfoButton ?
                            React.createElement(Button, { variant: "gray", onClick: onClickMoreInfo }, "More Info")
                            :
                                React.createElement("div", null),
                        forPolicy ?
                            React.createElement(Button, { variant: "grayBlue", onClick: onClickPolicy }, "Policy")
                            :
                                React.createElement(Button, { variant: "grayBlue", onClick: onClickRequest }, "Request")));
                });
                break;
            /** */
            case 'requested':
                setButtonSet(function () {
                    return (React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                        showMoreInfoButton ?
                            React.createElement(Button, { variant: "gray", onClick: onClickMoreInfo }, "More Info")
                            :
                                React.createElement("div", null),
                        forPolicy ?
                            React.createElement(Button, { variant: "grayBlue", onClick: onClickPolicy }, "Policy")
                            :
                                React.createElement(Button, { variant: "grayBlue", onClick: onClickAccess }, "Access")));
                });
                break;
            /** */
            case 'signIn':
                setButtonSet(function () {
                    return (React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                        showMoreInfoButton ?
                            React.createElement("div", null,
                                React.createElement(Button, { variant: "gray" }, "More Info"))
                            :
                                null,
                        React.createElement("div", { style: { display: 'flex', gap: '8px' } },
                            (dropDownItems && (dropDownItems === null || dropDownItems === void 0 ? void 0 : dropDownItems.length) <= 1 && !dropDownItems[0].submenu) || onClickSingleSignIn ?
                                forPolicy ?
                                    React.createElement(Button, { variant: "grayBlue", onClick: onClickPolicy }, "Policy")
                                    :
                                        accessState === 'signIn' ?
                                            React.createElement(Button, { variant: "grayBlue", onClick: onClickSingleSignIn }, "Sign In")
                                            :
                                                null
                                :
                                    React.createElement(DropDownButton, { size: "sm", variant: "grayBlue", menuItems: dropDownItems }),
                            React.createElement(DropDownButton, { size: "sm", variant: "grayBlue", menuItems: dotMenuItems, hasDownArrow: false }))));
                });
                break;
            /** */
            case 'waiting':
                setButtonSet(function () {
                    return (React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                        showMoreInfoButton ?
                            React.createElement(Button, { variant: "gray", onClick: onClickMoreInfo }, "More Info")
                            :
                                React.createElement("div", null),
                        forPolicy ?
                            React.createElement(Button, { variant: "grayBlue", onClick: onClickPolicy }, "Policy")
                            :
                                React.createElement(Button, { variant: "grayBlue", onClick: onClickRequest }, "Request")));
                });
                break;
            default:
                setButtonSet(null);
                break;
        }
    }, [accessState, showMoreInfoButton, forPolicy, onClickMoreInfo, onClickPolicy, onClickAccess, onClickRequest, dotMenuItems, onClickSingleSignIn, dropDownItems]);
    return (React.createElement(View, { style: componentStyle(), padding: '16px 16px 16px 24px' },
        accessState !== 'requested' ?
            accessState === 'waiting' ?
                React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
                    React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-start', gap: '8px' } },
                        React.createElement("div", null, resourceIcon),
                        React.createElement(Label, { variant: "warning", text: "Awaiting for approval" })),
                    React.createElement(IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: faBookmark, onClick: onClickBookmark }))
                :
                    React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
                        React.createElement("div", null, resourceIcon),
                        React.createElement(IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: faBookmark, onClick: onClickBookmark }))
            :
                React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
                    React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-start', gap: '8px' } },
                        React.createElement("div", null, resourceIcon),
                        React.createElement(Label, { variant: "warning", text: "Request in progress" })),
                    React.createElement(IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: faBookmark, onClick: onClickBookmark })),
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '14px', width: '100%' } },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' } },
                React.createElement("div", { style: __assign(__assign({}, theme.font.title.regular), { marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }) }, resourceName),
                React.createElement("div", { style: __assign(__assign({}, theme.font.body.regular), { marginBottom: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }) }, resourceType),
                React.createElement("div", { style: theme.font.caption.regular },
                    accountName,
                    " / ",
                    region))),
        (ButtonSet)));
};
