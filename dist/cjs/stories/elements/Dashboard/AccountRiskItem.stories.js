"use strict";
exports.__esModule = true;
exports.CustomIcon = exports.Default = void 0;
var tslib_1 = require("tslib");
var AccountRiskItem_1 = require("../../../components/elements/Dashboard/AccountRiskItem");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
var react_1 = tslib_1.__importDefault(require("react"));
exports["default"] = {
    title: 'dashboard/AccountRiskItems/AccountRiskItem',
    component: AccountRiskItem_1.AccountRiskItem
};
exports.Default = {
    args: {
        accountProvider: 'aws',
        title: 'AWS Account 1',
        caption: '9203180298130',
        riskLevel: 'high',
        style: {
            width: '326px'
        }
    }
};
exports.CustomIcon = {
    args: {
        //accountProvider: 'aws',
        icon: react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_regular_svg_icons_1.faAcorn }),
        title: 'AWS Account 1',
        caption: '9203180298130',
        riskLevel: 'high',
        style: {
            width: '326px'
        }
    }
};
fontawesome_svg_core_1.library.add(pro_regular_svg_icons_1.faAcorn);
