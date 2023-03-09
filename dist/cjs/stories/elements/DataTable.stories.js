"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var DataTable_1 = require("../../components/elements/DataTable");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var Typography_1 = require("../../components/elements/Typography");
var Button_1 = require("../../components/elements/Button");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
var MenuButton_1 = require("../../components/elements/MenuButton");
exports["default"] = {
    title: 'composite/DataTable',
    component: DataTable_1.DataTable
};
exports.Default = {
    args: {
        columns: [
            {
                field: 'name',
                headerName: 'Name',
                width: 250
            },
            {
                field: 'requestedFor',
                headerName: 'Requested for',
                width: 200,
                renderCell: function (params) { return (react_1["default"].createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faUser }),
                    react_1["default"].createElement(Typography_1.Typography, { variant: 'body-regular' }, params.value))); }
            },
            {
                field: 'resources',
                headerName: 'Resources',
                width: 130,
                renderCell: function (params) { return (react_1["default"].createElement(Button_1.Button, { icon: pro_regular_svg_icons_1.faBrowser, iconColor: "#A6ABB6", iconPosition: "start", size: "sm", variant: "grayBlue", onClick: params.value.onClick }, params.value.amount.toString())); }
            },
            {
                field: 'submittedOn',
                headerName: 'Submitted on',
                width: 240
            },
            {
                field: 'detailsButton',
                headerName: '',
                sortable: false,
                renderCell: function (params) { return (react_1["default"].createElement(Button_1.Button, { size: "sm", variant: "grayBlue", onClick: params.value.onClick }, "View Details")); },
                width: 150
            },
            {
                field: 'menuButton',
                headerName: '',
                sortable: false,
                width: 48,
                renderCell: function (params) { return (react_1["default"].createElement(MenuButton_1.MenuButton, { menuItems: params.value.menuItems })); }
            },
        ],
        rows: [
            {
                id: 1,
                name: 'CatatumboRiver',
                requestedFor: 'Andrew Jackson',
                resources: {
                    id: 1,
                    amount: 3,
                    onClick: function () { return alert("Resources button clicked for id: ".concat(String(1))); }
                },
                submittedOn: 'Jan 12, 2023 4:32 PM',
                detailsButton: {
                    id: 1,
                    onClick: function () { return alert("View details button clicked for id: 1"); }
                },
                menuButton: {
                    id: 1,
                    menuItems: [
                        {
                            title: 'Option 1',
                            action: function () { return alert("Row 1 Option 1!"); }
                        },
                        {
                            action: function () { return alert("Row 1 Option 2!"); },
                            title: 'Option 2'
                        },
                        {
                            title: 'Option 3',
                            action: function () { return alert("Row 1 Option 3!"); }
                        }
                    ],
                    title: react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_regular_svg_icons_1.faEllipsisV })
                }
            },
            {
                id: 2,
                name: 'CatatumboRiver',
                requestedFor: 'Andrew Jackson',
                resources: {
                    id: 2,
                    amount: 3,
                    onClick: function () { return alert("Resources button clicked for id: ".concat(String(2))); }
                },
                submittedOn: 'Jan 12, 2023 4:32 PM',
                detailsButton: {
                    id: 2,
                    onClick: function () { return alert("View details button clicked for id: 2"); }
                },
                menuButton: {
                    id: 2,
                    menuItems: [
                        {
                            title: 'Option 1',
                            action: function () { return alert("Row 2 Option 1!"); }
                        },
                        {
                            action: function () { return alert("Row 2 Option 2!"); },
                            title: 'Option 2'
                        },
                        {
                            title: 'Option 3',
                            action: function () { return alert("Row 2 Option 3!"); }
                        }
                    ],
                    title: react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_regular_svg_icons_1.faEllipsisV })
                }
            },
        ]
    }
};
