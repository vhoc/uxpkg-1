"use strict";
exports.__esModule = true;
exports.connections = exports.actions = exports.action = exports._data = exports.menu4Items = exports.menu3Items = exports.menu2Items = exports.menuItems = exports.testAlert = void 0;
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
exports.menu4Items = [
    {
        title: 'Sign In',
        action: function () { return alert("Single item button"); }
    }
];
exports._data = [
    [
        {
            id: "11",
            value: "1",
            label: "Andrew Jackson",
            description: "andrew@company.com",
            type: 'SERVICEACCOUNT',
            route: ["21", "31", "33", "42", "44", "45", "49"]
        },
        {
            id: "12",
            value: "2",
            label: "Andrew Jackson",
            description: "andrew@company.com",
            type: 'SERVICEACCOUNT',
            route: ["21", "32", "42", "43", "47"]
        },
        {
            id: "13",
            value: "3",
            label: "Andrew Jackson",
            description: "andrew@company.com",
            type: 'USERGROUPS',
            route: ["21", "34", "41", "45", "46", "48"]
        },
    ],
    [
        {
            id: "21",
            value: "1",
            label: "AWSTestPol",
            type: 'POLICY',
            description: "SumaAWS/98012083109281"
        },
    ],
    [
        {
            id: "31",
            value: "1",
            type: 'ROLE',
            label: "AdministratorAccess-Amplify"
        },
        { id: "32", value: "2", type: 'ROLE', label: "AmazonAugmentedAI" },
        { id: "33", value: "3", type: 'ROLE', label: "AccessAnalyzerService" },
        { id: "34", value: "4", type: 'ROLE', label: "AWSCustomRole" },
    ],
    [
        {
            id: "41",
            value: "1",
            label: "i-0054d9cfe5771e555",
            description: "AWS EC2 Instance",
            type: 'AWS_EC2_Instance'
        },
        {
            id: "42",
            value: "2",
            label: "alias/aws/rds",
            description: "RDS DB",
            type: 'AWS_Compute'
        },
        {
            id: "43",
            value: "3",
            label: "vpc-21b0035c",
            description: "VPC",
            type: 'AWS_User'
        },
        {
            id: "44",
            value: "4",
            label: "i-0054d9cfe5771e555",
            description: "AWS EC2 Instance",
            type: 'AWS_Compute'
        },
        {
            id: "45",
            value: "5",
            label: "alias/aws/rds",
            description: "RDS DB",
            type: 'AWS_User'
        },
        {
            id: "46",
            value: "6",
            label: "vpc-21b0035c",
            description: "VPC",
            type: 'AWS_User'
        },
        {
            id: "47",
            value: "7",
            label: "i-0054d9cfe5771e555",
            description: "AWS EC2 Instance",
            type: 'AWS_EC2_Instance'
        },
        {
            id: "48",
            value: "8",
            label: "alias/aws/rds",
            description: "RDS DB",
            type: 'AWS_User'
        },
        {
            id: "49",
            value: "9",
            label: "vpc-21b0035c",
            description: "VPC",
            type: 'AWS_GAMES'
        },
    ],
];
var action = function (e) {
    console.log("Action for", e.target.id, "action");
};
exports.action = action;
exports.actions = [
    { id: "print-action", label: "More details", onClick: exports.action },
    { id: "print-action-2", label: "Another print details", onClick: exports.action, type: 5 },
    { id: "print-action-3", label: "Some more details", onClick: exports.action },
    { id: "user-action", label: "Some user action", onClick: exports.action, type: 0 },
    { id: "role-action", label: "Some role action", onClick: exports.action, type: 1 },
    { id: "policy-action", label: "Some policy action", onClick: exports.action, type: 2 },
    { id: "db-action", label: "Some database action", onClick: exports.action, type: 3 },
    { id: "awsUser-action", label: "Some aws user action", onClick: exports.action, type: 4 },
    { id: "instance-action", label: "Some instance action", onClick: exports.action, type: 5 },
];
exports.connections = [
    { startID: "11", endID: "21" },
    { startID: "12", endID: "21" },
    { startID: "13", endID: "21" },
    { startID: "21", endID: "31" },
    { startID: "21", endID: "32" },
    { startID: "21", endID: "33" },
    { startID: "21", endID: "34" },
    { startID: "31", endID: "42" },
    { startID: "31", endID: "49" },
    { startID: "32", endID: "42" },
    { startID: "32", endID: "43" },
    { startID: "32", endID: "47" },
    { startID: "33", endID: "44" },
    { startID: "33", endID: "45" },
    { startID: "34", endID: "41" },
    { startID: "34", endID: "45" },
    { startID: "34", endID: "46" },
    { startID: "34", endID: "48" },
];
