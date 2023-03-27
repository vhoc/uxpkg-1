import { DonutChartCard } from "../../../components/elements/Dashboard/DonutChartCard";
export default {
    title: 'dashboard/DonutChartCard',
    component: DonutChartCard
};
export var Default = {
    args: {
        title: 'Identity Intelligence',
        shortTitle: 'Identities',
        items: [
            {
                type: 'Critical',
                color: '#DA5942',
                value: 240,
                percent: 40,
                caption: 'Excessive Privilege'
            },
            {
                type: 'High',
                color: '#FF9B4B',
                value: 90,
                percent: 15,
                caption: 'Excessive Privilege'
            },
            {
                type: 'Medium',
                color: '#FFE4AF',
                value: 90,
                percent: 15,
                caption: 'Excessive Privilege'
            },
            {
                type: 'Low',
                color: '#A7CF8C',
                value: 180,
                percent: 30,
                caption: 'Excessive Privilege'
            }
        ]
    }
};
