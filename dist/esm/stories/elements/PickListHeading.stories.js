import { PickListHeading } from "../../components/elements/PickListHeading";
export default {
    title: 'composite/PickList Elements/PickListHeading',
    component: PickListHeading
};
export var Default = {
    args: {
        title: 'Existing (123)',
        onChange: function () { return alert("SimpleDropDown onChange event!"); },
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
