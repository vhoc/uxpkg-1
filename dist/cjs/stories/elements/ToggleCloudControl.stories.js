"use strict";
exports.__esModule = true;
exports.Private = exports.Azure = exports.Google = exports.AWS = void 0;
var ToggleCloudControl_1 = require("../../components/elements/ToggleCloudControl");
exports["default"] = {
    title: 'Composite/ToggleCloudControl',
    component: ToggleCloudControl_1.ToggleCloudControl
};
exports.AWS = {
    args: {
        value: 'AWS',
        ariaLabel: 'cloud-select'
    }
};
exports.Google = {
    args: {
        value: 'GCP',
        ariaLabel: 'cloud-select'
    }
};
exports.Azure = {
    args: {
        value: 'AZURE',
        ariaLabel: 'cloud-select'
    }
};
exports.Private = {
    args: {
        value: 'PRIVATE',
        ariaLabel: 'cloud-select'
    }
};
