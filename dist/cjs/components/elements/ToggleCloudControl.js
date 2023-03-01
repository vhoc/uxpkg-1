"use strict";
exports.__esModule = true;
exports.ToggleCloudControl = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var material_1 = require("@mui/material");
var theme_1 = require("../../theme");
var aws_color_18px_png_1 = tslib_1.__importDefault(require("../../assets/icons/aws-color-18px.png"));
var aws_gray_18px_png_1 = tslib_1.__importDefault(require("../../assets/icons/aws-gray-18px.png"));
var google_color_18px_png_1 = tslib_1.__importDefault(require("../../assets/icons/google-color-18px.png"));
var google_gray_18px_png_1 = tslib_1.__importDefault(require("../../assets/icons/google-gray-18px.png"));
var azure_color_18px_png_1 = tslib_1.__importDefault(require("../../assets/icons/azure-color-18px.png"));
var azure_gray_18px_png_1 = tslib_1.__importDefault(require("../../assets/icons/azure-gray-18px.png"));
var ToggleCloudControl = function (_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.ariaLabel, ariaLabel = _b === void 0 ? 'cloud control' : _b;
    return (react_1["default"].createElement(material_1.ToggleButtonGroup, { value: value, exclusive: true, onChange: onChange, "aria-label": ariaLabel, sx: {
            height: '40px',
            borderWidth: '0px'
        } },
        react_1["default"].createElement(material_1.ToggleButton, { value: 'aws', "aria-label": 'aws', selected: value === 'aws', 
            //onClick={item.onClick}
            //onChange={item.onChange}
            //disabled={item.disabled || false}
            sx: {
                backgroundColor: theme_1.colors.gray[10],
                paddingLeft: '14px',
                paddingRight: '14px',
                '&.Mui-selected': {
                    backgroundColor: theme_1.colors.white
                }
            } },
            react_1["default"].createElement("img", { src: value === 'aws' ? aws_color_18px_png_1["default"] : aws_gray_18px_png_1["default"], alt: 'AWS' })),
        react_1["default"].createElement(material_1.ToggleButton, { value: 'google', "aria-label": 'google', selected: value === 'google', 
            //selected={item.selected}
            //onClick={item.onClick}
            //onChange={item.onChange}
            //disabled={item.disabled || false}
            sx: {
                backgroundColor: theme_1.colors.gray[10],
                paddingLeft: '14px',
                paddingRight: '14px',
                '&.Mui-selected': {
                    backgroundColor: theme_1.colors.white
                }
            } },
            react_1["default"].createElement("img", { src: value === 'google' ? google_color_18px_png_1["default"] : google_gray_18px_png_1["default"], alt: 'Google' })),
        react_1["default"].createElement(material_1.ToggleButton, { value: 'azure', "aria-label": 'azure', selected: value === 'azure', 
            //selected={item.selected}
            //onClick={item.onClick}
            //onChange={item.onChange}
            //disabled={item.disabled || false}
            sx: {
                backgroundColor: theme_1.colors.gray[10],
                paddingLeft: '14px',
                paddingRight: '14px',
                '&.Mui-selected': {
                    backgroundColor: theme_1.colors.white
                }
            } },
            react_1["default"].createElement("img", { src: value === 'azure' ? azure_color_18px_png_1["default"] : azure_gray_18px_png_1["default"], alt: 'Azure' }))));
};
exports.ToggleCloudControl = ToggleCloudControl;
