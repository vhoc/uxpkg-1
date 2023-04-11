"use strict";
exports.__esModule = true;
exports.Expanded = exports.Collapsed = void 0;
var SideMenu_1 = require("../../components/elements/SideMenu");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
//import { faUsers } from '@fortawesome/sharp-solid-svg-icons'
//import { faUsers } from '@fortawesome/free-solid-svg-icons'
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
//import { faIdCard } from '@fortawesome/pro-regular-svg-icons'
//import { faIdCard } from '@fortawesome/pro-solid-svg-icons'
//import { faIdCard } from '@fortawesome/free-solid-svg-icons'
//import { faIdCard } from '@fortawesome/pro-duotone-svg-icons'
//import { faIdCard } from '@fortawesome/pro-light-svg-icons'
var pro_regular_svg_icons_2 = require("@fortawesome/pro-regular-svg-icons");
var pro_regular_svg_icons_3 = require("@fortawesome/pro-regular-svg-icons");
var pro_regular_svg_icons_4 = require("@fortawesome/pro-regular-svg-icons");
exports["default"] = {
    title: 'Composite/SideMenu',
    component: SideMenu_1.SideMenu
};
exports.Collapsed = {
    args: {
        style: {
            height: '1000px'
        },
        variant: 'primary',
        menuItems: [
            {
                icon: sharp_solid_svg_icons_1.faTasks,
                label: 'Getting started',
                variant: 'primary'
            },
            {
                icon: sharp_solid_svg_icons_1.faGauge,
                label: 'dashboard',
                variant: 'primary',
                selected: true
            },
            {
                itemType: 'section',
                label: 'directory'
            },
            {
                icon: sharp_solid_svg_icons_1.faUser,
                label: 'Users',
                variant: 'primary',
                onClick: function () { return alert('Users item clicked!'); }
            },
            {
                icon: pro_regular_svg_icons_1.faUsers,
                label: 'User groups',
                variant: 'primary'
            },
            {
                icon: sharp_solid_svg_icons_1.faLaptop,
                label: 'devices',
                variant: 'primary'
            },
            {
                icon: pro_regular_svg_icons_2.faIdCard,
                label: 'identity providers',
                variant: 'primary'
            },
            {
                itemType: 'section',
                label: 'cloud'
            },
            {
                icon: pro_regular_svg_icons_3.faCodePullRequestClosed,
                label: 'Filters',
                variant: 'primary'
            },
            {
                icon: pro_regular_svg_icons_4.faChartNetwork,
                label: 'Integrations',
                variant: 'primary'
            },
            {
                icon: sharp_solid_svg_icons_1.faWindowMaximize,
                label: 'resources',
                variant: 'primary'
            },
            {
                icon: sharp_solid_svg_icons_1.faTh,
                label: 'applications',
                variant: 'primary'
            },
        ]
    }
};
exports.Expanded = {
    args: {
        variant: 'primary',
        collapsed: false,
        menuItems: [
            {
                icon: sharp_solid_svg_icons_1.faTasks,
                label: 'Getting started',
                variant: 'primary'
            },
            {
                icon: sharp_solid_svg_icons_1.faGauge,
                label: 'dashboard',
                variant: 'primary',
                selected: true
            },
            {
                itemType: 'section',
                label: 'directory'
            },
            {
                icon: sharp_solid_svg_icons_1.faUser,
                label: 'Users',
                variant: 'primary',
                onClick: function () { return alert('Users item clicked!'); }
            },
            {
                icon: pro_regular_svg_icons_1.faUsers,
                label: 'User groups',
                variant: 'primary'
            },
            {
                icon: sharp_solid_svg_icons_1.faLaptop,
                label: 'devices',
                variant: 'primary'
            },
            {
                icon: pro_regular_svg_icons_2.faIdCard,
                label: 'identity providers',
                variant: 'primary'
            },
            {
                itemType: 'section',
                label: 'cloud'
            },
            {
                icon: pro_regular_svg_icons_3.faCodePullRequestClosed,
                label: 'Filters',
                variant: 'primary'
            },
            {
                icon: pro_regular_svg_icons_4.faChartNetwork,
                label: 'Integrations',
                variant: 'primary'
            },
            {
                icon: sharp_solid_svg_icons_1.faWindowMaximize,
                label: 'resources',
                variant: 'primary'
            },
            {
                icon: sharp_solid_svg_icons_1.faTh,
                label: 'applications',
                variant: 'primary'
            },
        ]
    }
};
fontawesome_svg_core_1.library.add(sharp_solid_svg_icons_1.faTasks, sharp_solid_svg_icons_1.faGauge, sharp_solid_svg_icons_1.faUser, pro_regular_svg_icons_1.faUsers, sharp_solid_svg_icons_1.faLaptop, pro_regular_svg_icons_2.faIdCard, sharp_solid_svg_icons_1.faCloud, sharp_solid_svg_icons_1.faLayerGroup, sharp_solid_svg_icons_1.faWindowMaximize, sharp_solid_svg_icons_1.faTh, pro_regular_svg_icons_4.faChartNetwork);
