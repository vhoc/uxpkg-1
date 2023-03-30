"use strict";
exports.__esModule = true;
exports.NoLegend = exports.Broader = exports.Default = void 0;
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
                value: 24,
                color: '#a8d08d'
            },
            {
                risk: '40',
                'Users': 'Users',
                value: 40,
                color: '#ffe5b0'
            },
            {
                risk: '27',
                'Users': 'Users',
                value: 27,
                color: '#ff9c4a'
            },
            {
                risk: '3',
                'Users': 'Users',
                value: 3,
                color: '#db573f'
            },
        ]
    }
};
exports.Broader = {
    args: {
        maxBarWidth: 79,
        height: 109,
        criteria: 'Users',
        data: [
            {
                risk: '24',
                'Users': 'Users',
                value: 24,
                color: '#a8d08d'
            },
            {
                risk: '40',
                'Users': 'Users',
                value: 40,
                color: '#ffe5b0'
            },
            {
                risk: '27',
                'Users': 'Users',
                value: 27,
                color: '#ff9c4a'
            },
            {
                risk: '3',
                'Users': 'Users',
                value: 3,
                color: '#db573f'
            },
        ]
    }
};
exports.NoLegend = {
    args: {
        legend: false,
        maxBarWidth: 79,
        height: 109,
        criteria: 'Users',
        data: [
            {
                risk: '24',
                'Users': 'Users',
                value: 24,
                color: '#a8d08d'
            },
            {
                risk: '40',
                'Users': 'Users',
                value: 40,
                color: '#ffe5b0'
            },
            {
                risk: '27',
                'Users': 'Users',
                value: 27,
                color: '#ff9c4a'
            },
            {
                risk: '3',
                'Users': 'Users',
                value: 3,
                color: '#db573f'
            },
        ]
    }
};
