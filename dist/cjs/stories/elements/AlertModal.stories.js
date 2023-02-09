"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var AlertModal_1 = tslib_1.__importDefault(require("../../components/elements/AlertModal"));
var Button_1 = require("../../components/elements/Button");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var react_1 = tslib_1.__importDefault(require("react"));
exports["default"] = {
    title: 'Composite/AlertModal',
    component: AlertModal_1["default"]
};
exports.Default = {
    args: {
        icon: sharp_solid_svg_icons_1.faTriangleExclamation,
        title: 'Title',
        description: 'Description',
        children: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(Button_1.Button, { variant: 'gray' }, "Cancel"),
            react_1["default"].createElement(Button_1.Button, { variant: 'grayRed', onClick: function () { return alert('Some action triggered.'); } }, "Delete"))
    }
};
fontawesome_svg_core_1.library.add(sharp_solid_svg_icons_1.faTriangleExclamation);
