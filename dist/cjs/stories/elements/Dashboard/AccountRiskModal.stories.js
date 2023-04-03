"use strict";
exports.__esModule = true;
exports.Default = void 0;
var AccountRiskModal_1 = require("../../../components/elements/Dashboard/AccountRiskModal");
exports["default"] = {
    title: 'dashboard/AccountRiskItems/AccountRiskModal',
    component: AccountRiskModal_1.AccountRiskModal
};
exports.Default = {
    args: {
        items: [
            {
                accountProvider: 'aws',
                title: 'AWS Account 1',
                caption: '9203180298130',
                riskLevel: 'high'
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 2',
                caption: '9203180298130',
                riskLevel: 'high',
                onClick: function () { return alert("AWS Account 2"); }
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 3',
                caption: '9203180298136',
                riskLevel: 'high',
                onClick: function () { return alert("AWS Account 3"); }
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 4',
                caption: '9203180298130',
                riskLevel: 'high'
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 5',
                caption: '9203180298130',
                riskLevel: 'high'
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 6',
                caption: '9203180298130',
                riskLevel: 'high'
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 7',
                caption: '9203180298130',
                riskLevel: 'high'
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 8',
                caption: '9203180298130',
                riskLevel: 'high'
            },
            {
                accountProvider: 'aws',
                title: 'AWS Account 9',
                caption: '9203180298130',
                riskLevel: 'high'
            },
        ]
    }
};
