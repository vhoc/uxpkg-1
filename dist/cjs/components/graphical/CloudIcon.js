"use strict";
exports.__esModule = true;
exports.CloudIcon = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var aws_color_18px_png_1 = tslib_1.__importDefault(require("../../assets/icons/aws-color-18px.png"));
var google_color_18px_png_1 = tslib_1.__importDefault(require("../../assets/icons/google-color-18px.png"));
var azure_color_18px_png_1 = tslib_1.__importDefault(require("../../assets/icons/azure-color-18px.png"));
var private_color_18px_png_1 = tslib_1.__importDefault(require("../../assets/icons/private-color-18px.png"));
var CloudIcon = function (_a) {
    var type = _a.type, style = _a.style;
    var iconTable = {
        aws: aws_color_18px_png_1["default"],
        gcp: google_color_18px_png_1["default"],
        azure: azure_color_18px_png_1["default"],
        private: private_color_18px_png_1["default"]
    };
    var selectedType = type;
    return (react_1["default"].createElement("img", { src: iconTable[selectedType], alt: iconTable[selectedType], style: tslib_1.__assign({}, style) }));
};
exports.CloudIcon = CloudIcon;
