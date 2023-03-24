"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ResourceDropDownItem_1 = require("../../components/elements/ResourceDropDownItem");
var ResourceTypesIcons_1 = require("../../components/graphical/ResourceTypesIcons");
exports["default"] = {
    title: 'composite/ResourceDropDownItem',
    component: ResourceDropDownItem_1.ResourceDropDownItem
};
exports.Default = {
    args: {
        icon: react_1["default"].createElement("img", { src: ResourceTypesIcons_1.DisplayTypeToIconMap.AWS_COMPUTE_EC2, alt: "icon" }),
        resourceName: 'eni-03a9ab07d4c9111c5',
        resourceType: 'AWS EC2 Network Interface'
    }
};
