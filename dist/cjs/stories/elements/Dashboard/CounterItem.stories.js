"use strict";
exports.__esModule = true;
exports.FontAwesome = exports.Azure = exports.GCP = exports.AWS = void 0;
var tslib_1 = require("tslib");
var CounterItem_1 = require("../../../components/elements/Dashboard/CounterItem");
var react_1 = tslib_1.__importDefault(require("react"));
var CloudIcon_1 = require("../../../components/graphical/CloudIcon");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
exports["default"] = {
    title: 'dashboard/CountersCard/CounterItem',
    component: CounterItem_1.CounterItem
};
exports.AWS = {
    args: {
        element: react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: 'aws' }),
        count: 3
    }
};
exports.GCP = {
    args: {
        element: react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: 'gcp' }),
        count: 4
    }
};
exports.Azure = {
    args: {
        element: react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: 'azure' }),
        count: 5
    }
};
exports.FontAwesome = {
    args: {
        element: react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_regular_svg_icons_1.faCloud }),
        count: 3
    }
};
fontawesome_svg_core_1.library.add(pro_regular_svg_icons_1.faCloud);
