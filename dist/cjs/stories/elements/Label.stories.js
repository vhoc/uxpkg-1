"use strict";
exports.__esModule = true;
exports.WithIcon = exports.Warning = exports.Danger = exports.Success = exports.Gray = exports.GrayBlue = void 0;
var Label_1 = require("../../components/elements/Label");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
exports["default"] = {
    title: 'Elements/Labels/Label',
    component: Label_1.Label
};
exports.GrayBlue = {
    args: {
        variant: 'grayBlue',
        text: 'Label'
    }
};
exports.Gray = {
    args: {
        variant: 'gray',
        text: 'Label'
    }
};
exports.Success = {
    args: {
        variant: 'success',
        text: 'Label'
    }
};
exports.Danger = {
    args: {
        variant: 'danger',
        text: 'Label'
    }
};
exports.Warning = {
    args: {
        variant: 'warning',
        text: 'Label'
    }
};
exports.WithIcon = {
    args: {
        variant: 'grayBlue',
        text: 'Label with a button',
        iconButton: sharp_solid_svg_icons_1.faCircleMinus,
        onClick: function () { alert('Label button pressed!'); }
    }
};
fontawesome_svg_core_1.library.add(sharp_solid_svg_icons_1.faCircleMinus);
