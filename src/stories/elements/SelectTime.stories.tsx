import { Meta } from "@storybook/react/types-6-0";
import { SelectTime } from "../../components/elements/SelectTime";

export default {
    title: 'elements/Inputs/SelectTime',
    component: SelectTime
} as Meta

export const Default = {
    args: {
        onChange: () => console.log(`Time changed`),
        value: "11:00",
        inputFormat: "hh:mm",
        placeholder: 'Select Time',
    }
}