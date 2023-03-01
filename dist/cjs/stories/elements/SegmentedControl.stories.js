"use strict";
exports.__esModule = true;
exports.Default = void 0;
var SegmentedControl_1 = require("../../components/elements/SegmentedControl");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
exports["default"] = {
    title: 'Composite/SegmentedControl',
    component: SegmentedControl_1.SegmentedControl
};
exports.Default = {
    args: {
        multiSelect: false,
        ariaLabel: 'grid',
        items: [
            {
                value: 'table',
                ariaLabel: 'mode-table',
                icon: pro_solid_svg_icons_1.faTable,
                selected: true
            },
            {
                value: 'grid',
                ariaLabel: 'mode-grid',
                icon: pro_solid_svg_icons_1.faGrid,
                selected: false
            },
        ]
    }
};
fontawesome_svg_core_1.library.add(pro_solid_svg_icons_1.faTable, pro_solid_svg_icons_1.faGrid);
