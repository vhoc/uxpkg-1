"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var SegmentedControl_1 = tslib_1.__importDefault(require("../../components/elements/SegmentedControl"));
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
//import React from "react";
exports["default"] = {
    title: 'Composite/SegmentedControl',
    component: SegmentedControl_1["default"]
};
exports.Default = {
    args: {
        multiSelect: false,
        ariaLabel: 'cloud-service',
        items: [
            {
                value: 'amazon',
                ariaLabel: 'cloud-service-amazon',
                icon: free_brands_svg_icons_1.faAmazon
            },
            {
                value: 'google',
                ariaLabel: 'cloud-service-google',
                icon: free_brands_svg_icons_1.faGoogle
            },
            {
                value: 'azure',
                ariaLabel: 'cloud-service-azure',
                icon: free_brands_svg_icons_1.faMicrosoft
            },
        ]
    }
};
fontawesome_svg_core_1.library.add(sharp_solid_svg_icons_1.faAddressBook, sharp_solid_svg_icons_1.faTable, sharp_solid_svg_icons_1.faGrid);
//@ts-ignore
fontawesome_svg_core_1.library.add(free_brands_svg_icons_1.faAmazon, free_brands_svg_icons_1.faGoogle, free_brands_svg_icons_1.faMicrosoft);
