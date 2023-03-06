import { Meta } from "@storybook/react/types-6-0";
import { SimpleDropDown } from "../../components/elements/SimpleDropDown";
import { MenuItem } from "@mui/material";

export default {
    title: 'elements/Inputs/SimpleDropDown',
    component: SimpleDropDown,
    subcomponents: { MenuItem }
} as Meta

export const Default = {
    args: {
        value: "",
        menuItems: [
            {
                value: "sort-name",
                label: 'Sort: by Name',
                selected: true,
            },
            {
                value: "sort-lastName",
                label: 'Sort: by Last Name',
            },
        ]
    }
}

export const NoItems = {
    args: {
        value: "",
        menuItems: [],
    }
}
