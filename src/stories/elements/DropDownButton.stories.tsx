import { Meta } from '@storybook/react/types-6-0'
import { DropDownButton } from '../../components/elements/DropDownButton'
import { menuItems } from '../../util/sample-data'

export default {
    title: 'Elements/Buttons/DropDownButton',
    component: DropDownButton
} as Meta

export const Primary = {
    args: {
        variant: 'primary',
        size: 'sm',
        menuItems: menuItems,
    }
}

export const Gray = {
    args: {
        variant: 'gray',
        size: 'sm',
        menuItems: menuItems,
    }
}

export const GrayBlue = {
    args: {
        variant: 'grayBlue',
        size: 'sm',
        menuItems: menuItems,
    }
}

export const GrayRed = {
    args: {
        variant: 'grayRed',
        size: 'sm',
        menuItems: menuItems,
    }
}