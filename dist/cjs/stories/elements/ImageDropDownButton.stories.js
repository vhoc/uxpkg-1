"use strict";
exports.__esModule = true;
exports.WithIconAndNoDownArrow = exports.Clear = void 0;
var tslib_1 = require("tslib");
var ImageDropDownButton_1 = require("../../components/elements/ImageDropDownButton");
var sample_data_1 = require("../../util/sample-data");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
var react_1 = tslib_1.__importDefault(require("react"));
exports["default"] = {
    title: 'Elements/Buttons/ImageDropDownButton',
    component: ImageDropDownButton_1.ImageDropDownButton
};
exports.Clear = {
    args: {
        variant: 'clear',
        size: 'sm',
        menuItems: sample_data_1.menu3Items
    }
};
exports.WithIconAndNoDownArrow = {
    args: {
        variant: 'gray',
        size: 'sm',
        hasDownArrow: false,
        mode: 'icon',
        menuItems: [
            {
                title: react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_regular_svg_icons_1.faEllipsisV }),
                submenu: [
                    {
                        title: 'Option 1'
                    },
                    {
                        title: 'Option 2',
                        action: function () { return alert('Action example'); }
                    },
                    {
                        title: 'Option 3'
                    },
                ]
            }
        ]
    }
};
fontawesome_svg_core_1.library.add(pro_regular_svg_icons_1.faEllipsisV);
