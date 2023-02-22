import { Meta } from "@storybook/react/types-6-0";
import { SelectDate } from "../../components/elements/SelectDate";

export default {
    title: 'elements/Inputs/SelectDate',
    component: SelectDate
} as Meta

export const Default = {
    args: {
        onChange: () => console.log(`Date changed`),
        value: "02/22/2024",
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date',
        error: false,
    }
}