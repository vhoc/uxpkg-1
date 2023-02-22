import { Meta } from "@storybook/react/types-6-0";
import { SelectDate } from "../../components/elements/SelectDate";

export default {
    title: 'elements/Inputs/SelectDate',
    component: SelectDate
} as Meta

export const Default = {
    args: {
        onChange: () => console.log(`Date changed`),
        //onClick: () => alert(`Component clicked`),
        value: () => '2014-08-18T21:11:54',
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date',
        error: false,
    }
}

export const Open = {
    args: {
        onChange: () => console.log(`Date changed`),
        //onClick: () => alert(`Component clicked`),
        value: () => '2014-08-18T21:11:54',
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date',
    }
}