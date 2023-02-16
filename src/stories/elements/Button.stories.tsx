import { Meta } from '@storybook/react/types-6-0'
import { Button } from '../../components/elements/Button'

export default {
    title: 'Elements/Buttons/Button',
    component: Button,
} as Meta

export const Primary = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Default button'
    }
}

export const Gray = {
    args: {
        variant: 'gray',
        size: 'sm',
        children: 'Gray button'
    }
}

export const GrayBlue = {
    args: {
        variant: 'grayBlue',
        size: 'sm',
        children: 'GrayBlue button'
    }
}

export const GrayRed = {
    args: {
        variant: 'grayRed',
        size: 'sm',
        children: 'GrayRed button'
    }
}