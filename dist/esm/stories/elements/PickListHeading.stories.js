import { PickListHeading } from "../../components/elements/PickListHeading";
export default {
    title: 'composite/PickList Elements/PickListHeading',
    component: PickListHeading
};
export var Default = {
    args: {
        existingCount: 123,
        dropDownItems: [
            {
                label: 'Show: Users & Groups',
                value: 'all'
            },
            {
                label: 'Show: Users',
                value: 'users'
            },
            {
                label: 'Show: Groups',
                value: 'groups'
            }
        ]
    }
};
