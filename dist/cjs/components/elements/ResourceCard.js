"use strict";
exports.__esModule = true;
exports.ResourceCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var View_1 = require("../layout/View");
var IconButton_1 = require("./IconButton");
var DropDownButton_1 = require("./DropDownButton");
var Label_1 = require("./Label");
var Button_1 = require("./Button");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var theme_1 = require("../../theme");
var ResourceCard = function (_a) {
    var accessState = _a.accessState, resourceIcon = _a.resourceIcon, bookmarked = _a.bookmarked, _b = _a.forPolicy, forPolicy = _b === void 0 ? false : _b, resourceName = _a.resourceName, resourceType = _a.resourceType, accountName = _a.accountName, region = _a.region, dropDownItems = _a.dropDownItems, dotMenuItems = _a.dotMenuItems, onClickBookmark = _a.onClickBookmark, _c = _a.showMoreInfoButton, showMoreInfoButton = _c === void 0 ? true : _c, onClickMoreInfo = _a.onClickMoreInfo, onClickPolicy = _a.onClickPolicy, onClickRequest = _a.onClickRequest, _d = _a.onClickSingleSignIn, onClickSingleSignIn = _d === void 0 ? undefined : _d, width = _a.width, style = _a.style;
    var _e = (0, react_1.useState)(null), ButtonSet = _e[0], setButtonSet = _e[1];
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
    (0, react_1.useEffect)(function () {
        switch (accessState) {
            case 'access':
                setButtonSet(function () {
                    return (react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                        showMoreInfoButton ?
                            react_1["default"].createElement(Button_1.Button, { variant: "gray", onClick: onClickMoreInfo }, "More Info")
                            :
                                react_1["default"].createElement("div", null),
                        forPolicy ?
                            react_1["default"].createElement(Button_1.Button, { variant: "grayBlue", onClick: onClickPolicy }, "Policy")
                            :
                                react_1["default"].createElement(Button_1.Button, { variant: "grayBlue", onClick: onClickRequest }, "Request")));
                });
                break;
            /** */
            case 'requested':
                setButtonSet(function () {
                    return (react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                        showMoreInfoButton ?
                            react_1["default"].createElement(Button_1.Button, { variant: "gray", onClick: onClickMoreInfo }, "More Info")
                            :
                                react_1["default"].createElement("div", null),
                        forPolicy ?
                            react_1["default"].createElement(Button_1.Button, { variant: "grayBlue", onClick: onClickPolicy }, "Policy")
                            :
                                react_1["default"].createElement(Button_1.Button, { variant: "grayBlue", onClick: onClickRequest }, "Request")));
                });
                break;
            /** */
            case 'signIn':
                setButtonSet(function () {
                    return (react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                        showMoreInfoButton ?
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(Button_1.Button, { variant: "gray" }, "More Info"))
                            :
                                null,
                        react_1["default"].createElement("div", { style: { display: 'flex', gap: '8px' } },
                            (dropDownItems && (dropDownItems === null || dropDownItems === void 0 ? void 0 : dropDownItems.length) <= 1 && !dropDownItems[0].submenu) || onClickSingleSignIn ?
                                accessState === 'signIn' ?
                                    react_1["default"].createElement(Button_1.Button, { variant: "grayBlue", onClick: onClickSingleSignIn }, "Sign In")
                                    :
                                        null
                                :
                                    react_1["default"].createElement(DropDownButton_1.DropDownButton, { size: "sm", variant: "grayBlue", menuItems: dropDownItems }),
                            react_1["default"].createElement(DropDownButton_1.DropDownButton, { size: "sm", variant: "grayBlue", menuItems: dotMenuItems, hasDownArrow: false }))));
                });
                break;
            /** */
            case 'waiting':
                setButtonSet(function () {
                    return (react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                        showMoreInfoButton ?
                            react_1["default"].createElement(Button_1.Button, { variant: "gray", onClick: onClickMoreInfo }, "More Info")
                            :
                                react_1["default"].createElement("div", null),
                        forPolicy ?
                            react_1["default"].createElement(Button_1.Button, { variant: "grayBlue", onClick: onClickPolicy }, "Policy")
                            :
                                react_1["default"].createElement(Button_1.Button, { variant: "grayBlue", onClick: onClickRequest }, "Request")));
                });
                break;
            default:
                setButtonSet(null);
                break;
        }
    }, [accessState, showMoreInfoButton, forPolicy, onClickMoreInfo, onClickPolicy, onClickRequest, dotMenuItems, onClickSingleSignIn, dropDownItems]);
    return (react_1["default"].createElement(View_1.View, { style: componentStyle(), padding: '16px 16px 16px 24px' },
        accessState !== 'requested' ?
            accessState === 'waiting' ?
                react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
                    react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'flex-start', gap: '8px' } },
                        react_1["default"].createElement("div", null, resourceIcon),
                        react_1["default"].createElement(Label_1.Label, { variant: "warning", text: "Awaiting for approval" })),
                    react_1["default"].createElement(IconButton_1.IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: sharp_solid_svg_icons_1.faBookmark, onClick: onClickBookmark }))
                :
                    react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
                        react_1["default"].createElement("div", null, resourceIcon),
                        react_1["default"].createElement(IconButton_1.IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: sharp_solid_svg_icons_1.faBookmark, onClick: onClickBookmark }))
            :
                react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
                    react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'flex-start', gap: '8px' } },
                        react_1["default"].createElement("div", null, resourceIcon),
                        react_1["default"].createElement(Label_1.Label, { variant: "warning", text: "Request in progress" })),
                    react_1["default"].createElement(IconButton_1.IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: sharp_solid_svg_icons_1.faBookmark, onClick: onClickBookmark })),
        react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '14px', width: '100%' } },
            react_1["default"].createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' } },
                react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.title.regular), { marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }) }, resourceName),
                react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.body.regular), { marginBottom: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }) }, resourceType),
                react_1["default"].createElement("div", { style: theme_1.theme.font.caption.regular },
                    accountName,
                    " ",
                    region ? "/ ".concat(region) : null))),
        (ButtonSet)));
};
exports.ResourceCard = ResourceCard;
