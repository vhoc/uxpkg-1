"use strict";
exports.__esModule = true;
exports.Primary = void 0;
var SideMenuItem_1 = require("../../components/elements/SideMenuItem");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
exports["default"] = {
    title: 'Elements/Menu Items/SideMenuItem',
    component: SideMenuItem_1.SideMenuItem
};
exports.Primary = {
    args: {
        icon: sharp_solid_svg_icons_1.faBookmark,
        itemType: 'item',
        variant: 'primary',
        collapsed: false,
        selected: false,
        disabled: false,
        label: 'Label'
    }
};
fontawesome_svg_core_1.library.add(sharp_solid_svg_icons_1.faBookmark);
