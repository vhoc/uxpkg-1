"use strict";
exports.__esModule = true;
exports.Primary = void 0;
var SideMenu_1 = require("../../components/elements/SideMenu");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
exports["default"] = {
    title: 'Composite/SideMenu',
    component: SideMenu_1.SideMenu
};
exports.Primary = {
    args: {
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
                icon: sharp_solid_svg_icons_1.faUsers,
                label: 'User groups',
                variant: 'primary'
            },
            {
                icon: sharp_solid_svg_icons_1.faLaptop,
                label: 'devices',
                variant: 'primary'
            },
            {
                icon: sharp_solid_svg_icons_1.faAddressCard,
                label: 'identity providers',
                variant: 'primary'
            },
            {
                itemType: 'section',
                label: 'cloud'
            },
            {
                icon: sharp_solid_svg_icons_1.faCloud,
                label: 'clouds',
                variant: 'primary'
            },
            {
                icon: sharp_solid_svg_icons_1.faLayerGroup,
                label: 'Targets',
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
fontawesome_svg_core_1.library.add(sharp_solid_svg_icons_1.faTasks, sharp_solid_svg_icons_1.faGauge, sharp_solid_svg_icons_1.faUser, sharp_solid_svg_icons_1.faUsers, sharp_solid_svg_icons_1.faLaptop, sharp_solid_svg_icons_1.faAddressCard, sharp_solid_svg_icons_1.faCloud, sharp_solid_svg_icons_1.faLayerGroup, sharp_solid_svg_icons_1.faWindowMaximize, sharp_solid_svg_icons_1.faTh);
