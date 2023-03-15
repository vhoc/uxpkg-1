"use strict";
exports.__esModule = true;
exports.SummaryResourceCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var IconButton_1 = require("./IconButton");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var styles_1 = require("@mui/material/styles");
var SummaryResourceCard = function (_a) {
    var resourceIcon = _a.resourceIcon, resourceName = _a.resourceName, resourceType = _a.resourceType, accountName = _a.accountName, region = _a.region, children = _a.children, _b = _a.actionButtons, actionButtons = _b === void 0 ? true : _b, _c = _a.isEditButtonEnabled, isEditButtonEnabled = _c === void 0 ? true : _c, _d = _a.isDeleteButtonEnabled, isDeleteButtonEnabled = _d === void 0 ? true : _d, onClickEditButton = _a.onClickEditButton, onClickDeleteButton = _a.onClickDeleteButton, style = _a.style;
    var MyDiv = (0, styles_1.styled)('div')({
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '4px'
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: theme_1.colors.gray[10],
            borderRadius: '3px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme_1.colors.gray[50],
            borderRadius: '3px'
        }
    });
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ backgroundColor: theme_1.colors.white, display: 'flex', justifyContent: 'space-between', padding: '16px', width: '100%', minWidth: '780px', minHeight: '88px', border: "1px solid ".concat(theme_1.colors.gray[20]), borderRadius: '4px' }, style) },
        react_1["default"].createElement("div", { style: { display: 'flex', gap: '12px', width: '50%' } },
            react_1["default"].createElement("div", { style: { width: '34px', fontSize: '10px', textAlign: 'center' } }, resourceIcon),
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'calc(100% - 40px)'
                } },
                react_1["default"].createElement(Typography_1.Typography, { variant: 'title-regular', style: {
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%',
                        textAlign: 'left'
                    } }, resourceName),
                react_1["default"].createElement(Typography_1.Typography, { variant: 'body-regular', style: {
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                        textAlign: 'left'
                    } }, resourceType),
                react_1["default"].createElement(Typography_1.Typography, { variant: 'caption-regular', style: {
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                        textAlign: 'left'
                    } }, "".concat(accountName, " / ").concat(region)))),
        react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'flex-end', gap: '14px' } },
            react_1["default"].createElement(MyDiv, { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    width: '280px',
                    maxHeight: '245px',
                    paddingRight: '4px',
                    overflowX: 'hidden'
                } }, children),
            actionButtons ?
                react_1["default"].createElement("div", { style: {
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '4px'
                    } },
                    react_1["default"].createElement(IconButton_1.IconButton, { variant: 'gray', icon: pro_solid_svg_icons_1.faTrash, disabled: !isDeleteButtonEnabled, onClick: isDeleteButtonEnabled ? onClickDeleteButton : undefined, style: {
                            color: !isDeleteButtonEnabled ? '#8d94a1' : '#545b71'
                        } }),
                    react_1["default"].createElement(IconButton_1.IconButton, { variant: 'gray', icon: pro_solid_svg_icons_1.faPen, disabled: !isEditButtonEnabled, onClick: isEditButtonEnabled ? onClickEditButton : undefined, style: {
                            color: !isEditButtonEnabled ? '#8d94a1' : '#545b71'
                        } }))
                :
                    react_1["default"].createElement("div", { style: {
                            width: '78px'
                        } }))));
};
exports.SummaryResourceCard = SummaryResourceCard;
