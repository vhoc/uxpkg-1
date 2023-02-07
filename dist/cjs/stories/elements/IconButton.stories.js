"use strict";
exports.__esModule = true;
exports.GrayRed = exports.GrayBlue = exports.Gray = exports.Tertiary = exports.Primary = void 0;
var IconButton_1 = require("../../components/elements/IconButton");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
exports["default"] = {
    title: 'Elements/Buttons/IconButton',
    component: IconButton_1.IconButton
};
exports.Primary = {
    args: {
        icon: sharp_solid_svg_icons_1.faBookmark,
        variant: 'primary',
        size: 'sm'
    }
};
exports.Tertiary = {
    args: {
        icon: sharp_solid_svg_icons_1.faBookmark,
        variant: 'tertiary',
        size: 'sm'
    }
};
exports.Gray = {
    args: {
        icon: sharp_solid_svg_icons_1.faBookmark,
        variant: 'gray',
        size: 'sm'
    }
};
exports.GrayBlue = {
    args: {
        icon: sharp_solid_svg_icons_1.faBookmark,
        variant: 'grayBlue',
        size: 'sm'
    }
};
exports.GrayRed = {
    args: {
        icon: sharp_solid_svg_icons_1.faBookmark,
        variant: 'grayRed',
        size: 'sm'
    }
};
fontawesome_svg_core_1.library.add(sharp_solid_svg_icons_1.faBookmark);
