import { SelectDropDown } from "../../components/elements/SelectDropDown";
import { MenuItem } from "@mui/material";
export default {
    title: 'elements/Inputs/SelectDropDown',
    component: SelectDropDown,
    subcomponents: { MenuItem: MenuItem }
};
export var Default = {
    args: {
        value: "",
        menuItems: [
            {
                value: "1",
                label: 'First item',
                selected: true
            },
            {
                value: "2",
                label: 'Seconds item'
            },
            {
                value: "3",
                label: 'Third item'
            },
        ]
    }
};
export var WithLabel = {
    args: {
        label: 'This is a label',
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
