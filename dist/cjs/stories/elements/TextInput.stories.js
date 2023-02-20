"use strict";
exports.__esModule = true;
exports.Default = void 0;
var TextInput_1 = require("../../components/elements/TextInput");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
exports["default"] = {
    title: 'elements/Inputs/TextInput',
    component: TextInput_1.TextInput
};
exports.Default = {
    args: {
        placeholder: 'Search',
        icon: sharp_solid_svg_icons_1.faMagnifyingGlass,
        iconPosition: 'start'
    }
};
fontawesome_svg_core_1.library.add(sharp_solid_svg_icons_1.faMagnifyingGlass);
