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
