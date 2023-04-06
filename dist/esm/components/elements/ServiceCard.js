import { __assign } from "tslib";
import React from "react";
import { View } from "../layout/View";
import { IconButton } from "./IconButton";
import { DropDownButton } from "./DropDownButton";
import { Label } from "./Label";
import { Button } from "./Button";
import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";
import { theme, colors } from "../../theme";
import { faBadgeCheck } from "@fortawesome/pro-solid-svg-icons";
import { ServiceIcons } from "../graphical/ServiceIcons";
export var ServiceCard = function (_a) {
    var serviceType = _a.serviceType, accessState = _a.accessState, customIcon = _a.customIcon, bookmarked = _a.bookmarked, resourceName = _a.resourceName, resourceType = _a.resourceType, accountName = _a.accountName, region = _a.region, dotMenuItems = _a.dotMenuItems, onClickBookmark = _a.onClickBookmark, _b = _a.showMoreInfoButton, showMoreInfoButton = _b === void 0 ? false : _b, onClickMoreInfo = _a.onClickMoreInfo, width = _a.width, style = _a.style;
    // Exclusive accessState styles for this component:
    var accessStateStyles = {
        granted: {
            borderColor: colors.gray[20],
            backgroundColor: colors.white
        }
    };
    var selectedAccessState = accessState;
    var selectedServiceType = serviceType;
    var componentStyle = function () { return (__assign({ backgroundColor: accessStateStyles[selectedAccessState].backgroundColor, color: colors.gray[90], fontFamily: theme.font.body.regular.fontFamily, fontSize: theme.font.body.regular.fontSize, borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: accessStateStyles[selectedAccessState].borderColor, paddingTop: '16px', paddingBottom: '16px', paddingRight: '16px', paddingLeft: '24px', width: width || '240px', minWidth: '280px', maxWidth: width }, style)); };
    return (React.createElement(View, { style: componentStyle(), padding: '16px 16px 16px 24px' },
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
            customIcon ?
                React.createElement("div", null, customIcon)
                :
                    React.createElement("img", { src: ServiceIcons[selectedServiceType] }),
            React.createElement(IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: faBookmark, onClick: onClickBookmark })),
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '14px', width: '100%' } },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' } },
                React.createElement("div", { style: __assign(__assign({}, theme.font.title.regular), { marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }) }, resourceName),
                React.createElement("div", { style: __assign(__assign({}, theme.font.body.regular), { marginBottom: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }) }, resourceType),
                React.createElement("div", { style: theme.font.caption.regular },
                    accountName,
                    " / ",
                    region))),
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
            showMoreInfoButton ?
                React.createElement(Button, { variant: "gray", size: 'sm', onClick: onClickMoreInfo, height: '36px' }, "More Info")
                :
                    React.createElement("div", null),
            React.createElement("div", { style: { display: 'flex', gap: '8px', alignItems: 'center' } },
                React.createElement(Label, { variant: 'success', text: 'Granted', iconButton: faBadgeCheck, iconPosition: 'end', style: {
                        height: '30px'
                    } }),
                React.createElement(DropDownButton, { size: "sm", variant: "grayBlue", menuItems: dotMenuItems, hasDownArrow: false })))));
};
