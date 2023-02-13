import { Meta } from '@storybook/react/types-6-0'
import FilterBarItem from '../../components/elements/FilterBarItem'

export default {
    title: 'Elements/Controls/FilterBarItem',
    component: FilterBarItem,
} as Meta

export const Default = {
    args: {
        name: 'Granted',
        checked: true,
        amount: 2,
        onClick: () => alert('Trigger something.')
    }
}