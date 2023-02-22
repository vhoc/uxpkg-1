import { Meta } from "@storybook/react/types-6-0";
import { SelectDate } from "../../components/elements/SelectDate";

export default {
    title: 'elements/Inputs/SelectDate',
    component: SelectDate
} as Meta

const date = new Date()

export const Default = {
    args: {
        onChange: () => console.log(`Date changed`),
        //onClick: () => alert(`Component clicked`),
        value: "02/22/2024",
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date',
        error: false,
    }
}

export const Open = {
    args: {
        onChange: () => date,
        //onClick: () => alert(`Component clicked`),
        value: "02/22/2024",
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date',
    }
}