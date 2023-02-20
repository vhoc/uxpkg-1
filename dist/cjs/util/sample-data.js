"use strict";
exports.__esModule = true;
exports.menu3Items = exports.menu2Items = exports.menuItems = exports.testAlert = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var UserPicture_1 = require("../components/elements/UserPicture");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var testAlert = function () {
    alert("Test function.");
};
exports.testAlert = testAlert;
exports.menuItems = [
    {
        //icon: faUserCircle,
        title: "Sign In",
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
        ],
        action: null
    },
];
exports.menu2Items = [
    {
        icon: sharp_solid_svg_icons_1.faEllipsisV,
        title: '',
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
];
exports.menu3Items = [
    {
        title: react_1["default"].createElement(UserPicture_1.UserPicture, { src: 'https://phantom-elmundo.unidadeditorial.es/563c943e505bf5132d7f6d676c08bfd0/crop/0x0/3000x2000/resize/473/f/webp/assets/multimedia/imagenes/2021/09/22/16323254074650.jpg', width: 32 }),
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
];
