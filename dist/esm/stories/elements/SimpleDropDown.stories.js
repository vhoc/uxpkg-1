import { SimpleDropDown } from "../../components/elements/SimpleDropDown";
import { MenuItem } from "@mui/material";
export default {
    title: 'elements/Inputs/SimpleDropDown',
    component: SimpleDropDown,
    subcomponents: { MenuItem: MenuItem }
};
export var Default = {
    args: {
        value: "",
        menuItems: [
            {
                value: "sort-name",
                label: 'Sort: by Name',
                selected: true
            },
            {
                value: "sort-lastName",
                label: 'Sort: by Last Name'
            },
        ]
    }
};
export var NoItems = {
    args: {
        value: "",
        menuItems: []
    }
};
