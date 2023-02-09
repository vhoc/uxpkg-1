import FilterBarItem from '../../components/elements/FilterBarItem';
export default {
    title: 'Elements/Controls/FilterBarItem',
    component: FilterBarItem
};
export var Default = {
    args: {
        name: 'Granteg',
        checked: true,
        amount: 2,
        onClick: function () { return alert('Trigger something.'); }
    }
};
