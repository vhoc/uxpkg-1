import { ChartItem } from "../../../components/elements/Dashboard/ChartItem";
export default {
    title: 'dashboard/ChartItem',
    component: ChartItem
};
export var Critical = {
    args: {
        title: 'Critical',
        color: '#DA5942',
        amount: 240,
        percent: 40,
        caption: 'Excessive Privilege'
    }
};
export var InlineCritical = {
    args: {
        type: 'inline',
        title: 'Inactive Services',
        color: '#DA5942',
        amount: 240,
        showPercent: false
    }
};
export var High = {
    args: {
        title: 'High',
        color: '#FF9B4B',
        amount: 90,
        percent: 15,
        caption: 'Excessive Privilege'
    }
};
export var Medium = {
    args: {
        title: 'Medium',
        color: '#FFE4AF',
        amount: 90,
        percent: 15,
        caption: 'Excessive Privilege'
    }
};
export var Low = {
    args: {
        title: 'Low',
        color: '#A7CF8C',
        amount: 180,
        percent: 30,
        caption: 'Excessive Privilege'
    }
};
