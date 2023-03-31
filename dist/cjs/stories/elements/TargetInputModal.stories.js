"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var TargetInputModal_1 = require("../../components/elements/TargetInputModal");
var ResourceTypesIcons_1 = require("../../components/graphical/ResourceTypesIcons");
exports["default"] = {
    title: 'elements/Feedback/TargetInputModal',
    component: TargetInputModal_1.TargetInputModal
};
exports.Default = {
    args: {
        icon: react_1["default"].createElement("img", { src: ResourceTypesIcons_1.DisplayTypeToIconMap.AWS_LAMBDA, alt: 'AWS Lambda', style: {
                width: '34px',
                height: '34px',
                borderRadius: '4px'
            } }),
        title: 'AWS Lambda',
        confirmButtonLabel: 'Add to queue'
    }
};
