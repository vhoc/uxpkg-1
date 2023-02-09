import React from 'react';
import FilterBarResources from '../../components/elements/FilterBarResources';
import FilterBarCategory from '../../components/elements/FilterBarCategory';
import FilterBarItem from '../../components/elements/FilterBarItem';
export default {
    title: 'Composite/FilterBarResources',
    component: FilterBarResources
};
export var Default = {
    args: {
        children: React.createElement(React.Fragment, null,
            React.createElement(FilterBarCategory, { name: 'Access Status' },
                React.createElement(FilterBarItem, { name: 'Granted', amount: 2 }),
                React.createElement(FilterBarItem, { name: 'No Access', amount: 234, checked: true }),
                React.createElement(FilterBarItem, { name: 'Bookmarked', amount: 3 })),
            React.createElement(FilterBarCategory, { name: 'resource types' },
                React.createElement(FilterBarItem, { name: 'EC2 EBS Volume' }),
                React.createElement(FilterBarItem, { name: 'EC2 Elastic IP' }),
                React.createElement(FilterBarItem, { name: 'EC2 Instance' }),
                React.createElement(FilterBarItem, { name: 'EC2 Key Pair' }),
                React.createElement(FilterBarItem, { name: 'EC2 Load Balancer' }),
                React.createElement(FilterBarItem, { name: 'EKS' }),
                React.createElement(FilterBarItem, { name: 'KMS' }),
                React.createElement(FilterBarItem, { name: 'LAMBDA' })))
    }
};
