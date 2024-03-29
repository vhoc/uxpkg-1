import { Meta } from "@storybook/react/types-6-0";
import { SelectDate } from "../../components/elements/SelectDate";

export default {
    title: 'elements/Inputs/SelectDate',
    component: SelectDate
} as Meta

export const Default = {
    args: {
        defaultValue: '2024-02-23',
        value: '2024-02-23'
    }
}