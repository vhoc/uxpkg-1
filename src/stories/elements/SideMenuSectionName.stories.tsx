import { Meta } from '@storybook/react/types-6-0'
import { SideMenuSectionName } from '../../components/elements/SideMenuSectionName'


export default {
    title: 'Elements/Menu Items/SideMenuSectionName',
    component: SideMenuSectionName,
} as Meta


export const Primary = {
    args: {
        variant: 'primary',
        label: 'A Section Name',
    }
}