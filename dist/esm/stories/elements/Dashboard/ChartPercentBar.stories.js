import { ChartPercentBar } from "../../../components/elements/Dashboard/ChartPercentBar";
export default {
    title: 'dashboard/ChartPercentBar',
    component: ChartPercentBar
};
export var Default = {
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
export var Broader = {
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
export var NoLegend = {
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
