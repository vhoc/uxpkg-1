import { Meta } from "@storybook/react/types-6-0";
import { PickListHeading } from "../../components/elements/PickListHeading";

export default {
    title: 'composite/PickList Elements/PickListHeading',
    component: PickListHeading
} as Meta

export const Default = {
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
}