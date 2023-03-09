import React from "react";
import { DataTable } from "../../components/elements/DataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/pro-solid-svg-icons";
import { Typography } from "../../components/elements/Typography";
import { Button } from "../../components/elements/Button";
import { faBrowser, faEllipsisV } from "@fortawesome/pro-regular-svg-icons";
import { MenuButton } from "../../components/elements/MenuButton";
export default {
    title: 'composite/DataTable',
    component: DataTable
};
export var Default = {
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
                renderCell: function (params) { return (React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                    React.createElement(FontAwesomeIcon, { icon: faUser }),
                    React.createElement(Typography, { variant: 'body-regular' }, params.value))); }
            },
            {
                field: 'resources',
                headerName: 'Resources',
                width: 130,
                renderCell: function (params) { return (React.createElement(Button, { icon: faBrowser, iconColor: "#A6ABB6", iconPosition: "start", size: "sm", variant: "grayBlue", onClick: params.value.onClick }, params.value.amount.toString())); }
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
                renderCell: function (params) { return (React.createElement(Button, { size: "sm", variant: "grayBlue", onClick: params.value.onClick }, "View Details")); },
                width: 150
            },
            {
                field: 'menuButton',
                headerName: '',
                sortable: false,
                width: 48,
                renderCell: function (params) { return (React.createElement(MenuButton, { menuItems: params.value.menuItems })); }
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
                    title: React.createElement(FontAwesomeIcon, { icon: faEllipsisV })
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
                    title: React.createElement(FontAwesomeIcon, { icon: faEllipsisV })
                }
            },
        ]
    }
};
