import React from 'react';
import FilterBarCategory from '../../components/elements/FilterBarCategory';
import FilterBarItem from '../../components/elements/FilterBarItem';
export default {
    title: 'Elements/FilterBarResources/FilterBarCategory',
    component: FilterBarCategory
};
export var Default = {
    args: {
        name: 'Access Status',
        children: React.createElement(React.Fragment, null,
            React.createElement(FilterBarItem, { name: 'Granted', amount: 2 }),
            React.createElement(FilterBarItem, { name: 'No Access', amount: 234, checked: true }),
            React.createElement(FilterBarItem, { name: 'Bookmarked', amount: 3 }))
    }
};
