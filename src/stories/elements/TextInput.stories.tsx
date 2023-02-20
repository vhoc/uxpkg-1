import { Meta } from "@storybook/react/types-6-0";
import { TextInput } from "../../components/elements/TextInput";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/sharp-solid-svg-icons";

export default {
    title: 'elements/Inputs/TextInput',
    component: TextInput
} as Meta

export const Default = {
    args: {
        placeholder: 'Search',
        icon: faMagnifyingGlass,
        iconPosition: 'start',
    }
}

library.add(faMagnifyingGlass)