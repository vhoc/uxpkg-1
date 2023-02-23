import { Meta } from "@storybook/react/types-6-0";
import { SelectTime } from "../../components/elements/SelectTime";
import dayjs from "dayjs";

export default {
    title: 'elements/Inputs/SelectTime',
    component: SelectTime
} as Meta

export const Default = {
    args: {
        onChange: () => console.log(`Time changed`),
        value: dayjs('2024-08-18T21:11:54'),
        inputFormat: "hh:mm A",
        placeholder: 'Select Time',
    }
}