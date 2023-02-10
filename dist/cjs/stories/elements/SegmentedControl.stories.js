"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var SegmentedControl_1 = tslib_1.__importDefault(require("../../components/elements/SegmentedControl"));
var SegmentedControlButton_1 = tslib_1.__importDefault(require("../../components/elements/SegmentedControlButton"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
exports["default"] = {
    title: 'Composite/SegmentedControl',
    component: SegmentedControl_1["default"]
};
exports.Default = {
    args: {
        multiSelect: false,
        ariaLabel: 'cloud-service',
        children: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(SegmentedControlButton_1["default"], { value: "aws", ariaLabel: "cloud-service-aws" },
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: 'fa-brands fa-react' })))
    }
};
