import { TextInput } from "../../components/elements/TextInput";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/sharp-solid-svg-icons";
export default {
    title: 'elements/Inputs/TextInput',
    component: TextInput
};
export var Default = {
    args: {
        placeholder: 'Search',
        icon: faMagnifyingGlass,
        iconPosition: 'start'
    }
};
library.add(faMagnifyingGlass);
