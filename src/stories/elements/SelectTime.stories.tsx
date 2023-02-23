import { Meta } from "@storybook/react/types-6-0";
import { SelectTime } from "../../components/elements/SelectTime";

export default {
    title: 'elements/Inputs/SelectTime',
    component: SelectTime
} as Meta

export const Default = {
    args: {
        defaultValue: '10:10',
        value: '10:10',
    }
}