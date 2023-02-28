import { Meta } from "@storybook/react/types-6-0";
import { TextInput } from "../../components/elements/TextInput";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/sharp-solid-svg-icons";
import { faCircleXmark } from '@fortawesome/pro-solid-svg-icons';

export default {
    title: 'elements/Inputs/TextInput',
    component: TextInput
} as Meta

export const Default = {
    args: {
        placeholder: 'Search',
        icon: faMagnifyingGlass,
        iconPosition: 'start',
        endIconOnClick: () => alert(`X button pressed.`),
    }
}

export const WithALabel = {
    args: {
        label: 'Title',
        placeholder: 'Search',
        icon: faMagnifyingGlass,
        iconPosition: 'start',
        endIconOnClick: () => alert(`X button pressed.`),
    }
}

export const WithText = {
    args: {
        placeholder: 'Search',
        icon: faMagnifyingGlass,
        iconPosition: 'end',
        value: 'This is a sample text!',
        endIconOnClick: () => alert(`X button pressed.`),
    }
}

library.add(faMagnifyingGlass, faCircleXmark)