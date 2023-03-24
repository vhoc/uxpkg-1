"use strict";
exports.__esModule = true;
exports.Default = void 0;
var ChartPercentBar_1 = require("../../../components/elements/Dashboard/ChartPercentBar");
exports["default"] = {
    title: 'dashboard/ChartPercentBar',
    component: ChartPercentBar_1.ChartPercentBar
};
exports.Default = {
    args: {
        criteria: 'Users',
        data: [
            {
                risk: '24',
                'Users': 'Users',
                value: 24
            },
            {
                risk: '40',
                'Users': 'Users',
                value: 40
            },
            {
                risk: '27',
                'Users': 'Users',
                value: 27
            },
            {
                risk: '3',
                'Users': 'Users',
                value: 3
            },
        ]
    }
};
