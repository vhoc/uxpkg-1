"use strict";
exports.__esModule = true;
exports.Default = void 0;
var PercentBarCard_1 = require("../../../components/elements/Dashboard/PercentBarCard");
exports["default"] = {
    title: 'dashboard/PercentBarCard',
    component: PercentBarCard_1.PercentBarCard
};
exports.Default = {
    args: {
        title: 'Excessive Permissions',
        topRightCaption: '53% Excessive',
        items: [
            {
                risk: 'Inactive Services',
                'Excessive Permissions': 'Excessive Permissions',
                value: 96,
                color: '#DA5942'
            },
            {
                risk: 'Inactive Users',
                'Excessive Permissions': 'Excessive Permissions',
                value: 43,
                color: '#FF674C'
            },
            {
                risk: 'Overprivileged Identities',
                'Excessive Permissions': 'Excessive Permissions',
                value: 36,
                color: '#FFE4AF'
            },
            {
                risk: 'Overprivileged Users',
                'Excessive Permissions': 'Excessive Permissions',
                value: 5,
                color: '#8D94A1'
            },
            {
                risk: 'Overprivileged Groups',
                'Excessive Permissions': 'Excessive Permissions',
                value: 4,
                color: '#A6ABB6'
            },
            {
                risk: 'Unused Permission Sets',
                'Excessive Permissions': 'Excessive Permissions',
                value: 3,
                color: '#C8CDD4'
            },
        ]
    }
};
