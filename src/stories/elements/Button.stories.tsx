import { Meta } from '@storybook/react/types-6-0'
import { Button } from '../../components/elements/Button'
import { faUsers } from '@fortawesome/pro-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

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

export const Success = {
    args: {
        variant: 'success',
        size: 'sm',
        children: 'Success button'
    }
}

export const WithLeftIcon = {
    args: {
        icon: faUsers,
        iconPosition: 'start',
        variant: 'grayBlue',
        size: 'sm',
        children: 'GrayBlue button',
        iconColor: '#A6ABB6',
    }
}

export const WithRightIcon = {
    args: {
        icon: faUsers,
        iconPosition: 'end',
        variant: 'grayBlue',
        size: 'sm',
        children: 'GrayBlue button',
        iconColor: '#A6ABB6',
    }
}

library.add(faUsers)