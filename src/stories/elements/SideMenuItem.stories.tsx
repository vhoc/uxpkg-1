import { Meta } from '@storybook/react/types-6-0'
import { SideMenuItem } from '../../components/elements/SideMenuItem'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";


export default {
    title: 'Elements/Menu Items/SideMenuItem',
    component: SideMenuItem,
} as Meta


export const Primary = {
    args: {
        icon: faBookmark,
        variant: 'primary',
        collapsed: false,
        selected: false,
        disabled: false,
        label: 'Label',
    }
}

library.add(faBookmark)