"use strict";
exports.__esModule = true;
exports.WithRightIcon = exports.WithLeftIcon = exports.Success = exports.GrayRed = exports.GrayBlue = exports.Gray = exports.Primary = void 0;
var Button_1 = require("../../components/elements/Button");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
exports["default"] = {
    title: 'Elements/Buttons/Button',
    component: Button_1.Button
};
exports.Primary = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Default button'
    }
};
exports.Gray = {
    args: {
        variant: 'gray',
        size: 'sm',
        children: 'Gray button'
    }
};
exports.GrayBlue = {
    args: {
        variant: 'grayBlue',
        size: 'sm',
        children: 'GrayBlue button'
    }
};
exports.GrayRed = {
    args: {
        variant: 'grayRed',
        size: 'sm',
        children: 'GrayRed button'
    }
};
exports.Success = {
    args: {
        variant: 'success',
        size: 'sm',
        children: 'Success button'
    }
};
exports.WithLeftIcon = {
    args: {
        icon: pro_solid_svg_icons_1.faUsers,
        iconPosition: 'start',
        variant: 'grayBlue',
        size: 'sm',
        children: 'GrayBlue button',
        iconColor: '#A6ABB6'
    }
};
exports.WithRightIcon = {
    args: {
        icon: pro_solid_svg_icons_1.faUsers,
        iconPosition: 'end',
        variant: 'grayBlue',
        size: 'sm',
        children: 'GrayBlue button',
        iconColor: '#A6ABB6'
    }
};
fontawesome_svg_core_1.library.add(pro_solid_svg_icons_1.faUsers);
