"use strict";
exports.__esModule = true;
exports.ResourceCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var View_1 = require("../layout/View");
var IconButton_1 = require("./IconButton");
var DropDownButton_1 = require("./DropDownButton");
var Label_1 = require("./Label");
var Button_1 = require("./Button");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var theme_1 = require("../../theme");
var ResourceCard = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, accessState = _a.accessState, resourceIcon = _a.resourceIcon, bookmarked = _a.bookmarked, _c = _a.forPolicy, forPolicy = _c === void 0 ? false : _c, resourceName = _a.resourceName, resourceType = _a.resourceType, accountName = _a.accountName, region = _a.region, dropDownItems = _a.dropDownItems, dotMenuItems = _a.dotMenuItems, onBookmarkClick = _a.onBookmarkClick, _d = _a.showMoreInfoButton, showMoreInfoButton = _d === void 0 ? true : _d, onMoreInfoClick = _a.onMoreInfoClick, onAccessClick = _a.onAccessClick, width = _a.width, style = _a.style;
    // Exclusive accessState styles for this component:
    var accessStateStyles = {
        access: {
            borderColor: theme_1.colors.gray[20],
            backgroundColor: theme_1.colors.white
        },
        requested: {
            borderColor: theme_1.colors.yellow[50],
            backgroundColor: theme_1.colors.white
        },
        waiting: {
            borderColor: theme_1.colors.yellow[50],
            backgroundColor: theme_1.colors.white
        },
        signIn: {
            borderColor: theme_1.colors.blue[30],
            backgroundColor: theme_1.colors.blue[5]
        }
    };
    var selectedAccessState = accessState;
    var componentStyle = function () { return (tslib_1.__assign({ backgroundColor: accessStateStyles[selectedAccessState].backgroundColor, color: theme_1.colors.gray[90], fontFamily: theme_1.theme.font.body.regular.fontFamily, fontSize: theme_1.theme.font.body.regular.fontSize, borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: accessStateStyles[selectedAccessState].borderColor, paddingTop: '16px', paddingBottom: '16px', paddingRight: '16px', paddingLeft: '24px', width: width || '240px', minWidth: '280px', maxWidth: width }, style)); };
    return (react_1["default"].createElement(View_1.View, { style: componentStyle(), 
        //width={'304px'}
        padding: '16px 16px 16px 24px' },
        accessState !== 'requested' ?
            accessState === 'waiting' ?
                react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
                    react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'flex-start', gap: '8px' } },
                        react_1["default"].createElement("div", null, resourceIcon),
                        react_1["default"].createElement(Label_1.Label, { variant: "warning", text: "Awaiting for approval" })),
                    react_1["default"].createElement(IconButton_1.IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: sharp_solid_svg_icons_1.faBookmark, onClick: onBookmarkClick }))
                :
                    react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
                        react_1["default"].createElement("div", null, resourceIcon),
                        react_1["default"].createElement(IconButton_1.IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: sharp_solid_svg_icons_1.faBookmark, onClick: onBookmarkClick }))
            :
                react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
                    react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'flex-start', gap: '8px' } },
                        react_1["default"].createElement("div", null, resourceIcon),
                        react_1["default"].createElement(Label_1.Label, { variant: "warning", text: "Request in progress" })),
                    react_1["default"].createElement(IconButton_1.IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: sharp_solid_svg_icons_1.faBookmark, onClick: onBookmarkClick })),
        react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '14px', width: '100%' } },
            react_1["default"].createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' } },
                react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.title.regular), { marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }) }, resourceName),
                react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.body.regular), { marginBottom: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }) }, resourceType),
                react_1["default"].createElement("div", { style: theme_1.theme.font.caption.regular },
                    accountName,
                    " / ",
                    region))),
        accessState !== 'signIn' ?
            react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                showMoreInfoButton ?
                    react_1["default"].createElement(Button_1.Button, { variant: "gray", onClick: onMoreInfoClick }, "More Info")
                    :
                        react_1["default"].createElement("div", null),
                react_1["default"].createElement(Button_1.Button, { variant: "grayBlue", onClick: onAccessClick }, forPolicy ? 'Policy' : 'Request'))
            :
                react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(Button_1.Button, { variant: "gray" }, "More Info")),
                    react_1["default"].createElement("div", { style: { display: 'flex', gap: '8px' } },
                        (dropDownItems && (dropDownItems === null || dropDownItems === void 0 ? void 0 : dropDownItems.length) <= 1 && !dropDownItems[0].submenu) ?
                            react_1["default"].createElement(Button_1.Button, { variant: "grayBlue", onClick: onAccessClick }, forPolicy ? 'Policy' : 'Sign In')
                            :
                                react_1["default"].createElement(DropDownButton_1.DropDownButton, { size: "sm", variant: "grayBlue", menuItems: dropDownItems }),
                        react_1["default"].createElement(DropDownButton_1.DropDownButton, { size: "sm", variant: "grayBlue", menuItems: dotMenuItems, hasDownArrow: false })))));
};
exports.ResourceCard = ResourceCard;
