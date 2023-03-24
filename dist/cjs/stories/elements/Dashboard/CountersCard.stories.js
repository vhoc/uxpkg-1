"use strict";
exports.__esModule = true;
exports.Mini = exports.Users = exports.Accounts = void 0;
var tslib_1 = require("tslib");
var CountersCard_1 = require("../../../components/elements/Dashboard/CountersCard");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var CloudIcon_1 = require("../../../components/graphical/CloudIcon");
var react_1 = tslib_1.__importDefault(require("react"));
exports["default"] = {
    title: 'dashboard/CountersCard/CountersCard',
    component: CountersCard_1.CountersCard
};
exports.Accounts = {
    args: {
        type: 'simple',
        icon: pro_regular_svg_icons_1.faCloud,
        title: 'Accounts',
        counterItems: [
            {
                element: react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: 'aws' }),
                count: 3
            },
            {
                element: react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: 'gcp' }),
                count: 3
            },
            {
                element: react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: 'azure' }),
                count: 3
            },
        ]
    }
};
exports.Users = {
    args: {
        type: 'percent-bar',
        icon: pro_regular_svg_icons_1.faCloud,
        title: 'Users',
        data: [
            {
                risk: '24',
                'Users': 'Users',
                value: 24
            },
            {
                risk: '40',
                'Users': 'Users',
                value: 40
            },
            {
                risk: '27',
                'Users': 'Users',
                value: 27
            },
            {
                risk: '3',
                'Users': 'Users',
                value: 3
            },
        ]
    }
};
exports.Mini = {
    args: {
        type: 'mini',
        icon: pro_regular_svg_icons_1.faUser,
        title: '123',
        content: 'Service Identities'
    }
};
fontawesome_svg_core_1.library.add(pro_regular_svg_icons_1.faCloud);
fontawesome_svg_core_1.library.add(pro_regular_svg_icons_1.faUser);
