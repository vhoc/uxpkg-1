"use strict";
exports.__esModule = true;
exports.Azure = exports.Google = exports.AWS = void 0;
var ToggleCloudControl_1 = require("../../components/elements/ToggleCloudControl");
exports["default"] = {
    title: 'Composite/ToggleCloudControl',
    component: ToggleCloudControl_1.ToggleCloudControl
};
exports.AWS = {
    args: {
        value: 'aws',
        ariaLabel: 'cloud-select'
    }
};
exports.Google = {
    args: {
        value: 'google',
        ariaLabel: 'cloud-select'
    }
};
exports.Azure = {
    args: {
        value: 'azure',
        ariaLabel: 'cloud-select'
    }
};
