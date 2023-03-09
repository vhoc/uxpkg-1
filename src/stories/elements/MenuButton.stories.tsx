import { Meta } from "@storybook/react/types-6-0";
import { MenuButton } from "../../components/elements/MenuButton";

export default {
    title: 'elements/Buttons/MenuButton',
    component: MenuButton,
} as Meta

export const Default = {
    args: {
        menuItems: [
            {
                title: 'Option 1',
            },
            {
                title: 'Option 2',
                action: () => alert(`Clicked on option 2!`)
            }, 
            {
                title: 'Option 3',
            }
        ]
    }
}