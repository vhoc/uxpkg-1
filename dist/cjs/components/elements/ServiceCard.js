"use strict";
exports.__esModule = true;
exports.ServiceCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var View_1 = require("../layout/View");
var IconButton_1 = require("./IconButton");
var DropDownButton_1 = require("./DropDownButton");
var Label_1 = require("./Label");
var Button_1 = require("./Button");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var theme_1 = require("../../theme");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var ServiceIcons_1 = require("../graphical/ServiceIcons");
var ServiceCard = function (_a) {
    var serviceType = _a.serviceType, accessState = _a.accessState, customIcon = _a.customIcon, bookmarked = _a.bookmarked, resourceName = _a.resourceName, resourceType = _a.resourceType, accountName = _a.accountName, region = _a.region, dotMenuItems = _a.dotMenuItems, onClickBookmark = _a.onClickBookmark, _b = _a.showMoreInfoButton, showMoreInfoButton = _b === void 0 ? false : _b, onClickMoreInfo = _a.onClickMoreInfo, width = _a.width, style = _a.style;
    // Exclusive accessState styles for this component:
    var accessStateStyles = {
        granted: {
            borderColor: theme_1.colors.gray[20],
            backgroundColor: theme_1.colors.white
        }
    };
    var selectedAccessState = accessState;
    var selectedServiceType = serviceType;
    var componentStyle = function () { return (tslib_1.__assign({ backgroundColor: accessStateStyles[selectedAccessState].backgroundColor, color: theme_1.colors.gray[90], fontFamily: theme_1.theme.font.body.regular.fontFamily, fontSize: theme_1.theme.font.body.regular.fontSize, borderRadius: '4px', borderWidth: '1px', borderStyle: 'solid', borderColor: accessStateStyles[selectedAccessState].borderColor, paddingTop: '16px', paddingBottom: '16px', paddingRight: '16px', paddingLeft: '24px', width: width || '240px', minWidth: '280px', maxWidth: width }, style)); };
    return (react_1["default"].createElement(View_1.View, { style: componentStyle(), padding: '16px 16px 16px 24px' },
        react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '16px' } },
            customIcon ?
                react_1["default"].createElement("div", null, customIcon)
                :
                    react_1["default"].createElement("img", { src: ServiceIcons_1.ServiceIcons[selectedServiceType] }),
            react_1["default"].createElement(IconButton_1.IconButton, { variant: bookmarked ? 'grayBlue' : 'tertiary', icon: sharp_solid_svg_icons_1.faBookmark, onClick: onClickBookmark })),
        react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '14px', width: '100%' } },
            react_1["default"].createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' } },
                react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.title.regular), { marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }) }, resourceName),
                react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.body.regular), { marginBottom: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }) }, resourceType),
                react_1["default"].createElement("div", { style: theme_1.theme.font.caption.regular },
                    accountName,
                    " / ",
                    region))),
        react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
            showMoreInfoButton ?
                react_1["default"].createElement(Button_1.Button, { variant: "gray", size: 'sm', onClick: onClickMoreInfo, height: '36px' }, "More Info")
                :
                    react_1["default"].createElement("div", null),
            react_1["default"].createElement("div", { style: { display: 'flex', gap: '8px', alignItems: 'center' } },
                react_1["default"].createElement(Label_1.Label, { variant: 'success', text: 'Granted', iconButton: pro_solid_svg_icons_1.faBadgeCheck, iconPosition: 'end', style: {
                        height: '30px'
                    } }),
                react_1["default"].createElement(DropDownButton_1.DropDownButton, { size: "sm", variant: "grayBlue", menuItems: dotMenuItems, hasDownArrow: false })))));
};
exports.ServiceCard = ServiceCard;
