import SelectDropDown from "../../components/elements/SelectDropDown";
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
