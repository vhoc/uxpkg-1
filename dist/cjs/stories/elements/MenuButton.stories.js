"use strict";
exports.__esModule = true;
exports.Default = void 0;
var MenuButton_1 = require("../../components/elements/MenuButton");
exports["default"] = {
    title: 'elements/Buttons/MenuButton',
    component: MenuButton_1.MenuButton
};
exports.Default = {
    args: {
        menuItems: [
            {
                title: 'Option 1'
            },
            {
                title: 'Option 2',
                action: function () { return alert("Clicked on option 2!"); }
            },
            {
                title: 'Option 3'
            }
        ]
    }
};
