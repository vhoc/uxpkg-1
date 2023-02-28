"use strict";
exports.__esModule = true;
exports.WithText = exports.WithALabel = exports.Default = void 0;
var TextInput_1 = require("../../components/elements/TextInput");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
exports["default"] = {
    title: 'elements/Inputs/TextInput',
    component: TextInput_1.TextInput
};
exports.Default = {
    args: {
        placeholder: 'Search',
        icon: sharp_solid_svg_icons_1.faMagnifyingGlass,
        iconPosition: 'start',
        endIconOnClick: function () { return alert("X button pressed."); }
    }
};
exports.WithALabel = {
    args: {
        label: 'Title',
        placeholder: 'Search',
        icon: sharp_solid_svg_icons_1.faMagnifyingGlass,
        iconPosition: 'start',
        endIconOnClick: function () { return alert("X button pressed."); }
    }
};
exports.WithText = {
    args: {
        placeholder: 'Search',
        icon: sharp_solid_svg_icons_1.faMagnifyingGlass,
        iconPosition: 'end',
        value: 'This is a sample text!',
        endIconOnClick: function () { return alert("X button pressed."); }
    }
};
fontawesome_svg_core_1.library.add(sharp_solid_svg_icons_1.faMagnifyingGlass, pro_solid_svg_icons_1.faCircleXmark);
