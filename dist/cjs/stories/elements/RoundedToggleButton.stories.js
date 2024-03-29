"use strict";
exports.__esModule = true;
exports.Default = void 0;
var RoundedToggleButton_1 = require("../../components/elements/RoundedToggleButton");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
exports["default"] = {
    title: 'elements/Buttons/RoundedToggleButton',
    component: RoundedToggleButton_1.RoundedToggleButton
};
exports.Default = {
    args: {
        active: false,
        assigned: false,
        icon: sharp_solid_svg_icons_1.faCaretUp,
        label: 'More',
        onClick: function () { alert("Button pressed, from here you can handle the active state."); }
    }
};
fontawesome_svg_core_1.library.add(sharp_solid_svg_icons_1.faCaretUp, sharp_solid_svg_icons_1.faCaretDown);
