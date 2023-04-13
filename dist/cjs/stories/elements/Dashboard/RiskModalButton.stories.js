"use strict";
exports.__esModule = true;
exports.FontAwesome = exports.Azure = exports.GCP = exports.AWS = exports.Private = exports.Default = void 0;
var tslib_1 = require("tslib");
var RiskModalButton_1 = require("../../../components/elements/Dashboard/RiskModalButton");
var CloudIcon_1 = require("../../../components/graphical/CloudIcon");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
var react_1 = tslib_1.__importDefault(require("react"));
exports["default"] = {
    title: 'dashboard/RiskModalButton',
    component: RiskModalButton_1.RiskModalButton
};
exports.Default = {
    args: {
        icon: react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: 'private' }),
        title: 'Identity Summary',
        riskLevel: 'high'
    }
};
exports.Private = {
    args: {
        icon: react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: 'private' }),
        title: 'Identity Summary',
        riskLevel: 'high'
    }
};
exports.AWS = {
    args: {
        icon: react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: 'aws' }),
        title: 'AWS account',
        riskLevel: 'low'
    }
};
exports.GCP = {
    args: {
        icon: react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: 'gcp' }),
        title: 'GCP account',
        riskLevel: 'medium'
    }
};
exports.Azure = {
    args: {
        icon: react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: 'azure' }),
        title: 'Azure account',
        riskLevel: 'critical'
    }
};
exports.FontAwesome = {
    args: {
        icon: react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_regular_svg_icons_1.faYinYang }),
        title: 'Custom',
        riskLevel: 'high'
    }
};
