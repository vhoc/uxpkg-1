import { Meta } from "@storybook/react/types-6-0";
import SelectDropDown from "../../components/elements/SelectDropDown";
import { MenuItem } from "@mui/material";

export default {
    title: 'elements/Inputs/SelectDropDown',
    component: SelectDropDown,
    subcomponents: { MenuItem }
} as Meta

export const Default = {
    args: {
        value: "",
        menuItems: [
            {
                value: "1",
                label: 'First item',
                selected: true,
            },
            {
                value: "2",
                label: 'Seconds item',
            },
            {
                value: "3",
                label: 'Third item',
            },
        ]
    }
}
