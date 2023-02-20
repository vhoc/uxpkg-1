import { __assign, __rest } from "tslib";
import React from "react";
import { colors } from "../../theme";
import { Typography } from "./Typography";
import { IconButton } from "./IconButton";
import { faTrash, faPen } from "@fortawesome/pro-solid-svg-icons";
export var SummaryResourceCard = function (_a) {
    var resourceIcon = _a.resourceIcon, resourceName = _a.resourceName, resourceType = _a.resourceType, accountName = _a.accountName, region = _a.region, children = _a.children, _b = _a.isEditButtonEnabled, isEditButtonEnabled = _b === void 0 ? true : _b, _c = _a.isDeleteButtonEnabled, isDeleteButtonEnabled = _c === void 0 ? true : _c, onClickEditButton = _a.onClickEditButton, onClickDeleteButton = _a.onClickDeleteButton, props = __rest(_a, ["resourceIcon", "resourceName", "resourceType", "accountName", "region", "children", "isEditButtonEnabled", "isDeleteButtonEnabled", "onClickEditButton", "onClickDeleteButton"]);
    /**
     * TODO:
     * Roles children implementation and story
     * Edit and Delete buttons
     * Responsiveness, set min-max width of the whole component
     * Set max height of the component
     * Set overflow for the children roles
     * Set ellipsis no-wrap for resourceName and resourceTye
     */
    return (React.createElement("div", __assign({ style: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            width: '688px',
            minHeight: '88px',
            border: "1px solid ".concat(colors.gray[20]),
            borderRadius: '4px'
        } }, props),
        React.createElement("div", { style: { display: 'flex', gap: '12px' } },
            React.createElement("div", { style: { width: '34px', fontSize: '10px', textAlign: 'center' } }, resourceIcon),
            React.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column'
                } },
                React.createElement(Typography, { variant: 'title-regular' }, resourceName),
                React.createElement(Typography, { variant: 'body-regular' }, resourceType),
                React.createElement(Typography, { variant: 'caption-regular' }, "".concat(accountName, " / ").concat(region)))),
        React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end', gap: '14px' } },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '4px' } }, children),
            React.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '4px'
                } },
                React.createElement(IconButton, { variant: 'gray', icon: faTrash, disabled: !isEditButtonEnabled, onClick: isEditButtonEnabled ? onClickEditButton : undefined }),
                React.createElement(IconButton, { variant: 'gray', icon: faPen, disabled: !isDeleteButtonEnabled, onClick: isDeleteButtonEnabled ? onClickDeleteButton : undefined })))));
};
