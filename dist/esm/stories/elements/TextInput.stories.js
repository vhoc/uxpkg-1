import { TextInput } from "../../components/elements/TextInput";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/sharp-solid-svg-icons";
import { faCircleXmark } from '@fortawesome/pro-solid-svg-icons';
export default {
    title: 'elements/Inputs/TextInput',
    component: TextInput
};
export var Default = {
    args: {
        placeholder: 'Search',
        icon: faMagnifyingGlass,
        iconPosition: 'start',
        endIconOnClick: function () { return alert("X button pressed."); }
    }
};
export var WithText = {
    args: {
        placeholder: 'Search',
        icon: faMagnifyingGlass,
        iconPosition: 'end',
        value: 'This is a sample text!',
        endIconOnClick: function () { return alert("X button pressed."); }
    }
};
library.add(faMagnifyingGlass, faCircleXmark);
