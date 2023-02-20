"use strict";
exports.__esModule = true;
exports.SummaryResourceCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var IconButton_1 = require("./IconButton");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var SummaryResourceCard = function (_a) {
    var resourceIcon = _a.resourceIcon, resourceName = _a.resourceName, resourceType = _a.resourceType, accountName = _a.accountName, region = _a.region, children = _a.children, _b = _a.isEditButtonEnabled, isEditButtonEnabled = _b === void 0 ? true : _b, _c = _a.isDeleteButtonEnabled, isDeleteButtonEnabled = _c === void 0 ? true : _c, onClickEditButton = _a.onClickEditButton, onClickDeleteButton = _a.onClickDeleteButton, props = tslib_1.__rest(_a, ["resourceIcon", "resourceName", "resourceType", "accountName", "region", "children", "isEditButtonEnabled", "isDeleteButtonEnabled", "onClickEditButton", "onClickDeleteButton"]);
    /**
     * TODO:
     * Roles children implementation and story
     * Edit and Delete buttons
     * Responsiveness, set min-max width of the whole component
     * Set max height of the component
     * Set overflow for the children roles
     * Set ellipsis no-wrap for resourceName and resourceTye
     */
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            width: '688px',
            minHeight: '88px',
            border: "1px solid ".concat(theme_1.colors.gray[20]),
            borderRadius: '4px'
        } }, props),
        react_1["default"].createElement("div", { style: { display: 'flex', gap: '12px' } },
            react_1["default"].createElement("div", { style: { width: '34px', fontSize: '10px', textAlign: 'center' } }, resourceIcon),
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column'
                } },
                react_1["default"].createElement(Typography_1.Typography, { variant: 'title-regular' }, resourceName),
                react_1["default"].createElement(Typography_1.Typography, { variant: 'body-regular' }, resourceType),
                react_1["default"].createElement(Typography_1.Typography, { variant: 'caption-regular' }, "".concat(accountName, " / ").concat(region)))),
        react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'flex-end', gap: '14px' } },
            react_1["default"].createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '4px' } }, children),
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '4px'
                } },
                react_1["default"].createElement(IconButton_1.IconButton, { variant: 'gray', icon: pro_solid_svg_icons_1.faTrash, disabled: !isEditButtonEnabled, onClick: isEditButtonEnabled ? onClickEditButton : undefined }),
                react_1["default"].createElement(IconButton_1.IconButton, { variant: 'gray', icon: pro_solid_svg_icons_1.faPen, disabled: !isDeleteButtonEnabled, onClick: isDeleteButtonEnabled ? onClickDeleteButton : undefined })))));
};
exports.SummaryResourceCard = SummaryResourceCard;
